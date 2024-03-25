import { Extension } from '../..';

/**
 * An object representing a Server Variable for server URL template substitution.
 * @link https://spec.openapis.org/oas/v3.1.0#server-variable-object
 * @example
 * {
 *   'enum': [
 *     "8443",
 *     "443"
 *   ],
 *   'default': "v2"
 * }
 */
export type ServerVariableObject = {

    /**
     * An enumeration of string values to be used if the substitution options are from a limited set. The array MUST NOT be empty.
     */
    enum?: string[]

    /**
     * REQUIRED. The default value to use for substitution, which SHALL be sent if an alternate value is not supplied. Note this behavior is different than the {@link https://spec.openapis.org/oas/v3.1.0#schemaObject Schema Object’s} treatment of default values, because in those cases parameter values are optional. If the {@link https://spec.openapis.org/oas/v3.1.0#serverVariableEnum enum} is defined, the value MUST exist in the enum’s values.
     */
    default: string

    /**
     * An optional description for the server variable. {@link https://spec.commonmark.org/ CommonMark syntax} MAY be used for rich text representation.
     */
    description?: string

} & Extension