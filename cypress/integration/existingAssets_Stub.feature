Feature: Search Existing Asset feature with stub

    Background:
        Given the user navigate to the Existing Asset page with stub

    @smoke
    Scenario: Search for an Asset
        When the user search for asset
        Then the user should be able to find the asset

    @smoke
    Scenario Outline: Validate show entries
        When the user select "<Rows>" rows
        Then the user should be able to see <Rows> records in table
        Examples:
            | Rows |
            | 10   |
            | 20   |
            | 50   |
            | 100  |
    @smoke
    Scenario: Validate sorting on Asset Name
        When the user select sorting on asset
        Then the user should be able to get sorted data in asset table

