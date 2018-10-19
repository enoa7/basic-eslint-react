# How to

## Setup ESLint

this is step by step for VSCode.

-   npm install
-   create a .json file on root folder
-   paste this
    ```
    {
        "env": {
            "browser": true
        },
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ],
        "parserOptions": {
            "ecmaFeatures": {
                "jsx": true
            },
            "sourceType": "module"
        },
        "rules": {
            "comma-dangle": [
                "warn",
                {
                    "arrays": "always-multiline",
                    "exports": "never",
                    "functions": "never",
                    "imports": "never",
                    "objects": "always-multiline"
                }
            ],
            "indent": ["error", "tab"],
            "quotes": ["error", "single"]
        }
    }
    ```
- run vscode command 'Format Document'.
- if above doesnt format your code with eslint rules then go to settings and `"eslint.autoFixOnSave": true`