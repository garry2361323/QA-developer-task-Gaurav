/// <reference types="cypress" />

import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../../pages/addAssetsPage";

Given('the user navigate to the Add Asset page', () => {
    cy.visit("/add")
})

Given('the user navigate to the Existing Asset page', () => {
    cy.visit("/assets")
})

Then('the user should get message popup {string}', (messsage) => {
    AddAssetPage.verify_popup_message(messsage)
})