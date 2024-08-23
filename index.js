#!/usr/bin/env node

var { 2: configFilePath } = process.argv;

var args = process.argv.reduce((a, x) => ((a[x] = +(x in a)), a), { '--debug': 0, '--d': 0 });

process.on('uncaughtException', (e) => {
  var errs = [', проверьте входные данные', ' при запросе json документа', ', поддерживается openapi версии 3 и выше'];
  (args['--debug'] || args['--d']) && console.log(e);
  console.log('\x1b[31m%s\x1b[0m', `\nПроизошла ошибка${errs[e.message] || errs[0]}\n`); // red
});

var basePath = process.cwd();

var path = require('node:path');

var configPath = path.join(basePath, path.normalize(configFilePath));

var config = require(configPath);

var fetchApi = require('./src/fetch');

config.forEach(fetchApi(basePath));