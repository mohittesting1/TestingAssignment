// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import 'cypress-mochawesome-reporter/register';
import addContext from 'mochawesome/addContext'
import "cypress-real-events/support";
import './commands'
import '@shelex/cypress-allure-plugin';
require('cypress-xpath')
import 'cypress-file-upload';
const chaiSorted = require('chai-sorted');
chai.use(chaiSorted);

Cypress.on('test:after:run', (test, config) => {
    if (test.state === 'failed') {
        addContext({ test }, { title: "Screenshot", value: 'assets/${Cypress.spec.name}/${runnable.parent.title} -- ${test.title} (failed).png' })
    }
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
})

module.exports = (on, config) => {
    require('cypress-mochawesome-reporter/plugin')(on);
};

before(function (){
    cy.launchApplication();
});