/// <reference types="cypress" />

import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AddAssetPage from "../../pages/addAssetsPage";
import ExistingAssetPage from "../../pages/existingAssetsPage";
import randomAssetNumber from "../../support/utils/randomAssetNumber";
let assetNumber = randomAssetNumber()

When('the user input valid and unique asset for e2e', () => {
    AddAssetPage.enter_assetNumber(assetNumber)
    AddAssetPage.send() 
})

When('the user search for asset', () => {
    ExistingAssetPage.search_for_asset(assetNumber)
})

Then('the user should be able to find the asset', () => {
    ExistingAssetPage.verify_search_asset(assetNumber)
})