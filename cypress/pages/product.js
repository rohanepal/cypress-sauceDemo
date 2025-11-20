class ProductsPage {
  
  // Locators
  inventoryItem = '.inventory_item';
  addToCartButton = 'button';
  cartBadge = '.shopping_cart_badge';
  cartLink = '.shopping_cart_link';

  // Get all product items
  getAllProducts() { return cy.get(this.inventoryItem); }

  // Get product by index
  getProductByIndex(index) {return cy.get(this.inventoryItem).eq(index);}

  // Add item to cart by index
  addItemByIndex(index) {
    this.getProductByIndex(index).find(this.addToCartButton).click();}

  // Remove item by index
  removeItemByIndex(index) { this.getProductByIndex(index).find(this.addToCartButton).click();}

  // Click cart
  goToCart() { return cy.get(this.cartLink).click(); }

  // Read cart count
  getCartCount() { return cy.get(this.cartBadge);}
}

export default new ProductsPage();

