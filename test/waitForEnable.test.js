internetPage = require("../pages/internet.page").default;
describe("Wait for Enabled", () => {
  it("should wait for the inpet field to be enabled", () => {
    internetPage.clickOnLink("Dynamic Controls");
    internetPage.clickEnableButton();
    internetPage.inputEnableField.waitForEnabled({ timeout: 4000 });
    assert.equal(true, internetPage.inputEnableField.isEnabled());
  });

  it("should wait for the inpet field to be disabled", () => {
    internetPage.clickEnableButton();
    internetPage.inputEnableField.waitForEnabled({
      timeout: 4000,
      reverse: true,
    });
    assert.equal(false, internetPage.inputEnableField.isEnabled());
  });
});
