#!/usr/bin/env node

process.on('uncaughtException', (e) => {
  var errs = [', проверьте входные данные', ' при запросе json документа'];
  console.log('\x1b[31m%s\x1b[0m', `\nПроизошла ошибка${errs[e.message] || errs[0]}\n`); // red
});

const path = require('path');

var { 2: configFileName } = process.argv;
// var x = path.join(process.cwd() + configFileName);
console.log(1);

// var config = require();

// var fetchApi = require('./src/fetch');
// config.forEach(fetchApi);