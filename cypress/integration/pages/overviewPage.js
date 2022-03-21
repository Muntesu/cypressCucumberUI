class OverviewPage {

    elements = {
        overviewHeader: () => cy.get('.title'),
        finishButton: () => cy.get('#finish')
    }

    validateOverviewPage() {
        cy.url().should('contains', '/checkout-step-two.html')
        this.elements.overviewHeader().should('have.text', 'Checkout: Overview')
    }

    finishButtonClick() {
        this.elements.finishButton().click()
    }
}

module.exports = new OverviewPage()