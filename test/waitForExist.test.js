internetPage = require("../pages/internet.page");
describe("Wait for Exist", () => {
  it("should wait until the new element to be existing", () => {
    internetPage.clickOnLink("Add/Remove Elements");
    internetPage.clickAddElementButton();
    internetPage.addedElementButton.waitForExist();
    assert.equal(true, internetPage.addedElementButton.isExisting());
  });

  it("should wait until the added element to be removed", () => {
    internetPage.removeAddedElementButton();
    internetPage.addedElementButton.waitForExist({
      timeout: 500,
      reverse: true,
    });
    assert.equal(false, internetPage.addedElementButton.isExisting());
  });
});
