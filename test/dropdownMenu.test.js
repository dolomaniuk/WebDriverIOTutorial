internetPage = require("../pages/internet.page");

describe("Dropdown menu", () => {
  it("should select option 1", () => {
    selectedItem = "Option 1";
    internetPage.clickOnLink("Dropdown");
    internetPage.clickDropdownMenuOption(selectedItem);
    assert.equal(
      true,
      internetPage.dropdownMenuOption(selectedItem).isSelected()
    );
  });

  it("should select option 2", () => {
    selectedItem = "Option 2";
    internetPage.clickDropdownMenuOption(selectedItem);
    assert.equal(
      true,
      internetPage.dropdownMenuOption(selectedItem).isSelected()
    );
  });
});
