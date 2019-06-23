/* eslint-disable import/no-extraneous-dependencies */
const { setWorldConstructor } = require("cucumber");
const base64Img = require("base64-img");
const testControllerHolder = require("./testControllerHolder");

function CustomWorld({ attach, parameters }) {
  this.waitForTestController = testControllerHolder.get().then(async tc => {
    testController = tc;
    return tc;
  });

  this.attach = attach;

  this.getBrowser = () => {
    if (!parameters.browser) {
      return "chrome";
    }
    return parameters.browser;
  };

  this.addScreenshotToReport = () => {
    if (
      process.argv.includes("--format") ||
      process.argv.includes("-f") ||
      process.argv.includes("--format-options")
    ) {
      return testController
        .takeScreenshot()
        .then(screenshotPath => {
          const imgInBase64 = base64Img.base64Sync(screenshotPath);
          const imageConvertForCuc = imgInBase64.substring(
            imgInBase64.indexOf(",") + 1
          );
          return attach(imageConvertForCuc, "image/png");
        })
        .catch(error => {
          console.warn("The screenshot was not attached to the report", error);
        });
    }
    return new Promise(resolve => {
      resolve(null);
    });
  };

  this.attachScreenshotToReport = pathToScreenshot => {
    const imgInBase64 = base64Img.base64Sync(pathToScreenshot);
    const imageConvertForCuc = imgInBase64.substring(
      imgInBase64.indexOf(",") + 1
    );
    return attach(imageConvertForCuc, "image/png");
  };
}

setWorldConstructor(CustomWorld);
