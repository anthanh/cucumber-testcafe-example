/* eslint-disable import/no-extraneous-dependencies  */
const { Selector } = require("testcafe");

exports.select = function select(selector) {
  // You can overwrite selector options by using the selector's "with" function
  // In this case, we make a variable holding the test controller reference
  // available to the selector scope under the name "testController"
  return Selector(selector).with({ boundTestRun: testController });
};

exports.selectByDataHook = function selectByDataHook(selector) {
  return Selector(`[data-hook="${selector}"]`).with({
    boundTestRun: testController
  });
};

exports.selectByStartWithDataHook = function selectByDataHook(selector) {
  return Selector(`[data-hook^="${selector}"]`).with({
    boundTestRun: testController
  });
};
