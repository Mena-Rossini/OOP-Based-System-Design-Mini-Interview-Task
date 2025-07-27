# Online Course Management System – OOP Design

This project models a simple **Online Course Management System** using core **Object-Oriented Programming (OOP)** concepts in JavaScript. It simulates real-world educational interactions between students, instructors, courses, assignments, and grades.

---

## Class Diagram
<img width="998" height="682" alt="Screenshot 2025-07-27 124900" src="https://github.com/user-attachments/assets/bde34474-b787-480c-ac3d-1dcd13258856" />


## Class Structure

- **User**: Abstract superclass with common attributes like `name`, `email`, and method `viewDashboard()`.
- **Student**: Inherits from User. Has a `studentId`, can `enroll()` in courses and override `viewDashboard()`.
- **Instructor**: Inherits from User. Has an `employeeId`, can `createCourse()` and override `viewDashboard()`.
- **Course**: Linked to an `Instructor`, holds enrolled `students` and `assignments`.
- **Assignment**: Belongs to a course, allows `submit()` by students with marks.
- **Grade**: Represents the score a `Student` receives on an `Assignment`.

---

## OOP Principles Used

### 1. Abstraction
The system models real-world education entities using clear classes (`User`, `Course`, `Assignment`, etc.), hiding internal logic from external access.

### 2. Encapsulation
Data like `name`, `email`, and `grades` are accessed and modified only through class methods, keeping internals protected.

### 3. Inheritance
`Student` and `Instructor` both inherit from the common `User` class, reusing shared functionality like `viewDashboard()`.

### 4. Polymorphism
The `viewDashboard()` method is overridden in both `Student` and `Instructor` classes to provide role-specific behavior.

---

## SOLID Principles Followed

- **Single Responsibility**: Each class handles only its own concerns (e.g., Grade handles only grading).
- **Open/Closed**: You can add Admin or TA classes without changing existing ones.
- **Liskov Substitution**: `Student` and `Instructor` can be used anywhere a `User` is expected.
- **Interface Segregation & Dependency Inversion**: Not directly applied due to simplicity, but can be introduced in large-scale systems.

---
## Code
```
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

```
## Explanation: 

- The User class is the base class with common properties like name and email, and a generic viewDashboard() method.

- The Student and Instructor classes extend the User class using extends, adding role-specific properties (studentId, employeeId) and methods like enroll() and createCourse(). They also override the viewDashboard() method to provide customized dashboards.

- The Course class acts as a central entity that contains enrolled students, linked instructor, and related assignments. It provides methods to add students and assignments.

- The Assignment class belongs to a course and stores grades for each student submission. It includes the submit() method that creates a Grade object.

- The Grade class simply connects a Student with a mark to represent assignment scores.

- This class-based structure ensures clear separation of responsibilities, data encapsulation, and easy extensibility for future roles like Admin or TA.







