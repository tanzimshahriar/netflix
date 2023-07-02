module.exports = {
  arrowParens: 'always',
  semi: false,
  trailingComma: 'all',
  singleQuote: true,
  semi: false,
  bracketSpace: true,
  // pnpm doesn't support plugin autoloading
  // https://github.com/tailwindlabs/prettier-plugin-tailwindcss#installation
  plugins: [require('prettier-plugin-tailwindcss')],
};