class ProductsPage {
  constructor(page) {
    this.page = page;
    this.thirdProduct = page.locator('//a[@href="/product_details/3"]');
  }

  async viewThirdProductDetails() {
    await this.thirdProduct.click();
  }
}
module.exports = ProductsPage;
