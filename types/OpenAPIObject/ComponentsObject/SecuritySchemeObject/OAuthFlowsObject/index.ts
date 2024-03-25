import { Extension } from '../../../../common';
import { OAuthFlowObject } from './OAuthFlowObject';

/**
 * Allows configuration of the supported OAuth Flows.
 * @link https://spec.openapis.org/oas/v3.1.0#oauth-flows-object
 * @example
 * {
 *   implicit: {
 *     authorizationUrl: "https://example.com/api/oauth/dialog",
 *     scopes: {
 *       "write:pets": "modify pets in your account",
 *       "read:pets": "read your pets"
 *     }
 *   }
 * }
 */
export type OAuthFlowsObject = {

  /**
   * Configuration for the OAuth Implicit flow
   */
  implicit?: OAuthFlowObject

  /**
   * Configuration for the OAuth Resource Owner Password flow
   */
  password?: OAuthFlowObject

  /**
   * Configuration for the OAuth Client Credentials flow. Previously called `application` in OpenAPI 2.0.
   */
  clientCredentials?: OAuthFlowObject

  /**
   * Configuration for the OAuth Authorization Code flow. Previously called `accessCode` in OpenAPI 2.0.
   */
  authorizationCode?: OAuthFlowObject

} & Extension