/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

//Your test-case glue-code should be here :)

Given('I navigate to the Add Asset page', () => {
    cy.visit("/add")
})

When('the user input asset {string}', (assetName) => {
    cy.getByTestId("asset-name")
        .click()
        .type(assetName)
    cy.get('button').contains('Send').click()
})

Then('the user should get error {string}', (error) => {
    cy.getByTestId("asset-name")
        .invoke('prop', 'validationMessage')
        .should('eq', error)
})

When('the user doesnt input any asset name', () => {
    cy.get('button').contains('Send').click()
})

Then('the user should get message popup {string}', (messsage) => {
    cy.contains(messsage).should('be.visible')
    cy.contains('Close').click()
})

