class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);
    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }
  getGrades() {
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token":"JF3KZ7oy"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
  }
  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade);
  }
  handleGetGradesError(error) {
    console.error("Error", error);
  }
  handleGetGradesSuccess(grades) {
    console.log("Grades", grades);
    this.gradeTable.updateGrades(grades);
    let sum = 0;
    for(let i=0; i<grades.length; i++) {
      sum += grades[i].grade;
    }
    const AVERAGE = Math.round(sum / grades.length);
    if (isNaN(AVERAGE)) {
      this.pageHeader.updateAverage("N/A");
    } else { this.pageHeader.updateAverage(AVERAGE); }
  }
  createGrade(name, course, grade) {
    console.log("name:", name, "course:", course, "grade:", grade);
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades",
      method: "POST",
      headers: {
        "X-Access-Token": "JF3KZ7oy"
      },
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    })
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    this.getGrades();
  }
  deleteGrade(id) {
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades/" + id,
      method: "DELETE",
      headers: {
        "X-Access-Token": "JF3KZ7oy"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleDeleteGradeError
    })
  }
  handleDeleteGradeError(error) {
    console.log(error);
  }
  handleDeleteGradeSuccess() {
    this.getGrades();
  }
}
