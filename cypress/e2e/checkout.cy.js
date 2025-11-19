  describe('SauceDemo UI Tests', () => {

   context('Checkout Scenarios', () => {
    beforeEach(() => {
      // Step 1: Log in and add an item to cart
      cy.login()
      // Step 2: Add product and go to cart
      cy.get('.inventory_item').first().find('button').click()
      cy.get('.shopping_cart_link').click()
      // Verify we're on the cart page
      cy.url().should('include', '/cart.html')
      cy.get('.cart_item').should('have.length', 1)
    })
     // Test: Successful checkout flow
    it('completes checkout successfully', () => {
      // Click Checkout
      cy.get('[data-test="checkout"]').click()
      cy.url().should('include', '/checkout-step-one.html')
      // Fill in checkout info
      cy.get('[data-test="firstName"]').type('Rohan')
      cy.get('[data-test="lastName"]').type('Nepal')
      cy.get('[data-test="postalCode"]').type('44600')
      cy.get('[data-test="continue"]').click()
      // Verify checkout overview
      cy.url().should('include', '/checkout-step-two.html')
      cy.get('.summary_info').should('be.visible')
      // Finish checkout
      cy.get('[data-test="finish"]').click()
      // Verify success message
      cy.url().should('include', '/checkout-complete.html')
      cy.get('.complete-header').should('contain.text', 'Thank you for your order!')
    })
  })
})         