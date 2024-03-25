import {
  CallbackObject,
  ExampleObject,
  HeaderObject,
  LinkObject,
  ParameterObject,
  PathItemObject,
  ReferenceObject,
  RequestBodyObject,
  ResponseObject,
  SchemaObject
} from '../../common';
import { SecuritySchemeObject } from './SecuritySchemeObject';

/**
 * Holds a set of reusable objects for different aspects of the OAS. All objects defined within the components object will have no effect on the API unless they are explicitly referenced from properties outside the components object.
 * @link https://spec.openapis.org/oas/v3.1.0#components-object
 * @example
 * {
 *   schemas: {
 *     GeneralError: {
 *       type: "object",
 *       properties: {
 *         code: {
 *           type: "integer",
 *           format: "int32"
 *         },
 *         message: {
 *           type: "string"
 *         }
 *       }
 *     },
 *     Category: {
 *       type: "object",
 *       properties: {
 *         id: {
 *           type: "integer",
 *           format: "int64"
 *         },
 *         name: {
 *           type: "string"
 *         }
 *       }
 *     },
 *     Tag: {
 *       type: "object",
 *       properties: {
 *         id: {
 *           type: "integer",
 *           format: "int64"
 *         },
 *         name: {
 *           type: "string"
 *         }
 *       }
 *     }
 *   },
 *   parameters: {
 *     skipParam: {
 *       name: "skip",
 *       in: "query",
 *       description: "number of items to skip",
 *       required: true,
 *       schema: {
 *         type: "integer",
 *         format: "int32"
 *       }
 *     },
 *     limitParam: {
 *       name: "limit",
 *       in: "query",
 *       description: "max records to return",
 *       required: true,
 *       "schema" : {
 *         type: "integer",
 *         format: "int32"
 *       }
 *     }
 *   },
 *   responses: {
 *     NotFound: {
 *       description: "Entity not found."
 *     },
 *     IllegalInput: {
 *       description: "Illegal input for operation."
 *     },
 *     GeneralError: {
 *       description: "General Error",
 *       content: {
 *         "application/json": {
 *           schema: {
 *             $ref: "#/components/schemas/GeneralError"
 *           }
 *         }
 *       }
 *     }
 *   },
 *   securitySchemes: {
 *     api_key: {
 *       type: "apiKey",
 *       name: "api_key",
 *       in: "header"
 *     },
 *     petstore_auth: {
 *       type: "oauth2",
 *       flows: {
 *         implicit: {
 *           authorizationUrl: "https://example.org/api/oauth/dialog",
 *           scopes: {
 *             "write:pets": "modify pets in your account",
 *             "read:pets": "read your pets"
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export type ComponentsObject = {

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#schema-object Schema Objects}.
   */
  schemas?: Record<string, SchemaObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#response-object Response Objects}.
   */
  responses?: Record<string, ResponseObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#parameter-object Parameter Objects}.
   */
  parameters?: Record<string, ParameterObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#example-object Example Objects}.
   */
  examples?: Record<string, ExampleObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#request-body-object Request Body Objects}.
   */
  requestBodies?: Record<string, RequestBodyObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#header-object Header Objects}.
   */
  headers?: Record<string, HeaderObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#security-scheme-object Security Scheme Objects}.
   */
  securitySchemes?: Record<string, SecuritySchemeObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#link-object Link Objects}.
   */
  links?: Record<string, LinkObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#callback-object Callback Objects}.
   */
  callbacks?: Record<string, CallbackObject | ReferenceObject>

  /**
   * An object to hold reusable {@link https://spec.openapis.org/oas/v3.1.0#path-item-object  Path Item Object}.
   */
  pathItems?: Record<string,  PathItemObject | ReferenceObject>

}