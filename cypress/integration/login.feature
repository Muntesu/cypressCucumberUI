Feature: Login

Scenario: Navigate to main page and login
  Given Login page is opened
  When I enter username and password
  And I click Login button
  Then Product page opens