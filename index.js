#!/usr/bin/env node

var { join: joinPath } = require('node:path');
var { Config, FS, Process, patchConstructors, assertVersion } = require('./utils');

var serviceSchemasTs   = require('./scripts/service/1.schemasTs');
var serviceEnumsJs     = require('./scripts/service/2.enumsJs');
var serviceUtilTypesTs = require('./scripts/service/3.utilTypesTs');
var servicePathsTs     = require('./scripts/service/4.pathsTs');
var serviceIndexJs     = require('./scripts/service/5.indexJs');

var buildApiJs         = require('./scripts/buildApiJs');
var utilTypesTs        = require('./scripts/utilTypesTs');
var declarationsTs     = require('./scripts/buildDeclarationsTs');

patchConstructors(); // Object, Array

var { config: configFileName, service } = Process.args;

var projectPath = process.cwd();
var configPath = joinPath(projectPath, configFileName);

Config.assertPath(configPath);
var config = Config.read(configPath);
Config.assert(config, service, configPath);
var serviceConfig = config[service];
Config.assertService(serviceConfig, configPath);

var { sourcePath } = config;
var { link, outputPath, prefix, tagWhiteList, pathBlackList, fieldBlackList } = serviceConfig;

Config.apiOutput = joinPath(projectPath, sourcePath);
Config.serviceOutput = joinPath(Config.apiOutput, outputPath);
Config.prefix = prefix;
Config.tagWhiteList = tagWhiteList;
Config.pathBlackList = pathBlackList;
Config.fieldBlackList = fieldBlackList;

fetch(link)
  .then((res) => res.json())
  .then(mainScript)
  .catch((e) => console.error('Ошибка при запросе', e));

/** @param {import('./types/OpenAPIObject').OpenAPIObject} openapiObject */
function mainScript(openapiObject) {
  if (!openapiObject) Process.exit(`Swagger json не был возвращен с урла ${link}, попробуйте еще раз`);
  assertVersion(openapiObject);
  FS.writeFile(`api-${service}.json`, JSON.stringify(openapiObject, null, 2), false);

  FS.mkDir(Config.apiOutput);
  FS.mkDir(Config.serviceOutput);

  var schemas = openapiObject.components?.schemas;
  var paths = openapiObject.paths;

  serviceSchemasTs(schemas);
  serviceEnumsJs(schemas);
  servicePathsTs(paths);
  serviceUtilTypesTs();
  serviceIndexJs();

  buildApiJs();
  utilTypesTs();
  declarationsTs();

  console.log("\x1b[32m", `апи "${service}" успешно обновилось -> ${sourcePath}`); // green
}