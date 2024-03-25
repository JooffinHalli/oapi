import { Extension } from '..';

/**
 * Allows referencing an external resource for extended documentation.
 * @link https://spec.openapis.org/oas/v3.1.0#externalDocumentationObject
 * @example
 * {
 *   description: "Find more info here",
 *   url: "https://example.com"
 * }
 */
export type ExternalDocumentationObject = {

  /**
   * A description of the target documentation. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
   */
  description?: string

  /**
   * REQUIRED. The URL for the target documentation. This MUST be in the form of a URL.
   */
  url: string
  
} & Extension