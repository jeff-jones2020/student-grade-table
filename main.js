const tableEl = document.getElementById("grade-table");
const pageHeaderEl = document.getElementsByTagName("header")[0];
const gradeTable = new GradeTable(tableEl);
const pageHeader = new PageHeader(pageHeaderEl);
const app = new App(gradeTable, pageHeader);
app.start();
