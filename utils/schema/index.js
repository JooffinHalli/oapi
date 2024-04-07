var FS = require('../fs');
var Json = require('../json');
var Config = require('../config');

class EnumAcc extends Array {
  constructor(length) {
    super(length);
  }
  static isEnum = (schema) => {
    if (!schema.has('enum')) return false;
    var schemaEnum = schema.enum;
    var l = schemaEnum.length;
    for (var i = 0; i < l; i++) {
      if (typeof schemaEnum[i] === 'object') {
        return false; // support only primitives for now
      }
    }
    return true;
  }
}
EnumAcc.prototype.toString = function() {
  return this.join(' | ');
};
EnumAcc.prototype.add = function(index, value) {
  this[index] = `'${value}'`;
}

class CompositionAcc extends Array {
  static keys = ['allOf', 'anyOf', 'oneOf'];
  static generic = {
    allOf: 'AllOf',
    anyOf: 'AnyOf',
    oneOf: 'OneOf'
  };
  static findKey = function(schema) {
    return this.keys.find(schema.has.bind(schema));
  }
};
CompositionAcc.prototype.add = function(index, schema) {
  var isFirst = index === 0;
  var { value } = new SmartSchema(schema);
  this[index] = (!isFirst && (typeof value === 'string')) ? `| ${value}` : value;
}

class SchemasAcc {}; // public
SchemasAcc.prototype.add = function(name, schema, isFirstLevel, imports) {
  var smartSchema = new SmartSchema(schema, name, imports);
  var { isNullable, isRequired, compositionGeneric, value } = smartSchema;
  if (isNullable) name += '$NULLABLE';
  if (compositionGeneric) {
    imports?.add(compositionGeneric);
    name += `$${compositionGeneric}`;
  }
  if (!isRequired && !isFirstLevel) name += '?';
  var { fieldBlackList } = Config;
  if (fieldBlackList?.someMatches?.(name)) return;
  this[name] = value;
}

/** @param {import('../../../types/common/SchemaObject').SchemaObject} schema */
function SmartSchema(schema, name, imports) { // public
  var type = this.getType(schema);
  this.value = !type ? 'unknown' : this[type](schema, imports);
  this.setHidden('type', type);
  this.setHidden('isRequired', schema.required?.includes(name));
  this.setHidden('isNullable', !!schema.nullable);
}
SmartSchema.isSchema = (value) => value.has('type');
SmartSchema.prototype.getType = function(schema) {
  if (schema.has('$ref')) return 'ref';
  if (schema.has('not')) return 'not';
  if (schema.isEmpty()) return 'empty';
  if (EnumAcc.isEnum(schema)) return 'enum';
  if (schema.type) return schema.type;
  if (schema.properties) return 'object'; // ?
  if (schema.items) return 'array'; // ?
  var compositionKey = CompositionAcc.findKey(schema);
  if (compositionKey) {
    var generic = CompositionAcc.generic[compositionKey];
    this.setHidden('compositionGeneric', generic);
    return compositionKey;
  }
};
SmartSchema.prototype.empty   = () => 'any';
SmartSchema.prototype.null    = () => 'null';
SmartSchema.prototype.boolean = () => 'boolean';
SmartSchema.prototype.number  = () => 'number';
SmartSchema.prototype.integer = () => 'number';
SmartSchema.prototype.format = {
  ['binary']:    'string',
  ['byte']:      'string',
  ['date']:      'Date',
  ['date-time']: 'Date'
};
SmartSchema.prototype.string = function(schema) {
  if (schema.has('format')) {
    if (this.format.has(schema.format)) {
      return this.format[schema.format];
    }
  }
  return 'string';
};
SmartSchema.prototype.object = function(schema, imports) {
  if (!schema.properties) return 'Record<string, unknown>';
  return schema.properties.addTo(new SchemasAcc, 0, imports);
};
SmartSchema.prototype.array = function(schema) {
  if (!schema.items) return ['unknown'];
  return [new SmartSchema(schema.items).value];
};
SmartSchema.prototype.enum = function(schema) {
  return `${schema.enum.addTo(new EnumAcc(schema.enum.length))}`;
};
SmartSchema.prototype.ref = function(schema) {
  var { 3: schemaName } = schema['$ref'].split('/');
  return `Schemas.${schemaName}`;
};
SmartSchema.prototype.allOf = function(schema) {
  return schema.allOf.addTo(new CompositionAcc);
};
SmartSchema.prototype.anyOf = function(schema) {
  return schema.anyOf.addTo(new CompositionAcc);
};
SmartSchema.prototype.oneOf = function(schema) {
  return schema.oneOf.addTo(new CompositionAcc);
};
SmartSchema.prototype.not = function(schema) {
  return 'not';
};

