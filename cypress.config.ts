import { defineConfig } from 'cypress'
import { fa } from 'faker/lib/locales'

export default defineConfig({
  // environment: 'qa',
  env: {
    url: 'https://coffee-cart.app/',
    username: 'buysocialdev@trybuysocial.com',
    password: 'Test123!456',
    storeName: 'Emma Lous Boutique',

  },
  // experimentalSessionAndOrigin:true,
  defaultCommandTimeout: 30000,
  downloadsFolder: 'cypress/downloads',
  execTimeout: 30000,
  pageLoadTimeout: 30000,
  video: false,
  videosFolder: 'cypress/videos',
  viewportHeight: 1200,
  viewportWidth: 1900,
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: false,
  modifyObstructiveCode: false,
  watchForFileChanges: false,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/reports',
    charts: true,
    reportPageTitle: 'Buy Social',
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  projectId: 'qnsi3s',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
  retries: {
    runMode: 0,
    openMode: 0
  }
})
