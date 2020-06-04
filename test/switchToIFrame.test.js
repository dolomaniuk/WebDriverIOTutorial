internetPage = require("../pages/internet.page");

describe("Switch to Iframe", () => {
  it("should switch to iframe", () => {
    internetPage.clickOnLink("WYSIWYG Editor");
    internetPage.iframe.waitForDisplayed();
    browser.switchToFrame(internetPage.iframe);
    internetPage.sendTextToFrame("This is the text in the frame");
    assert.equal(
      "This is the text in the frame",
      internetPage.iframeBody.getText()
    );
  });
});
