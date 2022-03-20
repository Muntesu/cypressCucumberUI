class LoginPage{

    elements = {
        userInput: () => cy.get('#user-name'),
        passwordInput: () => cy.get('#password'),
        loginButton: () => cy.get('#login-button'),
        lockMessage: () => cy.get('h3[data-test="error"]')
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
        this.elements.lockMessage().should('be.visible')
        this.elements.lockMessage().should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
    }
}

module.exports = new LoginPage()