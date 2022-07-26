// variables
// var

// function foo() {
//     if (true) {
//         var a = 5
//     }
//     console.log(a)
// }

// console.log(a) // a is not defined because it is declared in functional scope so we can't access it outside of function

// foo()



// let (we cannot declare the same variable name in let as we declared in var)
// if (true) {
//     let b = "Let scope"
//     b = "Variable"
//     console.log(b)
// }

// console.log(b) // not defined because its scope is inside curly brackets { } of any condition



// const (we cannot declare the same variable name const let as we declared in var)
// if (true) {
//     const b = "const scope"
//     console.log(b)


// b = "const"
// console.log(b) // its value cant be updated

// }




// spread operators
// es5 method
// var sectionA = ["Ali", "Ahmed"]
// var sectionB = ["Faiz", "Umer"]
// var merge = sectionA.concat(sectionB)
// console.log(merge)

// es6 method
// var sectionA = ["Ali", "Ahmed"]
// var sectionB = [...sectionA, "Faiz", "Umer"]
// console.log(sectionB)

// with object
// var student1 = { name: "Ghulam Qadir" }
// var student = { ...student1, class: "Xi" }
// console.log(student)




// Object Destructuring (easy way to get properties from object)
// var profile = { name: "Ghulam Qadir", email: "ghulamqadirsakaria25@gmail.com", skills: ["Front End Developer", "Flutter Developer"] }

// let { name, email, skills } = profile
// console.log(skills)


// Array Destructuring (easy way to get array elements)
var namesArray = ["Ali", "Anus", "Bilal"]
var [name1, name2, name3] = namesArray
console.log(name2)




// Ternary operators (if else and else if short method)
// var age = 37
// var checkAge = age < 18 ? "Your age is less" : age >= 18 && age <= 50 ? "You can take this ride" : "Age restrictions"
// console.log(checkAge)




// Function Expressions (assigning function in a variable)
let funcExpression = function () {
    console.log("Hello World!")
}
funcExpression()



// Arrow functions (if we have only one parameter then we dont need to make round() brackets)
var arrorFunc = (name) => {
    console.log(`Hi, ${name}`)
}
arrorFunc("Ghulam Qadir")


// more short arrow function 
shortFunction = (a, b) => (console.log(a + b))

shortFunction(5, 2)


