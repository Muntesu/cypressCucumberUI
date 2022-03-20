Feature: Login Feature

Scenario: Navigate to main page and login with valid user
    Given Login page is opened
    When I enter the username "standard_user" and the password "secret_sauce"
    And I click on the Login button
    Then Product page opens

Scenario: Navigate to main page and login with locked user
    Given Login page is opened
    When I enter the username "locked_out_user" and the password "secret_sauce"
    And I click on the Login button
    Then I see locked user message

Scenario: Navigate to main page and login with wrong credentials
    Given Login page is opened
    When I enter the username "user" and the password "password"
    And I click on the Login button
    Then I see wrong credentials message