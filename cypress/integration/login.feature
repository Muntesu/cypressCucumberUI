Feature: Login Feature

Scenario: Navigate to main page and login
    Given Login page is opened
    When I enter the username "standard_user" and the password "secret_sauce"
    And I click on the Login button
    Then Product page opens