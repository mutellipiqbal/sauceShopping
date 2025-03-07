const { test as base } = require('@playwright/test');
const { loginPage } = require('../pages/login-page');

// Extend the basic test to include global login functionality
exports.test = base.extend({
  // Auto-login before tests when needed
  authenticatedPage: async ({ page }, use) => {
    await page.goto('https://www.saucedemo.com/');
    const login = new loginPage(page);
    await login.login('standard_user', 'secret_sauce');
    
    // Use the authenticated page in the test
    await use(page);
  },
});