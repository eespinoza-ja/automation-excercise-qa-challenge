class ProductDetailPage {
  constructor(page) {
    this.page = page;
    this.quantityInput = page.locator("#quantity");
    this.addToCartButton = page.locator('button:has-text("Add to Cart")');
    this.checkoutButton = page.locator('(//a[@href="/view_cart"])[2]');
  }

  async setRandomQuantity() {
    const quantity = Math.floor(Math.random() * 20) + 1;
    await this.quantityInput.fill(`${quantity}`);
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.click();
  }
}
module.exports = ProductDetailPage;
