import { Extension, ReferenceObject, ResponseObject } from '../../..';
import { NumberRange } from '../../../../utilTypes';

/**
 * A container for the expected responses of an operation. The container maps a HTTP response code to the expected response.
 *
 * The documentation is not necessarily expected to cover all possible HTTP response codes because they may not be known in advance. However, documentation is expected to cover a successful operation response and any known errors.
 *
 * The `default` MAY be used as a default response object for all HTTP codes that are not covered individually by the `Responses Object`.
 *
 * The `Responses Object` MUST contain at least one response code, and if only one response code is provided it SHOULD be the response for a successful operation call.
 * @link https://spec.openapis.org/oas/v3.1.0#responses-object
 * @example
 * {
 *   200: {
 *     description: "a pet to be returned",
 *     content: {
 *       "application/json": {
 *         schema: {
 *           $ref: "#/components/schemas/Pet"
 *         }
 *       }
 *     }
 *   },
 *   default: {
 *     description: "Unexpected error",
 *     content: {
 *       "application/json": {
 *         schema: {
 *           $ref: "#/components/schemas/ErrorModel"
 *         }
 *       }
 *     }
 *   }
 * }
 */
export type ResponsesObject =
  & Record<OpenApiHttpStatusCode, ResponseObject | ReferenceObject>
  & {

    /**
     * The documentation of responses other than the ones declared for specific HTTP response codes. Use this field to cover undeclared responses.
     */
    default?: ResponseObject | ReferenceObject

  }
  & Extension

/**
 * Any HTTP status code can be used as the property name, but only one property per code, to describe the expected response for that HTTP status code. This field MUST be enclosed in quotation marks (for example, “200”) for compatibility between JSON and YAML. To define a range of response codes, this field MAY contain the uppercase wildcard character `X`. For example, `2XX` represents all response codes between `[200-299]`. Only the following range definitions are allowed: `1XX`, `2XX`, `3XX`, `4XX`, and `5XX`. If a response is defined using an explicit code, the explicit code definition takes precedence over the range definition for that code.
 * @link https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 */
type OpenApiHttpStatusCode =
| NumberRange<100, 599>
| `${1 | 2 | 3 | 4 | 5}${Digit}${Digit}`
| `${1 | 2 | 3 | 4 | 5}XX`
type Digit = NumberRange<0, 9>