/* eslint-disable import/no-extraneous-dependencies  */
import { When, Given, Then } from "cucumber";
import { book } from "../pages/book";

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
