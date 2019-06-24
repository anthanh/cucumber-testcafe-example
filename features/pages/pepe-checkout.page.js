const { select } = require("../support/utils");

class PepeCheckout {
  constructor() {
    this.pageName = "Checkout";
  }

  selectCheckoutTitle() {
    return select("h3").withText("Consulta tu cobertura");
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

  async isReady() {
    await testController.expect(this.selectCheckoutTitle()).ok();
  }
}

exports.PepeCheckout = PepeCheckout;
