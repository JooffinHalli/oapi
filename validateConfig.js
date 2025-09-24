var fs = require('node:fs');
var path = require('node:path');

module.exports = validateConfig;

function validateConfig(configPath) {

    dieIf(!configPath, `Path to config file is required`);

    var ext    = path.extname(configPath);
    var isJs   = ext === '.js';
    var isJson = ext === '.json';

    dieIf(!['.json', '.js'].includes(ext), `Config file must be .json or .js file, got "${ext}"`);
    dieIf(!fs.existsSync(configPath),      `Config file not found: ${configPath}`);

    var config = tryOrDie(() => require(path.resolve(configPath)), `Error while loading config: <e>`);
    var configDir = path.dirname(path.resolve(path.normalize(configPath)));

    dieIf(is(config, 'undefined'), `There is no config`);
    dieIf(isNot(config, 'object'), `Config must be an object, got "${typeOf(config)}"`);

    var { generateClient, tabSize, output, services } = config;

    dieIf(isNot(generateClient, 'boolean'), `"generateClient" must be a boolean, got "${typeOf(generateClient)}"`);

    dieIf(isNot(tabSize,         'number'), `"tabSize" must be a number, got "${typeOf(tabSize)}"`);
    dieIf(((tabSize < 1) || (tabSize > 8)), `"tabSize" must be in range 1-8`);

    dieIf(is(output,    'undefined'), `Config must have an "output" field`);
    dieIf(isNot(output,    'string'), `"output" must be an string, got "${typeOf(output)}"`);
    config.output = path.join(configDir, path.normalize(output));

    dieIf(is(services, 'undefined'), `Config must have a "services" field`);
    dieIf(isNot(services,  'array'), `"services" must be an array, got "${typeOf(services)}"`);
    dieIf((!services.length       ), `"services" must be an array with at least one item`);

    var paths = new Map;

    services.forEach((item) => {
        dieIf(is(item, 'undefined'), `Each item of "services" must be an object, got "${typeOf(item)}"`);
        dieIf(isNot(item, 'object'), `Each item of "services" must be an object, got "${typeOf(item)}"`);

        var { src, dirname, hook, filter, generatePaths, toCamelCase } = item;
        paths.set(dirname, generatePaths ?? true);

        dieIf(is(src, 'undefined'), `Each item of "services" must have a "src" field`);
        dieIf(isNot(src, 'string'), `"src" must be a string, got "${typeOf(src)}"`);

        dieIf(is(dirname, 'undefined'), `Each item of "services" must have a "dirname" field`);
        dieIf(isNot(dirname, 'string'), `"dirname" must be a string, got "${typeOf(dirname)}"`);

        dieIf(isJs   && isNot(hook, 'function'), `in js file "hook" must be a function, got "${typeOf(hook)}"`);
        dieIf(isJson && isNot(hook,   'string'), `in json file "hook" must be a string, got "${typeOf(hook)}"`);

        dieIf(isNot(filter,         'string'), `"filter" must be a string, got "${typeOf(filter)}"`);
        dieIf(isNot(toCamelCase,   'boolean'), `"toCamelCase" must be a boolean, got "${typeOf(toCamelCase)}"`);
        dieIf(isNot(generatePaths, 'boolean'), `"generatePaths" must be a boolean, got "${typeOf(generatePaths)}"`);

        item.output = path.join(config.output, path.normalize(dirname));
    });

    return { config, isJson, paths };
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
    return (value !== undefined) && (typeOf(value)) !== type;
}

function is(value, type) {
    return typeOf(value) === type;
}

function typeOf(value) {
    return Array.isArray(value) ? 'array' : (value === null) ? 'null' : typeof value;
}