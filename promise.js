// Promise

var getSpinner = document.getElementById('spinner')
var promiseResult = document.getElementById('promise_result')
var usersDataDiv = document.getElementById('json_users_data')

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
// function getDataFromApi() {

//     let apiDataPromise = new Promise(function (resolve, reject) {
//         getSpinner.style.display = "block"
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.json())

//             .then(function (result) {
//                 resolve(result)
//             })

//             .catch(function (error) {
//                 reject(error)
//             })
//     })


//     apiDataPromise
//         .then(function (result) {

//             getSpinner.style.display = "none"
//             console.log("result==>", result)
//             promiseResult.innerHTML = `${result.title}<br> id: ${result.id}`

//         })
//         .catch(function (error) {

//             getSpinner.style.display = "none"
//             console.log(error)
//             promiseResult.innerHTML = error.message

//         })
// }
// getDataFromApi()





// getched data from users api
fetchedDataFromUsersApi = () => {
    let usersDataPromise = new Promise(function (resolve, reject) {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())

            .then(function (result) {
                resolve(result)
            })

            .catch(function (error) {
                reject(error)
            })
    })

    usersDataPromise
        .then((result) => {
            getSpinner.style.display = "none"

            var heading = document.createElement('h2')
            var headingText = document.createTextNode("Fetched Data from Users API")
            heading.appendChild(headingText)

            usersDataDiv.appendChild(heading)

            for (var i = 0; i < result.length; i++) {

                // separate data div
                var separateDataDiv = document.createElement('div')
                separateDataDiv.setAttribute('id', 'separate_user_data')
                usersDataDiv.appendChild(separateDataDiv)


                //username
                var userName = document.createElement('h3')
                var userNameText = document.createTextNode(result[i].username)
                userName.appendChild(userNameText)
                separateDataDiv.appendChild(userName)


                // user's email
                var email = document.createElement('p')
                var emailText = document.createTextNode(result[i].email)
                email.appendChild(emailText)
                separateDataDiv.appendChild(email)



                // user's phone No
                var phoneNo = document.createElement('p')
                var phoneNoText = document.createTextNode(`Phone No: ${result[i].phone}`)
                phoneNo.appendChild(phoneNoText)
                separateDataDiv.appendChild(phoneNo)



                // address
                var address = document.createElement('p')
                var addressText = document.createTextNode(`Street address: ${result[i].address.street}`)
                address.appendChild(addressText)
                separateDataDiv.appendChild(address)
            }

        })
        .catch((error) => {
            getSpinner.style.display = "none"
            promiseResult.innerHTML = error.message

        })

}
fetchedDataFromUsersApi()
