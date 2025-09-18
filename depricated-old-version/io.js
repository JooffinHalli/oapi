var fs = require('node:fs');
var child_process = require('node:child_process');
var path = require('node:path');
var OpenapiTranspiler = require('./transpiler');
var { banner, jsDoc, imports } = require('./strings');

var fetchAndPrint = (configPath) => (config) => {

  var gen = config.generate;
  var output = config.output ? path.join(configPath, path.normalize(config.output)) : '_API_FOLDER_';
  var url = config.url;
  var hook = config.hook ? require(path.join(configPath, path.normalize(config.hook))) : (() => { });

  var handleDoc = (openapiDoc) => {
    if (!openapiDoc) return;

    var transpiler = new OpenapiTranspiler(openapiDoc, config, log, hook);
    var program = OpenapiTranspiler.prepare(openapiDoc);

    var { schemas, paths } = transpiler.reduce(program,
      {
        schemas: (gen?.schemas === false) ? false : '',
        paths: (gen?.paths === false) ? false : ''
      }
    );

    var fn = () => {};
    var comment = jsDoc(url, openapiDoc.info);

    (schemas || paths) && fs.mkdirSync(output, { recursive: true });
    schemas && fs.writeFile(output + '/schemas.ts', banner + comment + schemas, null, fn);
    paths && fs.writeFile(output + '/paths.ts', banner + imports + comment + paths, null, fn);
  }

  var log = (msg) => {
    console.log('\x1b[31m%s\x1b[0m', `\n-------\nurl - ${url}\n${msg}\n-------\n`);
  }

  fetch(url, { headers: { 'Accept': 'application/json' } })
    .then((r) => r.json())
    .then(handleDoc)
    .catch(() => {
      child_process.exec(`curl -v ${url}`, (err, res) => {
        if (err) log('произошла ошибка при запросе по сети');
        else handleDoc(JSON.parse(res || '{}'));
      });
    })
    .catch((e) => log(e, 'произошла ошибка, проверьте входные данные'));

}

module.exports = fetchAndPrint;