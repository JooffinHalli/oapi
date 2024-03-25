var { Config, FS, Json } = require('../../../utils');

/**
 * создает файл enums.ts с джаваскриптовыми объектами енумов, описанных в свагере
 * @param {import('../../../types/common/SchemaObject').SchemaObject} schemas
 */
var handleEnumsJs = (schemas) => {
  class Enum {
    constructor(schema) {
      var l = schema.enum.length;
      for (var i = 0; i < l; i++) {
        var value = schema.enum[i];
        var name = schema['x-enumNames'][i];
        this[name] = (schema.type === 'string') ? `'${value}'` : value;
      }
    }
  }
  class Acc {
    add(schemaName, schema) {
      if (!schema.has('x-enumNames')) return; // only for our projects
      if (!schema['x-enumNames'].isArray) return;
      if (schema.enum.length !== schema['x-enumNames'].length) return;
      this[schemaName] = new Enum(schema);
    }
  };

  FS.writeFile(
    `${Config.serviceOutput}/enums.ts`,
    `export const Enums = ${Json.stringify(schemas.addTo(new Acc))} as const;`
      .replaceAll('"', '')
  );
}

module.exports = handleEnumsJs;