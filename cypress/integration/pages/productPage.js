class ProductPage {

    elements = {
        productHeader: () => cy.get('.title'),
        addBackPackButtton: () => cy.get('#add-to-cart-sauce-labs-backpack'),
        cartIcon: () => cy.get('.shopping_cart_link'),
        cartCounter: () => cy.get('.shopping_cart_badge')
    }

    validateProductPage() {
        cy.url().should('contains', '/inventory.html')
    }

    addBackpack() {
        this.elements.addBackPackButtton().click()
    }

    cartIconClick() {
        this.elements.cartIcon().click()
    }

    cartIsEmpty() {
        this.elements.cartCounter().should('not.exist')
    }
}

module.exports = new ProductPage()