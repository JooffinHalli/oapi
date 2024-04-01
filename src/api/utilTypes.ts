/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/

type PathObjectExtraFields = 'headers' | 'url' | 'params' | 'pathParams'
type IsEmpty<Obj> = keyof Obj extends never ? true : false
type ToStr<T> = T extends string ? T : string
/** @example CutLeft<'abcd', 'ab'> // returns 'cd' */
type CutLeft<Str, SubStr> = Str extends `${ToStr<SubStr>}${infer R}` ? CutLeft<R, SubStr> : Str
/** get key of object */
type Key<O, T> = T extends keyof O ? T : keyof O
/** get value of object by key */
type Value<O, T> = O[Key<O, T>]
/** @example CutPath<'/v1/path', '/v1/'> // returns 'path' */
type CutPath<Paths, Config> = CutLeft<keyof Paths, Value<Config, 'basePath'>>
/** get Paths key by short or full path */
type PathsKey<Paths, Path, Config> = Path extends keyof Paths // is Path full?
  ? Path // return fullPath
  : Key<Paths, `${ToStr<Value<Config, 'basePath'>>}${ToStr<Path>}`> // return basePath + shortPath

type PathObject<Paths, ShortPath, Config> = Paths[PathsKey<Paths, ShortPath, Config>]

/** PathItemObject wich includes only http methods as keys */
type Operations<Paths, MaybeShortPath, Config> = Omit<
  PathObject<Paths, MaybeShortPath, Config>,
  PathObjectExtraFields
>
/** PathItemObject wich includes only extra keys (not http methods) */
type RestPathObject<Paths, MaybeShortPath, Config> = Omit<
  PathObject<Paths, MaybeShortPath, Config>,
  keyof Operations<Paths, MaybeShortPath, Config> // http methods keys
>

type HttpMethodFnParams<Paths, MaybeShortPath, Config, HttpMethod> =
  & RestPathObject<Paths, MaybeShortPath, Config>
  & Omit<Value<Operations<Paths, MaybeShortPath, Config>, HttpMethod>, 'res'>
  & {
      cache?: RequestCache,
      signal?: AbortSignal,
      responseMethod?: 'arrayBuffer' | 'blob' | 'formData' | 'json' | 'text'
    }

type HttpMethodFnResponse<Paths, MaybeShortPath, Config, HttpMethod> = Value<
  Value<Operations<Paths, MaybeShortPath, Config>, HttpMethod>,
  'res'
>

export type HttpMethodFn<
  Paths,
  MaybeShortPath,
  Config,
  HttpMethod,
  Options = HttpMethodFnParams<Paths, MaybeShortPath, Config, HttpMethod>,
  Response = Promise<HttpMethodFnResponse<Paths, MaybeShortPath, Config, HttpMethod>>
> = IsEmpty<Options> extends true
  ? () => Response
  : Partial<Options> extends Options
    ? (((options: Options) => Response) & (() => Response))
    : (options: Options) => Response

export type HttpClient<Paths, Config> = {
  [MaybeShortPath in CutPath<Paths, Config>]: {
    [HttpMethod in keyof Operations<Paths, MaybeShortPath, Config>]: HttpMethodFn<
      Paths,
      MaybeShortPath,
      Config,
      HttpMethod
    >
  }
}

export type OptionsAbsstract = {
  params?: Record<string, any>
  pathParams?: Record<string, string>
  body?: Record<string, string>
  headers?: Record<string, string>
  cache?: RequestCache
  signal?: AbortSignal
  responseMethod?: 'arrayBuffer' | 'blob' | 'formData' | 'json' | 'text'
  url?: string
}
export type PathMethodsAbstract = Record<string, (options: OptionsAbsstract) => Promise<any> | undefined>
export type HttpClientAbstract = Record<string, PathMethodsAbstract>
export type FetchParams = Parameters<typeof window.fetch>

export type BaseConfig = {
  basePath: `/${string}`
  endpoints: Record<string, number>
}

export type ApiConfig<T extends BaseConfig> = {
  basePath: T['basePath']
  endpoints: T['endpoints']
  strings: {
    readonly [L in Locale]: {
      readonly unknownError: string
    }
  }
}