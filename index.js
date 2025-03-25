#!/usr/bin/env node

var { 2: configFilePathOrUrl } = process.argv;

var args = process.argv.reduce((a, x) => ((a[x] = +(x in a)), a), { '--debug': 0, '--d': 0 });

process.on('uncaughtException', (e) => {
  (args['--debug'] || args['--d']) && console.log(e);
  console.log('\x1b[31m%s\x1b[0m', `\nпроизошла ошибка, проверьте входные данные\n`); // red
});

var path = require('node:path');

var configPath;
var config = configFilePathOrUrl.startsWith('http')
  ? [{ url: configFilePathOrUrl, output: 'TEST_API_FOLDER/test-service' }]
  : require(configPath = path.join(process.cwd(), path.normalize(configFilePathOrUrl)));

var fetchAndPrint = require('./src/io');

config.forEach(fetchAndPrint(configPath ? path.dirname(configPath) : configPath));