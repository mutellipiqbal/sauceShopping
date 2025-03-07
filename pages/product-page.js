class ProductPage {
  constructor(page) {
    this.page = page;
    this.productItems = page.locator('.inventory_item');
    this.addToCartButtons = page.locator('button[id^="add-to-cart"]');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async addProductToCart(productIndex) {
    await this.addToCartButtons.nth(productIndex).click();
  }

  async goToCart() {
    await this.cartIcon.click();
  }
}

module.exports = ProductPage;;