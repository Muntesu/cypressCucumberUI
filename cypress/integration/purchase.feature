Feature: Purchase Flow

Scenario: Purchase a backpack
    Given I logged in as standart user
    Then I see Product page
    When I add a backpack to the shopping cart
    And I click a shopping cart icon
    Then I see Your cart page
    When I click Checkout button
    Then I see Your Information page
    When I fill information form
    And I click Continue button
    Then I see Overview page
    When I click finish button
    Then I see Checkout Complete page
    When I click Back Home button
    Then I see Product page
    And Shoping cart is empty