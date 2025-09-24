#!/usr/bin/env node
'use strict';
var fs = require('node:fs');
var util = require('node:util');
var exec = util.promisify(require('node:child_process').exec);
var path = require('path');
var { apiTmplate, createClientTemplate, indexTemplate, typesTemplate } = require('./templates');

var { 2: configPath } = process.argv;

var validateConfig = require('./validateConfig');
var swaggerToTS = require('./swaggerToTS');

var { config, isJson } = validateConfig(configPath);

if (config.generateClient) {
    generateClient(config.output);
}

Promise.all(
    config.services.map((item) => {
        return getSwagger(item.src)
            .catch((e) => log(`Error while getting openapi file: ${item.src}\n${e}`))
            .then(swaggerToTS.bind(normalizeItem(item)))
            .catch((e) => log(`Error while parsing openapi file: ${item.src}\n${e}`))
            .then(doWrite.bind(item))
            .catch((e) => log(`Error while writing to ${item.output}: ${e}`))
    })
).then(doWriteApiIndex);

function getSwagger(src) {
    return fs.existsSync(src)
        ? doRead(src)
        : src.includes('http')
            ? doFetch(src)
            : Promise.reject('Source should be a path or http url');
}

function doRead(src) {
    return fs.promises.readFile(src)
        .then(content => content.toString())
        .then(JSON.parse);
}

function doFetch(url) {
    return fetch(url, { headers: { 'Accept': 'application/json' } })
        .then(r => r.json())
        .catch(() => exec(`curl -v ${url}`).then(r => r.stdout).then(JSON.parse));
}

function doWrite({ Paths, Schemas } = {}) {
    if (!Paths && !Schemas) return;
    var { output } = this;

    var f = (e) => (e && log(`Error while writing to ${output}: ${e}`));
    var banner = [
        '// -------------------------------',
        '// | this file is auto-generated |',
        '// -------------------------------',
    ].join('\n');

    if (!fs.existsSync(output)) {
        fs.mkdirSync(output, { recursive: true });
    }

    if (Schemas) {
        var imports = `import type { Schemas } from './schemas';`;
        fs.writeFile(`${output}/schemas.ts`, [banner, Schemas].join('\n\n'), null, f);
    }
    if (Paths) {
        fs.writeFile(`${output}/paths.ts`, [banner, imports || '', Paths].join('\n\n'), null, f);
        if (!config.generateClient) return;
        fs.writeFile(`${output}/index.ts`, indexTemplate.replaceAll('<name>', this.dirname), null, f);
    }

    return this.dirname;
}

function doWriteApiIndex(services) {
    services = services.filter(Boolean);
    if (!config.generateClient || !services.length) return;

    var f = (e) => (e && log(`Error while writing to ${config.output}/index.ts: ${e}`));

    var imports = services.map((service) => `import { ${service} } from './${service}';`).join('\n');
    var fields = services.map((service) => `${' '.repeat(config.tabSize || 2)}${service},`).join('\n');

    var content = apiTmplate.replace('<imports>', imports).replace('<fields>', fields);
    fs.writeFile(`${config.output}/index.ts`, content, null, f);
}

function generateClient(output) {
    if (!fs.existsSync(output)) fs.mkdirSync(output);

    var f = (path) => (e) => {
        console.log({
            output,
            cwd: process.cwd(),
        });
        console.log(e);
        (e && log(`Error while generating client to ${output}/${path}: ${e}`))
    }
    fs.writeFile(`${config.output}/createClient.ts`, createClientTemplate, null, f);
    fs.writeFile(`${config.output}/types.ts`, typesTemplate, null, f);
}

function log(message) {
    console.warn(`\x1b[38;5;220m\n${message}\x1b[0m\n`);
}

function normalizeItem(item) {
    var { hook = () => {}, filter, src } = item;
    if (isJson && hook) {
        hook = doTry(() => require(path.join(process.cwd(), path.normalize(hook))), () => {});
    }
    if (filter) {
        filter = doTry(() => new RegExp(filter), null);
    }
    return { hook, filter, src, tabSize: config.tabSize };
}

function doTry(doTry, fallback) {
    try { return doTry(); }
    catch (e) { return fallback; }
}