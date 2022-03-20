export class ProductPage {
    validateProductPage() {
        cy.url().should('contains', '/inventory.html')
    }
}