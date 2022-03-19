Feature: Search Existing Asset feature

    Background:
        Given the user navigate to the Existing Asset page

    @smoke
    Scenario: Examine show entries
        When the user select "10" rows
        Then the user should be able to see less then or equals to 10 records



