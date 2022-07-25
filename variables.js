// variables
// var

function foo() {
    if (true) {
        var a = 5
    }
    console.log(a)
}
// console.log(a) // a is not defined because it is declared in functional scope so we can't access it outside of function
foo()



// let (we cannot declare the same variable name in let as we declared in var)
if (true) {
    let b = "Let scope"
    b = "Variable"
    console.log(b)
}
// console.log(b) // not defined because its scope is inside curly brackets { } of any condition



// const (we cannot declare the same variable name const let as we declared in var)
if (true) {
    const b = "const scope"
    console.log(b)

    // b = "const"
    // console.log(b) // its value cant be updated
}