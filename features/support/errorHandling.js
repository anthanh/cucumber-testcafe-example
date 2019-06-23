/* eslint-disable no-undef, import/no-extraneous-dependencies */
const testcafe = require("testcafe");
const hooks = require("../support/hooks");

exports.addErrorToController = () =>
  testController.executionChain.catch(result => {
    const errAdapter = new testcafe.embeddingUtils.TestRunErrorFormattableAdapter(
      result,
      {
        testRunPhase: testController.testRun.phase,
        userAgent:
          testController.testRun.browserConnection.browserInfo.userAgent
      }
    );
    return testController.testRun.errs.push(errAdapter);
  });

exports.ifErrorTakeScreenshot = resolvedTestController => {
  if (
    hooks.getIsTestCafeError() === true &&
    testController.testRun.opts.takeScreenshotsOnFails === true
  ) {
    if (
      process.argv.includes("--format") ||
      process.argv.includes("-f") ||
      process.argv.includes("--format-options")
    ) {
      return resolvedTestController
        .takeScreenshot()
        .then(() => hooks.getAttachScreenshotToReport());
    }
    return resolvedTestController.takeScreenshot();
  }
  return false;
};
