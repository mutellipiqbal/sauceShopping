const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login-page');
const ProductPage = require('../pages/product-page');
const CartPage = require('../pages/cart-page');


test.describe('Cart Persistence Test', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new LoginPage(page);
    await login.login('standard_user', 'secret_sauce');
  });

  test('Items should be loaded after shopping bag is refreshed!', async ({ page }) => {
    const product = new ProductPage(page);
    await product.addProductToCart(0); 
    await product.addProductToCart(1);
    
    const initialCartCount = await page.locator('.shopping_cart_badge').textContent();
    
    await page.reload();
    
    await expect(page.locator('.shopping_cart_badge')).toHaveText(initialCartCount);
    
    const cart = new CartPage(page);
    await cart.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(Number(initialCartCount));
  });
  
  test('Items should remain in cart after navigating forward and back', async ({ page }) => {
    const product = new ProductPage(page);
    await product.addProductToCart(0); 
    await product.addProductToCart(1);
    
    const initialCartCount = await page.locator('.shopping_cart_badge').textContent();
    
    await page.click('.shopping_cart_link');
    await page.click('#continue-shopping');
    
    await expect(page.locator('.shopping_cart_badge')).toHaveText(initialCartCount);
    
    const cart = new CartPage(page);
    await cart.goToCart();
    await expect(page.locator('.cart_item')).toHaveCount(Number(initialCartCount));
  });
});