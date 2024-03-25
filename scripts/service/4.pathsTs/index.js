var { Config, Schemas } = require('../../../utils');

var imports = new Set;

/**
 * - создает файл paths.ts с тайпскриптовыми типами для путей (эндпойнтов)
 * - создает файл config.ts с тайпскриптовыми типами конфига для функции `buildApi`
 * @param {import('../../../types/common/PathsObject').PathsObject} paths
 */
var handlePathsTs = (paths) => {
  if (!paths) return;
  var content   = paths.addTo(new Paths);
  var basePath  = `${content.basePath}`;
  var config    = { basePath: `'${basePath}'`, endpoints: 'Endpoints' };
  var endpoints = content.endpoints.cutPaths(basePath, content.pathMaxLength);
  var printablePaths     = new Schemas.Printable('Paths', content, 'type', imports);
  var printableConfig    = new Schemas.Printable('Config', config, 'type');
  var printableEndpoints = new Schemas.Printable('endpoints', endpoints, 'const');
  printablePaths    .print('paths.ts');
  printableConfig   .print('config.ts');
  printableEndpoints.print('endpoints.ts');
  return content.basePath;
}

class Servers extends Array {
  constructor(serverObjects) {
    super();
    serverObjects.addTo(this);
  }
}
Servers.prototype.add = function(index, { url }) {
  this[index] = `'${url}'`;
}
Servers.prototype.toString = function() {
  return this.join(' | ');
}

class Parameters {
  constructor(parameters) {
    parameters.forEach(this.handleParameter.bind(this));
  }
}
Parameters.prototype.setParams = function(parameter, key) {
  var { name, required, schema } = parameter;
  key = !!required ? key : `${key}?`;
  if (!this.has(key)) this[key] = {};
  var value = schema ? new Schemas.Smart(schema).value : 'any';
  this[key][!!required ? `'${name}'` : `'${name}'?`] = value;
}
Parameters.prototype.nameMapping = {
  header: 'headers',
  path: 'pathParams',
  query: 'params',
}
Parameters.prototype.handleParameter = function(parameter) {
  var paramType = parameter.in;
  if (!this.nameMapping.has(paramType)) return;
  this.setParams(parameter, this.nameMapping[paramType]);
}

class Operation {
  constructor(operationObject) {
    this.handleServers(operationObject.servers);
    this.handleParameters(operationObject.parameters);
    this.handleBody(operationObject.requestBody);
    this.handleRes(operationObject.responses);
  }
}
Operation.prototype.handleServers = function(serverObjects) {
  if (!serverObjects) return;
  this.url = `${new Servers(serverObjects)}`;
};
Operation.prototype.handleParameters = function(parameterObjects) {
  if (!parameterObjects) return;
  this.assign(new Parameters(parameterObjects));
};
Operation.prototype.setBody = function(value, isRequired) {
  this[isRequired ? 'body' : 'body?'] = value;
}
Operation.prototype.handleBody = function(requestBody) {
  if (!requestBody) return;
  var { value } = this.getSmartSchema(requestBody);
  if (value) return this.setBody(value, !!requestBody.required);
  return this.setBody('unknown', false);
}
Operation.prototype.setRes = function({ value, compositionGeneric }) {
  var key = 'res';
  if (compositionGeneric) {
    imports.add(compositionGeneric);
    key += `$${compositionGeneric}`;
  }
  this[key] = value;
}
Operation.prototype.handleRes = function(responses) {
  if (!responses) return;
  var res = responses.getFirst('200', '201', '2XX');
  if (!res) return this.setRes('unknown');
  var smartSchema = this.getSmartSchema(res);
  if (smartSchema.value) return this.setRes(smartSchema);
  return this.setRes('unknown');
}
Operation.prototype.getSmartSchema = function(entity) {
  var schema = entity.content?.['application/json']?.schema;
  return schema ? new Schemas.Smart(schema) : {};
}

class PathItem {
  constructor() {
    this.setHidden('methodsBitMask', 0);
  }
}
PathItem.methodBitMask = {
  get:    1,
  post:   2,
  put:    4,
  delete: 8,
  patch:  16,
  head:   32,
  trace:  64,
}
PathItem.addOperation = function(value, key) {
  this.methodsBitMask |= PathItem.methodBitMask[key];
  this[key] = new Operation(value);
}
PathItem.prototype.get     = PathItem.addOperation;
PathItem.prototype.post    = PathItem.addOperation;
PathItem.prototype.put     = PathItem.addOperation;
PathItem.prototype.delete  = PathItem.addOperation;
PathItem.prototype.options = PathItem.addOperation;
PathItem.prototype.patch   = PathItem.addOperation;
PathItem.prototype.head    = PathItem.addOperation;
PathItem.prototype.trace   = PathItem.addOperation;
PathItem.prototype.add = function(key, value) {
  if (this.has(key)) this[key](value, key);
}

class PathPart {}
PathPart.prototype.add = function(part, count, total) {
  var minCount = ~~(-~(total >> 1)); // Math.trunc((total / 2) + 1)
  if (count < minCount) return;
  this.partPath = part;
}

class BasePathAcc {
  #totalPathsCount = 0;
  #acc = [];
  save(path) {
    this.#totalPathsCount++;
    path.split('/').addTo(this);
  }
  add(index, part) {
    if (index === 0) return;
    index--;
    if (!this.#acc.has(index)) {
      this.#acc[index] = { [part]: 1 };
    }
    else if (this.#acc[index].has(part)) {
      this.#acc[index][part]++;
    }
    else this.#acc[index][part] = 1;
  }
  toString() {
    var value = this.#acc.reduce((acc, part, i) => {
      if (i > acc.length) return acc;
      var { partPath } = part.addTo(new PathPart, this.#totalPathsCount);
      if (partPath) acc[i] = partPath;
      return acc;
    }, []);
    return value.length ? `/${value.join('/')}/` : `/`;
  }
}

class Endpoints {
  cutPaths(basePath, pathMaxLength) {
    this.setHidden('basePath', basePath);
    this.setHidden('basePathLength', basePath.length);
    this.setHidden('pathMaxLength', pathMaxLength);
    this.setHidden('round', 1);
    this.addTo(this);
    return this;
  }
  add(path, httpMethods) {
    delete this[path];
    if (path.startsWith(this.basePath)) {
      path = path.slice(this.basePathLength);
    }
    var diff = this.pathMaxLength - this.basePathLength - path.length;
    if (diff < 0) {
      this.pathMaxLength -= diff;
      this.addTo(this);
      return;
    }
    this[`'${path}'`] = `${' '.repeat(diff)}${httpMethods}`;
  }
}

function Paths() {
  this.setHidden('pathMaxLength', 0);
}
Paths.prototype.add = function(path, pathItemObject) {
  var { prefix, ignore } = Config;
  path = prefix ? (`/${prefix}` + path) : path;
  var shouldIgnore = ignore.isArray && ignore.some((substr) => {
    return path.includes(substr);
  });
  if (shouldIgnore) return;
  this.pathMaxLength = (path.length > this.pathMaxLength) ? path.length : this.pathMaxLength;
  var operations = pathItemObject.addTo(new PathItem);
  this[`'${path}'`] = operations;
  this.endpoints[path] = ('0b' + (operations.methodsBitMask).toString(2).padStart(8, 0));
  this.basePath.save(path);
}
Paths.prototype.endpoints = new Endpoints;
Paths.prototype.basePath = new BasePathAcc;

module.exports = handlePathsTs;