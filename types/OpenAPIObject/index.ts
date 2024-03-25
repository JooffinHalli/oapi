import {
  Extension,
  ExternalDocumentationObject,
  PathItemObject,
  PathsObject,
  ReferenceObject,
  SecurityRequirementObject,
  ServerObject
} from '../common';
import { ComponentsObject } from './ComponentsObject';
import { InfoObject } from './InfoObject';
import { TagObject } from './TagObject';

/**
 * This is the root object of the {@link https://spec.openapis.org/oas/v3.1.0#oasDocument OpenAPI document}.
 * @link https://spec.openapis.org/oas/v3.1.0#schema
 */
export type OpenAPIObject = {

  /**
   * REQUIRED. This string MUST be the version number of the OpenAPI Specification that the OpenAPI document uses. The openapi field SHOULD be used by tooling to interpret the OpenAPI document. This is not related to the API {@link https://spec.openapis.org/oas/v3.1.0#infoVersion info.version} string.
   * @example 3.0.0 | '3.0.0'
   */
  openapi: string

  /**
   * REQUIRED. Provides metadata about the API. The metadata MAY be used by tooling as required.
   */
  info: InfoObject

  /**
   * The default value for the `$schema` keyword within {@link https://spec.openapis.org/oas/v3.1.0#schemaObject Schema Objects} contained within this OAS document. This MUST be in the form of a URI.
   */
  jsonSchemaDialect?: string

  /**
   * An array of Server Objects, which provide connectivity information to a target server. If the `servers` property is not provided, or is an empty array, the default value would be a {@link https://spec.openapis.org/oas/v3.1.0#serverObject Server Object} with a url value of `/`.
   */
  servers?: ServerObject[]

  /**
   * The available paths and operations for the API.
   */
  paths?: PathsObject

  /**
   * The incoming webhooks that MAY be received as part of this API and that the API consumer MAY choose to implement. Closely related to the `callbacks` feature, this section describes requests initiated other than by an API call, for example by an out of band registration. The key name is a unique string to refer to each webhook, while the (optionally referenced) Path Item Object describes a request that may be initiated by the API provider and the expected responses. An {@link https://github.com/OAI/OpenAPI-Specification/blob/main/examples/v3.1/webhook-example.yaml example} is available.
   */
  webhooks?: Record<string, PathItemObject | ReferenceObject>

  /**
   * An element to hold various schemas for the document.
   */
  components?: ComponentsObject

  /**
   * A declaration of which security mechanisms can be used across the API. The list of values includes alternative security requirement objects that can be used. Only one of the security requirement objects need to be satisfied to authorize a request. Individual operations can override this definition. To make security optional, an empty security requirement (`{}`) can be included in the array.
   */
  security?: SecurityRequirementObject

  /**
   * A list of tags used by the document with additional metadata. The order of the tags can be used to reflect on their order by the parsing tools. Not all tags that are used by the {@link https://spec.openapis.org/oas/v3.1.0#operationObject Operation Object} must be declared. The tags that are not declared MAY be organized randomly or based on the tools’ logic. Each tag name in the list MUST be unique.
   */
  tags?: TagObject

  /**
   * Additional external documentation.
   */
  externalDocs?: ExternalDocumentationObject

} & Extension