import { alert } from 'as-ui-kit/utils/statusMessage';
import type {
  HttpClient, 
  HttpClientAbstract,
  PathMethodsAbstract,
  OptionsAbsstract,
  BaseConfig,
  ApiConfig
} from './utilTypes';

var emptyOptions = <OptionsAbsstract>{};
var methods = <const>['get', 'post', 'put', 'delete', 'patch', 'head', 'trace'];

var cookies = <Cookies>{};
var getCookies = () => {
  return document.cookie.split('; ').reduce((acc, pair) => {
    const { 0: key, 1: value } = pair.split('=');
    if (value) acc[key] = value;
    else delete acc[key];
    return acc;
  }, cookies);
}

var interpolatedPath = (path: string, pathParams: Record<string, string>) => {
  return path.replaceAll(/({)([a-zA-Z]*)(})/g, function() {
    const param = arguments[2];
    return pathParams[param];
  });
}

var serializedParams = (params: Record<string, string>) => {
  var p = '';
  for (var k in params) {
    var v = params[k];
    if (k && v) p += `${k}=${v}&`;
  }
  if (p.length) p = `?${p.slice(0, -1)}`;
  return p;
}

var redirectToAuth = () => {
  const domain = window?.location?.host.match(
    /^.*.?(?<domain>ati.[0-9A-z-]+).?$/
  )?.groups?.['domain'];
  if (!domain) throw 'unknown';
  window.location.href = `//id.${domain}/login/?next=${encodeURIComponent(location.href)}`;
};

var errorHandler = <const>{
  0: alert.bind(null, 'unknown error'), // default
  401: redirectToAuth
}
var getErrorHandler = <T extends number>(status: T) => {
  type S = T extends keyof typeof errorHandler ? T : 0;
  return errorHandler[<S>status] || alert;
}

var bodySerializer = <Record<string, <T>(body: T) => any>>{
  'application/json': JSON.stringify
}
var serializeBody = <T>(body: T, contentType: string) => {
  const serialize = bodySerializer[contentType];
  return serialize ? serialize(body) : body;
}

export var buildApi = <Paths, Config extends BaseConfig>(config: ApiConfig<Config>): HttpClient<Paths, Config> => {
  var { basePath, endpoints, strings } = <ApiConfig<BaseConfig>>config;
  var acc = <HttpClientAbstract>{};

  for (let path in endpoints) {
    var bitMask = endpoints[path];
    var pathMethods = <PathMethodsAbstract>{};

    for (let i = 0; i < 8; i++) {
      if (bitMask & 1) {
        const method = methods[i];

        const fetchFn = (options = emptyOptions) => {
          var { lf_branch, uicult2 } = getCookies();

          var locale = uicult2 || 'ru';
          var str = (locale in strings) ? strings[locale] : strings['ru'];

          try {
            const {
              pathParams,
              params,
              body,
              headers: _headers,
              cache,
              signal,
              responseMethod = 'json',
              url: _url
            } = options;

            if (pathParams) path = interpolatedPath(path, pathParams);
            if (params) path = path + serializedParams(params);
            const url = path.startsWith('/') ? path : (basePath + path);

            const headers = <Record<string, string>>{
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            };

            if (lf_branch) headers['X-Branch'] = lf_branch;
            if (_headers) Object.assign(headers, _headers);

            const fetchOptions = <RequestInit>{
              method,
              headers,
              credentials: 'include'
            };

            if (body) fetchOptions.body = serializeBody(body, headers['Content-Type']);
            if (cache) fetchOptions.cache = cache;
            if (signal) fetchOptions.signal = signal;

            const dataPromise = fetch(url, fetchOptions)
              .then((res) => {
                if (!res.ok) throw res;
                return res[responseMethod]();
              })
              .catch((e) => {
                if (e instanceof Response) {
                  const handleError = getErrorHandler(e.status);
                  handleError();
                  throw e;
                }
                alert(str.unknownError);
                throw e;
              });

            return dataPromise;
          }
          catch(e) {
            alert(str.unknownError);
            return Promise.reject(e);
          }
        }

        pathMethods[method] = fetchFn;
      }
      bitMask >>= 1;
    }
    acc[path] = pathMethods;
  }
  return <HttpClient<Paths, Config>>acc;
}