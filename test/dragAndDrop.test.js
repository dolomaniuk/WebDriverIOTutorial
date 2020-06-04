internetPage = require("../pages/internet.page");

// not works drag and drop function on that site
describe.skip("Drag and drop", () => {
  it("should columnA drag and drop to columnB", () => {
    internetPage.clickOnLink("Drag and Drop");
    internetPage.dragColumnAToColumnB();
    assert.equal("A", internetPage.columnBHeader.getText());
  });
});
