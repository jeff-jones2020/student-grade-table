const tableEl = document.getElementById("grade-table");
const pageHeaderEl = document.getElementsByTagName("header")[0];
const gradeFormEl = document.getElementsByTagName("form")[0];
const gradeTable = new GradeTable(tableEl);
const pageHeader = new PageHeader(pageHeaderEl);
const gradeForm = new GradeForm(gradeFormEl);
const app = new App(gradeTable, pageHeader, gradeForm);
app.start();
