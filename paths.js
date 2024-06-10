var fs = require('node:fs');
var json = require('./api-orders.json');
var { paths, components: { schemas } } = json;
var ignoreList = ['mobile', '_internal'];
var ignorePattern = new RegExp(ignoreList.join('|'));
// schemas
var keyStr = (k) => (/[\- \/.]/.test(k) ? `'${k}'` : k);
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
      var key = required?.includes(k) ? keyStr(k) : `${keyStr(k)}?`;
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
var schemaKeysOrderLength = schemaKeysOrder.length;
var schemaStr = (schema, level) => {
  var acc = '', state = initSchemaState;
  for (var i = 0; i <= schemaKeysOrderLength; i++) {
    var k = schemaKeysOrder[i], v = schema[k];
    if (!v) continue;
    while (state.constructor !== String)
      state = (state[k] ?? state[v] ?? state.pass)(acc, schema, level);
    ((acc = state), (state = initSchemaState));
  }
  return (acc || 'unknown');
}
// paths
var comment = (a, v, l) => {
  var s = ' '.repeat(l), e = `\n${s}`, comm = '';
  if (v.description || v.summary) {
    comm = `${s}/**`;
    (v.description) && (comm += (`${e} * @description` + ' ' + v.description.replaceAll('\n', `${e} * `)));
    (v.summary) && (comm += (`${e} * @summary` + ' ' + v.summary.replaceAll('\n', `${e} * `)));
    comm += `${e} */\n`;
  }
  return (comm + a);
}
var getParam = (p, r) => (
  r = p.$ref,
  (!r ? p : getParam(json.components.parameters[r.replace('#/components/parameters/', '')]))
);
var prop = (k, v, l) => (v ? (`${' '.repeat(l)}  ${keyStr(k)}: ${v}\n`) : '');
var objStr = (fields, l) => (fields ? ('{\n' + fields + ' '.repeat(l) + '}') : '');
var paramsStr = (a, params, l) => {
  var l2 = (l + 2), l4 = (l2 + 2);
  var { query, path } = params.reduce((acc, param) => {
    var p = getParam(param), inn = p.in;
    acc[inn] += comment(prop(p.name, schemaStr(p.schema, l2), l2), p, l4);
    return acc;
  }, { query: '', path: '' });
  var q = prop('queryParams', objStr(query, l2), l);
  var p = prop('pathParams', objStr(path, l2), l);
  return (a + q + p);
};
var resStr = (a, v, l) => {
  var res = 'unknown', responseObject = {}, l2 = (l + 2);
  for (var status in v) {
    if ((status > 400) || !status) continue;
    responseObject = v[status];
    var schema = v[status].content?.['application/json']?.schema;
    res = (schema ? (schemaStr(schema, l2)) : res);
    break;
  };
  res = comment(prop('res', res, l), responseObject, l2);
  return (a + res);
}
var methodState = {
  parameters: paramsStr,
  responses: resStr
};
var pathState = {
  get: methodState,
  put: methodState,
  post: methodState,
  delete: methodState,
  options: methodState,
  head: methodState,
  patch: methodState,
  trace: methodState,
  parameters: paramsStr
};
var pathsState = { '*': pathState };
var pathsStr = (obj, l, state) => {
  var acc = '';
  for (var k in obj) {
    var v = obj[k], l2 = (l + 2), newState = (state[k] || state['*']);
    if (!newState || ignorePattern.test(k)) continue;
    acc = (newState.constructor === Object)
      ? (acc + comment(prop(k, pathsStr(v, l2, newState), l), v, l2))
      : newState(acc, v, l)
  };
  return objStr(acc, l);
};

var banner = `/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/\n\n`;
var commentStr = `/**
 * @docs {@link http://staging.orders-v1-0.service.consul:82/_internal/orders/swagger/index.html swagger}
 */\n`;
var namespace = `${banner}${commentStr}export namespace Schemas {\n`;
for (var schemaName in schemas) {
  var schema = schemas[schemaName], type = schemaStr(schemas[schemaName], 2);
  namespace += (`${schema.description || ''}\n  export type ${schemaName} = ${type}\n`);
}
fs.writeFile('schemas.ts', (namespace + '\n}'), () => {});
fs.writeFile(
  'paths.ts',
  (banner + `import { Schemas } from './schemas';\n\n` + commentStr + 'export type Paths = ' + pathsStr(paths, 0, pathsState)),
  () => {}
);