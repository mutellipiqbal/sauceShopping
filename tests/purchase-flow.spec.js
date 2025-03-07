// tests/purchase-flow.spec.js
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login-page');       
const ProductPage = require('../pages/product-page');  
const CartPage = require('../pages/cart-page');         
const CheckoutPage = require('../pages/checkout-page'); 

test.describe('Product Purchase Flow Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new LoginPage(page);                 
    await login.login('standard_user', 'secret_sauce');
  });

  test('Complete purchase flow', async ({ page }) => {
    const product = new ProductPage(page);           
    await product.addProductToCart(0);
    const cart = new CartPage(page);             
    await cart.goToCart();
    await cart.proceedToCheckout();
    
    const checkout = new CheckoutPage(page);         
    await checkout.fillCheckoutInfo('John', 'Doe', '12345');
    await checkout.continueToNextStep();
    await checkout.completePurchase();
    
    await expect(page.locator('.complete-header')).toBeVisible();
    await expect(page.locator('.complete-header')).toContainText('Thank you for your order!');
  });
});