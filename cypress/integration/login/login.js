import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('Login page is opened', () => loginPage.navigateToLoginPage())

When('I enter the username {string} and the password {string}', (username, password) => {
    loginPage.fillUsernameInput(username)
    loginPage.fillPasswordInput(password)
})

When('I click on the Login button', () => loginPage.clickLoginButton())

Then('Product page opens', () => productPage.validateProductPage())

Then('I see locked user message', () => loginPage.validateLockMessage())

Then('I see wrong credentials message', () => loginPage.validateBadCredsMessage())