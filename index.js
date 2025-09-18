#!/usr/bin/env node
'use strict';
var fs = require('node:fs');
var util = require('node:util');
var exec = util.promisify(require('node:child_process').exec);
var path = require('path');

var { 2: configPath } = process.argv;

var validateConfig = require('./validateConfig');
var swaggerToTS = require('./swaggerToTS');

var { config, isJson } = validateConfig(configPath);

config.forEach((item) => {
    getSwagger(item.src)
        .then(swaggerToTS.bind(normalizeItem(item)))
        .then(doWrite.bind(item.output))
        .catch((e) => log(`Error while getting openapi file: ${item.src}\n${e}`));
});

function getSwagger(src) {
    return fs.existsSync(src)
        ? doRead(src)
        : src.includes('http')
            ? doFetch(src)
            : Promise.reject('Source is not a path or http url');
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

function doWrite({ 0: Paths, 1: Schemas }) {
    if (!Paths && !Schemas) return;

    var outputDir = path.join(process.cwd(), path.normalize(this));
    console.log(this, outputDir);
    var f = (e) => (e && log(`Error while writing to ${outputDir}: ${e}`));
    var banner = [
        '/**',
        '*  ........................................',
        '*  . этот файл сгенерирован автоматически .',
        '*  ........................................',
        '*/`'
    ].join('\n');


    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    if (Schemas) {
        var imports = `import type { Schemas } from './Schemas';`;
        fs.writeFile(`${outputDir}/Schemas.ts`, [banner, Schemas].join('\n\n'), null, f);
    }
    if (Paths) {
        fs.writeFile(`${outputDir}/Paths.ts`, [banner, imports || '', Paths].join('\n\n'), null, f);
    }
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
    return { hook, filter, src };
}

function doTry(doTry, fallback) {
    try { return doTry(); }
    catch (e) { return fallback; }
}