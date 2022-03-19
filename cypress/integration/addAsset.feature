Feature: Add Asset feature

    Background:
        Given the user navigate to the Add Asset page

    @smoke
    Scenario Outline: Add invalid asset
        When the user input invalid asset "<AssetName>"
        Then the user should get error "Please match the requested format."
        Examples:
            | AssetName        |
            | isin0000000051   |
            | ISIN000000000076 |
            | 0000000048ISIN   |


    @smoke
    Scenario: Add no asset
        When the user doesnt input any asset name
        Then the user should get error "Please fill out this field."

    @smoke
    Scenario: Add valid asset
        When the user input valid and unique asset
        Then the user should get message popup "Sucssess"

    @smoke
    Scenario: Add duplicate asset
        When the user input duplicate asset
        Then the user should get message popup "Asset name should be unique. Assert with this name already exists"
