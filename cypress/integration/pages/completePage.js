class CompletePage {

    elements = {
        completeHeader: () => cy.get('.title'),
        backButton: () => cy.get('#back-to-products')
    }

    validateCompletePage() {
        cy.url().should('contains', '/checkout-complete.html')
        this.elements.completeHeader().should('have.text', 'Checkout: Complete!')
    }

    backButtonClick() {
        this.elements.backButton().click()
    }
}

module.exports = new CompletePage()