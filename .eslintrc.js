// eslint-disable-next-line @typescript-eslint/no-require-imports
const { rules: libraryRules } = require('@emanueltavecia/eslint-config/next')

module.exports = {
  extends: [
    'next/core-web-vitals',
    'next/typescript',
    '@emanueltavecia/eslint-config/next',
  ],
  rules: {
    '@typescript-eslint/no-duplicate-enum-values': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          ...libraryRules['no-restricted-imports'][1].paths,
          {
            name: 'next/link',
            message: 'Please import from `@navigation` instead.',
            importNames: ['default'],
          },
          {
            name: 'next/navigation',
            message: 'Please import from `@navigation` instead.',
            importNames: [
              'redirect',
              'permanentRedirect',
              'useRouter',
              'usePathname',
            ],
          },
        ],
      },
    ],
  },
}
