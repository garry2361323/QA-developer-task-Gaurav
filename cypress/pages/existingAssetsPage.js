/// <reference types="cypress" />

var ExistingAssetPage = {

    search_for_asset: function (assetNumber) {
        cy.get("Input[placeholder='Search']", { timeout: 20000 }).type(assetNumber)
    },

    verify_search_asset: function (assetNumber) {
        cy.contains('[data-test="datatable-table"]', assetNumber).should("contain", assetNumber)
    },

    select_show_enteries: function (rows) {
        cy.get("select").select(rows)
    },

    verify_records_in_table: function (rows) {
        cy.get("tbody[data-test='table-body']").find("tr").should("have.length.at.most", rows)
    },

    activate_stub: function (rows) {
        cy.intercept('GET', Cypress.env('api') + 'getAssets', { fixture: 'existingAssets_stub.json' })
        cy.visit("/assets")
    },

    sort_asset: function () {
        cy.get('.sorting').click()
    },

    verify_asset_sorting: function () {
        cy.get("tbody").find("tr").should(($rows) => {
            const asset = Cypress._.map($rows, ($r) => $r.innerText)
            const sorted = Cypress._.sortBy(asset)
            expect(sorted).to.deep.equal(asset)
        })
    }

}

export default ExistingAssetPage