import { Extension, ServerObject } from '..'

/**
 * The `Link object` represents a possible design-time link for a response. The presence of a link does not guarantee the caller’s ability to successfully invoke it, rather it provides a known relationship and traversal mechanism between responses and other operations.
 *
 * Unlike dynamic links (i.e. links provided in the response payload), the OAS linking mechanism does not require link information in the runtime response.
 *
 * For computing links, and providing instructions to execute them, a {@link https://spec.openapis.org/oas/v3.1.0#runtime-expressions runtime expression} is used for accessing values in an operation and using them as parameters while invoking the linked operation.
 * @link https://spec.openapis.org/oas/v3.1.0#link-object
 */
export type LinkObject = {

  /**
   * A relative or absolute URI reference to an OAS operation. This field is mutually exclusive of the `operationId` field, and MUST point to an {@link https://spec.openapis.org/oas/v3.1.0#operation-object Operation Object}. Relative `operationRef` values MAY be used to locate an existing {@link https://spec.openapis.org/oas/v3.1.0#operation-object Operation Object} in the OpenAPI definition. See the rules for resolving {@link https://spec.openapis.org/oas/v3.1.0#relative-references-in-uris Relative References}.
   */
  operationRef?: string

  /**
   * The name of an existing, resolvable OAS operation, as defined with a unique `operationId`. This field is mutually exclusive of the `operationRef` field.
   */
  operationId?: string

  /**
   * A map representing parameters to pass to an operation as specified with `operationId` or identified via `operationRef`. The key is the parameter name to be used, whereas the value can be a constant or an expression to be evaluated and passed to the linked operation. The parameter name can be qualified using the {@link https://spec.openapis.org/oas/v3.1.0#parameterIn parameter location} `[{in}.]{name}` for operations that use the same parameter name in different locations (e.g. {@link http://path.id/ path.id}).
   * @value {@link https://spec.openapis.org/oas/v3.1.0#runtime-expressions expression}
   */
  parameters?: Record<string, any>

  /**
   * A literal value or {expression} to use as a request body when calling the target operation.
   * @link https://spec.openapis.org/oas/v3.1.0#runtime-expressions
   */
  requestBody?: any

  /**
   * A description of the link. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string

  /**
   * A server object to be used by the target operation.
   */
  server?: ServerObject

} & Extension