const { select } = require("../support/utils");

class Home {
  constructor() {
    this.url = "https://google.com";
  }

  selectSearchInput() {
    return select('input[title="Search"]');
  }

  selectContent() {
    return select("a h3");
  }

  selectImages() {
    return select("a > .rg_i");
  }

  async navigate() {
    await testController.navigateTo(this.url);
  }

  async search(text) {
    await testController
      .typeText(this.selectSearchInput(), text, { paste: true })
      .pressKey("enter");
  }

  async setContentType(type) {
    await testController.click(select('div[role="tab"]').withText(type));
  }

  async contentIsPresent() {
    await testController.expect(this.selectContent()).ok();
  }

  async imagesIsPresent() {
    await testController.expect(this.selectImages()).ok();
  }
}

exports.Home = Home;
