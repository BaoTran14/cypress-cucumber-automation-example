const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'ibvq8k',
  video: true,
  env: {
    testEnv: 'sit',
  },
  defaultCommandTimeout: 20000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'mochawesome',
    mochawesomeReporterOptions: {
      reportDir: 'cypress/reports/mocha',
      quite: true,
      overwrite: true,
      html: true,
      json: true,
    },
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{feature,features}',
  },
})
