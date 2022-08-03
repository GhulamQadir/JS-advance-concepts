// Function Expressions (assigning function in a variable)
// let funcExpression = function () {
//     console.log("Hello World!")
// }
// funcExpression()



// Arrow functions (if we have only one parameter then we dont need to make round() brackets)
// var arrorFunc = (name) => {
//     console.log(`Hi, ${name}`)
// }
// arrorFunc("Ghulam Qadir")


// // more short arrow function
// shortFunction = (a, b) => (console.log(a + b))

// shortFunction(5, 2)





// CallBack Function
// renderData = (name) => {
//     console.log(name)
// }

// getData = (renderData) => {
//     setTimeout(() => {
//         renderData("Ghulam Qadir")
//     }, 3000)
// }
// getData(renderData)



///////////////////////////// ARRAY FUNCTIONS //////////////////////////////////
// 1: Filter
// let arr = [{ name: "Ghulam Qadir", age: 17 }, { name: "Noman", age: 14 }]

// let filter = arr.filter(a => {
//     return a.name.includes('man')
// })

// console.log(filter)




// 2: Search
// let userName = "ghulam qadir"
// let search = "g"
// if (userName.startsWith(search)) {
//     console.log(userName)
// }




// // 3: Map
// let arrayMap = [2, 3, 4, 5, 6]
// let multiply = arrayMap.map(value => {
//     return value * 2
// })

// console.log(multiply)


// // map example
// let namesArray = ["Ali", "Usman", "Ghulam Qadir", "Noman", "Faizan"]
// let namesMap = namesArray.map(names => {
//     let mapDiv = document.getElementById('map_example')

//     let namesPara = document.createElement('p')
//     let namesParaText = document.createTextNode(names)
//     namesPara.appendChild(namesParaText)

//     mapDiv.appendChild(namesPara)
// })





// 4: forEach
let stack = ["HTML", "CSS", "Bootstrap", "JavaScript", "React Js"]
stack.forEach((value, index) => {
    let forEachPractise = document.getElementById('forEach_example')
    forEachPractise.innerHTML += `<p>${index + 1}: ${value}</h3>`
})


// forEach example
let arrayForEach = [2, 3, 4, 5, 6]
arrayForEach.forEach(value => {
    console.log(value + 10)
})
