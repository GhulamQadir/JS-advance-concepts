// Promise

var getSpinner = document.getElementById('spinner')
var promiseResult = document.getElementById('promise_result')


// let learningPromise = new Promise(function (resolve, reject) {

//     getSpinner.style.display = "block"


//     setTimeout(function () {
//         const getData = "hasData"

//         if (getData === "hasData") {
//             resolve("Data fetched successfuly")
//             getSpinner.style.display = "none"

//         }
//         else {
//             reject("Something went wrong")
//             getSpinner.style.display = "none"

//         }
//     }, 2000)

// })
// console.log(learningPromise)



// learningPromise.then(function (data) {
//     console.log(`Resolve==> ${data}`)
//     promiseResult.innerHTML = data


// })
// learningPromise.catch(function (error) {
//     console.log(`Reject ==> ${error}`)
//     promiseResult.innerHTML = error
// })




// fetched data from json placeholder api
function getDataFromApi() {
    getSpinner.style.display = "block"
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())

        .then(function (result) {
            getSpinner.style.display = "none"
            console.log("result==>", result)

            promiseResult.innerHTML = `${result.title}<br> id: ${result.id}`
        })

        .catch(function (error) {
            console.log(error)
            getSpinner.style.display = "none"

            promiseResult.innerHTML = error.message
        })
}
getDataFromApi()