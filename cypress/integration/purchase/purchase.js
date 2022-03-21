import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"
import yourCartPage from "../pages/yourCartPage"
import yourInfoPage from "../pages/yourInfoPage"
import overviewPage from "../pages/overviewPage"
import completePage from "../pages/completePage"
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I logged in as standart user', () => loginPage.login())

Then('I see Product page', () => productPage.validateProductPage())

When('I add a backpack to the shopping cart', () => productPage.addBackpack())

When('I click a shopping cart icon', () => productPage.cartIconClick())

Then('I see Your cart page', () => yourCartPage.validateYourCartPage())

When('I click Checkout button', () => yourCartPage.checkoutClick())

Then('I see Your Information page', () => yourInfoPage.validateYourInfoPage())

When('I fill information form', () => yourInfoPage.fillForm())

When('I click Continue button', () => yourInfoPage.continueClick())

Then('I see Overview page', () => overviewPage.validateOverviewPage())

When('I click finish button', () => overviewPage.finishButtonClick())

Then('I see Checkout Complete page', () => completePage.validateCompletePage())

When('I click Back Home button', () => completePage.backButtonClick())

Then('Shoping cart is empty', () => productPage.cartIsEmpty())