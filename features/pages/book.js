const { Home } = require("./home.page");
const { PepeHome } = require("./pepe-home.page");
const { PepeCheckout } = require("./pepe-checkout.page");

exports.book = {
  home: new Home(),
  pepeHome: new PepeHome(),
  pepeCheckout: new PepeCheckout()
};
