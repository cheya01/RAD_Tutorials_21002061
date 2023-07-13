//Student class
class Student {
    constructor(index, mcq, essay) {
      this.Index_number = index;
      this.MCQ_marks = mcq;
      this.Essay_marks = essay;
      this.totalMarks = 0;
      this.Status = "";
      this.Grade = "";
    }
  //method to calculate total marks
    calculateTotalMarks() {
      this.totalMarks = this.MCQ_marks + this.Essay_marks;
    }
  //method to display total marks
    displayTotalMarks() {
      console.log("Total Mark is " + this.totalMarks);
    }
  //method to determine whether pass or fail
    displayStatus() {
      if (this.totalMarks >= 50) {
        this.Status = "Pass";
        console.log(this.Status);
      } else {
        this.Status = "Fail";
        console.log(this.Status);
      }
    }
  ////method to set grade
    setGrade() {
      if (this.totalMarks >= 75)
        this.Grade = "A";
      else if (65 <= this.totalMarks && this.totalMarks < 75)
        this.Grade = "B";
      else if (55 <= this.totalMarks && this.totalMarks < 65)
        this.Grade = "C";
      else if (35 <= this.totalMarks && this.totalMarks < 55)
        this.Grade = "S";
      else
        this.Grade = "W";
    }
  //method to diaplay grade
    displayGrade() {
      this.setGrade(); 
      console.log("index number - "+this.Index_number + ", Grade - " + this.Grade);
    }
  }
  
  const student_1 = new Student(123, 25, 55);
  student_1.calculateTotalMarks();
  student_1.displayTotalMarks();
  student_1.displayStatus();
  student_1.displayGrade();
  