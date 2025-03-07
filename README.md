Sauce E-commerce Test Automation Framework
This project contains automated test cases for the e-commerce functionality on https://www.saucedemo.com/ using Playwright.
Test Scenarios

Login Test (Positive & Negative Cases)

Valid Login: Using standard credentials to verify successful access
Invalid Login: Attempt login with incorrect credentials and verify error message


Product Purchase Flow Test

Log in with valid credentials
Add a product to the cart
Navigate to the cart and proceed to checkout
Fill out the checkout form with valid details
Complete the purchase and verify confirmation message


Cart Persistence Test

Add multiple items to the cart
Refresh the page or navigate away and back
Verify that the items remain in the cart



Project Structure
Copy├── pages/              # Page Object Models
│   ├── login-page.js   # Login page interactions
│   ├── product-page.js # Product listing page interactions
│   ├── cart-page.js    # Shopping cart interactions
│   └── checkout-page.js # Checkout process interactions
├── tests/              # Test specifications
│   ├── login.spec.js   # Login test scenarios
│   ├── purchase-flow.spec.js # Purchase flow test scenarios
│   └── cart-persistence.spec.js # Cart persistence test scenarios
├── utils/              # Utilities and helpers
│   ├── base-test.js    # Base test setup with authentication
│   ├── test-fixtures.js # Reusable test fixtures 
│   └── test-helpers.js # Helper functions for tests
├── playwright.config.js # Playwright configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
Setup Instructions

Install Dependencies

bashCopynpm install

Install Browsers

bashCopynpx playwright install

Run Tests

bashCopy# Run all tests
npx playwright test

# Run specific test file
npx playwright test login.spec.js

# Run tests with UI mode
npx playwright test --ui

# Run tests in headed mode
npx playwright test --headed
Global Login Functionality
The framework implements login as a global functionality in multiple ways:

Using Base Test Extension: The base-test.js extends Playwright's test object with an authenticated page fixture
Using Test Fixtures: The test-fixtures.js provides reusable login functions for different user types
Using beforeEach Hook: Each test file implements a beforeEach hook that handles authentication

This approach allows for flexibility and reusability of login functionality across all tests.
Test Reports
After running the tests, HTML reports will be generated in the playwright-report directory. Open the report using:
bashCopynpx playwright show-report
CI/CD Integration
This test suite can be integrated with CI/CD pipelines. Example GitHub Actions workflow is included in the .github/workflows directory.
Best Practices Implemented

Page Object Model: Separating UI elements and interactions into page classes
Test Isolation: Each test scenario in its own file for better organization
Shared Fixtures: Reusable fixtures for common setup scenarios
Helper Functions: Utilities to reduce code duplication
Cross-browser Testing: Tests run across Chromium, Firefox, and WebKit
Visual Reporting: HTML reports with screenshots and videos on failure

Folder Structure Explanation

pages/: Contains all Page Object Models that encapsulate UI interactions
tests/: Contains separate test files for each major functionality
utils/: Contains helper utilities, fixtures, and base test extensions
