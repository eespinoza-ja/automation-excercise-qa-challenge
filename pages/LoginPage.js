const { faker } = require("@faker-js/faker");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.signupNameInput = page.locator('//input[@name="name"]');
    this.signupEmailInput = page.locator('(//input[@name="email"])[2]');
    this.signupButton = page.locator('button:has-text("Signup")');
    this.passwordInput = page.locator('//input[@id="password"]');
    this.firstNameInput = page.locator('//input[@id="first_name"]');
    this.lastNameInput = page.locator('//input[@id="last_name"]');
    this.lastAddressInput = page.locator('//input[@id="address1"]');
    this.lastStateInput = page.locator('//input[@id="state"]');
    this.lastCityInput = page.locator('//input[@id="city"]');
    this.lastZipcodeInput = page.locator('//input[@id="zipcode"]');
    this.lastMobileNumberInput = page.locator('//input[@id="mobile_number"]');
    this.signupFormSubmit = page.locator('button:has-text("Create Account")');
    this.continueButton = page.locator('//a[@data-qa="continue-button"]');
    this.logoutButton = page.locator('a:has-text("Logout")');
  }

  async registerNewUser() {
    const firstName = faker.name.firstName();
    const lastName = faker.name.lastName();
    const email = faker.internet.email();
    const password = faker.internet.password();
    const address = faker.address.streetAddress();
    const state = faker.address.state();
    const city = faker.address.city();
    const zipcode = faker.address.zipCode();
    const mobileNumber = faker.phone.number();

    // Fill out the signup form
    await this.signupNameInput.fill(firstName);
    await this.signupEmailInput.fill(email);
    await this.signupButton.click();

    // Complete the registration form
    await this.passwordInput.fill(password);
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.lastAddressInput.fill(address);
    await this.lastStateInput.fill(state);
    await this.lastCityInput.fill(city);
    await this.lastZipcodeInput.fill(zipcode);
    await this.lastMobileNumberInput.fill(mobileNumber);
    await this.signupFormSubmit.click();
    await this.continueButton.click();
  }

  async logout() {
    await this.logoutButton.click();
  }
}
module.exports = LoginPage;
