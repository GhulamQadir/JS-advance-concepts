// Promise

var getSpinner = document.getElementById('spinner')

var learningPromise = new Promise(function (resolve, reject) {

    getSpinner.style.display = "block"


    setTimeout(function () {
        let getData = "hasData"

        if (getData === "hasData") {
            resolve("Data agya")
            getSpinner.style.display = "none"

        }
        else {
            reject("Data nhi aya")
            getSpinner.style.display = "none"

        }
    }, 2000)

})
console.log(learningPromise)



var promiseResult = document.getElementById('promise_result')
learningPromise.then(function (data) {
    console.log(`Resolve==> ${data}`)
    promiseResult.innerHTML = data


})
learningPromise.catch(function (error) {
    console.log(`Reject ==> ${error}`)
    promiseResult.innerHTML = error
})
