# Componentes de prueba para React

## Uso de json-server para simular una API RESTful

### Instalación

#### Paso 1: Instalar json-server globalmente

Ejecuta el siguiente comando en tu terminal:

```bash
npm install -g json-server
```

### Configuración

#### Paso 2: Crear un archivo de base de datos

Crea un archivo en la ruta `src/api/db.json` con la estructura de datos que deseas simular. Por ejemplo:

```json
{
  "data": [
    { "id": 1, "name": "Item 1", "constellation": "Constellation A" },
    { "id": 2, "name": "Item 2", "constellation": "Constellation B" }
  ]
}
```

### Ejecución

#### Paso 3: Iniciar el servidor

Ejecuta el siguiente comando para iniciar el servidor json-server:

```bash
json-server --watch src/api/db.json
```

El servidor estará disponible en `http://localhost:3000` por defecto.

## Configuración de linter

```json
    "eslint-plugin-react": "^7.37.5",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.7",
    "prettier": "^3.6.2",
```

- eslint-plugin-react: Proporciona reglas específicas para React.
- eslint-plugin-react-hooks: Asegura que los hooks de React se usen correctamente.
- eslint-plugin-react-refresh: Ayuda a configurar React Fast Refresh para una mejor experiencia de desarrollo.
- prettier: Formateador de código que se integra con ESLint para mantener un estilo de código consistente.

Después de instalar, puedes crear configuraciones base más permisivas y agregar reglas específicas gradualmente según las necesidades de tu equipo.

- Luego debes crear los archivos de configuración:

> .eslintrc.js

```js
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '17.0.2' } },
  plugins: ['react-refresh'],
  rules: {
    "max-len": [2, 120, 2],
    "newline-before-return": "error",
    "no-console": "error",
    "no-empty-function": "error",
    "no-mixed-spaces-and-tabs": "error",
    "no-multi-spaces": "error",
    "no-param-reassign": ["error", { "props": false }],
    "no-use-before-define": "error", // "off"
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    // "react/prop-types": "error",
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "semi": ["error", "always"]
  },
}
```

> .prettierrc

```json
{
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "bracketSpacing": true,
  "endOfLine": "lf",
  "jsxBracketSameLine": true,
  "jsxSingleQuote": false,
  "printWidth": 120,
  "quoteProps": "consistent",
  "semi": true,
  "singleQuote": true,
  "trailingComma": "none"
}
```

> .eslintignore

```plaintext
node_modules/
dist/
build/
public/
coverage/
.vscode/
.DS_Store
*.log
*.env
*.lock
```
