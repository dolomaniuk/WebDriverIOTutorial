internetPage = require("../pages/internet.page");

describe("WebdriverIO API Actions", () => {
  it("should hover on figure 1", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(1);
    assert.equal("name: user1", internetPage.getFigureDetailsText(1));
  });

  it("should hover on figure 3", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(3);
    assert.equal("name: user3", internetPage.getFigureDetailsText(3));
  });

  it("should send keyboard value Backspace", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Backspace");
    assert.equal("You entered: BACK_SPACE", internetPage.getResultText());
  });

  it("should send keyboard value Tab", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Tab");
    assert.equal("You entered: TAB", internetPage.getResultText());
  });

  it("should send keyboard value Shift", () => {
    browser.url(`${browser.options.baseUrl}/key_presses`);
    internetPage.clickTarget();
    internetPage.sendKeysToTarget("Shift");
    assert.equal("You entered: SHIFT", internetPage.getResultText());
  });
});

// exception moveTo() without arguments throws out of bounds error
describe("Scroll to Element", () => {
  it.skip("should scroll to the footer", () => {
    browser.url("/");
    internetPage.pageHeader.waitForDisplayed();
    internetPage.scrollToPageFooter();
    assert.equal(true, internetPage.pageFooter.isDisplayedInViewport());
  });
});
