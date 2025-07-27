// Superclass: User
class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  
    viewDashboard() {
      console.log("Viewing generic user dashboard.");
    }
  }
  
  // Subclass: Student
  class Student extends User {
    constructor(name, email, studentId) {
      super(name, email);
      this.studentId = studentId;
      this.enrolledCourses = [];
    }
  
    enroll(course) {
      this.enrolledCourses.push(course);
      course.addStudent(this);
    }
  
    viewDashboard() {
      console.log(`Student Dashboard for ${this.name}:`);
      this.enrolledCourses.forEach(course => {
        console.log(` - ${course.title}`);
      });
    }
  }
  
  // Subclass: Instructor
  class Instructor extends User {
    constructor(name, email, employeeId) {
      super(name, email);
      this.employeeId = employeeId;
      this.courses = [];
    }
  
    createCourse(courseName) {
      const course = new Course(courseName, this);
      this.courses.push(course);
      return course;
    }
  
    viewDashboard() {
      console.log(`Instructor Dashboard for ${this.name}:`);
      this.courses.forEach(course => {
        console.log(` - ${course.title}`);
      });
    }
  }
  
  // Course Class
  class Course {
    constructor(title, instructor) {
      this.title = title;
      this.instructor = instructor;
      this.students = [];
      this.assignments = [];
    }
  
    addStudent(student) {
      this.students.push(student);
    }
  
    addAssignment(assignment) {
      this.assignments.push(assignment);
    }
  }
  
  // Assignment Class
  class Assignment {
    constructor(title, description, course) {
      this.title = title;
      this.description = description;
      this.course = course;
      this.grades = [];
    }
  
    submit(student, mark) {
      const grade = new Grade(student, mark);
      this.grades.push(grade);
    }
  }
  
  // Grade Class
  class Grade {
    constructor(student, mark) {
      this.student = student;
      this.mark = mark;
    }
  }
  