class CartPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.locator('a:has-text("Proceed To Checkout")');
    this.loginModal = page.locator('(//a[@href="/login"])[2]');
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }

  async goToLoginModal() {
    await this.loginModal.click();
  }
}
module.exports = CartPage;
