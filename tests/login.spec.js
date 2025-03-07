const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/login-page');

test.describe('Login Functionality Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
  });

  test('Login with valid credentials', async ({ page }) => {
    const login = new LoginPage(page); 
    await login.login('standard_user', 'secret_sauce');
    
    await expect(page).toHaveURL(/inventory.html/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('Login with invalid credentials', async ({ page }) => {
    const login = new LoginPage(page); 
    await login.login('invalid_user', 'wrong_password');
    await expect(await login.getErrorMessage()).toContain('Epic sadface');
  });

});