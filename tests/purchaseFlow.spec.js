const { test } = require("@playwright/test");
const HomePage = require("../pages/HomePage");
const ProductsPage = require("../pages/ProductsPage");
const ProductDetailPage = require("../pages/ProductDetailPage");
const CartPage = require("../pages/CartPage");
const LoginPage = require("../pages/LoginPage");
const OrderConfirmationPage = require("../pages/OrderConfirmationPage");

test.describe("Product Purchase", () => {
  test("Main purchase flow with registration modal verification", async ({
    page,
  }) => {
    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailPage = new ProductDetailPage(page);
    const cartPage = new CartPage(page);
    const loginPage = new LoginPage(page);
    const orderConfirmationPage = new OrderConfirmationPage(page);

    // Step 1: Navigate to the website
    await page.goto("https://automationexercise.com/");

    // Step 2: Go to the product section
    await homePage.goToProducts();

    // Step 3: Select the third product
    await productsPage.viewThirdProductDetails();

    // Step 4: Set a random quantity and add to cart
    await productDetailPage.setRandomQuantity();
    await productDetailPage.addToCart();

    // Step 5: Proceed to checkout
    await productDetailPage.proceedToCheckout();
    await cartPage.proceedToCheckout();
    await cartPage.goToLoginModal();

    // Step 6: Register a new user
    await loginPage.registerNewUser();

    // Step 7: Confirm the order in the shopping cart
    await homePage.goToCart();
    await cartPage.proceedToCheckout();
    await orderConfirmationPage.confirmOrder();

    // Step 8: Validate that the order has been placed successfully
    await orderConfirmationPage.verifyOrderSuccess();

    // Step 9: Log out
    await loginPage.logout();
  });
});
