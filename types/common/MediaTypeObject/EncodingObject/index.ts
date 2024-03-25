import { Extension, HeaderObject, ReferenceObject } from '../..';

/**
 * A single encoding definition applied to a single schema property.
 * @link https://spec.openapis.org/oas/v3.1.0#encodingObject
 */
export type EncodingObject = {

  /**
   * The Content-Type for encoding a specific property. Default value depends on the property type: for `object` - `application/json`; for `array` – the default is defined based on the inner type; for all other cases the default is `application/octet-stream`. The value can be a specific media type (e.g. `application/json`), a wildcard media type (e.g. `image/*`), or a comma-separated list of the two types.
   */
  contentType?: string

  /**
   * A map allowing additional information to be provided as headers, for example `Content-Disposition`. `Content-Type` is described separately and SHALL be ignored in this section. This property SHALL be ignored if the request body media type is not a `multipart`.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>

  /**
   * Describes how a specific property value will be serialized depending on its type. See {@link https://spec.openapis.org/oas/v3.1.0#parameterObject Parameter Object} for details on the {@link https://spec.openapis.org/oas/v3.1.0#parameterStyle style} property. The behavior follows the same values as `query` parameters, including default values. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded` or `multipart/form-data`. If a value is explicitly defined, then the value of {@link https://spec.openapis.org/oas/v3.1.0#encodingContentType contentType} (implicit or explicit) SHALL be ignored.
   */
  style?: string

  /**
   * When this is true, property values of type `array` or `object` generate separate parameters for each value of the array, or key-value-pair of the map. For other types of properties this property has no effect. When {@link https://spec.openapis.org/oas/v3.1.0#encodingStyle style} is `form`, the default value is `true`. For all other styles, the default value is `false`. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded` or `multipart/form-data`. If a value is explicitly defined, then the value of {@link https://spec.openapis.org/oas/v3.1.0#encodingContentType contentType} (implicit or explicit) SHALL be ignored.
   */
  explode?: boolean

  /**
   * Determines whether the parameter value SHOULD allow reserved characters, as defined by {@link https://spec.openapis.org/oas/v3.1.0#bib-RFC3986 [RFC3986]} `:/?#[]@!$&'()*+,;=` to be included without percent-encoding. The default value is `false`. This property SHALL be ignored if the request body media type is not `application/x-www-form-urlencoded` or `multipart/form-data`. If a value is explicitly defined, then the value of {@link https://spec.openapis.org/oas/v3.1.0#encodingContentType contentType} (implicit or explicit) SHALL be ignored.
   */
  allowReserved?: boolean

} & Extension