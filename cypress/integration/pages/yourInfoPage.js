class YourInfoPage {

    elements = {
        yourInfoHeader: () => cy.get('.title'),
        firstNameInput: () => cy.get('#first-name'),
        lastNameInput: () => cy.get('#last-name'),
        postalCodeInput: () => cy.get('#postal-code'),
        continueButton: () => cy.get('#continue')
    }

    validateYourInfoPage() {
        cy.url().should('contains', '/checkout-step-one.html')
        this.elements.yourInfoHeader().should('have.text', 'Checkout: Your Information')
    }

    fillForm() {
        this.elements.firstNameInput().type('John')
        this.elements.lastNameInput().type('Doe')
        this.elements.postalCodeInput().type('10001')
    }

    continueClick() {
        this.elements.continueButton().click()
    }
}

module.exports = new YourInfoPage()