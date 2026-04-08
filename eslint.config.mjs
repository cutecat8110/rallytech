// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  ignores: ['tools/codex-toolkit/skills/**'],
  rules: {
    '@stylistic/arrow-parens': ['error', 'always'],
    '@stylistic/operator-linebreak': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/html-self-closing': 'off'
  }
})
