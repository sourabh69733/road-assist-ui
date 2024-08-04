import globals from "globals"
import pluginJs from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import react from "eslint-plugin-react"

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      react,
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
    },
  },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    ignores: ["dist", "node_modules", "build"],
  },
  {
    rules: {
      semi: ["error", "never"],
    }
  }
]
