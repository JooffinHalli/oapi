# OAPI Transpiler

[![GitHub](https://img.shields.io/badge/GitHub-JooffinHalli%2Foapi-blue?style=flat-square&logo=github)](https://github.com/JooffinHalli/oapi)
[![OpenAPI 3.0+](https://img.shields.io/badge/OpenAPI-3.0%2B-brightgreen)](https://spec.openapis.org/oas/latest.html)

**OpenAPI/Swagger to TypeScript transpiler** with hooks, filtering, flexible configuration, and **built-in HTTP client generation**.

## Philosophy

This tool generates **types AND a ready-to-use HTTP client**.

You get:
- **TypeScript types** for all your API endpoints and schemas
- **Typed HTTP client** with autocomplete and type safety
- **Zero configuration** - works out of the box
- **Customizable** - hooks, filtering, and flexible output options

This tool is designed to work with **real-world Swagger/OpenAPI files** that are already in production use. As a consequence, these files are assumed to be **syntactically correct** and **well-formed**.

Therefore, this tool **does not validate** the input OpenAPI files - it focuses purely on type generation from already-valid specifications.

All invalid fields will be ignored, and if there's insufficient information to generate a correct type, `unknown` will be silently returned as the default.

## Features

- ✅ **OpenAPI 3.0+** support (Swagger 2.0 not supported)
- ✅ **TypeScript generation** for paths and schemas
- ✅ **HTTP client generation** with full type safety
- ✅ **Custom hooks** for data transformation
- ✅ **Path filtering** with regular expressions
- ✅ **Multiple sources** (URLs and local files)
- ✅ **JSDoc comments** generation
- ✅ **Configurable tab size** for generated files

## 📊 Specifications

- **Zero dependencies** - pure Node.js
- **~300 lines of code** (~16KB total) - lightweight and fast

## Usage

This tool is currently in **testing phase**, so it's only available via **npx** from GitHub. NPM package will be available later.

```bash
npx https://github.com/JooffinHalli/oapi <path-to-config-file>
```

## Quick Start

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

## VS Code Settings

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

## Configuration Options

### Global Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `generateClient` | boolean | false | Generate HTTP client (default: false) |
| `output` | string | true | Global output directory for all files |
| `tabSize` | number | false | Tab size for generated files (1-8, default: 2) |
| `services` | array | true | Array of OpenAPI services to process |

### Service Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `src` | string | true | OpenAPI/Swagger source (URL or file path) |
| `dirname` | string | true | Directory name for this service |
| `hook` | string or function | false | In .js files should be a function, in .json files should be a path to hook function |
| `filter` | string | false | Regular expression to filter paths |

## Hooks

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

## Filtering

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

## Config examples

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

## Using the Generated Client

After running the transpiler, you can use the generated client in your code:

```typescript
import { api } from './src';

// Typed API calls with autocomplete
api.stripe.get('/customers/{id}', {
  pathParams: { id: 'cus_123' },
  queryParams: { expand: ['subscriptions'] }
}).then((user) => console.log(user.email)); // ✅ Autocomplete works
```

### createClient.ts
```typescript
import { createClient } from './createClient';
import type { Paths } from './stripe/paths';

// Create a custom client instance
const client = createClient<Paths>((method, path, options) => {
  // Custom fetch implementation
  return fetch(path, {
    method,
    headers: { 'Authorization': 'Bearer token' },
    body: options?.body
  });
});
```

## Generated Output

### schemas.ts
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


## ⚠️ Important Limitations

### OpenAPI Version Support
- **✅ Supported:** OpenAPI 3.0+
- **❌ Not Supported:** Swagger 2.0

### Schema Name Conflicts
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

## Requirements

- Node.js >= 14.0.0
- OpenAPI 3.0+ (Swagger 2.0 not supported)