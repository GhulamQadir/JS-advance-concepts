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





// CallBack Function


renderData = (name) => {
    console.log(name)
}

getData = (renderData) => {
    setTimeout(() => {
        renderData("Ghulam Qadir")
    }, 3000)
}
getData(renderData)

