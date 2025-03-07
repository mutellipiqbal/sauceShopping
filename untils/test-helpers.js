// File: utils/test-helpers.js
const { expect } = require('@playwright/test');

/**
 * Helper functions to perform common test operations
 */
class TestHelpers {
  /**
   * Adds a product to cart and verifies it was added
   */
  static async addProductAndVerify(productPage, productIndex) {
    const initialCount = await this.getCartCount(productPage.page);
    await productPage.addProductToCart(productIndex);
    
    // Verify cart count increased
    const newCount = await this.getCartCount(productPage.page);
    const expectedCount = initialCount ? Number(initialCount) + 1 : 1;
    await expect(newCount).toBe(String(expectedCount));
    
    return newCount;
  }
  
  /**
   * Gets current cart count from badge
   */
  static async getCartCount(page) {
    try {
      return await page.locator('.shopping_cart_badge').textContent();
    } catch (error) {
      // No badge appears when cart is empty
      return '0';
    }
  }
  
  /**
   * Completes a standard checkout process
   */
  static async completeCheckout(page, checkoutPage, firstName, lastName, zipCode) {
    await checkoutPage.fillCheckoutInfo(firstName, lastName, zipCode);
    await checkoutPage.continueToNextStep();
    await checkoutPage.completePurchase();
    
    // Verify confirmation
    await expect(page.locator('.complete-header')).toBeVisible();
    await expect(page.locator('.complete-header')).toContainText('THANK YOU FOR YOUR ORDER');
  }
}

module.exports = { TestHelpers };