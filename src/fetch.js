var fs = require('node:fs');
const OpenapiTranspiler = require('./transpiler');
const strings = require('./strings');

var createFetch = (fs) => (OpenapiTranspiler) => (strings) => (config) => {
  var output = cwd + '..' + config.output;
  console.log({ output });
  fs.mkdirSync(output, { recursive: true });

  fetch(config.url)
    .then(r => r.json())
    .then((openapiDoc) => {

      var transpiler = new OpenapiTranspiler(openapiDoc, config);

      var { schemas, paths, endpoints } = transpiler.reduce(
        OpenapiTranspiler.prepare(openapiDoc),
        { schemas: '', paths: '', endpoints: '' }
      );

      var { banner, see, imports, bits } = strings;
      var fn = () => {};
      fs.writeFile(output + '/schemas.ts', banner + see + schemas, null, fn);
      fs.writeFile(output + '/paths.ts', banner + imports + see + paths, null, fn);
      fs.writeFile(output + '/endpoints.ts', banner + bits + endpoints, null, fn);

    })
    .catch(() => { throw new Error(1); });

}

module.exports = createFetch(process.cwd())(fs)(OpenapiTranspiler)(strings);