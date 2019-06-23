/* eslint-disable import/no-extraneous-dependencies  */
const { When, Given, Then } = require("cucumber");
const { book } = require("../pages/book");

Given("a google homepage", async () => {
  await book.home.navigate();
});

When("user type {string}", async text => {
  await book.home.search(text);
});

When("clicks on content type {string}", async type => {
  await book.home.setContentType(type);
});

Then("return content related to term", async () => {
  await book.home.contentIsPresent();
});

Then("return images related to term", async () => {
  await book.home.imagesIsPresent();
});
