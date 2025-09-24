# OAPI Transpiler

[![GitHub](https://img.shields.io/badge/GitHub-JooffinHalli%2Foapi-blue?style=flat-square&logo=github)](https://github.com/JooffinHalli/oapi)
[![OpenAPI 3.0+](https://img.shields.io/badge/OpenAPI-3.0%2B-brightgreen)](https://spec.openapis.org/oas/latest.html)

**Generate types and a minimal HTTP client with maximum customization.**

## Table of Contents

- [Features](#features) <a id="toc-features"></a>
- [Usage](#usage) <a id="toc-usage"></a>
- [Quick Start](#quick-start) <a id="toc-quick-start"></a>
- [Configuration](#configuration) <a id="toc-configuration"></a>
  - [Global Options](#global-options) <a id="toc-global-options"></a>
  - [Service Options](#service-options) <a id="toc-service-options"></a>
  - [Hooks](#hooks-option) <a id="toc-hooks-option"></a>
  - [Filter](#filter-option) <a id="toc-filter-option"></a>
  - [Config examples](#config-examples) <a id="toc-config-examples"></a>
- [VS Code Settings](#vs-code-settings) <a id="toc-vs-code-settings"></a>
- [Generated Types](#types) <a id="toc-types"></a>
- [Client Usage](#client-usage) <a id="toc-client-usage"></a>
- [Important Limitations](#important-limitations) <a id="toc-important-limitations"></a>
  - [OpenAPI Version Support](#openapi-version-support) <a id="toc-openapi-version-support"></a>
  - [Schema Name Conflicts](#schema-name-conflicts) <a id="toc-schema-name-conflicts"></a>
- [Requirements](#requirements) <a id="toc-requirements"></a>
- [Assumptions](#assumptions) <a id="toc-assumptions"></a>
- [By the way](#btw) <a id="toc-btw"></a>

## Features [↑](#toc-features) <a id="features"></a>
- ✅ **Types generation** (Paths and Schemas)
- ✅ **Client generation** (fully typed and customizable)
- ✅ **OpenAPI 3.0+** support (Swagger 2.0 not supported)
- ✅ **Custom hooks** for data transformation
- ✅ **Path filtering** with regular expressions
- ✅ **JSDoc comments** generation
- ✅ **Configurable output** formatting
- ✅ **Multiple sources** (URLs and local files)

## Usage [↑](#toc-usage) <a id="usage"></a>

This tool is currently in **testing phase**, so it's only available via **npx** from GitHub. NPM package will be available later.

```bash
npx https://github.com/JooffinHalli/oapi <path-to-config-file>
```

## Quick Start [↑](#toc-quick-start) <a id="quick-start"></a>

1. **Create a config file** (`api.config.json`):

    **Run in terminal:**
    ```bash
    cat > api.config.json << 'EOF'
    {
      "generateClient": true,
      "output": "src",
      "services": [
        {
          "src": "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json",
          "dirname": "someService"
        }
      ]
    }
    EOF
    ```

    **Or manually create `./api.config.json` using the JSON above**

2. **Run the transpiler**:
```bash
npx https://github.com/JooffinHalli/oapi api.config.json
```

3. **Check your generated files**:
```
src/
├── createClient.ts   # HTTP client builder
├── types.ts          # Client types
├── index.ts          # Main API export
└── someService/      # Service directory
    ├── schemas.ts    # TypeScript types for schemas
    ├── paths.ts      # TypeScript types for paths
    └── index.ts      # Service export
```

## Configuration [↑](#toc-configuration) <a id="configuration"></a>

### Global Options [↑](#toc-global-options) <a id="global-options"></a>
File formats: Configuration can be written in either `.js` or `.json` files.

- `.js` files: Must export the configuration via `module.exports = config`
- `.json` files: Standard JSON format

Validation included: The tool automatically validates your config file and provides helpful error messages.

<a id="main-table"></a>
| Option           | Type    | Required | Default   | Description                                             |
|------------------|---------|----------|-----------|----------------------------------------------------------
| `output`         | string  | true     | -         | Global output directory for all files                   |
| `services`       | array   | true     | -         | Array of [Service Options](#service-options) to process |
| `generateClient` | boolean | false    | false     | Flag to generate http client                            |
| `tabSize`        | number  | false    | 2         | Tab size for generated files (1-8)                      |

### Service Options [↑](#toc-service-options) <a id="service-options"></a>

<a id="table"></a>
| Option          | Type               | Required | Default   | Description |
|-----------------|--------------------|----------|-----------|--------------
| `src`           | string             | true     | -         | OpenAPI/Swagger source (URL or file path) |
| `dirname`       | string             | true     | -         | Directory name for this service |
| `hook`          | string \| function | false    | -         | In .js files should be a [function](#js-hook), in .json files should be a [path to function](#json-hook) |
| `filter`        | string             | false    | -         | Regular expression to [filter](#filter-examples) paths |
| `generatePaths` | boolean            | false    | true      | Flag to generate `paths.ts` and `index.ts` files. If `false`, only `schemas.ts` is generated |
| `toCamelCase`   | boolean            | false    | false     | Convert schema keys to camelCase and schema names to PascalCase. [Use with caution!](#toCamelCase) |

### Hooks [↑](#toc-hooks-option) <a id="hooks-option"></a>
```typescript
type HookFunction = (value: any, key: string) => void
```

As mentioned above
 - in `.js` files `hook` field must be a js function [↑](#table) <a id="js-hook"></a>
```js
module.exports = {
  // other fields...
  services: [
    {
      // other fields...
      hook: (value, key) => {
        if (key === 'paths') {
          delete value['/some/path/to/delete'];
        }
        if (key === 'MySchema') {
          value.type = 'number'
        }
      }
    }
  ]
};
```
 - in `.json` files `hook` field must be a path to js function [↑](#table) <a id="json-hook"></a>
```json
    {
      // other fields...
      "hook": "./hooks/billing.js"
    }
```
hooks/billing.js
```js
module.exports = (value, key) => {
    if (key === 'paths') {
      delete value['/some/path/to/delete'];
    }
    if (key === 'MySchema') {
      value.type = 'number'
    }
}
```

The hook function is called for each property of the OpenAPI object and receives two parameters:

- **`value`** - The current OpenAPI object being processed (paths, schemas, components, etc.)
- **`key`** - The property key of the current OpenAPI object being processed ("paths", "schemas", "components", etc.)

How Hooks Work

- **Return values are ignored** - you don't need to return anything
- **Mutate the incoming `value` object directly** to make changes
- **Modify freely** - add, delete, or change keys and values as needed

### Filter [↑](#toc-filter-option) <a id="filter-option"></a>
Use regular expressions to include or exclude specific API paths. [↑](#table) <a id="filter-examples"></a>
```regex
^/api/v1/.*$           # Only paths starting with /api/v1/
^/users/.*$            # Only user-related endpoints  
^/(users|posts)/.*$    # Only users and posts endpoints

^(?!.*internal).*$     # Exclude paths containing "internal"
^(?!.*admin).*$        # Exclude admin routes
^(?!.*(test|debug)).*$ # Exclude test and debug endpoints
```

### ⚠️ Case Conversion (`toCamelCase`) [↑](#table) <a id="toCamelCase"></a>
**Important Warning:** I recommend not using this setting if you're generating an API client. If the backend operates with a different case convention, there's a risk of sending data in the wrong case to the backend, and the same issue applies when receiving data from the backend. 

Use this option only when generating schemas for type definitions without API client generation.

```json
{
  "src": "https://test.example.com/swagger.json", 
  "dirname": "test",
  "toCamelCase": true,  // ⚠️ Use only with generatePaths: false or generateClient: false
  "generatePaths": false
}
```

### Configuration Examples [↑](#toc-config-examples) <a id="config-examples"></a>

**Minimal (JSON):** [↑](#main-table)
```json
{
  "output": "src/api",
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "test"
    }
  ]
}
```

**Minimal (JS):** [↑](#main-table)
```js
module.exports = {
  output: "src/api",
  services: [
    {
      src: "https://api.example.com/swagger.json",
      dirname: "test"
    }
  ]
};
```

**Advanced (JSON):** [↑](#main-table)
```json
{
  "generateClient": true,
  "output": "src/api",
  "tabSize": 2,
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "billing",
      "hook": "./hooks/billing.js",
      "filter": "^(?!.*internal).*$"
    },
    {
      "src": "./local-swagger.json",
      "dirname": "local",
      "generatePaths": false,
      "toCamelCase": true
    }
  ]
}
```

**Advanced (JS):** [↑](#main-table)
```js
module.exports = {
  generateClient: true,
  output: "src",
  tabSize: 2,
  services: [
    {
      src: "https://api.example.com/swagger.json",
      dirname: "api",
      hook: (value, key) => {
        if (key === 'paths') {
          console.log('Processing path:', value);
        }
      },
      filter: "^(?!.*internal).*$"
    },
    {
      src: "./local-swagger.json",
      dirname: "local",
      generatePaths: false,
      toCamelCase: true
    }
  ]
};
```

## VS Code Settings [↑](#toc-vs-code-settings) <a id="vs-code-settings"></a>

For enhanced autocomplete and validation, create `.vscode/settings.json` in your project:

**Run in terminal:**
```bash
mkdir -p .vscode
cat > .vscode/settings.json << 'EOF'
{
  "json.schemas": [
    {
      "fileMatch": ["api.config.json"], // Replace with your config filename (can be any name)
      "url": "https://raw.githubusercontent.com/JooffinHalli/oapi/main/config.schema.json"
    }
  ]
}
EOF
```

**Or manually create `.vscode/settings.json` using the JSON above:**

**Note:** Replace `"api.config.json"` with your actual config filename (e.g., `"my-config.json"`).

## Generated Types [↑](#toc-types) <a id="types"></a>

paths.ts
```typescript
import type { Schemas } from './schemas';

/**
 * @see {@link https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json swagger}
 * @title Stripe API
 * @description The Stripe REST API. Please see https://stripe.com/docs/api for more details.
 */
export type Paths = {

  '/v1/account': {

    /**
     * @description <p>Retrieves the details of an account.</p>
     * @assumptions Retrieve account
     * @operationId GetAccount
     */
    get: {
      queryParams?: {
        /**
         * @description Specifies which fields in the response should be expanded.
         */
        expand?: string[]
      }
      res: Schemas.account
    }

  }
}
```

schemas.ts
```typescript
/**
 * @see {@link https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json swagger}
 * @title Stripe API
 * @description The Stripe REST API. Please see https://stripe.com/docs/api for more details.
 */
export namespace Schemas {

  /**
   * @title AccountAnnualRevenue
   */
  export type account_annual_revenue = {
    /**
     * @description A non-negative integer representing the amount in the [smallest currency unit](/currencies#zero-decimal).
     */
    amount?: number | null
    /**
     * @description Three-letter [ISO currency code](https://www.iso.org/iso-4217-currency-codes.html), in lowercase. Must be a [supported currency](https://stripe.com/docs/currencies).
     */
    currency?: string | null
    /**
     * @description The close-out date of the preceding fiscal year in ISO 8601 format. E.g. 2023-12-31 for the 31st of December, 2023.
     */
    fiscal_year_end?: string | null
  }
}
```

## Client Usage [↑](#toc-client-usage) <a id="client-usage"></a>

### The Core Philosophy

Making backend requests requires a flexible HTTP client that can adapt to your specific needs. You might prefer using Axios, Fetch, XHR, or have custom requirements involving specific headers, URL prefixes, authentication mechanisms like JWT or API keys, sophisticated error handling, response interception, request logging, retry logic, or performance monitoring. Creating a one-size-fits-all solution is impossible.

Instead, OAPI provides a wrapper that accepts generated types and returns a **fully typed** client interface, while letting you implement the actual HTTP engine.

### Generated Client Structure

Each service directory contains an index file with:

```typescript
import type { Paths } from './paths';
import { createClient } from '../createClient';

export const serviceName = createClient<Paths>();
```

### How createClient Works
The `createClient` function takes your generated API types and returns a fully typed client. It accepts your custom HTTP implementation function (let's call it [doFetch](#doFetch)) as an optional parameter. If you don't provide one, it uses a simple default fetch-based implementation. This approach gives you maximum flexibility while maintaining full TypeScript type safety across all your API calls.

<a id="doFetch"></a>
```typescript
function doFetch(this: HelpfullUtils, method: string, path: string, options: Options): Promise<any>
```

### Utility Methods

When you pass a regular function (not an arrow function) to `createClient`, you gain access to helpful utility methods via the `this` context:

```typescript
export const myService = createClient<Paths>(function(method, path, options) {

    const urlStr = this.interpolate('prefix' + path, options?.pathParams || {});
    const url = new URL(urlStr, 'https://domain.com/api');
    this.fillQueryParams(url.searchParams, options?.queryParams || {});

    return fetch(url, {
        method,
        headers: this.headers,
        body: this.getBody(options?.body),
        credentials: 'include',
    }).then(this.handleRes);
});
```

Available Utilities
 - this.interpolate() - Replace path parameters (/users/{id} → /users/123)
 - this.fillQueryParams() - Append query parameters to URL
 - this.getUrl() - Combine base URL, path, and parameters
 - this.getBody() - Safely stringify request body with error handling
 - this.handleRes() - Process response
 - this.headers - Default headers collection

These utilities are completely optional — use them as needed, or implement your own logic entirely.

### The Best Documentation

Rather than documenting every possible customization, OAPI embraces a different philosophy: **transparency through readable generated code**.

The utility is highly customizable, but instead of enumerating all options, I encourage you to generate the client once and examine the source. You'll find a remarkably compact `createClient.ts` file (72 lines of code) containing the complete implementation with full TypeScript typing.

The generated code is the documentation. What you see is exactly what runs in your application — no hidden behaviors, no mysterious abstractions. This approach ensures you maintain full control and understanding of your API layer.

### Transparency Through Source Code

OAPI generates **actual source code**, not a black box with thousands of lines of duplicated code and incomprehensible abstractions that prevent you from understanding what's really happening under the hood.

Many OpenAPI generators operate on a "code dump" principle — they output massive amounts of generated code that becomes legacy the moment it's created. This code feels alien to your codebase, filled with duplication and abstractions you didn't choose.

OAPI takes the opposite approach: we generate minimal, intentional code that respects your intelligence as a developer. The output is meant to be read, understood, and even modified — not treated as an impenetrable black box.

Generate once, read the code, and you'll understand everything.

### How to Use the Client

```typescript
api.billing.post('/path/{userId}', {    // ✅ Autocompleted paths with POST method
    pathParams: { userId: 'abc' },      // ✅ Autocompleted path parameters
    queryParams: { param: 'def' },      // ✅ Type-checked query params  
    body: { key: 'ghi' }                // ✅ Validated request body
}).then((res) => {
    console.log(res);                   // ✅ Fully typed response
});
```

Just go to the main index file and print `api.` That's it.

From there, TypeScript takes the wheel and won't let you make mistakes. The autocomplete and type checking will guide you through every possible API call.

Just start typing — the types will do the rest.

### By the way

**What if you have a service without Swagger/OpenAPI? No problem!**

`createClient` only requires a type contract. You can use it with **hand-written types** for any API:

```typescript
export const manualService = createClient<{
    'test/path': {
        get: {
            queryParams?: { id?: string }
            res: string[]
        }
    },
    'users/{id}': {
        get: { 
            pathParams: { id: string }
            res: User 
        }
    }
}>();
```

### The Three Pieces of Type-Safe API Layer

Building a type-safe API client involves three independent pieces that fit together perfectly:

**🧩 Piece 1: Types (generated or hand-written)** - describes your API contract

**🧩 Piece 2: HTTP Function (default or custom)** - your preferred way to make requests

**🧩 Piece 3: `createClient` (the glue)** - combines types and HTTP function into a typed abstraction

```
Types + HTTP Function + createClient = Fully Typed API Client
```

### Performance and Scalability

>Unlike code generators that create a separate function for each endpoint, OAPI maintains a **constant runtime footprint**: your bundle size doesn't grow with your API surface.

- **Compile-time**: TypeScript analyzes thousands of endpoints for generating declarative type descriptions
- **Runtime**: Only a handful of functions are created (`get`, `post`, `put`, etc.)

## ⚠️ Important Limitations [↑](#toc-important-limitations) <a id="important-limitations"></a>

### OpenAPI Version Support [↑](#toc-openapi-version-support) <a id="openapi-version-support"></a>

- **✅ Supported:** OpenAPI 3.0+
- **❌ Not Supported:** Swagger 2.0

### Schema Name Conflicts [↑](#toc-schema-name-conflicts) <a id="schema-name-conflicts"></a>

**⚠️ Warning:** This transpiler assumes each schema has a unique name across all namespaces.

If you have conflicting schema names (e.g., `Pet` in both `responses` and `requestBodies`), they will be duplicated in the same namespace, causing TypeScript errors.

**Solution:** Use hooks to rename conflicting schemas:

```javascript
// hooks/resolve-conflicts.js
module.exports = function(data, key) {
  if (key === 'requestBodies') {
    data.PetBody = data.Pet;
    delete data.Pet;
  }
};
```

## Requirements [↑](#toc-requirements) <a id="requirements"></a>

- Node.js >= 14.0.0
- OpenAPI 3.0+ (Swagger 2.0 not supported)

## Assumptions [↑](#toc-assumptions) <a id="assumptions"></a>

This tool is designed for **production-ready OpenAPI specifications** and assumes they are already syntactically valid. No validation is performed — invalid fields are **silently** ignored, and malformed schemas result in `unknown` type. Always validate your OpenAPI documents before use.

## By the way [↑](#toc-btw) <a id="btw"></a>

This utility has **zero dependencies** and the entire transpiler with all the features is just **280 lines of code**.

I plan to write an article explaining the algorithm behind this minimal implementation and will link it here soon.