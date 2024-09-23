const { html } = require("common-tags");
const { defineConfig } = require("cypress");
const { timestamp } = require("rxjs");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir:'cypress/relatorio',
    overwrite: true,
    html: true,
    json: false,
    timestamp: 'ddmmyyyy_HHMMss'
  }
});
