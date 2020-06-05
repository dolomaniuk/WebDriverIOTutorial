internetPage = require("../pages/internet.page");
describe("WaitUntil", () => {
  it("should wait until the button text changes to Add", () => {
    internetPage.clickOnLink("Dynamic Controls");
    internetPage.clickPageButton();
    browser.waitUntil(() => internetPage.pageButton.getText() === "Add", {
      timeout: 6000,
      timeoutMsg: "Expected button text to change",
    });
    assert.equal("Add", internetPage.pageButton.getText());
  });

  it("should wait until the button text changes to Remove", () => {
    internetPage.clickPageButton();
    browser.waitUntil(() => internetPage.pageButton.getText() === "Remove", {
      timeout: 6000,
      timeoutMsg: "Expected button text to change",
    });
    assert.equal("Remove", internetPage.pageButton.getText());
  });
});
