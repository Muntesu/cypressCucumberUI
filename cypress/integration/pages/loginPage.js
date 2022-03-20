export class LoginPage {
    navigateToLoginPage() {
        cy.visit('/')
    }

    fillUsernameInput(username) {
        cy.get('#user-name').type(username)
    }

    fillPasswordInput(password) {
        cy.get('#password').type(password)
    }

    clickLoginButton() {
        cy.get('#login-button').click()
    }
}