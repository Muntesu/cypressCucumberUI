class YourCartPage {

    elements = {
        yourCartHeader: () => cy.get('.title'),
        checkoutButton: () => cy.get('#checkout')
    }

    validateYourCartPage() {
        cy.url().should('contains', '/cart.html')
        this.elements.yourCartHeader().should('have.text', 'Your Cart')
    }

    checkoutClick() {
        this.elements.checkoutButton().click()
    }
}

module.exports = new YourCartPage()