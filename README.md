# Online Course Management System – OOP Design

This project models a simple **Online Course Management System** using core **Object-Oriented Programming (OOP)** concepts in JavaScript. It simulates real-world educational interactions between students, instructors, courses, assignments, and grades.

---

## 🧱 Class Structure

- **User**: Abstract superclass with common attributes like `name`, `email`, and method `viewDashboard()`.
- **Student**: Inherits from User. Has a `studentId`, can `enroll()` in courses and override `viewDashboard()`.
- **Instructor**: Inherits from User. Has an `employeeId`, can `createCourse()` and override `viewDashboard()`.
- **Course**: Linked to an `Instructor`, holds enrolled `students` and `assignments`.
- **Assignment**: Belongs to a course, allows `submit()` by students with marks.
- **Grade**: Represents the score a `Student` receives on an `Assignment`.

---

## 🔑 OOP Principles Used

### 1. Abstraction
The system models real-world education entities using clear classes (`User`, `Course`, `Assignment`, etc.), hiding internal logic from external access.

### 2. Encapsulation
Data like `name`, `email`, and `grades` are accessed and modified only through class methods, keeping internals protected.

### 3. Inheritance
`Student` and `Instructor` both inherit from the common `User` class, reusing shared functionality like `viewDashboard()`.

### 4. Polymorphism
The `viewDashboard()` method is overridden in both `Student` and `Instructor` classes to provide role-specific behavior.

---

## ✅ SOLID Principles Followed

- **Single Responsibility**: Each class handles only its own concerns (e.g., Grade handles only grading).
- **Open/Closed**: You can add Admin or TA classes without changing existing ones.
- **Liskov Substitution**: `Student` and `Instructor` can be used anywhere a `User` is expected.
- **Interface Segregation & Dependency Inversion**: Not directly applied due to simplicity, but can be introduced in large-scale systems.

---
## Code


## Output

