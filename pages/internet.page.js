class Internet {
  get pageHeader() {
    return $("h1.heading");
  }
  get subHeaing() {
    return $("h2");
  }
  get h3Header() {
    return $("h3");
  }
  get pageFooter() {
    return $("#page-footer");
  }
  get parent() {
    return $("ul");
  }
  get childElements() {
    return this.parent.$$("li");
  }

  get firsLink() {
    return $("ul li:nth-child(1) a");
  }

  link(index) {
    return $(`ul li:nth-child(${index}) a`);
  }

  checkboxes(index) {
    return $(`#checkboxes input:nth-child(${index})`);
  }

  get inputField() {
    return $("div.example input");
  }

  figures(index) {
    return $(`.example .figure:nth-child(${index + 2}) img`); // +2 cause index of the first images is 3
  }
  figureDetails(index) {
    return $(`.example .figure:nth-child(${index + 2}) .figcaption h5`);
  }

  /**
   * Hover over the specified image
   * @param {Number} index the specific index of the images
   */
  hoverOnFigure(index) {
    this.figures(index).waitForDisplayed();
    this.figures(index).moveTo(1, 1);
  }

  /**
   * Return the text of the figure details
   * @param {Number} index the index of the element
   */
  getFigureDetailsText(index) {
    this.figureDetails(index).waitForDisplayed();
    return this.figureDetails(index).getText();
  }

  /**
   * Enter some text into field
   * @param {Number} text to be entered into field
   */
  enterInInputField(text) {
    this.inputField.waitForDisplayed();
    this.inputField.setValue(text);
  }

  /**
   * CLicks on the link based in the index providet
   * @param {Number} index the index of element
   */
  clickLink(index) {
    this.link(index).waitForDisplayed();
    this.link(index).click();
  }

  clickCheckbox(index) {
    this.checkboxes(index).waitForDisplayed();
    this.checkboxes(index).click();
  }

  specificChildElement(index) {
    return this.parent.$(`li:nth-child(${index})`);
  }

  getLiText() {
    this.childElements.filter((element) => {
      console.log(element.getText());
    });
  }

  getSpecificElementText(index) {
    this.specificChildElement(index).waitForDisplayed();
    return this.specificChildElement(index).getText();
  }

  clickOnLink() {
    if (this.firsLink.isDisplayed()) {
      this.firsLink.click();
    }
    this.h3Header.waitForDisplayed();
    // browser.pause(5000);
  }
}
module.exports = new Internet();
