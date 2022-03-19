/// <reference types="cypress" />

import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../../pages/addAssetsPage";
import randomAssetNumber from "../../support/utils/randomAssetNumber";

When('the user input valid and unique asset', () => {
    cy.log("Asset Number: " + randomAssetNumber())
    AddAssetPage.enter_assetNumber(randomAssetNumber())
    AddAssetPage.send()
})

When('the user input duplicate asset', () => {
    let assetNumber = randomAssetNumber()
    AddAssetPage.enter_assetNumber(assetNumber)
    AddAssetPage.send()
    AddAssetPage.close()
    AddAssetPage.clear()
    AddAssetPage.enter_assetNumber(assetNumber)
    AddAssetPage.send()
})

When('the user input invalid asset {string}', (assetName) => {
    AddAssetPage.enter_assetNumber(assetName)
    AddAssetPage.send()
})

Then('the user should get error {string}', (error) => {
    AddAssetPage.verify_validation_message(error)
})

When('the user doesnt input any asset name', () => {
    AddAssetPage.send()
})

