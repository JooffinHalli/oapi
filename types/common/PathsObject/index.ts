import { Extension, PathItemObject } from '..';

/**
 * Holds the relative paths to the individual endpoints and their operations. The path is appended to the URL from the {@link https://spec.openapis.org/oas/v3.1.0#serverObject Server Object} in order to construct the full URL. The Paths MAY be empty, due to {@link https://spec.openapis.org/oas/v3.1.0#securityFiltering Access Control List (ACL) constraints}.
 * @key A relative path to an individual endpoint. The field name MUST begin with a forward slash (`/`). The path is appended (no relative URL resolution) to the expanded URL from the {@link https://spec.openapis.org/oas/v3.1.0#serverObject Server Object}’s `url` field in order to construct the full URL. {@link https://spec.openapis.org/oas/v3.1.0#pathTemplating Path templating} is allowed. When matching URLs, concrete (non-templated) paths would be matched before their templated counterparts. Templated paths with the same hierarchy but different templated names MUST NOT exist as they are identical. In case of ambiguous matching, it’s up to the tooling to decide which one to use.
 * @link https://spec.openapis.org/oas/v3.1.0#pathsObject
 * @example
 * {
 *   '/pets': {
 *     get: {
 *       description: "Returns all pets from the system that the user has access to",
 *       responses: {
 *         200: {          
 *           description: "A list of pets.",
 *           content: {
 *             'application/json': {
 *               schema: {
 *                 type: "array",
 *                 items: {
 *                   '$ref': "#/components/schemas/pet"
 *                 }
 *               }
 *             }
 *           }
 *         }
 *       }
 *     }
 *   }
 * }
 */
export type PathsObject = Record<`/${string}`, PathItemObject> & Extension