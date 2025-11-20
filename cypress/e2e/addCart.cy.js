import productsPage from '../pages/product';

describe('Add to Cart Scenarios', () => {

  beforeEach(() => {
    cy.login();
  });
  // Add single product to cart
  it('adds a single product to the cart', () => {
    productsPage.addItemByIndex(0);
    productsPage.getCartCount().should('contain', 1);
    // Verify button text changes to 'Remove'
    productsPage.getProductByIndex(0)
      .find('button')
      .should('have.text', 'Remove');
  });
   // Add multiple products to cart
  it('adds multiple products', () => {
    productsPage.addItemByIndex(0);
    productsPage.addItemByIndex(1);
    productsPage.getCartCount().should('contain', 2);
  });
  // Verify items in cart page for one item
  it('verifies items appear in cart page', () => {
    productsPage.addItemByIndex(0);
    productsPage.getCartCount().should('contain', 1);
    productsPage.goToCart();
    cy.url().should('contain', '/cart.html');
    cy.get('.cart_item').should('have.length', 1);
  });

});
