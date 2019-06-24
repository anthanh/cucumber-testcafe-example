const { select } = require("../support/utils");

class PepeHome {
  constructor() {
    this.pageName = "Home";
    this.url = "https://www.pepephone.com/";
  }

  selectOfferBanner() {
    return select(".tarifaCardContainer:nth-child(1) a");
  }

  selectMainBanner() {
    return select(".bravo-banners a");
  }

  selectBanner(type) {
    if (type === "main-banner") {
      return this.selectMainBanner();
    }
    if (type === "offer-banner") {
      return this.selectOfferBanner();
    }
    console.warn("not implemented");
  }

  async navigate() {
    await testController.navigateTo(this.url);
  }

  async clickBanner(type) {
    await testController.click(this.selectBanner(type));
  }
}

exports.PepeHome = PepeHome;
