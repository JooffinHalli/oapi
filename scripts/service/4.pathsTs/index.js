var { Config, Schemas } = require('../../../utils');

var imports = new Set;

/**
 * - создает файл paths.ts с тайпскриптовыми типами для путей (эндпойнтов)
 * - создает файл config.ts с тайпскриптовыми типами конфига для функции `buildApi`
 * @param {import('../../../types/common/PathsObject').PathsObject} paths
 */
var handlePathsTs = (paths) => {
  if (!paths) return;

  var content = paths.addTo(new Paths);
  var printablePaths = new Schemas.Printable('Paths', content, 'type', imports);
  printablePaths.print('paths.ts');

  console.log(Config.onlyTypes);
  if (Config.onlyTypes) return;

  var basePath = `${content.basePath}`;

  var config = { basePath: `'${basePath}'`, endpoints: 'Endpoints' };
  var printableConfig = new Schemas.Printable('Config', config, 'type');
  printableConfig.print('config.ts');

  var endpoints = content.endpoints.cutPaths(basePath, content.pathMaxLength);
  var printableEndpoints = new Schemas.Printable('endpoints', endpoints, 'const');
  printableEndpoints.print('endpoints.ts');
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
  var value = schema ? new Schemas.Smart(schema).value : 'any';
  if (!this.has(key)) this[key] = {};
  if (!required) {
    var optionalKey = `${key}?`;
    if (!this.has(optionalKey)) this[optionalKey] = {};
    this[optionalKey].assign(this[key]);
    delete this[key];
    key = optionalKey;
  }
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
Operation.prototype.handleBody = function(requestBody) {
  this.set('body', requestBody);
}
Operation.prototype.handleRes = function(responses) {
  if (!responses) return;
  var res = responses.getFirst('200', '201', '2XX');
  this.set('res', res);
}
Operation.prototype.set = function(key, entity) {
  if (!entity) return;
  var schema = (
    entity?.content?.['application/json']?.schema ||
    entity?.content?.['application/octet-stream']?.schema
  );
  if (!schema) return this[`${key}?`] = 'unknown';
  Schemas.Acc.prototype.add.call(this, key, schema, 1, imports);
}

class PathItem {
  constructor() {
    this.setHidden('methodsBitMask', 0);
  }
}
var methodBitMask = {
  get:    1,
  post:   2,
  put:    4,
  delete: 8,
  patch:  16,
  head:   32,
  trace:  64,
}
function addOperation(pathItemObject, httpMethod) {
  var { tagWhiteList } = Config;
  var hasWrongTag = (
    tagWhiteList?.isArray &&
    !pathItemObject.tags?.some(tagWhiteList.someMatches.bind(tagWhiteList))
  );
  if (hasWrongTag) {
    this.setHidden('isIgnoded', true);
    return;
  }
  this.methodsBitMask |= methodBitMask[httpMethod];
  this[httpMethod] = new Operation(pathItemObject);
}
PathItem.prototype.get     = addOperation;
PathItem.prototype.post    = addOperation;
PathItem.prototype.put     = addOperation;
PathItem.prototype.delete  = addOperation;
PathItem.prototype.options = addOperation;
PathItem.prototype.patch   = addOperation;
PathItem.prototype.head    = addOperation;
PathItem.prototype.trace   = addOperation;
PathItem.prototype.add = function(httpMethod, pathItemObject) {
  if (this.has(httpMethod)) this[httpMethod](pathItemObject, httpMethod);
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
    var parts = path.split('/');
    parts.addTo(this, parts.length - 1);
  }
  add(index, part, lastIndex) {
    if (+index === 0) return; // part[0] === ''
    if (+index === lastIndex) return;
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
    this.setHidden('pathMaxLength', pathMaxLength);
    this.addTo(this, basePath);
    return this;
  }
  add(path, httpMethods, basePath) {
    delete this[path];
    if (path.startsWith(basePath)) {
      path = path.slice(basePath.length);
    }
    var spacesCount = this.pathMaxLength - path.length;
    if (spacesCount < 0) {
      this.pathMaxLength = path.length;
      this.addTo(this, basePath);
      return;
    }
    path = path.startsWith("'") ? path : `'${path}'`;
    this[path] = `${' '.repeat(spacesCount)}${httpMethods}`;
  }
}

function Paths() {
  this.setHidden('pathMaxLength', 0);
}
Paths.prototype.add = function(path, pathItemObject) {
  var { prefix, pathBlackList } = Config;
  path = prefix ? (`/${prefix}` + path) : path;
  if (pathBlackList?.someMatches?.(path)) return;
  var operations = pathItemObject.addTo(new PathItem);
  if (operations.isIgnoded) return;
  this.pathMaxLength = (path.length > this.pathMaxLength) ? path.length : this.pathMaxLength;
  this[`'${path}'`] = operations;
  this.endpoints[path] = ('0b' + (operations.methodsBitMask).toString(2).padStart(8, 0));
  this.basePath.save(path);
}
Paths.prototype.endpoints = new Endpoints;
Paths.prototype.basePath = new BasePathAcc;

module.exports = handlePathsTs;