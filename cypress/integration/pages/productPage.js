class ProductPage {

    elements = {
        productHeader: () => cy.get('.title')
    }

    validateProductPage() {
        cy.url().should('contains', '/inventory.html')
    }
}

module.exports = new ProductPage()