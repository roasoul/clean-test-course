const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // The specs visit a page in one `it` and assert on it in later `it`s.
    // Cypress 12+ clears the page between tests by default; keep the old behaviour.
    testIsolation: false,
    // Cypress 13+ turned video off by default; CI uploads it as an artifact.
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
