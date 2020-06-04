describe("Interacting with elements", () => {
  const internetPage = require("../pages/internet.page");

  it("Get text for element", () => {
    browser.url("/");
    let text = $("//*[@id='page-footer']").getText();
    console.log(text);
    //internetPage.getLiText();
    internetPage.getSpecificElementText(3);
  });

  it("Is footer displayed", () => {
    console.log(internetPage.pageFooter.isDisplayed());
  });

  it("Does the header exist?", () => {
    console.log(internetPage.pageHeader.isExisting());
  });

  it("Is footer in viewport", () => {
    console.log(internetPage.pageFooter.isDisplayedInViewport());
  });

  it("Is header in viewport", () => {
    console.log(internetPage.pageHeader.isDisplayedInViewport());
  });

  it("Is subheader enabled", () => {
    console.log(internetPage.subHeaing.isEnabled());
  });
});
