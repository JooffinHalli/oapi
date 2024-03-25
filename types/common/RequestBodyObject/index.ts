import { Extension, MediaTypeObject } from '..';

/**
 * Describes a single request body.
 * @link https://spec.openapis.org/oas/v3.1.0#request-body-object
 * @example
 * {
 *   description: "user to add to the system",
 *   required: true,
 *   content: {
 *     "text/plain": {
 *       schema: {
 *         type: "array",
 *         items: {
 *           type: "string"
 *         }
 *       }
 *     }
 *   }
 * }
 */
export type RequestBodyObject = {

  /**
   * A brief description of the request body. This could contain examples of use. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string

  /**
   * REQUIRED. The content of the request body. The key is a media type or {@link https://datatracker.ietf.org/doc/html/rfc7231#appendix-D media type range} and the value describes it. For requests that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content: Record<string, MediaTypeObject>
  
  /**
   * Determines if the request body is required in the request. Defaults to `false`.
   */
  required?: boolean

} & Extension