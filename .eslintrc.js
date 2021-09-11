module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    plugins: ['prettier', 'import', 'unused-imports', '@typescript-eslint'],
    extends: ['prettier', 'eslint:recommended'],
    env: {
        node: true, // for module.export
    },
    rules: {
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                bracketSpacing: true,
                endOfLine: 'auto',
                printWidth: 100,
                tabWidth: 4,
                arrowFunctionParentheses: 'always',
            },
        ],
        'eol-last': ['error', 'always'],
        'comma-dangle': [
            'error',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'never',
            },
        ],
        'no-console': ['error', { allow: ['warn', 'error'] }],
        'import/order': [
            'error',
            {
                'newlines-between': 'never',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
            },
        ],
        'react/no-array-index-key': 0,
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-var-requires': 0,
        '@typescript-eslint/no-unused-vars': ['error'],
    },
};
