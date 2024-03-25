import { Extension } from '../../../common';

/**
 * Contact information for the exposed API.
 * @example
 * {
 *   name: "API Support",
 *   url: "https://www.example.com/support",
 *   email: "support@example.com"
 * }
 */
export type ContactObject = {

  /**
   * The identifying name of the contact person/organization.
   */
  name?: string

  /**
   * The URL pointing to the contact information. This MUST be in the form of a URL.
   */
  url?: string

  /**
   * The email address of the contact person/organization. This MUST be in the form of an email address.
   */
  email?: string

} & Extension