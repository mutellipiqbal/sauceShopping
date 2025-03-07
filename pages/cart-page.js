class cartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('[data-test="checkout"]');
    this.cartItems = page.locator('.cart_item');
    this.cartIcon = page.locator('.shopping_cart_link');
  }

  async goToCart() {
    await this.cartIcon.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
module.exports = cartPage;
