var fs = require('node:fs');
var path = require('node:path');
const OpenapiTranspiler = require('./transpiler');
const strings = require('./strings');

var fetchAndPrint = (basePath) => (config) => {

  var gen = config.generate;
  var output = path.join(basePath, path.normalize(config.output));

  fetch(config.url)
    .then((r) => r.json())
    .catch(() => { throw new Error(1); })
    .then((openapiDoc) => {

      var transpiler = new OpenapiTranspiler(openapiDoc, config);

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
      schemas && fs.writeFile(output + '/schemas.ts', banner + see + schemas, null, fn);
      paths && fs.writeFile(output + '/paths.ts', banner + imports + see + paths, null, fn);

    });

}

module.exports = fetchAndPrint;