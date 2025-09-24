module.exports = function(openapi) {
    if (!openapi) return {};
    if ((parseInt(openapi.openapi) || 0) < 3) {
        log(`src: ${this.src}\nopenapi version should be 3.0.0 and higher`);
        return {};
    };

    var tab = ' '.repeat(this.tabSize || 2);
    Object.setPrototypeOf(context, Object.setPrototypeOf({ openapi, tab }, this));

    var types   = run.call(context, openapi);
    var jsdoc   = types.find((type) => (type.key === 'jsdoc'));
    var Paths   = types.find((type) => (type.key === 'Paths'));
    var Schemas = types.find((type) => (type.key === 'Schemas'));

    return {
        Paths:   Paths   ? [jsdoc, Paths].join('')   : null,
        Schemas: Schemas ? [jsdoc, Schemas].join('') : null,
    };
};

function run(program) {
    var ctxCommand = this.getCommand();
    var acc = [];
    for (var command in program) {
        var exec = alphabet[ctxCommand || command];
        if (!exec) continue;
        var data = program[command];
        try { this.hook(data, command); } catch(e) {
            log(`Attention! Your hook failed:\n${e}`);
        }
        var types = exec.call(this, data, command);
        if (!types) continue;
        acc.push(types);
    }
    acc = acc.flat().unify();
    return acc;
};

var alphabet = {
    'info'(info) {
        var jsdoc = runComment(info, ` * @see {@link ${this.src} swagger}\n`);
        return jsdoc.meta({ key: 'jsdoc' });
    },
    'components'(components) {
        var types = run.call(this.command('@anySchemas'), components).join('\n\n');
        return `export namespace Schemas {\n\n${types}\n\n}`.meta({ key: 'Schemas' });
    },
    '@anySchemas'(schemas, field) {
        if (!schemasFields.includes(field)) return;
        return run.call(this.command('@anySchema'), schemas).join('\n\n');
    },
    '@anySchema'(schema, name) {
        var jsdoc = runComment.call(this, schema);
        var types = runSchema.call(this, schema);
        return `${jsdoc}export type ${name.toId().toPascalCase(this.toCamelCase)} = ${types}`;
    },
    'properties'(props) {
        var ctx = this.incLvl().command('@anyProperty');
        return run.call(ctx, props).join('\n').wrap(`{\n`, `\n${this.t()}}`);
    },
    '@anyProperty'(schema, name) {
        var types = runSchema.call(this, schema);
        var jsdoc = runComment.call(this, schema);
        return `${jsdoc}${name.toKey(!schema.isRequired).toCamelCase(this.toCamelCase)}: ${types}`;
    },
    'items'(schema) {
        return runSchema.call(this, schema).concat('[]');
    },
    'additionalProperties'(schema) {
        if (schema == false) return null;
        if (schema == true) return 'Record<string, unknown>';
        var types = runSchema.call(this, schema);
        return `Record<string, ${types}>`;
    },
    'oneOf': runComposition(' | '),
    'anyOf': runComposition(' | '),
    'allOf': runComposition(' & '),
    'enum'(enums) {
        return enums.map((x) => ((typeof(x) === 'string') ? `'${x}'` : x)).join2(' | ');
    },
    'type'(type) {
        return types[type] || 'unknown';
    },
    '$ref'(ref) {
        var { 3: name } = ref.split('/');
        return name ? `Schemas.${name.toId().toPascalCase(this.toCamelCase)}` : 'unknown';
    },
    'paths'(paths) {
        if (this.generatePaths === false) return;
        var types = run.call(this.command('@anyPath'), paths).join('\n\n');
        return `export type Paths = {\n\n${types}\n\n}`.meta({ key: 'Paths' });
    },
    '@anyPath'(path, name) {
        if (this.filter && !this.filter.test(name)) return;
        var ctx = this.incLvl().command('@anyHttpMethod');
        var types = run.call(ctx, path).join('\n\n').wrap('{\n\n', `\n\n${this.t()}}`);
        return `${this.t()}'${name}': ${types}`;
    },
    '@anyHttpMethod'(data, method) {
        var types = run.call(this.incLvl(), data);
        var joined = types.join('\n').wrap('{\n', `\n${this.t()}}`);
        var jsdoc = runComment.call(this, data);
        return `${jsdoc}${method}: ${joined}`;
    },
    'parameters'(data) {
        var run = runParams.bind(this, data.map(getRawSchema, this));
        return [run('path'), run('query')].filter(Boolean);
    },
    'requestBody'(data) {
        var types = run.call(this, data).join(' | ').or('unknown');
        var jsdoc = runComment.call(this, data);
        return `${jsdoc}${'body'.toId(!data.required)}: ${types}`;
    },
    'responses'(data) {
        var types = run.call(this, data).join(' | ').or('unknown');
        return `${this.t()}res: ${types}`;
    },
    '200': run,
    '201': run,
    'content': run,
    'application/json': run,
    'application/octet-stream': run,
    'multipart/form-data': run,
    'text/plain': run,
    'schema': runSchema,
};

