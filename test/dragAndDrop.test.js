internetPage = require("../pages/internet.page");

// not works drag and drop function on that site
describe.skip("Drag and drop", () => {
  it("should columnA drag and drop to columnB", () => {
    browser.url(`${browser.options.baseUrl}drag_and_drop`);
    internetPage.dragColumnAToColumnB();
    assert.equal("A", internetPage.columnBHeader.getText());
  });
});
