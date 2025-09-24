module.exports.apiTmplate =
`// -------------------------------
// | this file is auto-generated |
// -------------------------------

<imports>

export const api = {
<fields>
}
`;

module.exports.createClientTemplate =
`// -------------------------------
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

module.exports.indexTemplate =
`// -------------------------------
// | this file is auto-generated |
// -------------------------------

import type { Paths } from './paths';
import { createClient } from '../createClient';

export const <name> = createClient<Paths>();
`;

module.exports.typesTemplate =
`// -------------------------------
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