/// <reference types="cypress" />



var AddAssetPage = {

    enter_assetNumber: function (assetNumber) {
        cy.getByTestId("asset-name")
            .click()
            .type(assetNumber)
    },

    send: function () {
        cy.get('button').contains('Send').click()
    },

    close: function () {
        cy.contains('Close').click()
    },

    clear: function () {
        cy.getByTestId("asset-name").clear()
    },

    verify_validation_message: function (error) {
        cy.getByTestId("asset-name")
            .invoke('prop', 'validationMessage')
            .should('eq', error)
    },

    verify_popup_message: function (messsage) {
        cy.contains(messsage).should('be.visible')
        cy.contains('Close').click()
    },

}

export default AddAssetPage