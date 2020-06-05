internetPage = require("../../pages/internet.page");

describe("Test element actions", () => {
  it("should click element", () => {
    browser.url("/");
    internetPage.clickOnLink("A/B Testing");
    expect(browser.getUrl()).equals(
      "http://the-internet.herokuapp.com/abtest",
      "wrong url"
    );
  });

  it("should get Text", () => {
    browser.url("/");
    expect(internetPage.getSpecificElementText(1)).equals("A/B Testing");
  });

  it("should click checkbox", () => {
    internetPage.clickLink(6);
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(true);
  });

  it("should uncheck checkbox", () => {
    internetPage.clickCheckbox(1);
    expect(internetPage.checkboxes(1).isSelected()).equals(false);
  });

  it("should enter some numbers", () => {
    internetPage.clickOnLink("Inputs");
    internetPage.enterInInputField("2341");
    assert.equal("2341", internetPage.inputField.getValue());
  });

  it("shoul clear value", () => {
    internetPage.inputField.click();
    internetPage.inputField.clearValue();
    assert.equal(internetPage.inputField.getValue(), "");
  });
});