var types = {
    'string'  : 'string',
    'number'  : 'number',
    'integer' : 'number',
    'boolean' : 'boolean',
    'null'    : 'null',
    'object'  : 'Record<string, unknown>',
    'array'   : 'unknown[]',
};

var schemasFields = ['schemas', 'requestBodies', 'responses', 'parameters', 'pathItems'];
var schemaTypeFields = ['properties', 'items', 'additionalProperties', 'enum'];
var commentFields = ['title', 'description', 'summary', 'operationId'];

function runComment(schema, extraRow = '') {
    schema = getRawSchema.call(this, schema);
    var tab = this?.t?.() || '';
    return commentFields
        .filter((field) => schema[field])
        .map((field) => `${tab} * @${field} ${schema[field].replaceAll('\n', `\n${tab} * `)}`)
        .join('\n')
        .wrap(`${tab}/**\n${extraRow}`, `\n${tab} */\n${tab}`)
        .or(tab);
};

function runComposition(devider) {
    return function(composition) {
        return composition.map(runSchema, this).join2(devider);
    };
}

function runParam(param) {
    var types = run.call(this, param).join(' | ').or('unknown');
    var jsdoc = runComment.call(this, param);
    return `${jsdoc}${param.name.toKey(!param.required).toCamelCase(this.toCamelCase)}: ${types}`;
};

function runParams(rawParams, place) {
    var params = rawParams.filter((param) => (param.in === place));
    if (!params.length) return;
    var isOptional = params.some((param) => (!param.required));
    var types = params.map(runParam, this.incLvl());
    var joined = types.join('\n').wrap('{\n', `\n${this.t()}}`).or('unknown');
    return `${this.t()}${`${place}Params`.toId(isOptional)}: ${joined}`;
};

function runSchema(schema) {
    var types = run.call(this, normalizedSchema(schema));
    return types.join(' & ').or('unknown').nullable(schema.nullable);
};

function unrefSchema(schema) {
    var { 2: field, 3: name } = schema.$ref.split('/');
    return this.openapi?.components?.[field]?.[name] || schema;
};

function getRawSchema(schema) {
    return schema.$ref ? unrefSchema.call(this, schema) : schema;
};

function normalizedSchema(schema) {
    normalizeSchemaEnum(schema);
    if (schemaTypeFields.some(schema.hasOwnProperty, schema)) {
        delete schema.type;
    }
    if (!schema.properties) return schema;
    if (!schema.required?.length) return schema;
    schema.required.forEach((field) => {
        var requiredSchema = schema.properties[field];
        if (!requiredSchema) return;
        requiredSchema.isRequired = true;
    });
    return schema;
};

function normalizeSchemaEnum(schema) {
    if (
        ['number', 'integer'].includes(schema.type) &&
        Array.isArray(schema.enum)
    ) schema.enum.forEach((value, i, enums) => {
        if (value && !Number.isNaN(Number(value))) {
            enums[i] = Number(value);
        }
    });
};

function log(message) {
    console.warn(`\x1b[38;5;220m\n${message}\x1b[0m\n`);
}

var context = {
    lvl: 1,
    t() {
        return this.tab.repeat(this.lvl);
    },
    incLvl() {
        return Object.setPrototypeOf({ lvl: this.lvl + 1 }, context);
    },
    command(name) {
        this.commandName = name;
        return this;
    },
    getCommand() {
        var commandName = this.commandName;
        delete this.commandName;
        return commandName;
    }
}

String.prototype.toId = function(isOptional) {
    return this.replace(/[^\p{N}\p{L}$_]/gu, '').concat(isOptional ? '?' : '');
}
String.prototype.toKey = function(isOptional) {
    var isId = /^[\p{L}$_][\p{N}\p{L}$_]*$/u.test(this);
    return (isId ? this : `'${this}'`).concat(isOptional ? '?' : '');
}
String.prototype.toCamelCase = function(bool) {
    if (!bool || !this.length) return this;
    return this.split(/(?<=[\p{L}0-9])_(?=[\p{L}0-9])|[^\p{L}0-9_]+/u)
        .filter(Boolean)
        .map((w, i) => i === 0 ? w.toLowerCase() : w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join('');
}
String.prototype.toPascalCase = function(bool) {
    if (!bool || !this.length) return this;
    return this.split(/(?<=[\p{L}0-9])_(?=[\p{L}0-9])|[^\p{L}0-9_]+/u)
        .filter(Boolean)
        .map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase())
        .join('');
}
String.prototype.nullable = function(bool) {
    return bool ? `${this} | null` : this;
}
String.prototype.or = function(value) {
    return this.length ? this : value;
}
String.prototype.wrap = function(a, b) {
    return this.length ? (a + this + b) : this;
}
String.prototype.meta = function(meta) {
    var obj = new String(this);
    return Object.assign(obj, meta);
}
Array.prototype.join2 = function(separator) {
    var arr = this.unify();
    return (arr.length > 1) ? `(${arr.join(separator)})` : arr.join(separator);
}
Array.prototype.unify = function() {
    return Array.from(this.reduce(
        (map, value) => (map.set(`${value}`, value), map), new Map
    ).values());
}