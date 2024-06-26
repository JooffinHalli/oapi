#!/usr/bin/env node

// process.on('uncaughtException', (e) => {
//   var errs = [', проверьте входные данные', ' при запросе json документа'];
//   console.log('\x1b[31m%s\x1b[0m', `\nПроизошла ошибка${errs[e.message] || errs[0]}\n`); // red
// });

// a - acc, k - key, v - value, s - space, l - level of nesting, p = path, f - force

var fs = require('node:fs'), path = require('node:path');

var { argv: { 2: configPath, 3: serviceName } } = process;
var projectPath = process.cwd();
var config = require(path.join(projectPath, configPath))
var sourcePath = config.sourcePath;
var { link, pathBlackList } = config[serviceName];
var dirPath = path.join(projectPath, sourcePath, serviceName);

fetch(link).catch(() => { throw new Error(1) }).then(r => r.json()).then((json) => {
  var { info: { title }, paths, components: { schemas } } = json;
  
  // common logic
  var isForbidden = (v) => pathBlackList ? new RegExp(pathBlackList.join('|')).test(v) : false;
  var keyStr = (k, force) => (force || /[\- \/.\{]/.test(k) ? (`'` + k + `'`) : k);
  var propStr = (k, v, l, f) => (v ? (`${' '.repeat(l || 0)}  ${keyStr(k, f)}: ${v}\n`) : '');
  var objStr = (fields, l) => (fields ? ('{\n' + fields + ' '.repeat(l) + '}') : '');
  var banner = `/**
 *  ........................................
 *  . этот файл сгенерирован автоматически .
 *  ........................................
 */\n\n`;
  var see = ` * @see {@link ${link.replace('internal/swagger.json', 'index.html')} swagger}\n`;

  // schemas logic
  var initSchemaState = {
    description: (a, schema, l) => {
      var s = ' '.repeat(l);
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
    properties: (a, { properties, required }, l) => {
      var props = properties, s = ' '.repeat(l), res = '{';
      for (var k in props) {
        var subSchema = props[k];
        var key = required?.includes(k) ? keyStr(k) : `${keyStr(k)}?`;
        var type = schemaStr(subSchema, l + 2);
        res += (`${subSchema.description || ''}\n${s}  ${key}: ${type}`);
      }
      return res + `\n${s}}`;
    },
    items: (a, { items }, l) => (`${schemaStr(items, l)}[]`),
    $ref: (a, { $ref }) => $ref.replace('#/components/schemas/', `Schemas.`),
    allOf: (a, v, l) => (v.allOf.reduce((a, s) => `${a ? `${a} & ` : ''}${schemaStr(s, l)}`, '')),
    oneOf: (a, v, l) => (v.oneOf.reduce((a, s) => `${a ? `${a} | ` : ''}${schemaStr(s, l)}`, '')),
    anyOf: (a, v, l) => (v.anyOf.reduce((a, s) => `${a ? `${a} | ` : ''}${schemaStr(s, l)}`, '')),
    additionalProperties: (a, { additionalProperties: s }, l) => {
      var type = schemaStr(s, l + 4), res = `Record<string, ${type}>`;
      return (a.length && (a !== res)) ? `(${a} & ${res})` : res;
    },
    nullable: (a) => (a.length ? ((a === 'null') ? a : `${a} | null`) : `unknown | null`),
    enum: (a, schema, l) => {
      var { description: d, enum: e, ['x-enumNames']: n } = schema, s = ' '.repeat(l), acc = '';
      if (n.length === e.length) {
        for (var i in n) (acc += `\n${s} * * \`${n[i]}\` — ${e[i]}`);
        acc = `\n${s} * @names${acc}\n${s} */`;
        schema.description = d.length ? `${d.replace('*/', '*')}${s}${acc}` : `\n${s}/**${acc}`;
      }
      return e.join(' | ');
    },
    pass: (a) => (a)
  };
  var schemaKeysOrder = Object.keys(initSchemaState);
  var schemaKeysOrderLength = schemaKeysOrder.length;
  var schemaStr = (schema, l) => {
    var acc = '', state = initSchemaState;
    for (var i = 0; i <= schemaKeysOrderLength; i++) {
      var k = schemaKeysOrder[i], v = schema[k];
      if (!v) continue;
      while (state.constructor !== String)
        state = (state[k] ?? state[v] ?? state.pass)(acc, schema, l);
      ((acc = state), (state = initSchemaState));
    };
    return (acc || 'unknown');
  }

  // paths logic
  var commented = (a, v, l) => {
    var s = ' '.repeat(l), e = `\n${s}`, comm = '';
    if (v.description || v.summary) {
      comm = `${s}/**`;
      (v.description) && (comm += (`${e} * @description` + ' ' + v.description.replaceAll('\n', `${e} * `)));
      (v.summary) && (comm += (`${e} * @summary` + ' ' + v.summary.replaceAll('\n', `${e} * `)));
      comm += `${e} */\n`;
    };
    return (comm + a);
  }
  var getParam = (p, r) => (
    r = p.$ref,
    (!r ? p : getParam(json.components.parameters[r.replace('#/components/parameters/', '')]))
  );
  var paramsStr = (a, params, l) => {
    var l2 = (l + 2), l4 = (l2 + 2);
    var { query, path } = params.reduce((acc, param) => {
      var p = getParam(param), inn = p.in;
      acc[inn] += commented(propStr(p.name, schemaStr(p.schema, l2), l2), p, l4);
      return acc;
    }, { query: '', path: '' });
    var q = propStr('queryParams', objStr(query, l2), l);
    var p = propStr('pathParams', objStr(path, l2), l);
    return (a + q + p);
  };
  var methodState = {
    parameters: paramsStr,
    responses: (a, v, l) => {
      var res = 'unknown', responseObject = {}, l2 = (l + 2);
      for (var status in v) {
        if ((status > 400) || !status) continue;
        responseObject = v[status];
        var schema = v[status].content?.['application/json']?.schema;
        res = (schema ? (schemaStr(schema, l2)) : res);
        break;
      };
      res = commented(propStr('res', res, l), responseObject, l2);
      return (a + res);
    }
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
  var pathsStr = (obj, l, state, canGo = () => true) => {
    var acc = '';
    for (var k in obj) {
      var v = obj[k], l2 = (l + 2), newState = (state[k] || state['*']);
      if (!newState || !canGo(k)) continue;
      acc = (newState.constructor === Object)
        ? (acc + commented(propStr(k, pathsStr(v, l2, newState), l), v, l2))
        : newState(acc, v, l);
    };
    return objStr(acc, l);
  };

  // endpoints logic
  var pathsReduce = (ctx, o, cb) => {var a = ''; for (var k in o) (a = cb(ctx, a, k, o[k]));return a;};
  var pLengths = [], pParts = new Map, pI = new Map, validPs = {}, validPsArr = [], totalPs = 0;
  var guardPath = (path) => {
    if (isForbidden(path)) return false;
    totalPs++;
    pLengths[path.length] = path;
    path.split('/').forEach((part, i) => {
      pParts.set(part, ((pParts.get(part) || 0) + 1));
      pI.set(part, i);
    });
    validPs[path] = json.paths[path];
    validPsArr.push(path);
    return true;
  };

  // results
  var namespace = `${banner}/**\n * Схемы для сервиса \`${title}\`\n${see} */\nexport namespace Schemas {\n`;
  for (var schemaName in schemas) {
    var schema = schemas[schemaName], type = schemaStr(schemas[schemaName], 2);
    namespace += (`${schema.description || ''}\n  export type ${schemaName} = ${type}\n`);
  };

  var pathsTypeStr = pathsStr(paths, 0, pathsState, guardPath);

  var commonPath = Array.from(pParts).reduce(
    (a, { 0: k, 1: v }) => ((v > (~~(-~(totalPs >> 1)))) && (a[pI.get(k)] = k), a), []
  ).join('/') + '/';
  var b = { get: 1, post: 2, put: 4, delete: 8, patch: 16, head: 32, trace: 64 };
  var count = 0;
  validPsArr.forEach((p, i, arr) => {
    var isCut = p.startsWith(commonPath);
    var newP = (isCut ? (count++, p.replace(commonPath, '')) : p);
    arr[i] = newP;
    (isCut && (validPs[newP] = validPs[p], (delete validPs[p])));
  });
  if (count === validPsArr.length) {
    validPsArr.reduce((acc, p) => (acc[p.length] = p, acc), (pLengths.length = 0, pLengths));
  }
  var endpointsStr = objStr(
    pathsReduce(
      Object.assign(b, { propStr, longest: pLengths.pop().length }),
      validPs,
      (ctx, a, k, v) => a + ctx.propStr(k, (
        ' '.repeat(ctx.longest - k.length) +
        '0b' + pathsReduce(ctx, v, (ctx2, a1, k2) => (a1 |= ctx2[k2])).toString(2).padStart(8, 0) + ','
      ), 0, 1)
    )
  );

  var configStr = `/** Объект для передачи в функцию \`buildApi\` */\nconst config = <const>{
  /** Большенство эндпойнтов начинаются с этого пути */
  basePath: '${commonPath}'
}`;

  // write files
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath);
  fs.writeFile(
    path.join(dirPath, 'schemas.ts'),
    (namespace + '\n}'),
    () => {}
  );
  fs.writeFile(
    path.join(dirPath, 'paths.ts'),
    (
      banner +
      `import { Schemas } from './schemas';\n\n` +
      `/**\n * Типы эндпойнтов для сервиса \`${title}\`\n${see} */\n` +
      'export type Paths = ' + pathsTypeStr
    ),
    () => {}
  );
  fs.writeFile(
    path.join(dirPath, 'endpoints.ts'),
    (
      banner +
      `/** список эндпойнтов и их методов отображенных в виде числа для сервиса \`${title}\` */\nexport type Endpoints = typeof endpoints\n\n/**
 * список эндпойнтов и их методов отображенных в виде числа для сервиса \`${title}\`,
 * где каждый бит указывает на наличие метода
 * | trace | head | patch | delete | put | post | get |
 * | ----- | ---- | ----- | ------ | --- | ---- | --- |
 * |    64 |   32 |    16 |      8 |   4 |    2 |   1 |
 */\n` +
      'export const endpoints = ' + endpointsStr
    ),
    () => {}
  );
  fs.writeFile(
    path.join(dirPath, 'config.ts'),
    banner + configStr,
    () => {}
  );
});