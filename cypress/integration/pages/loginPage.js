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
}

module.exports = new LoginPage()