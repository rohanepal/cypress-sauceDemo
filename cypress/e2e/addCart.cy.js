describe('SauceDemo UI Tests', () => {

  context('Add to Cart Scenarios', () => {

    // Login once before each test using custom command
    beforeEach(() => {
      cy.login()
    })

    it('adds a single product to the cart', () => {
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('.inventory_item').first().find('button').should('have.text', 'Remove')
    })

    it('adds multiple products to the cart', () => {
      cy.get('.inventory_item').eq(0).find('button').click()
      cy.get('.inventory_item').eq(1).find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '2')
    })

    it('verifies items appear in the cart page', () => {
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_badge').should('contain', '1')
      cy.get('.shopping_cart_link').click()
      cy.url().should('include', '/cart.html')
      cy.get('.cart_item').should('have.length', 1)
    })

  })

})
