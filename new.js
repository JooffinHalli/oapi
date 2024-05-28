var fs = require('node:fs');
var json = require('./api-orders.json');

var initState = {
  description: (a, schema, level) => {
    var s = ' '.repeat(level);
    var formated = schema.description.replaceAll('\n', `\n${s} * `)
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
      var formatedKey = /[.\-\/]/.test(k) ? `['${k}']` : k;
      var key = required?.includes(k) ? formatedKey : `${formatedKey}?`;
      var type = ts(subSchema, level + 2);
      res += (`${subSchema.description || ''}\n${s}  ${key}: ${type}`);
    }
    return res + `\n${s}}`;
  },
  items: (a, { items }, level) => (`${ts(items, level)}[]`),
  allOf: () => `'allOf'`,
  oneOf: () => `'oneOf'`,
  anyOf: () => `'anyOf'`,
  additionalProperties: (a, { additionalProperties }, level) => {
    var type = ts(additionalProperties, level + 4), res = `Record<string, ${type}>`;
    return (a.length && (a !== res)) ? ('(' + a + ` & ` + res + ')') : res;
  },
  nullable: (a) => (a.length ? ((a === 'null') ? a : (a + ' | ' + 'null')) : `unknown | null`),
  pass: (a) => (a)
}
var order = Object.keys(initState), l = order.length;

var ts = (schema, level) => {
  var acc = '', state = initState;
  for (var i = 0; i <= l; i++) {
    var k = order[i], v = schema[k];
    if (!v) continue;
    while (state.constructor !== String) {
      state = (state[k] ?? state[v] ?? state.pass)(acc, schema, level);
    }
    ((acc = state), (state = initState));
  }
  return (acc || 'unknown');
}

console.time('test');
var { schemas } = json.components;
var namespace = 'export namespace Schemas {\n';
for (var schemaName in schemas) {
  var schema = schemas[schemaName], type = ts(schemas[schemaName], 2);
  namespace += (`${schema.description || ''}\n  export type ${schemaName} = ${type}\n`);
}
namespace += '\n}';

fs.writeFile('test2.ts', namespace, () => { console.timeEnd('test'); });