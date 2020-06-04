internetPage = require("../pages/internet.page");
describe("JavaScript Alerts", () => {
  it("should get text of alert", () => {
    browser.url(`${browser.options.baseUrl}javascript_alerts`);
    internetPage.clickJSAlertButton("Click for JS Alert");
    assert.equal("I am a JS Alert", browser.getAlertText());
  });

  it("should accept alert", () => {
    browser.acceptAlert();
    assert.equal(
      "You successfuly clicked an alert",
      internetPage.getResultText()
    );
  });

  it("should accept confirm alert", () => {
    internetPage.clickJSAlertButton("Click for JS Confirm");
    browser.acceptAlert();
    assert.equal("You clicked: Ok", internetPage.getResultText());
  });

  it("should dismiss alert", () => {
    internetPage.clickJSAlertButton("Click for JS Confirm");
    browser.dismissAlert();
    assert.equal("You clicked: Cancel", internetPage.getResultText());
  });

  it("should send text to the promt alert", () => {
    internetPage.clickJSAlertButton("Click for JS Prompt");
    browser.sendAlertText("This is some text");
    browser.acceptAlert();
    assert.equal(
      "You entered: This is some text",
      internetPage.getResultText()
    );
  });

  it("should dismiss the promt alert", () => {
    internetPage.clickJSAlertButton("Click for JS Prompt");
    browser.sendAlertText("This is some text");
    browser.dismissAlert();
    assert.equal("You entered: null", internetPage.getResultText());
  });
});
