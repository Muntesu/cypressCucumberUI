class LoginPage{

    elements = {
        userInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        errorMessage: () => cy.get('h3[data-test="error"]')
    }

    navigateToLoginPage() {
        cy.visit('/')
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