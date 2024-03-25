import { Extension, ReferenceObject, ServerObject, ParameterObject } from '..';
import { OperationObject } from './OperationObject';

/**
 * Describes the operations available on a single path. A Path Item MAY be empty, due to {@link https://spec.openapis.org/oas/v3.1.0#securityFiltering ACL constraints}. The path itself is still exposed to the documentation viewer but they will not know which operations and parameters are available.
 * @link https://spec.openapis.org/oas/v3.1.0#pathItemObject
 * @example
 * {
 *   get: {
 *     description: "Returns pets based on ID",
 *     summary: "Find pets by ID",
 *     operationId: "getPetsById",
 *     responses: {
 *       200: {
 *         description: "pet response",
 *         content: {
 *           *\/*: {
 *             schema: {
 *               type: "array",
 *               items: {
 *                 $ref: "#/components/schemas/Pet"
 *               }
 *             }
 *           }
 *         }
 *       },
 *       default: {
 *         description: "error payload",
 *         content: {
 *           "text/html": {
 *             schema: {
 *               $ref: "#/components/schemas/ErrorModel"
 *             }
 *           }
 *         }
 *       }
 *     }
 *   },
 *   parameters: [
 *     {
 *       name: "id",
 *       in: "path",
 *       description: "ID of pet to use",
 *       required: true,
 *       schema: {
 *         type: "array",
 *         items: {
 *           type: "string"
 *         }
 *       },
 *       style: "simple"
 *     }
 *   ]
 * }
 */
export type PathItemObject = {

  /**
   * Allows for a referenced definition of this path item. The referenced structure MUST be in the form of a {@link https://spec.openapis.org/oas/v3.1.0#pathItemObject Path Item Object}. In case a Path Item Object field appears both in the defined object and the referenced object, the behavior is undefined. See the rules for resolving {@link https://spec.openapis.org/oas/v3.1.0#relativeReferencesURI Relative References}.
   */
  $ref?: string

  /**
   * An optional, string summary, intended to apply to all operations in this path.
   */
  summary?: string

  /**
   * An optional, string description, intended to apply to all operations in this path. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
   */
  description?: string

  /**
   * A definition of a GET operation on this path.
   */
  get?: OperationObject

  /**
   * A definition of a PUT operation on this path.
   */
  put?: OperationObject

  /**
   * A definition of a POST operation on this path.
   */
  post?: OperationObject

  /**
   * A definition of a DELETE operation on this path.
   */
  delete?: OperationObject

  /**
   * A definition of a OPTIONS operation on this path.
   */
  options?: OperationObject

  /**
   * A definition of a HEAD operation on this path.
   */
  head?: OperationObject

  /**
   * A definition of a PATCH operation on this path.
   */
  patch?: OperationObject

  /**
   * A definition of a TRACE operation on this path.
   */
  trace?: OperationObject

  /**
   * An alternative `server` array to service all operations in this path.
   */
  servers?: ServerObject[]

  /**
   * A list of parameters that are applicable for all the operations described under this path. These parameters can be overridden at the operation level, but cannot be removed there. The list MUST NOT include duplicated parameters. A unique parameter is defined by a combination of a name and location. The list can use the {@link https://spec.openapis.org/oas/v3.1.0#reference-object Reference Object} to link to parameters that are defined at the {@link https://spec.openapis.org/oas/v3.1.0#componentsParameters OpenAPI Object’s components/parameters}.
   */
  parameters?: (ParameterObject | ReferenceObject)[]

} & Extension