/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I navigate to the Existing Asset page', () => {
    cy.visit("/assets")
})

When('the user search for asset {string}', (assetName) => {
    cy.get("Input[placeholder='Search']", { timeout: 20000 }).type(assetName)
})

Then('the user should be able to find the asset {string}', (assetName) => {
    cy.contains('[data-test="datatable-table"]', assetName).should("contain", assetName)
})

