const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    "defaultCommandTimeout":500000,
    "requestTimeout":200000,
    "responseTimeout":200000,
    "baseUrl":'https://www.saucedemo.com/v1/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
  
      screenshotOnRunFailure: true,
    specPattern: "cypress/e2e/Features/*.feature",
      video: true,
      "videoCompression": 0
  },
});
