import { LoginPage } from "../pages/loginPage"
import { ProductPage } from "../pages/productPage";
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const loginPage = new LoginPage()
const productPage = new ProductPage()

Given('Login page is opened', () => loginPage.navigateToLoginPage())

Then('I enter the username {string} and the password {string}', (username, password) => {
    loginPage.fillUsernameInput(username)
    loginPage.fillPasswordInput(password)
})

Then('I click on the Login button', () => loginPage.clickLoginButton())

When('Product page opens', () => productPage.validateProductPage())