Feature: e2e Asset feature testing

    Background:
        Given the user navigate to the Add Asset page

    @smoke
    Scenario: e2e Asset feature testing
        When the user input valid and unique asset for e2e
        Then the user should get message popup "Sucssess"
        When the user navigate to the Existing Asset page
        And the user search for asset
        Then the user should be able to find the asset