class HomePage {
  constructor(page) {
    this.page = page;
    this.productsLink = page.locator("text=Products");
    this.cartLink = page.locator("(//a[@href='/view_cart'])[1]");
  }

  async goToProducts() {
    await this.productsLink.click();
  }

  async goToCart() {
    await this.cartLink.click();
  }
}
module.exports = HomePage;
