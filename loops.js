// for in loop (mostly used to print object values)
const myProfile = {
    name: "Ghulam Qadir",
    age: 17,
    stack: "Mern Stack",
    city: "Karachi"
}

for (let values in myProfile) {
    console.log(`${values}: ${myProfile[values]}`)
}




// for of loop (mostly used to print array value)
let fruits = ["Apple", "Mango", "Banana", "Orange"]
for (const [index, val] of fruits.entries()) {  // enries give us both array value and index
    console.log(`${index + 1}: ${val}`)
}