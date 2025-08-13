const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');


module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kanban-dusky-five.vercel.app/',
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;  
    }
  },
});