class Printable { // public
  constructor(name, data, keyWord = 'namespace', importsSet) {
    this.keyWord = keyWord;
    this.name = name;
    var imports = this.importsBlock[name](importsSet);
    var extra = this.extra[name];
    var content = this.type[keyWord](name, Json.stringify(data));
    this.content = `${imports}${extra}${content}`;
  }
}
Printable.prototype.type = {
  namespace: (name, data) => `export namespace ${name} ${data}`,
  type:      (name, data) => `export type ${name} = ${data}`,
  const:     (name, data) => `export const ${name} = <const>${data};`,
  json:      (name, data) => `export const ${name} = JSON.parse(${data});`,
}
Printable.prototype.importsBlock = {
  Config: (importsSet) => {
    return `import type { Endpoints } from './endpoints';\n\n`
  },
  endpoints: (importsSet) => {
    return ''
  },
  Paths: (importsSet) => {
    var imports = importsSet?.size ? ` ${[...importsSet].join(', ')} ` : '';
    imports = imports.length ?`import type {${imports}} from './utilTypes';\n` : '';
    return `${imports}import type { Schemas } from './schemas';\n\n`;
  },
  Schemas: (importsSet) => {
    const imports = importsSet?.size ? ` ${[...importsSet].join(', ')} ` : '';
    return `import type {${imports}} from './utilTypes';\n\n`;
  }
}
Printable.prototype.extra = {
  Config:    ``,
  // Config:    `export type BaseConfig = {\n  domain: string\n  basePath: ` + '`/${string}`' + `\n  endpoints: Record<string, number>\n}\n\n`,
  endpoints: `/** список эндпойнтов и их методов отображенных в виде числа */\nexport type Endpoints = typeof endpoints\n\n/**
 * список эндпойнтов и их методов отображенных в виде числа,
 * где каждый бит указывает на наличие метода
 * | trace | head | patch | delete | put | post | get |
 * | ----- | ---- | ----- | ------ | --- | ---- | --- |
 * |    64 |   32 |    16 |      8 |   4 |    2 |   1 |
 */\n`,
  Paths:     '',
  Schemas:   ''
}
Printable.prototype.pritified = function(content) {
  if (this.keyWord === 'const') {
    return content.replaceAll('"', '');
  }
  return content
    .replaceAll(/([ ]{2,})({)/g, (match, p1, p2) => {
      return `${p1}| ${p2}`;
    })
    .replaceAll(/(.*)(")(.*)(")(:)(.{1,})/g, (match, p0, p1, key, p3, p4, value) => {
      if (key.includes('$AllOf')) {
        key = key.replace('$AllOf', '');
        value = ` AllOf<${value.trim().replace('[', '')}`;
      }
      if (key.includes('$AnyOf')) {
        key = key.replace('$AnyOf', '');
        value = ` AnyOf<${value.trim().replace('[', '')}`;
      }
      if (key.includes('$OneOf')) {
        key = key.replace('$OneOf', '');
        value = ` OneOf<${value.trim().replace('[', '')}`;
      }
      if (key.includes('$NULLABLE')) {
        key = key.replace('$NULLABLE', '');
        value = ` null |${value}`;
      }
      if ((this.keyWord === 'namespace') && (p0 === '  ')) {
        return `${p0}export type ${key} =${value}`;
      }
      return `${p0}${key}${p4}${value}`;
    })
    .replaceAll(/(,)(\n)/g, (match, p1, p2) => {
      return p2;
    })
    .replaceAll('"', '')
    .replaceAll(/[\]\["]{1,}/g, (match) => {
      var obj = {
        '[': 'Array<',
        ']': '>'
      }
      return obj[match] || match;
    })
}
Printable.prototype.print = function(path) {
  FS.writeFile(`${Config.serviceOutput}/${path}`, this.pritified(this.content));
};

class Schemas {
  static Acc = SchemasAcc;
  static Smart = SmartSchema;
  static Printable = Printable;
}

module.exports = Schemas;