class LoginPage{

    standartUserName = 'standard_user'
    standartUserPass = 'secret_sauce'

    elements = {
        userInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    navigateToLoginPage() {
        try {
            cy.visit('/')
        } catch (error) {
            console.log(error)
        }
    }

    fillUsernameInput(username) {
        this.elements.userInput().type(username)
    }

    fillPasswordInput(password) {
        this.elements.passwordInput().type(password)
    }

    clickLoginButton() {
        this.elements.loginButton().click()
    }

    login() {
        this.navigateToLoginPage()
        this.fillUsernameInput(this.standartUserName)
        this.fillPasswordInput(this.standartUserPass)
        this.clickLoginButton()
    }

    validateLockMessage() {
        this.elements.errorMessage().should('be.visible')
        this.elements.errorMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }

    validateBadCredsMessage() {
        this.elements.errorMessage().should('be.visible')
        this.elements.errorMessage().should('have.text', 'Epic sadface: Username and password do not match any user in this service')
    }
}

module.exports = new LoginPage()