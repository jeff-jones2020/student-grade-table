class App {
  constructor(gradeTable, pageHeader, gradeForm){
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;
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
    let sum = 0;
    for(let i=0; i<grades.length; i++) {
      sum += grades[i].grade;
    }
    const AVERAGE = Math.round(sum / grades.length);
    this.pageHeader.updateAverage(AVERAGE);
  }
  createGrade(name, course, grade) {
    console.log("name:", name, "course:", course, "grade:", grade);
  }
  handleCreateGradeError(error) {
    console.error(error);
  }
  handleCreateGradeSuccess() {
    getGrades();
  }
}
