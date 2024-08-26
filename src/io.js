var fs = require('node:fs');
var path = require('node:path');
const OpenapiTranspiler = require('./transpiler');
const strings = require('./strings');

var fetchAndPrint = (basePath) => (config) => {

  var gen = config.generate;
  var output = path.join(basePath, path.normalize(config.output));
  var url = config.url;

  var log = (msg) => {
    console.log('\x1b[31m%s\x1b[0m', `\n-------\nurl - ${url}\n${msg}\n-------\n`);
  }

  fetch(url)
    .then((r) => r.json())
    .catch(() => log('произошла ошибка при запросе по сети'))
    .then((openapiDoc) => {
      if (!openapiDoc) return;

      var transpiler = new OpenapiTranspiler(openapiDoc, config, log);

      var { schemas, paths } = transpiler.reduce(
        OpenapiTranspiler.prepare(openapiDoc),
        {
          schemas: (gen?.schemas === false) ? false : '',
          paths:   (gen?.paths === false)   ? false : ''
        }
      );

      var { banner, see, imports } = strings;
      var fn = () => {};
      (schemas || paths) && fs.mkdirSync(output, { recursive: true });
      schemas && fs.writeFile(output + '/schemas.ts', banner + see(url) + schemas, null, fn);
      paths && fs.writeFile(output + '/paths.ts', banner + imports + see(url) + paths, null, fn);
    })
    .catch(() => log('произошла ошибка, проверьте входные данные'));

}

module.exports = fetchAndPrint;