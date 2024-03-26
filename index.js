#!/usr/bin/env node

fetch('http://staging.orders-v1-0.service.consul:82/_internal/orders/swagger/internal/swagger.json')
    .then((res) => res.json())
    .then(console.log)
    .catch(console.log);

// var { join: joinPath } = require('node:path');
// var { Config, FS, Git, Process, patchConstructors, assertVersion } = require('./utils');

// var serviceSchemasTs   = require('./scripts/service/1.schemasTs');
// var serviceEnumsJs     = require('./scripts/service/2.enumsJs');
// var serviceUtilTypesTs = require('./scripts/service/3.utilTypesTs');
// var servicePathsTs     = require('./scripts/service/4.pathsTs');
// var serviceIndexJs     = require('./scripts/service/5.indexJs');

// var buildApiJs         = require('./scripts/buildApiJs');
// var utilTypesTs        = require('./scripts/utilTypesTs');
// var declarationsTs     = require('./scripts/buildDeclarationsTs');

// patchConstructors(); // Object, Array

// var { config: configFile, service } = Process.args;

// Config.assertIsJson(configFile);

// var projectDir = joinPath(process.cwd());
// var configDir = joinPath(projectDir, configFile);

// var config = require(configDir);
// Config.assert(config, service, configDir);

// var serviceConfig = config[service];
// Config.assertService(serviceConfig, configDir);

// var { source } = config;
// var { prefix, repo, branch, file, output, ignore } = serviceConfig;

// Config.apiOutput = joinPath(projectDir, source);
// Config.serviceOutput = joinPath(Config.apiOutput, output);
// Config.prefix = prefix;
// Config.ignore = ignore;

// Git.assertLink(repo);
// const repoName = Git.getRepoName(repo);
// FS.rmDirSafe(repoName);
// Git.clone(repo, branch);
// Git.assertClonning(repoName, file);

// /** @type {import('./types/OpenAPIObject').OpenAPIObject} */
// var openapiObject = FS.readFileSync(`${repoName}/${file}`);

// FS.rmDir(repoName);

// assertVersion(openapiObject);

// FS.mkDir(Config.apiOutput);
// FS.mkDir(Config.serviceOutput);

// var schemas = openapiObject.components?.schemas;
// var paths = openapiObject.paths;

// serviceSchemasTs(schemas);
// serviceEnumsJs(schemas);
// servicePathsTs(paths);
// serviceUtilTypesTs();
// serviceIndexJs();

// buildApiJs();
// utilTypesTs();
// declarationsTs();

// console.log("\x1b[32m", `апи  "${service}" успешно обновилось`, ` -> ${source}`); // green