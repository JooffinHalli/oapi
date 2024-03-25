import { Extension } from '../../common';
import { ContactObject } from './ContactObject';
import { LicenseObject } from './LicenseObject';

/**
 * The object provides metadata about the API. The metadata MAY be used by the clients if needed, and MAY be presented in editing or documentation generation tools for convenience.
 * @link https://spec.openapis.org/oas/v3.1.0#infoObject
 * @example
 * {
 *   title: "Sample Pet Store App",
 *   summary: "A pet store manager.",
 *   description: "This is a sample server for a pet store.",
 *   termsOfService: "https://example.com/terms/",
 *   contact: {
 *     name: "API Support",
 *     url: "https://www.example.com/support",
 *     email: "support@example.com"
 *   },
 *   license: {
 *     name: "Apache 2.0",
 *     url: "https://www.apache.org/licenses/LICENSE-2.0.html"
 *   },
 *   version: "3.0.0"
 * }
 */
export type InfoObject = {

  /**
   * REQUIRED. The title of the API.
   */
  title: string

  /**
   * A short summary of the API.
   */
  summary?: string

  /**
   * 	A description of the API. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
   */
  description?: string

  /**
   * A URL to the Terms of Service for the API. This MUST be in the form of a URL.
   */
  termsOfService?: string

  /**
   * The contact information for the exposed API.
   */
  contact?: ContactObject

  /**
   * The license information for the exposed API.
   */
  license?: LicenseObject

  /**
   * REQUIRED. The version of the OpenAPI document (which is distinct from the {@link https://spec.openapis.org/oas/v3.1.0#oasVersion OpenAPI Specification version} or the API implementation version).
   */
  version: string

} & Extension