/// <reference types="cypress" />
/// <reference types="@shelex/cypress-allure-plugin" />
/// <reference types='cypress-xpath' />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
}

module.exports = (on, config) => {
  require('cypress-grep/src/plugin')
  return config;
}

module.exports = (on, config) => {
  require('cypress-mochawesome-reporter/plugin')(on);
};

module.exports = (on, config) => {
  // data will be stored here
  const data = {};

  // configuring tasks
  on('task', {
    setValue: (params) => {
      const { key, value } = params;
      data[key] = value;
      return value;
    },

    getValue: (params) => {
      const { key } = params;
      return data[key] || null;
    }
  });

  allureWriter(on, config);
  return config;
};