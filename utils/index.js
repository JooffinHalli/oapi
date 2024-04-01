var Process = require('./process');

module.exports = {
  Config: require('./config'),
  FS: require('./fs'),
  Json: require('./json'),
  Process,
  Schemas: require('./schema'),
  assertVersion: assertVersion,
  patchConstructors: patchConstructors,
}

function patchConstructors() {
  function ValueDescriptor(value) {
    this.value = value;
  }
  ValueDescriptor.prototype = {
    configurable: false,
    enumerable: false,
    writable: true
  }

  Object.defineProperty(
    Array.prototype,
    'isArray',
    new ValueDescriptor(true)
  );

  Object.defineProperty(
    Array.prototype,
    'someMatches',
    new ValueDescriptor(function(str) {
      return this.some(str.includes.bind(str));
    })
  );

  var define = (fn) => {
    Object.defineProperty(
      Object.prototype,
      fn.name,
      new ValueDescriptor(fn)
    );
  }

  define(function isEmpty() {
    for (var key in this) return false;
    return true;
  });
  define(function has(key) {
    return (key in this);
  });
  define(function getFirst() {
    var l = arguments.length;
    for (var i = 0; i < l; i++) {
      var arg = arguments[i];
      if (this.has(arg)) return this[arg];
    }
    return null;
  });
  define(function addTo(acc, ...extraParams) {
    for (var key in this) acc.add(key, this[key], ...extraParams);
    return acc;
  });
  define(function assign(obj) {
    Object.assign(this, obj);
  });
  define(function setHidden(key, value) {
    Object.defineProperty(this, key, new ValueDescriptor(value))
  });
}

function assertVersion(openapiObject) {
  var supportedVarsions = [
    '3.0.0',
    '3.0.1',
    '3.0.2',
    '3.0.3',
    '3.1.0'
  ];
  // console.log(openapiObject);
  if (
    !openapiObject.has('openapi') ||
    !supportedVarsions.includes(openapiObject.openapi)
  ) {
    Process.exit(
      `supported openapi versions are: ${supportedVarsions.join(', ')}`
    );
  }
}