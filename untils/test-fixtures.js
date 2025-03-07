/**
 * Helper function that logs in with specified credentials
 * Can be used across test files to reduce duplication
 */
async function loginWithCredentials(page, username, password) {
    await page.goto('https://www.saucedemo.com/');
    const login = new loginPage(page);
    await login.login(username, password);
    return login;
  }
  
  /**
   * Test fixtures that can be shared across tests
   */
  const testFixtures = {
    standardUserLogin: async ({ page }) => {
      return await loginWithCredentials(page, 'standard_user', 'secret_sauce');
    },
    
    problemUserLogin: async ({ page }) => {
      return await loginWithCredentials(page, 'problem_user', 'secret_sauce');
    },
    
    lockedOutUserLogin: async ({ page }) => {
      return await loginWithCredentials(page, 'locked_out_user', 'secret_sauce');
    }
  };
  
  module.exports = { testFixtures, loginWithCredentials };