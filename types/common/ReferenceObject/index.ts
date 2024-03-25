/**
 * A simple object to allow referencing other components in the OpenAPI document, internally and externally.
 * The `$ref` string value contains a URI {@link https://spec.openapis.org/oas/v3.1.0#bib-RFC3986 [RFC3986]}, which identifies the location of the value being referenced.
 * See the rules for resolving {@link https://spec.openapis.org/oas/v3.1.0#relativeReferencesURI Relative References}.
 * @link https://spec.openapis.org/oas/v3.1.0#referenceObject
 * @example
 * {
 *   $ref: "#/components/schemas/Pet"
 * }
 */
export type ReferenceObject = {

  /**
   * REQUIRED. The reference identifier. This MUST be in the form of a URI.
   */
  $ref: string

  /**
   * A short summary which by default SHOULD override that of the referenced component. If the referenced object-type does not allow a `summary` field, then this field has no effect.
   */
  summary?: string

  /**
   * A description which by default SHOULD override that of the referenced component. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation. If the referenced object-type does not allow a `description` field, then this field has no effect.
   */
  description?: string

}