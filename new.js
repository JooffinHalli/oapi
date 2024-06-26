var fs = require('node:fs');
var json = require('./api-orders.json');

// process.on('uncaughtException', () => {
//   console.log('\x1b[31m%s\x1b[0m', '\nПроизошла ошибка, проверьте входные данные\n') // red
// });

var { paths, components: { schemas, parameters } } = json;

var initSchemaState = {
  description: (a, schema, level) => {
    var s = ' '.repeat(level);
    var formated = schema.description.replaceAll('\n', `\n${s} * `);
    schema.description = `\n${s}/**\n${s} * @description ${formated}\n${s} */`;
    return a;
  },
  type: () => ({
    string: () => 'string',
    number: () => 'number',
    integer: () => 'number',
    object: (a, { properties }) => (properties ? a : 'Record<string, unknown>'),
    array: (a, { items }) => (items ? a : 'unknown[]'),
    boolean: () => 'boolean',
    null: () => 'null'
  }),
  properties: (a, { properties, required }, level) => {
    var props = properties, s = ' '.repeat(level), res = '{';
    for (var k in props) {
      var subSchema = props[k];
      var formatedKey = /[.\-\/]/.test(k) ? `'${k}'` : k;
      var key = required?.includes(k) ? formatedKey : `${formatedKey}?`;
      var type = schemaStr(subSchema, level + 2);
      res += (`${subSchema.description || ''}\n${s}  ${key}: ${type}`);
    }
    return res + `\n${s}}`;
  },
  items: (a, { items }, level) => (`${schemaStr(items, level)}[]`),
  $ref: (a, { $ref }) => $ref.replace('#/components/schemas/', `Schemas.`),
  allOf: (a, v, l) => (v.allOf.reduce((a, s) => `${a ? `${a} & ` : ''}${schemaStr(s, l)}`, '')),
  oneOf: (a, v, l) => (v.oneOf.reduce((a, s) => `${a ? `${a} | ` : ''}${schemaStr(s, l)}`, '')),
  anyOf: (a, v, l) => (v.anyOf.reduce((a, s) => `${a ? `${a} | ` : ''}${schemaStr(s, l)}`, '')),
  additionalProperties: (a, { additionalProperties: s }, level) => {
    var type = schemaStr(s, level + 4), res = `Record<string, ${type}>`;
    return (a.length && (a !== res)) ? `(${a} & ${res})` : res;
  },
  nullable: (a) => (a.length ? ((a === 'null') ? a : `${a} | null`) : `unknown | null`),
  enum: (a, schema, level) => {
    var { description: d, enum: e, ['x-enumNames']: n } = schema, s = ' '.repeat(level), acc = '';
    if (n.length === e.length) {
      for (var i in n) (acc += `\n${s} * * \`${n[i]}\` — ${e[i]}`);
      acc = `\n${s} * @names${acc}\n${s} */`;
      schema.description = d.length ? `${d.replace('*/', '*')}${s}${acc}` : `\n${s}/**${acc}`;
    }
    return e.join(' | ');
  },
  pass: (a) => (a)
}
var schemaKeysOrder = Object.keys(initSchemaState);
var l = schemaKeysOrder.length;

var schemaStr = (schema, level) => {
  var acc = '', state = initSchemaState;
  for (var i = 0; i <= l; i++) {
    var k = schemaKeysOrder[i], v = schema[k];
    if (!v) continue;
    while (state.constructor !== String) {
      state = (state[k] ?? state[v] ?? state.pass)(acc, schema, level);
    }
    ((acc = state), (state = initSchemaState));
  }
  return (acc || 'unknown');
}

var banner = `/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/\n\n`;
var comment = `/**
 * Схемы сервиса \`Orders\`
 * @see {@link http://staging.orders-v1-0.service.consul:82/_internal/orders/swagger/index.html swagger}
 */\n`;

var namespace = `${banner}${comment}export namespace Schemas {\n`;
for (var schemaName in schemas) {
  var schema = schemas[schemaName], type = schemaStr(schemas[schemaName], 2);
  namespace += (`${schema.description || ''}\n  export type ${schemaName} = ${type}\n`);
}
fs.writeFile('schemas.ts', (namespace + '\n}'), () => {});

module.exports = {
  schemaStr
};