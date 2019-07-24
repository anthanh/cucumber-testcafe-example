import { testController } from "../support/world";
import { select } from "../support/utils";

export class Home {
  constructor() {
    this.url = "https://google.com";
  }

  selectSearchInput() {
    return select('input[type="text"]');
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
    let index;
    switch (type) {
      case "Images":
        index = 2;
        break;
      // TODO: other tabs
      default:
        index = 1;
        break;
    }
    await testController.click(select(`div[role="tab"]:nth-child(${index}) a`));
  }

  async contentIsPresent() {
    await testController.expect(this.selectContent()).ok();
  }

  async imagesIsPresent() {
    await testController.expect(this.selectImages()).ok();
  }
}
