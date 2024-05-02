import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    environment: 'happy-dom',
    root: '.',
    reporters: ['default', 'html'],
    outputFile: './vitest-results/index.html',
    exclude: ['**/node_modules/**'],
    coverage: {
      all: true,
      provider: 'v8',
      exclude: [
        '**/vitest/**',
        '**/.nuxt/**',
        '**/node_modules/**',
      ],
      allowExternal: true,
      include: ['**/src/**/*.{vue,ts}'],
      reporter: ['text', 'json', 'html', 'lcov'],
      reportsDirectory: './vitest-results/coverage',
    },
  },
})
