var fs = require('node:fs');
var path = require('node:path');
const OpenapiTranspiler = require('./transpiler');
const strings = require('./strings');

var fetchAndPrint = (basePath) => (config) => {

  var gen = config.generate;
  var output = path.join(basePath, path.normalize(config.output));

  fs.mkdirSync(output, { recursive: true });

  fetch(config.url)
    .then(r => r.json())
    .then((openapiDoc) => {

      var transpiler = new OpenapiTranspiler(openapiDoc, config);

      var { schemas, paths } = transpiler.reduce(
        OpenapiTranspiler.prepare(openapiDoc),
        {
          schemas:   (gen?.schemas === false)   ? false : '',
          paths:     (gen?.paths === false)     ? false : ''
        }
      );

      var { banner, see, imports } = strings;
      var fn = () => {};
      schemas && fs.writeFile(output + '/schemas.ts', banner + see + schemas, null, fn);
      paths && fs.writeFile(output + '/paths.ts', banner + imports + see + paths, null, fn);

    })
    .catch(() => { throw new Error(1); });

}

module.exports = fetchAndPrint;