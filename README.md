# OAPI Transpiler

[![GitHub](https://img.shields.io/badge/GitHub-JooffinHalli%2Foapi-blue?style=flat-square&logo=github)](https://github.com/JooffinHalli/oapi)
[![OpenAPI 3.0+](https://img.shields.io/badge/OpenAPI-3.0%2B-brightgreen)](https://spec.openapis.org/oas/latest.html)

**OpenAPI/Swagger to TypeScript transpiler** that generates clean, minimal code with maximum customization.

## Table of Contents

- [Philosophy](#philosophy) <a id="toc-philosophy"></a>
  - [The Problem](#the-problem) <a id="toc-the-problem"></a>
  - [The Solution](#the-solution) <a id="toc-the-solution"></a>
  - [Key Principles](#key-principles) <a id="toc-key-principles"></a>
  - [How It Works](#how-it-works) <a id="toc-how-it-works"></a>
- [What You Get](#what-you-get) <a id="toc-what-you-get"></a>
  - [Generated Files](#generated-files) <a id="toc-generated-files"></a>
  - [Key Features](#key-features) <a id="toc-key-features"></a>
  - [What Makes It Different](#what-makes-it-different) <a id="toc-what-makes-it-different"></a>
- [Usage](#usage) <a id="toc-usage"></a>
- [Quick Start](#quick-start) <a id="toc-quick-start"></a>
- [VS Code Settings](#vs-code-settings) <a id="toc-vs-code-settings"></a>
- [Configuration Options](#configuration-options) <a id="toc-configuration-options"></a>
  - [Global Options](#global-options) <a id="toc-global-options"></a>
  - [Service Options](#service-options) <a id="toc-service-options"></a>
- [Hooks](#hooks) <a id="toc-hooks"></a>
- [Filtering](#filtering) <a id="toc-filtering"></a>
- [Config examples](#config-examples) <a id="toc-config-examples"></a>
- [Usage Examples](#usage-examples) <a id="toc-usage-examples"></a>
  - [Basic Usage (Default Implementation)](#basic-usage-default-implementation) <a id="toc-basic-usage-default-implementation"></a>
  - [Custom Implementation (Axios)](#custom-implementation-axios) <a id="toc-custom-implementation-axios"></a>
  - [Custom Implementation (Your Own Logic)](#custom-implementation-your-own-logic) <a id="toc-custom-implementation-your-own-logic"></a>
  - [Using Utilities (Optional)](#using-utilities-optional) <a id="toc-using-utilities-optional"></a>
  - [Multiple Services](#multiple-services) <a id="toc-multiple-services"></a>
- [Why Not Use Alternatives?](#why-not-use-alternatives) <a id="toc-why-not-use-alternatives"></a>
- [Generated Output](#generated-output) <a id="toc-generated-output"></a>
  - [schemas.ts](#schemasts) <a id="toc-schemasts"></a>
  - [paths.ts](#pathsts) <a id="toc-pathsts"></a>
- [Important Limitations](#important-limitations) <a id="toc-important-limitations"></a>
  - [OpenAPI Version Support](#openapi-version-support) <a id="toc-openapi-version-support"></a>
  - [Schema Name Conflicts](#schema-name-conflicts) <a id="toc-schema-name-conflicts"></a>
- [Requirements](#requirements) <a id="toc-requirements"></a>
- [Summary](#summary) <a id="toc-summary"></a>

## Philosophy [↑](#toc-philosophy) <a id="philosophy"></a>

### The Problem [↑](#toc-the-problem) <a id="the-problem"></a>
Every project has unique requirements for API communication:
- Custom authentication (JWT, API keys, OAuth)
- Special headers and prefixes
- Different HTTP libraries (axios, fetch, custom implementations)
- Project-specific error handling and retry logic

**Generic solutions fail** because they try to solve everything for everyone, resulting in bloated, opinionated code that doesn't fit your needs.

### The Solution [↑](#toc-the-solution) <a id="the-solution"></a>
This tool provides **two essential things**:

1. **TypeScript types** - Generated from your OpenAPI spec
2. **Minimal abstraction** - A thin wrapper that accepts these types and returns a typed client

### Key Principles [↑](#toc-key-principles) <a id="key-principles"></a>

**🎯 Maximum Customization**
- You control the HTTP implementation completely
- Use axios, fetch, or any custom function
- Add your own authentication, headers, error handling
- Keep your existing patterns and conventions

**🧹 Minimal Generated Code**
- No bloated abstractions or unnecessary objects
- Clean, readable TypeScript
- Only what you actually need
- Easy to understand and modify

**🔧 Optional Everything**
- Use the default implementation or provide your own
- Access utility functions when needed (`this.interpolate`, `this.getUrl`, etc.)
- Or ignore them completely and do everything yourself

**📦 Source Code Generation**
- You get actual TypeScript files, not runtime magic
- Review, modify, and commit the generated code
- Full control over the final output

### How It Works [↑](#toc-how-it-works) <a id="how-it-works"></a>

```typescript
// You get types
type Paths = {
  '/users': {
    get: { res: User[] }
    post: { body: CreateUser, res: User }
  }
}

// You get a minimal abstraction
const client = createClient<Paths>((method, path, options) => {
  // Your custom implementation
  return axios({ method, url: path, data: options.body })
})

// You get type safety
const users = await client.get('/users') // ✅ User[]
```

**The generated code is yours to own, modify, and integrate however you want.**

## What You Get [↑](#toc-what-you-get) <a id="what-you-get"></a>

### Generated Files [↑](#toc-generated-files) <a id="generated-files"></a>
- **`types.ts`** - TypeScript types for all API schemas
- **`paths.ts`** - TypeScript types for all API endpoints  
- **`createClient.ts`** - Minimal client factory with utilities
- **`index.ts`** - Main API export (optional)

### Key Features [↑](#toc-key-features) <a id="key-features"></a>
- ✅ **OpenAPI 3.0+** support (Swagger 2.0 not supported)
- ✅ **Zero dependencies** - pure Node.js (~300 lines)
- ✅ **Custom hooks** for data transformation
- ✅ **Path filtering** with regular expressions
- ✅ **Multiple sources** (URLs and local files)
- ✅ **JSDoc comments** generation
- ✅ **Configurable output** formatting

### What Makes It Different [↑](#toc-what-makes-it-different) <a id="what-makes-it-different"></a>
- **No runtime dependencies** - just TypeScript types and utilities
- **Your code, your rules** - modify generated files as needed
- **Minimal footprint** - only generates what you actually use
- **Maximum flexibility** - use any HTTP library or custom implementation

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
          "dirname": "stripe"
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
└── stripe/           # Service directory
    ├── schemas.ts    # TypeScript types for schemas
    ├── paths.ts      # TypeScript types for paths
    └── index.ts      # Service export
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

## Configuration Options [↑](#toc-configuration-options) <a id="configuration-options"></a>

### Global Options [↑](#toc-global-options) <a id="global-options"></a>

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `generateClient` | boolean | false | Generate HTTP client (default: false) |
| `output` | string | true | Global output directory for all files |
| `tabSize` | number | false | Tab size for generated files (1-8, default: 2) |
| `services` | array | true | Array of OpenAPI services to process |

### Service Options [↑](#toc-service-options) <a id="service-options"></a>

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `src` | string | true | OpenAPI/Swagger source (URL or file path) |
| `dirname` | string | true | Directory name for this service |
| `hook` | string or function | false | In .js files should be a function, in .json files should be a path to hook function |
| `filter` | string | false | Regular expression to filter paths |

## Hooks [↑](#toc-hooks) <a id="hooks"></a>

Create custom hooks to transform data during processing. **Important:** You must mutate the data object directly:

### JSON config (path to hook file):
```json
{
  "output": "src",
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "myApi",
      "hook": "./hooks/api.js"
    }
  ]
}
```

### JS config (function directly):
```javascript
module.exports = {
  output: "src",
  services: [
    {
      src: "https://api.example.com/swagger.json",
      dirname: "myApi",
      hook: function(data, key) {
        if (key === 'paths') {
          console.log('Processing path:', data);
        }
        // Mutate data directly - don't return anything
      }
    }
  ]
};
```

### Hook file example:
```javascript
// hooks/api.js
module.exports = function(data, key) {
  // Transform data before processing
  if (key === 'paths') {
    // Custom path processing
    console.log('Processing path:', data);
  }
  
  // Mutate data directly - don't return anything
};
```

## Filtering [↑](#toc-filtering) <a id="filtering"></a>

Use regular expressions to filter paths:

### Exclude internal paths
```json
{
  "output": "src",
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "myApi",
      "filter": "^(?!.*internal).*$"
    }
  ]
}
```

### Include only specific paths
```json
{
  "output": "src",
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "myApi",
      "filter": "^/api/v1/.*$"
    }
  ]
}
```

### Exclude multiple patterns
```json
{
  "output": "src",
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "myApi",
      "filter": "^(?!.*(?:internal|private|admin)).*$"
    }
  ]
}
```

## Config examples [↑](#toc-config-examples) <a id="config-examples"></a>

### Basic Config
```json
{
  "output": "src",
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "myApi"
    }
  ]
}
```

### Advanced Config
```json
{
  "generateClient": true,
  "output": "src",
  "tabSize": 4,
  "services": [
    {
      "src": "https://api.example.com/swagger.json",
      "dirname": "example",
      "hook": "./hooks/example.js",
      "filter": "^(?!.*internal).*$"
    },
    {
      "src": "./local-swagger.json",
      "dirname": "local"
    }
  ]
}
```

### JS file config
```js
module.exports = {
  generateClient: true,
  output: "src",
  tabSize: 2,
  services: [
    {
      src: "https://api.example.com/swagger.json",
      dirname: "example",
      hook: (data, key) => {},
      filter: "^(?!.*internal).*$"
    },
    {
      src: "./local-swagger.json",
      dirname: "local"
    }
  ]
}
```

## Usage Examples [↑](#toc-usage-examples) <a id="usage-examples"></a>

### Basic Usage (Default Implementation) [↑](#toc-basic-usage-default-implementation) <a id="basic-usage-default-implementation"></a>

```typescript
import { createClient } from './createClient';
import type { Paths } from './stripe/paths';

// Use the default fetch implementation
const client = createClient<Paths>();

// Typed API calls
const users = await client.get('/users'); // ✅ User[]
const user = await client.post('/users', { 
  body: { name: 'John', email: 'john@example.com' } 
}); // ✅ User
```

### Custom Implementation (Axios) [↑](#toc-custom-implementation-axios) <a id="custom-implementation-axios"></a>

```typescript
import axios from 'axios';
import { createClient } from './createClient';
import type { Paths } from './stripe/paths';

const client = createClient<Paths>((method, path, options) => {
  return axios({
    method,
    url: path,
    data: options?.body,
    headers: { 'Authorization': 'Bearer token' }
  }).then(res => res.data);
});

// Same typed API, but with your custom logic
const users = await client.get('/users'); // ✅ User[]
```

### Custom Implementation (Your Own Logic) [↑](#toc-custom-implementation-your-own-logic) <a id="custom-implementation-your-own-logic"></a>

```typescript
import { createClient } from './createClient';
import type { Paths } from './stripe/paths';

const client = createClient<Paths>((method, path, options) => {
  // Your custom implementation
  const url = `https://api.example.com${path}`;
  const headers = {
    'Authorization': `Bearer ${getToken()}`,
    'X-API-Version': 'v2'
  };
  
  return myCustomHttpClient.request({
    method,
    url,
    headers,
    body: options?.body
  });
});
```

### Using Utilities (Optional) [↑](#toc-using-utilities-optional) <a id="using-utilities-optional"></a>

```typescript
const client = createClient<Paths>((method, path, options) => {
  // Access utilities via 'this' context
  const url = this.getUrl(path, options); // Handles path params and query params
  const body = this.getBody(options?.body); // JSON stringify with error handling
  
  return fetch(url, {
    method,
    headers: this.headers, // Default headers
    body
  }).then(this.handleRes); // Error handling
});
```

### Multiple Services [↑](#toc-multiple-services) <a id="multiple-services"></a>

```typescript
import { api } from './src';

// Each service has its own typed client
const stripeUsers = await api.stripe.get('/customers');
const githubRepos = await api.github.get('/user/repos');
```

## Why Not Use Alternatives? [↑](#toc-why-not-use-alternatives) <a id="why-not-use-alternatives"></a>

### vs. OpenAPI Generator <a id="vs-openapi-generator"></a>
- **❌ OpenAPI Generator**: Generates 1000+ lines of complex code
- **✅ OAPI**: Generates ~100 lines of clean, minimal code

### vs. Orval <a id="vs-orval"></a>
- **❌ Orval**: Opinionated, hard to customize, runtime dependencies
- **✅ OAPI**: Your code, your rules, zero runtime dependencies

### vs. Swagger Codegen <a id="vs-swagger-codegen"></a>
- **❌ Swagger Codegen**: Bloated templates, hard to modify
- **✅ OAPI**: Simple templates, easy to understand and modify

### vs. Manual Types <a id="vs-manual-types"></a>
- **❌ Manual**: Time-consuming, error-prone, hard to maintain
- **✅ OAPI**: Automatic, type-safe, always up-to-date

## Generated Output [↑](#toc-generated-output) <a id="generated-output"></a>

### schemas.ts [↑](#toc-schemasts) <a id="schemasts"></a>

```typescript
export namespace Schemas {

  /**
   * User model
   */
  export type User = {
    /** User ID */
    id: number
    /** User name */
    name: string
    /** User email */
    email: string
  }

}
```

### paths.ts [↑](#toc-pathsts) <a id="pathsts"></a>

```typescript
import type { Schemas } from './Schemas';

export type Paths = {

  '/users': {

    get: {
      /** Query parameters */
      queryParams?: {
        /** Limit number of results */
        limit?: number
        /** Offset for pagination */
        offset?: number
      };
      /** Response type */
      res: Schemas.User[]
    }

  }

  '/users/{id}': {

    get: {
      /** Path parameters */
      pathParams: {
        /** User ID */
        id: number
      };
      /** Response type */
      res: Schemas.User
    }

  }

}
```

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

## Summary [↑](#toc-summary) <a id="summary"></a>

**OAPI** gives you the best of both worlds:

1. **Type safety** - Generated TypeScript types from your OpenAPI spec
2. **Complete control** - Your HTTP implementation, your rules
3. **Minimal code** - Clean, readable, maintainable generated files
4. **Maximum flexibility** - Use any library, any pattern, any architecture

**No more bloated, opinionated API clients that don't fit your project.**