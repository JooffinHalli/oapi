import { Extension, HeaderObject, LinkObject, MediaTypeObject, ReferenceObject } from '..';

/**
 * Describes a single response from an API Operation, including design-time, static links to operations based on the response.
 * @link https://spec.openapis.org/oas/v3.1.0#response-object
 * @example
 * {
 *   description: "A complex object array response",
 *   content: {
 *     "application/json": {
 *       schema: {
 *         type: "array",
 *         items: {
 *           $ref: "#/components/schemas/VeryComplexType"
 *         }
 *       }
 *     }
 *   }
 * }
 */
export type ResponseObject = {

  /**
   * REQUIRED. A description of the response. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
   */
  description?: string

  /**
   * Maps a header name to its definition. {@link https://spec.openapis.org/oas/v3.1.0#bib-RFC7230 [RFC7230]} states header names are case insensitive. If a response header is defined with the name `"Content-Type"`, it SHALL be ignored.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>

  /**
   * A map containing descriptions of potential response payloads. The key is a media type or media type range and the value describes it. For responses that match multiple keys, only the most specific key is applicable. e.g. text/plain overrides text/*
   */
  content?: Record<string, MediaTypeObject>

  /**
   * A map of operations links that can be followed from the response. The key of the map is a short name for the link, following the naming constraints of the names for {@link https://spec.openapis.org/oas/v3.1.0#components-object Component Objects}.
   */
  links?: Record<string, LinkObject | ReferenceObject>
  
} & Extension