internetPage = require("../pages/internet.page");

describe("WebdriverIO API Actions", () => {
  it("should hover on figure 1", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(1);
    assert.equal("name: user1", internetPage.getFigureDetailsText(1));
  });

  it("should hover on figure 2", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(2);
    assert.equal("name: user2", internetPage.getFigureDetailsText(2));
  });

  it("should hover on figure 3", () => {
    browser.url(`${browser.options.baseUrl}/hovers`);
    internetPage.hoverOnFigure(3);
    assert.equal("name: user3", internetPage.getFigureDetailsText(3));
  });
});
