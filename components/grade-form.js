class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.createGrade = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }
  handleSubmit(event) {
    preventDefault(event);
    console.log("handleSubmit has run");
  }
}
