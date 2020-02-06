class App {
  constructor(gradeTable){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
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
  }
  handleGetGradesError(error) {
    console.error("Error", error);
  }
  handleGetGradesSuccess(grades) {
    console.log("Grades", grades);
    this.gradeTable.updateGrades(grades);
  }
}
