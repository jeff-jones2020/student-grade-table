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
    let formData = new FormData(event.target);
    let name = formData.get("name");
    let course = formData.get("course");
    let grade = formData.get("grade");
    this.createGrade(name, course, grade);
    event.target.reset();
    console.log("handleSubmit has run");
  }
}
