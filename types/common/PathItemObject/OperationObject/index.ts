import {
  CallbackObject,
  ExternalDocumentationObject,
  ParameterObject,
  ReferenceObject,
  RequestBodyObject,
  SecurityRequirementObject,
  ServerObject
} from '../..';
import { ResponsesObject } from './ResponsesObject';

/**
 * Describes a single API operation on a path.
 * @link https://spec.openapis.org/oas/v3.1.0#operation-object
 * @example
 * {
 *   tags: [
 *     "pet"
 *   ],
 *   summary: "Updates a pet in the store with form data",
 *   operationId: "updatePetWithForm",
 *   parameters: [
 *     {
 *       name: "petId",
 *       in: "path",
 *       description: "ID of pet that needs to be updated",
 *       required: true,
 *       schema: {
 *         type: "string"
 *       }
 *     }
 *   ],
 *   requestBody: {
 *     content: {
 *       "application/x-www-form-urlencoded": {
 *         schema: {
 *           type: "object",
 *           properties: {
 *             name: {
 *               description: "Updated name of the pet",
 *               type: "string"
 *             },
 *             status: {
 *               description: "Updated status of the pet",
 *               type: "string"
 *             }
 *           },
 *           required: ["status"]
 *         }
 *       }
 *     }
 *   },
 *   responses: {
 *     200: {
 *       description: "Pet updated.",
 *       content: {
 *         "application/json": {},
 *         "application/xml": {}
 *       }
 *     },
 *     405: {
 *       description: "Method Not Allowed",
 *       content: {
 *         "application/json": {},
 *         "application/xml": {}
 *       }
 *     }
 *   },
 *   security: [
 *     {
 *       petstore_auth: [
 *         "write:pets",
 *         "read:pets"
 *       ]
 *     }
 *   ]
 * }
 */
export type OperationObject = {

  /**
   * A list of tags for API documentation control. Tags can be used for logical grouping of operations by resources or any other qualifier.
   */
  tags?: string[]

  /**
   * A short summary of what the operation does.
   */
  summary?: string

  /**
   * A verbose explanation of the operation behavior. CommonMark syntax MAY be used for rich text representation.
   */
  description?: string

  /**
   * Additional external documentation for this operation.
   */
  externalDocs?: ExternalDocumentationObject

  /**
   * Unique string used to identify the operation. The id MUST be unique among all operations described in the API. The operationId value is `case-sensitive`. Tools and libraries MAY use the operationId to uniquely identify an operation, therefore, it is RECOMMENDED to follow common programming naming conventions.
   */
  operationId?: string

  /**
   * A list of parameters that are applicable for this operation. If a parameter is already defined at the {@link https://spec.openapis.org/oas/v3.1.0#pathItemParameters Path Item}, the new definition will override it but can never remove it. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the {@link https://spec.openapis.org/oas/v3.1.0#reference-object Reference Object} to link to parameters that are defined at the {@link https://spec.openapis.org/oas/v3.1.0#componentsParameters OpenAPI Object’s components/parameters}.
   */
  parameters?: (ParameterObject | ReferenceObject)[]

  /**
   * The request body applicable for this operation. The `requestBody` is fully supported in HTTP methods where the HTTP 1.1 specification {@link https://spec.openapis.org/oas/v3.1.0#bib-RFC7231 [RFC7231]} has explicitly defined semantics for request bodies. In other cases where the HTTP spec is vague (such as {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.1 GET}, {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.2 HEAD} and {@link https://datatracker.ietf.org/doc/html/rfc7231#section-4.3.5 DELETE}), `requestBody` is permitted but does not have well-defined semantics and SHOULD be avoided if possible.
   */
  requestBody?: RequestBodyObject | ReferenceObject
  
  /**
   * The list of possible responses as they are returned from executing this operation.
   */
  responses?: ResponsesObject

  /**
   * A map of possible out-of band callbacks related to the parent operation. The key is a unique identifier for the Callback Object. Each value in the map is a {@link https://spec.openapis.org/oas/v3.1.0#callback-object Callback Object} that describes a request that may be initiated by the API provider and the expected responses.
   */
  callbacks?: Record<string, CallbackObject | ReferenceObject>

  /**
   * Declares this operation to be deprecated. Consumers SHOULD refrain from usage of the declared operation. Default value is `false`.
   */
  deprecated?: boolean

  /**
   * A declaration of which security mechanisms can be used for this operation. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. To make security optional, an empty security requirement (`{}`) can be included in the array. This definition overrides any declared top-level security. To remove a top-level {@link https://spec.openapis.org/oas/v3.1.0#oasSecurity security} declaration, an empty array can be used.
   */
  security?: SecurityRequirementObject[]

  /**
   * An alternative `server` array to service this operation. If an alternative `server` object is specified at the Path Item Object or Root level, it will be overridden by this value.
   */
  servers?: ServerObject[]

}