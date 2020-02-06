class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
    this.displayAverageElements = document.getElementsByClassName("display-average");
  }

  updateAverage(newAverage) {
    this.displayAverageElements[0].textContent = newAverage;
    console.log(newAverage);
  }
}
