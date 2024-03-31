var { Schemas } = require('../../../utils');

/**
 * создает файл schemas.ts с тайпскриптовыми типами схем
 * @param {import('../../../types/common/SchemaObject').SchemaObject} schemas
 */
var handleSchemasTs = (schemas) => {
  if (!schemas) return;
  var imports = new Set;
  console.log({ imports });
  var content = schemas.addTo(new Schemas.Acc, 1, imports);
  var printable = new Schemas.Printable('Schemas', content, 'namespace', imports);
  printable.print('schemas.ts');
}

module.exports = handleSchemasTs;