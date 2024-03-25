import { Extension } from '../../../../../common';

/**
 * Configuration details for a supported OAuth Flow
 * @link https://spec.openapis.org/oas/v3.1.0#oauth-flow-object
 * @example
 * {
 *   authorizationUrl: "https://example.com/api/oauth/dialog",
 *   tokenUrl: "https://example.com/api/oauth/token",
 *   scopes: {
 *     "write:pets: "modify pets in your account",
 *     "read:pets": "read your pets"
 *   }
 * }
 */
export type OAuthFlowObject = {

  /**
   * REQUIRED. The authorization URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  authorizationUrl: string

  /**
   * REQUIRED. The token URL to be used for this flow. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  tokenUrl: string

  /**
   * The URL to be used for obtaining refresh tokens. This MUST be in the form of a URL. The OAuth2 standard requires the use of TLS.
   */
  refreshUrl?: string

  /**
   * REQUIRED. The available scopes for the OAuth2 security scheme. A map between the scope name and a short description for it. The map MAY be empty.
   */
  scopes: Record<string, string>

} & Extension