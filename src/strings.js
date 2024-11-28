var banner = `/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/\n\n`;

var imports = `import { Schemas } from './schemas';\n\n`;

var jsDoc = (url, info) => (
  '/**' +
  `\n * @see {@link ${url} swagger}` +
  (info?.description ? `\n * @description ${info?.description}` : '') +
  (info?.summary ? `\n * @summary ${info?.summary}` : '') +
  '\n */\n'
);

module.exports = { banner, imports, jsDoc };