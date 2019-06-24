/* eslint-disable import/no-extraneous-dependencies  */
const { When, Given, Then } = require("cucumber");
const { book } = require("../pages/book");

Given("go to pepe home", async () => {
  await book.pepeHome.navigate();
});

When("clicks on {string}", async type => {
  await book.pepeHome.clickBanner(type);
});

Then("checkout is visible", async () => {
  await book.pepeCheckout.isReady();
});
