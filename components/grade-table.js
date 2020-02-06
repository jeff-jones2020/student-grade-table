class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {
    console.log(grades);
    this.tableBodyEl = this.tableElement.getElementsByTagName("tbody")[0];
    for(let i=0; i<grades.length; i++) {
      let rowToAdd = document.createElement("tr");
      let nameToAdd = document.createElement("td");
      let courseToAdd = document.createElement("td");
      let gradeToAdd = document.createElement("td");
      nameToAdd.textContent = grades[i].name;
      courseToAdd.textContent = grades[i].course;
      gradeToAdd.textContent = grades[i].grade;
      rowToAdd.append(nameToAdd, courseToAdd, gradeToAdd);
      this.tableBodyEl.append(rowToAdd);
    }
  }
}
