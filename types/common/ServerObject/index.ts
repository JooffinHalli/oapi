import { Extension } from '..';
import { ServerVariableObject } from './ServerVariableObject';

/**
 * An object representing a Server.
 * @link https://spec.openapis.org/oas/v3.1.0#server-object
 * @example
 * {
 *   url: "https://{username}.gigantic-server.com:{port}/{basePath}",
 *   description: "The production API server",
 *   variables: {
 *     username: {
 *       'default': "demo",
 *       description: "this value is assigned by the service provider, in this example `gigantic-server.com`"
 *     },
 *     port: {
 *       enum: [
 *         "8443",
 *         "443"
 *       ],
 *       'default': "8443"
 *     },
 *     basePath: {
 *       'default': "v2"
 *     }
 *   }
 * }
 */
export type ServerObject = {

  /**
   * REQUIRED. A URL to the target host. This URL supports Server Variables and MAY be relative, to indicate that the host location is relative to the location where the OpenAPI document is being served. Variable substitutions will be made when a variable is named in `{`brackets`}`.
   */
  url: string

  /**
   * An optional string describing the host designated by the URL. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
   */
  description?: string

  /**
   * A map between a variable name and its value. The value is used for substitution in the server’s URL template.
   */
  variables?: Record<string, ServerVariableObject>

} & Extension