const { expect } = require("@playwright/test");

class OrderConfirmationPage {
  constructor(page) {
    this.page = page;
    this.placeOrderButton = page.locator('a:has-text("Place Order")');
    this.cardNameInput = page.locator('//input[@name="name_on_card"]');
    this.cardNumberInput = page.locator('//input[@name="card_number"]');
    this.cardCVCInput = page.locator('//input[@name="cvc"]');
    this.cardExpiryMonthInput = page.locator('//input[@name="expiry_month"]');
    this.cardExpiryYearInput = page.locator('//input[@name="expiry_year"]');
    this.confirmOrderButton = page.locator(
      'button:has-text("Pay and Confirm Order")'
    );
    this.orderSuccessMessage = page.locator(
      'p:has-text("Congratulations! Your order has been confirmed!")'
    );
  }

  async confirmOrder() {
    const cardName = "John Doe";
    const cardNumber = "4242 4242 4242 4242";
    const cardCVC = "123";
    const cardExpiryMonth = "12";
    const cardExpiryYear = "2025";
    
    // Fill out the order form
    await this.placeOrderButton.click();
    await this.cardNameInput.fill(cardName);
    await this.cardNumberInput.fill(cardNumber);
    await this.cardCVCInput.fill(cardCVC);
    await this.cardExpiryMonthInput.fill(cardExpiryMonth);
    await this.cardExpiryYearInput.fill(cardExpiryYear);
    await this.confirmOrderButton.click();
    await this.verifyOrderSuccess();
  }

  async verifyOrderSuccess() {
    await expect(this.orderSuccessMessage).toBeVisible();
  }
}
module.exports = OrderConfirmationPage;
