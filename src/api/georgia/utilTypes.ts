/**
*  ........................................
*  . этот файл сгенерирован автоматически .
*  ........................................
*/

type UnionToIntersection<U> = (U extends any ? (arg: U) => any : never) extends ((arg: infer I) => void) ? I : never

export type AllOf<T> = UnionToIntersection<T>
export type AnyOf<T> = T
export type OneOf<T> = T