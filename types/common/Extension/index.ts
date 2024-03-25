/**
 * While the OpenAPI Specification tries to accommodate most use cases, additional data can be added to extend the specification at certain points.
 * The extensions properties are implemented as patterned fields that are always prefixed by `"x-"`.
 * @key Allows extensions to the OpenAPI Schema. The field name MUST begin with `x-`, for example, `x-internal-id`. Field names beginning `x-oai-` and `x-oas-` are reserved for uses defined by the {@link https://www.openapis.org/ OpenAPI Initiative}. The value can be null, a primitive, an array or an object.
 * @value The value can be null, a primitive, an array or an object.
 * @link https://spec.openapis.org/oas/v3.1.0#specificationExtensions
 */
export type Extension = Record<`x-${string}`, null | boolean | number | string | unknown[] | Record<string, unknown>>