# OAPI Transpiler

[![GitHub](https://img.shields.io/badge/GitHub-JooffinHalli%2Foapi-blue?style=flat-square&logo=github)](https://github.com/JooffinHalli/oapi)
[![OpenAPI 3.0+](https://img.shields.io/badge/OpenAPI-3.0%2B-brightgreen)](https://spec.openapis.org/oas/latest.html)

**OpenAPI/Swagger to TypeScript transpiler** that generates clean, minimal code with maximum customization.

## Table of Contents

- [Philosophy](#philosophy)
  - [The Problem](#the-problem)
  - [The Solution](#the-solution)
  - [Key Principles](#key-principles)
  - [How It Works](#how-it-works)
- [What You Get](#what-you-get)
  - [Generated Files](#generated-files)
  - [Key Features](#key-features)
  - [What Makes It Different](#what-makes-it-different)
- [Usage](#usage)
- [Quick Start](#quick-start)
- [VS Code Settings](#vs-code-settings)
- [Configuration Options](#configuration-options)
  - [Global Options](#global-options)
  - [Service Options](#service-options)
- [Hooks](#hooks)
- [Filtering](#filtering)
- [Config examples](#config-examples)
- [Usage Examples](#usage-examples)
  - [Basic Usage (Default Implementation)](#basic-usage-default-implementation)
  - [Custom Implementation (Axios)](#custom-implementation-axios)
  - [Custom Implementation (Your Own Logic)](#custom-implementation-your-own-logic)
  - [Using Utilities (Optional)](#using-utilities-optional)
  - [Multiple Services](#multiple-services)
- [Why Not Use Alternatives?](#why-not-use-alternatives)
- [Generated Output](#generated-output)
  - [schemas.ts](#schemasts)
  - [paths.ts](#pathsts)
- [Important Limitations](#important-limitations)
  - [OpenAPI Version Support](#openapi-version-support)
  - [Schema Name Conflicts](#schema-name-conflicts)
- [Requirements](#requirements)
- [Summary](#summary)

<a id="philosophy"></a>

## Philosophy [↑](#table-of-contents)

<a id="the-problem"></a>

### The Problem [↑](#table-of-contents)
Every project has unique requirements for API communication:
- Custom authentication (JWT, API keys, OAuth)
- Special headers and prefixes
- Different HTTP libraries (axios, fetch, custom implementations)
- Project-specific error handling and retry logic

**Generic solutions fail** because they try to solve everything for everyone, resulting in bloated, opinionated code that doesn't fit your needs.

<a id="the-solution"></a>

### The Solution [↑](#table-of-contents)
This tool provides **two essential things**:

1. **TypeScript types** - Generated from your OpenAPI spec
2. **Minimal abstraction** - A thin wrapper that accepts these types and returns a typed client

<a id="key-principles"></a>

### Key Principles [↑](#table-of-contents)

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

<a id="how-it-works"></a>

### How It Works [↑](#table-of-contents)

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

<a id="what-you-get"></a>

## What You Get [↑](#table-of-contents)
<a id="generated-files"></a>

### Generated Files [↑](#table-of-contents)
- **`types.ts`** - TypeScript types for all API schemas
- **`paths.ts`** - TypeScript types for all API endpoints  
- **`createClient.ts`** - Minimal client factory with utilities
- **`index.ts`** - Main API export (optional)

<a id="key-features"></a>

### Key Features [↑](#table-of-contents)
- ✅ **OpenAPI 3.0+** support (Swagger 2.0 not supported)
- ✅ **Zero dependencies** - pure Node.js (~300 lines)
- ✅ **Custom hooks** for data transformation
- ✅ **Path filtering** with regular expressions
- ✅ **Multiple sources** (URLs and local files)
- ✅ **JSDoc comments** generation
- ✅ **Configurable output** formatting

<a id="what-makes-it-different"></a>

### What Makes It Different [↑](#table-of-contents)
- **No runtime dependencies** - just TypeScript types and utilities
- **Your code, your rules** - modify generated files as needed
- **Minimal footprint** - only generates what you actually use
- **Maximum flexibility** - use any HTTP library or custom implementation

<a id="usage"></a>

## Usage [↑](#table-of-contents)

This tool is currently in **testing phase**, so it's only available via **npx** from GitHub. NPM package will be available later.

```bash
npx https://github.com/JooffinHalli/oapi <path-to-config-file>
```

<a id="quick-start"></a>

## Quick Start [↑](#table-of-contents)

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

<a id="vs-code-settings"></a>

## VS Code Settings [↑](#table-of-contents)

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

<a id="configuration-options"></a>

## Configuration Options [↑](#table-of-contents)

<a id="global-options"></a>

### Global Options [↑](#table-of-contents)

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `generateClient` | boolean | false | Generate HTTP client (default: false) |
| `output` | string | true | Global output directory for all files |
| `tabSize` | number | false | Tab size for generated files (1-8, default: 2) |
| `services` | array | true | Array of OpenAPI services to process |

<a id="service-options"></a>

### Service Options [↑](#table-of-contents)

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `src` | string | true | OpenAPI/Swagger source (URL or file path) |
| `dirname` | string | true | Directory name for this service |
| `hook` | string or function | false | In .js files should be a function, in .json files should be a path to hook function |
| `filter` | string | false | Regular expression to filter paths |

<a id="hooks"></a>

## Hooks [↑](#table-of-contents)

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

<a id="filtering"></a>

## Filtering [↑](#table-of-contents)

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

<a id="config-examples"></a>

## Config examples [↑](#table-of-contents)

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

<a id="usage-examples"></a>

## Usage Examples [↑](#table-of-contents)


<a id="basic-usage-default-implementation"></a>

### Basic Usage (Default Implementation) [↑](#table-of-contents)

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

<a id="custom-implementation-axios"></a>

### Custom Implementation (Axios) [↑](#table-of-contents)

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

<a id="custom-implementation-your-own-logic"></a>

### Custom Implementation (Your Own Logic) [↑](#table-of-contents)

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

<a id="using-utilities-optional"></a>

### Using Utilities (Optional) [↑](#table-of-contents)

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

<a id="multiple-services"></a>

### Multiple Services [↑](#table-of-contents)

```typescript
import { api } from './src';

// Each service has its own typed client
const stripeUsers = await api.stripe.get('/customers');
const githubRepos = await api.github.get('/user/repos');
```

<a id="why-not-use-alternatives"></a>

## Why Not Use Alternatives? [↑](#table-of-contents)


<a id="vs-openapi-generator"></a>

### vs. OpenAPI Generator [↑](#table-of-contents)
- **❌ OpenAPI Generator**: Generates 1000+ lines of complex code
- **✅ OAPI**: Generates ~100 lines of clean, minimal code

<a id="vs-orval"></a>

### vs. Orval [↑](#table-of-contents)
- **❌ Orval**: Opinionated, hard to customize, runtime dependencies
- **✅ OAPI**: Your code, your rules, zero runtime dependencies

<a id="vs-swagger-codegen"></a>

### vs. Swagger Codegen [↑](#table-of-contents)
- **❌ Swagger Codegen**: Bloated templates, hard to modify
- **✅ OAPI**: Simple templates, easy to understand and modify

<a id="vs-manual-types"></a>

### vs. Manual Types [↑](#table-of-contents)
- **❌ Manual**: Time-consuming, error-prone, hard to maintain
- **✅ OAPI**: Automatic, type-safe, always up-to-date

<a id="generated-output"></a>

## Generated Output [↑](#table-of-contents)


### schemas.ts
[to the top](#table-of-contents)

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

### paths.ts
[to the top](#table-of-contents)

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

<a id="important-limitations"></a>

## ⚠️ Important Limitations [↑](#table-of-contents)


<a id="openapi-version-support"></a>

### OpenAPI Version Support [↑](#table-of-contents)

- **✅ Supported:** OpenAPI 3.0+
- **❌ Not Supported:** Swagger 2.0

<a id="schema-name-conflicts"></a>

### Schema Name Conflicts [↑](#table-of-contents)

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

<a id="requirements"></a>

## Requirements [↑](#table-of-contents)


- Node.js >= 14.0.0
- OpenAPI 3.0+ (Swagger 2.0 not supported)

<a id="summary"></a>

## Summary [↑](#table-of-contents)


**OAPI** gives you the best of both worlds:

1. **Type safety** - Generated TypeScript types from your OpenAPI spec
2. **Complete control** - Your HTTP implementation, your rules
3. **Minimal code** - Clean, readable, maintainable generated files
4. **Maximum flexibility** - Use any library, any pattern, any architecture

**No more bloated, opinionated API clients that don't fit your project.**