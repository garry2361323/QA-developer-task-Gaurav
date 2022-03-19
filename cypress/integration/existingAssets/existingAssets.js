/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import ExistingAssetPage from "../../pages/existingAssetsPage";

When('the user select {string} rows', (rows) => {
    ExistingAssetPage.select_show_enteries(rows)
})

Then('the user should be able to see less then or equals to {int} records', (rows) => {
    ExistingAssetPage.verify_records_in_table(rows)
})

