import { Extension, ExternalDocumentationObject } from '../../common';

/**
 * Adds metadata to a single tag that is used by the {@link https://spec.openapis.org/oas/v3.1.0#operation-object Operation Object}. It is not mandatory to have a Tag Object per tag defined in the Operation Object instances.
 * @link https://spec.openapis.org/oas/v3.1.0#tag-object
 * @example
 * {
 *   name: "pet",
 *   description: "Pets operations"
 * }
 */
export type TagObject = {

  /**
   * REQUIRED. The name of the tag.
   */
  name: string

  /**
   * A description for the tag. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
   */
  description?: string

  /**
   * Additional external documentation for this tag.
   */
  externalDocs?: ExternalDocumentationObject

} & Extension