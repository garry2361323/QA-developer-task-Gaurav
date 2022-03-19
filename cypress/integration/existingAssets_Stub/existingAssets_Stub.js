/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ExistingAssetPage from "../../pages/existingAssetsPage";

Given('the user navigate to the Existing Asset page with stub', () => {
    ExistingAssetPage.activate_stub()
})

When('the user search for asset', () => {
    ExistingAssetPage.search_for_asset('ISIN0000000070')
})

Then('the user should be able to find the asset', () => {

    ExistingAssetPage.verify_search_asset('ISIN0000000070')
})

When('the user select {string} rows', (rows) => {
    ExistingAssetPage.select_show_enteries(rows)
    // cy.get("option").each(($ele, i) => {
    //     console.log($ele.text())
    // })
})

Then('the user should be able to see {int} records in table', (rows) => {
    ExistingAssetPage.verify_records_in_table(rows)
})

When('the user select sorting on asset', () => {
    ExistingAssetPage.sort_asset()
})

Then('the user should be able to get sorted data in asset table', () => {
    ExistingAssetPage.verify_asset_sorting()
})
