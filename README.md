# OAPI Transpiler

[![GitHub](https://img.shields.io/badge/GitHub-JooffinHalli%2Foapi-blue?style=flat-square&logo=github)](https://github.com/JooffinHalli/oapi)

**OpenAPI/Swagger to TypeScript transpiler** with hooks, filtering, and flexible configuration.

## Philosophy

This tool generates types and **only types**.

You can stop here and be satisfied that you no longer need to create them manually.

Or you can write your own abstraction for backend requests and use these types.

**Client generation out of the box will be added in the future.**

This tool is designed to work with **real-world Swagger/OpenAPI files** that are already in production use. As a consequence, these files are assumed to be **syntactically correct** and **well-formed**.

Therefore, this tool **does not validate** the input OpenAPI files - it focuses purely on type generation from already-valid specifications.

All invalid fields will be ignored, and if there's insufficient information to generate a correct type, `unknown` will be silently returned as the default.

## Features

- ✅ **OpenAPI 3.0+** support (Swagger 2.0 not supported)
- ✅ **TypeScript generation** for paths and schemas
- ✅ **Custom hooks** for data transformation
- ✅ **Path filtering** with regular expressions
- ✅ **Multiple sources** (URLs and local files)
- ✅ **JSDoc comments** generation

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
    [
      {
        "src": "https://raw.githubusercontent.com/stripe/openapi/master/openapi/spec3.json",
        "output": "./src/api/example"
      }
    ]
    EOF
    ```

    **Or manually create `./api.config.json` using the JSON above**

2. **Run the transpiler**:
```bash
npx https://github.com/JooffinHalli/oapi api.config.json
```

3. **Check your generated files**:
```
src/api/example
├── schemas.ts    # TypeScript types for schemas
└── paths.ts      # TypeScript types for paths
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

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `src` | string | true | OpenAPI/Swagger source (URL or file path) |
| `output` | string | true | Output directory for generated files |
| `hook` | string or function | false | In .js files should be a function, in .json files should be a path to hook function (see [Hooks](#hooks) for details) |
| `filter` | string | false | Regular expression to filter paths |

## Hooks

Create custom hooks to transform data during processing. **Important:** You must mutate the data object directly:

### JSON config (path to hook file):
```json
{
  "hook": "./hooks/api.js"
}
```

### JS config (function directly):
```javascript
module.exports = [
  {
    src: "https://api.example.com/swagger.json",
    output: "./generated",
    hook: function(data, key) {
      if (key === 'paths') {
        console.log('Processing path:', data);
      }
      // Mutate data directly - don't return anything
    }
  }
];
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
  "filter": "^(?!.*internal).*$"
}
```

### Include only specific paths
```json
{
  "filter": "^/api/v1/.*$"
}
```

### Exclude multiple patterns
```json
{
  "filter": "^(?!.*(?:internal|private|admin)).*$"
}
```

## Config examples

### Basic Config
```json
[
  {
    "src": "https://api.example.com/swagger.json",
    "output": "./api"
  }
]
```

### Advanced Config
```json
[
  {
    "src": "https://api.example.com/swagger.json",
    "output": "./src/api/example",
    "hook": "./hooks/example.js",
    "filter": "^(?!.*internal).*$"
  },
  {
    "src": "./local-swagger.json",
    "output": "./src/api/local"
  }
]
```

### js file config
```js
module.exports = [
  {
    src: "https://api.example.com/swagger.json",
    output: "./src/api/example",
    hook: (data, key) => {},
    filter: "^(?!.*internal).*$"
  },
  {
    src: "./local-swagger.json",
    output: "./src/api/local"
  }
]
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
