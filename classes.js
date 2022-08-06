// // normal constructor function
// function Student(name, email) {
//     this.name = name;
//     this.email = email;
// }


// let student1 = new Student("Ghulam Qadir", "ghulamqadir@gmail.com")

// console.log(student1)




// ES6 classes (both works same)
class Student {
    constructor(name, email) {

        this.name = name,
            this.email = email

    }
}
// let student1 = new Student("Ghulam Qadir", "ghulamqadir@gmail.com")

// console.log(student1)




// merging two classes
class College extends Student {
    constructor(name, email, college) {
        super(name, email)
        this.college = college
    }
}

let student = new College("Ghulam Qadir", "ghulamqadir@gmail.com", "SAIMS")
console.log(student)