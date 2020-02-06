class App {
  constructor(){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }
  getGrades() {
    console.log("getGrades running");
    $.ajax({
      url: "http://sgt.lfzprototypes.com/api/grades",
      method: "GET",
      headers: {
        "X-Access-Token":"JF3KZ7oy"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError
    });
    console.log("getGrades has been run");
  }
  start() {
    this.getGrades();
  }
  handleGetGradesError(error) {
    console.error("Error", error);
  }
  handleGetGradesSuccess(grades) {
    console.log("Grades", grades);
  }
}
