#!/usr/bin/env node

process.on('uncaughtException', (e) => {
  var errs = [', проверьте входные данные', ' при запросе json документа'];
  console.log('\x1b[31m%s\x1b[0m', `\nПроизошла ошибка${errs[e.message] || errs[0]}\n`); // red
});

var { 2: configFileName } = process.argv;

var config = require(process.cwd() + configFileName);

var fetchApi = require('./src/fetch');
config.forEach(fetchApi);