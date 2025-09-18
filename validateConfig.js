var fs = require('node:fs');
var path = require('node:path');

module.exports = validateConfig;

function validateConfig(configPath) {

    dieIf(!configPath, `Path to config file is required`);

    var ext = path.extname(configPath);
    var isJs   = ext === '.js';
    var isJson = ext === '.json';

    dieIf(!['.json', '.js'].includes(ext), `Config file must be .json or .js file, got "${ext}"`);
    dieIf(!fs.existsSync(configPath),      `Config file not found: ${configPath}`);

    var config = tryOrDie(() => require(path.resolve(configPath)), `Error while loading config: <e>`);

    dieIf(!Array.isArray(config), `Config must be an array, got "${typeOf(config)}"`);
    dieIf(!config.length,         `Config must be an array with at least one item`);

    config.forEach((item) => {
        dieIf(!item,                 `Item must be an object, got "${typeOf(item)}"`);
        dieIf(isNot(item, 'object'), `Item must be an object, got "${typeOf(item)}"`);

        var { src, output, hook, filter } = item;

        dieIf(!src,                 `Item must have a "src" field`);
        dieIf(isNot(src, 'string'), `"src" must be a string, got "${typeOf(src)}"`);

        dieIf(!output,                 `Item must have an "output" field`);
        dieIf(isNot(output, 'string'), `"output" must be a string, got "${typeOf(output)}"`);

        dieIf(isJs   && isNot(hook, 'function'), `in js file "hook" must be a function, got "${typeOf(hook)}"`);
        dieIf(isJson && isNot(hook, 'string'),   `in json file "hook" must be a string, got "${typeOf(hook)}"`);

        dieIf(isNot(filter, 'string'), `"filter" must be a string, got "${typeOf(filter)}"`);
    });

    return { config, isJs, isJson };
}

function die(message) {
    console.error(`\x1b[38;5;203m\n  ${message}\x1b[0m\n`);
    process.exit(1);
}

function dieIf(condition, message) {
    if (condition) die(message);
}

function tryOrDie(doTry, message) {
    try { return doTry(); }
    catch (error) { die(message.replace('<e>', error.message)); }
}

function isNot(value, type) {
    if (Array.isArray(type)) return type.some((t) => isNot(value, t));
    return value && (typeOf(value)) !== type;
}

function typeOf(value) {
    return Array.isArray(value) ? 'array' : typeof value;
}