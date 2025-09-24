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

var apiTmplate =
`/* eslint-disable */
/* tslint:disable */

// -------------------------------
// | this file is auto-generated |
// -------------------------------

<imports>

export const api = {
<fields>
}
`;

var createClientTemplate =
`/* eslint-disable */
/* tslint:disable */

// -------------------------------
// | this file is auto-generated |
// -------------------------------

function interpolate(path: string, pathParams: Record<string, string>) {
    return path.replaceAll(/{(.*?)}/g, (_, match) => (pathParams[match] ?? ''));
};

function fillQueryParams(usp: URLSearchParams, queryParams: Record<string, string | number | boolean>) {
    for (var key in queryParams) {
        const value = queryParams[key];
        if (!value) continue;
        else if (Array.isArray(value)) value.forEach((item) => item && usp.append(key, item))
        else value && usp.append(key, String(value));
    }
};

function getUrl(this: typeof context, path: string, options: Record<string, any>) {
    const urlStr = this.interpolate(path, options?.pathParams || {});
    const url = new URL(urlStr);
    this.fillQueryParams(url.searchParams, options?.queryParams || {});
    return url;
}

function getBody(body: any) {
    if (!body) return undefined;
    try { return JSON.stringify(body); }
    catch (e) { return undefined; }
}

function handleRes<T>(res: Response) {
    return res.json().then((data: T) => {
        if (!res.ok) throw data;
        return data;
    });
}

var headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};

var context = {
    headers,
    interpolate,
    fillQueryParams,
    getUrl,
    getBody,
    handleRes,
}

function defaultFetch(
    this:    typeof context,
    method:  string,
    path:    string,
    options: Record<string, any>
) {
    return fetch(this.getUrl.call(this, path, options), {
        method,
        headers: this.headers,
        body: this.getBody(options?.body),
        credentials: 'include',
    }).then(this.handleRes);
}

export function createClient<Paths>(doFetch = defaultFetch) {

    return {
        get:    doFetch.bind(context, 'get'   ) as ApiMethod<Paths, 'get'   >,
        post:   doFetch.bind(context, 'post'  ) as ApiMethod<Paths, 'post'  >,
        put:    doFetch.bind(context, 'put'   ) as ApiMethod<Paths, 'put'   >,
        delete: doFetch.bind(context, 'delete') as ApiMethod<Paths, 'delete'>,
        patch:  doFetch.bind(context, 'patch' ) as ApiMethod<Paths, 'patch' >,
        trace:  doFetch.bind(context, 'trace' ) as ApiMethod<Paths, 'trace' >,
    };
};
`;

var indexTemplate =
`/* eslint-disable */
/* tslint:disable */

// -------------------------------
// | this file is auto-generated |
// -------------------------------

import type { Paths } from './paths';
import { createClient } from '../createClient';

export const <name> = createClient<Paths>();
`;

var typesTemplate =
`/* eslint-disable */
/* tslint:disable */

// -------------------------------
// | this file is auto-generated |
// -------------------------------

type PickByMethod<O, M extends string> = {
    [K in keyof O as O[K] extends Record<M, unknown> ? K : never]: (
        O[K] extends Record<M, infer X> ? X : never
    )
}

type ToFn<T> = <U extends keyof T>(
    url: U,
    ...args: (
        Partial<Omit<T[U], 'res'>> extends Omit<T[U], 'res'> // is optional?
        ? [options?: { [K in keyof T[U]as K extends 'res' ? never : K]: T[U][K] }] // Omit<T[U], 'res'>?
        : [options: { [K in keyof T[U]as K extends 'res' ? never : K]: T[U][K] }] // Omit<T[U], 'res'>
    )
) => Promise<T[U] extends { 'res': infer R } ? R : unknown>

declare type ApiMethod<P, M extends string> = ToFn<PickByMethod<P, M>>
`;

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
        '/* eslint-disable */',
        '/* tslint:disable */\n',
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