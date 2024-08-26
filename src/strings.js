var banner = `/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/\n\n`;

var imports = `import { Schemas } from './schemas';\n\n`;

var see = (url) => `/**
 * @see {@link ${url} swagger}
 */\n`;

module.exports = { banner, imports, see };