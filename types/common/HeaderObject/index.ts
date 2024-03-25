import { ParameterObject } from '..';

/**
 * The Header Object follows the structure of the {@link https://spec.openapis.org/oas/v3.1.0#parameterObject Parameter Object} with the following changes:
 * - `name` MUST NOT be specified, it is given in the corresponding `headers` map.
 * - `in` MUST NOT be specified, it is implicitly in `header`.
 * - All traits that are affected by the location MUST be applicable to a location of `header` (for example, {@link https://spec.openapis.org/oas/v3.1.0#parameterStyle style}).
 * @link https://spec.openapis.org/oas/v3.1.0#header-object
 */
export type HeaderObject = Omit<ParameterObject, 'name' | 'in'>