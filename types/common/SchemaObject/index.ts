import {
  DiscriminatorObject,
  Extension,
  ExternalDocumentationObject,
  ReferenceObject,
  XMLObject
} from '..';

/**
 * - {@link https://github.com/OAI/OpenAPI-Specification/tree/main/versions OpenApi spec git}
 * - {@link https://spec.openapis.org/oas/v3.1.0#schema-object OpenApi spec}
 * - {@link https://swagger.io/docs/specification/data-models/ Swagger docs}
 * - {@link https://json-schema.org/draft/2020-12/draft-bhutton-json-schema-validation-00#rfc.section.6.1 JSON Schema spec}
 * - {@link https://json-schema.org/understanding-json-schema/reference JSON Schema docs}
 */
export type SchemaObject = SimpleSchemaObject | Combined<SimpleSchemaObject>

type Combined<S> = 
| { allOf: S[], discriminator?: DiscriminatorObject }
| { oneOf: S[], discriminator?: DiscriminatorObject }
| { anyOf: S[], discriminator?: DiscriminatorObject }
| { not: S }

type SimpleSchemaObject = {

  /** `string` includes `dates` and `files` */
  type: 'string' | 'number' | 'integer' | 'object' | 'array' | 'boolean' | 'null'

  title?: string

  description?: string
  /** int32 | int64 | float | double | byte | binary | date | date-time | password ... */
  format?: string

  enum?: any[]
  /** when `type` is `number` or `integer` */
  minimum?: number
  /** when `type` is `number` or `integer` */
  maximum?: number
  /** when `type` is `number` or `integer` */
  exclusiveMinimum?: number
  /** when `type` is `number` or `integer` */
  exclusiveMaximum?: number
  /** when `type` is `number` or `integer` */
  multipleOf?: number
  /** when `type` is `string` */
  pattern?: RegExp
  /** when `type` is `string` */
  minLength?: number
  /** when `type` is `string` */
  maxLength?: number
  /** when `type` is `array` */
  items?: SchemaObject
  /** when `type` is `array` */
  minItems?: number
  /** when `type` is `array` */
  maxItems?: number
  /** when `type` is `array` */
  uniqueItems?: true
  /** when `type` is `object` */
  minProperties?: number
  /** when `type` is `object` */
  maxProperties?: number
  /** when `type` is `object` */
  properties?: Record<string, SchemaObject>
  /** only when `type` is `object` and can not empty */
  required?: string[]
  /** when `type` is `object` */
  additionalProperties?: false | {}
  /** the default value must conform to the specified schema. */
  default?: unknown
  /** @deprecated */
  deprecated?: never

  example?: any

  externalDocs?: ExternalDocumentationObject

  nullable?: true

  readOnly?: true

  writeOnly?: true

  xml?: XMLObject

} & Extension | {} | ReferenceObject