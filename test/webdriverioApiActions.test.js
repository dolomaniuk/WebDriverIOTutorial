internetPage = require("../pages/internet.page");

describe.skip("WebdriverIO API Actions", () => {
  it("should hover on figure 1", () => {
    internetPage.clickOnLink("Hovers");
    internetPage.hoverOnFigure(1);
    assert.equal("name: user1", internetPage.getFigureDetailsText(1));
  });

  it("should hover on figure 3", () => {
    internetPage.clickOnLink("Hovers");
    internetPage.hoverOnFigure(3);
    assert.equal("name: user3", internetPage.getFigureDetailsText(3));
  });

  it("should send keyboard value Backspace", () => {
    internetPage.clickOnLink("Key Presses");
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Backspace");
    assert.equal("You entered: BACK_SPACE", internetPage.getResultText());
  });

  it("should send keyboard value Tab", () => {
    internetPage.clickOnLink("Key Presses");
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Tab");
    assert.equal("You entered: TAB", internetPage.getResultText());
  });

  it("should send keyboard value Shift", () => {
    internetPage.clickOnLink("Key Presses");
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Shift");
    assert.equal("You entered: SHIFT", internetPage.getResultText());
  });
});

// exception moveTo() without arguments throws out of bounds error
describe("Scroll to Element", () => {
  it("should scroll to the footer", () => {
    browser.url("/");
    // internetPage.pageHeader.waitForDisplayed({ timeout: 1000, reverse: true }); //element ("h1.heading") still displayed after 1000ms
    internetPage.pageHeader.waitForDisplayed();
    internetPage.scrollToPageFooter();
    assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
  });
});
