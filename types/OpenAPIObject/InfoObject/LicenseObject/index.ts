import { Extension } from '../../../common';

/**
 * License information for the exposed API.
 * @example
 * {
 *   name: "Apache 2.0",
 *   identifier: "Apache-2.0"
 * }
 */
export type LicenseObject = {

  /**
   * REQUIRED. The license name used for the API.
   */
  name: string

  /**
   * An {@link https://spdx.dev/spdx-specification-21-web-version#h.jxpfx0ykyb60 SPDX} license expression for the API. The `identifier` field is mutually exclusive of the `url` field.
   */
  identifier?: string

  /**
   * A URL to the license used for the API. This MUST be in the form of a URL. The `url` field is mutually exclusive of the `identifier` field.
   */
  url?: string

} & Extension