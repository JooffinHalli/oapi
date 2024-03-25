import { ExampleObject, Extension, MediaTypeObject, ReferenceObject, SchemaObject } from '..';

/**
 * Describes a single operation parameter.
 * A unique parameter is defined by a combination of a {@link https://spec.openapis.org/oas/v3.1.0#parameterName name} and {@link https://spec.openapis.org/oas/v3.1.0#parameterIn location}.
 * The rules for serialization of the parameter are specified in one of two ways. For simpler scenarios, a {@link https://spec.openapis.org/oas/v3.1.0#parameterSchema schema} and {@link https://spec.openapis.org/oas/v3.1.0#parameterStyle style} can describe the structure and syntax of the parameter.
 * @link https://spec.openapis.org/oas/v3.1.0#parameterObject
 * @example
 * {
 *   name: "token",
 *   in: "header",
 *   description: "token to be passed as a header",
 *   required: true,
 *   schema: {
 *     type: "array",
 *     items: {
 *       type: "integer",
 *       format: "int64"
 *     }
 *   },
 *   style: "simple"
 * }
 */
export type ParameterObject = {

    /**
     * REQUIRED. The name of the parameter. Parameter names are case sensitive.
     * - If {@link https://spec.openapis.org/oas/v3.1.0#parameterIn in} is `"path"`, the `name` field MUST correspond to a template expression occurring within the path field in the {@link https://spec.openapis.org/oas/v3.1.0#pathsObject Paths Object}. See {@link https://spec.openapis.org/oas/v3.1.0#pathTemplating Path Templating} for further information.
     * - If {@link https://spec.openapis.org/oas/v3.1.0#parameterIn in} is `"header"` and the `name` field is `"Accept"`, `"Content-Type"` or `"Authorization"`, the parameter definition SHALL be ignored.
     * For all other cases, the `name` corresponds to the parameter name used by the {@link https://spec.openapis.org/oas/v3.1.0#parameterIn in} property.
     */
    name: string

    /**
     * REQUIRED. The location of the parameter. Possible values are "query", "header", "path" or "cookie".
     * - path - Used together with {@link https://spec.openapis.org/oas/v3.1.0#pathTemplating Path Templating}, where the parameter value is actually part of the operation’s URL. This does not include the host or base path of the API. For example, in `/items/{itemId}`, the path parameter is `itemId`.
     * - query - Parameters that are appended to the URL. For example, in `/items?id=###`, the query parameter is `id`.
     * - header - Custom headers that are expected as part of the request. Note that {@link https://spec.openapis.org/oas/v3.1.0#bib-RFC7230 [RFC7230]} states header names are case insensitive.
     * - cookie - Used to pass a specific cookie value to the API.
     */
    in: 'query' | 'header' | 'path' | 'cookie'

    /**
     * A brief description of the parameter. This could contain examples of use. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
     */
    description?: string

    /**
     * Determines whether this parameter is mandatory. If the {@link https://spec.openapis.org/oas/v3.1.0#parameterIn parameter location} is `"path"`, this property is REQUIRED and its value MUST be `true`. Otherwise, the property MAY be included and its default value is `false`.
     */
    required?: boolean

    /**
     * Specifies that a parameter is deprecated and SHOULD be transitioned out of usage. Default value is `false`.
     */
    deprecated?: boolean

    /**
     * Sets the ability to pass empty-valued parameters. This is valid only for `query` parameters and allows sending a parameter with an empty value. Default value is `false`. If {@link https://spec.openapis.org/oas/v3.1.0#parameterStyle style} is used, and if behavior is `n/a` (cannot be serialized), the value of `allowEmptyValue` SHALL be ignored. Use of this property is NOT RECOMMENDED, as it is likely to be removed in a later revision.
     */
    allowEmptyValue?: boolean

    /**
     * Describes how the parameter value will be serialized depending on the type of the parameter value. Default values (based on value of `in`): for `query` - `form`; for `path` - `simple`; for `header` - `simple`; for `cookie` - `form`.
     */
    style?: 'matrix' | 'label' | 'form' | 'simple' | 'spaceDelimited' | 'pipeDelimited' | 'deepObject'

    /**
     * When this is true, parameter values of type `array` or `object` generate separate parameters for each value of the array or key-value pair of the map. For other types of parameters this property has no effect. When {@link https://spec.openapis.org/oas/v3.1.0#parameterStyle style} is `form`, the default value is `true`. For all other styles, the default value is `false`.
     */
    explode?: boolean

    /**
     * Determines whether the parameter value SHOULD allow reserved characters, as defined by {@link https://spec.openapis.org/oas/v3.1.0#bib-RFC3986 [RFC3986]} `:/?#[]@!$&'()*+`,;= to be included without percent-encoding. This property only applies to parameters with an `in` value of `query`. The default value is `false`.
     */
    allowReserved?: boolean

    /**
     * The schema defining the type used for the parameter.
     */
    schema?: SchemaObject

    /**
     * Example of the parameter’s potential value. The example SHOULD match the specified schema and encoding properties if present. The `example` field is mutually exclusive of the `examples` field. Furthermore, if referencing a `schema` that contains an example, the `example` value SHALL override the example provided by the schema. To represent examples of media types that cannot naturally be represented in JSON or YAML, a string value can contain the example with escaping where necessary.
     */
    example?: any

    /**
     * Examples of the parameter’s potential value. Each example SHOULD contain a value in the correct format as specified in the parameter encoding. The `examples` field is mutually exclusive of the `example` field. Furthermore, if referencing a `schema` that contains an example, the `examples` value SHALL override the example provided by the schema.
     */
    examples?: Record<string, ExampleObject | ReferenceObject>

    /**
     * A map containing the representations for the parameter. The key is the media type and the value describes it. The map MUST only contain one entry.
     */
    content?:  Record<string, MediaTypeObject>

} & Extension