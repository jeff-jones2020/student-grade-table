class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {
    console.log(grades);
    this.tableBodyEl = this.tableElement.getElementsByTagName("tbody")[0];
    while(this.tableBodyEl.firstElementChild) {this.tableBodyEl.firstElementChild.remove()};
    for(let i=0; i<grades.length; i++) {
      this.tableBodyEl.append(this.renderGradeRow(grades[i], this.deleteGrade));
    }
    if(grades.length){
      document.getElementById("no-grades-msg").classList.add("d-none");
    } else {
      document.getElementById("no-grades-msg").classList.remove("d-none");
     }
  }
  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }
  renderGradeRow(data, deleteGrade) {
    const rowToAdd = document.createElement("tr");
    const nameToAdd = document.createElement("td");
    const courseToAdd = document.createElement("td");
    const gradeToAdd = document.createElement("td");
    const operationToAdd = document.createElement("td")
    const deleteButton = document.createElement("button");
    deleteButton.append("DELETE");
    deleteButton.setAttribute("class", "btn btn-danger");
    deleteButton.addEventListener("click", function(){deleteGrade(data.id);});
    nameToAdd.textContent = data.name;
    courseToAdd.textContent = data.course;
    gradeToAdd.textContent = data.grade;
    operationToAdd.append(deleteButton);
    rowToAdd.append(nameToAdd, courseToAdd, gradeToAdd, deleteButton);
    return rowToAdd;
  }
}
