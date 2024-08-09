var banner = `/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/\n\n`;

var imports = `import { Schemas } from './schemas';\n\n`;

var see = `/**
 * @see {@link http://staging.orders-v1-0.service.consul:82/_internal/orders/swagger/index.html swagger}
 */\n`;

var bits = `/**
 * Список эндпойнтов и их методов, где каждый бит указывает на наличие метода
 * | trace | head | patch | delete | put | post | get |
 * | ----- | ---- | ----- | ------ | --- | ---- | --- |
 * |    64 |   32 |    16 |      8 |   4 |    2 |   1 |
 */\n`;

module.exports = { banner, imports, see, bits };