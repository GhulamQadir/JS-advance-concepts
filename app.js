var div = document.getElementById('values')

var localArray = [];
function saveItem() {

    var getInputVal = document.getElementById('save_item')
    if (getInputVal.value === "") {
        console.log("Please enter some value")
    }
    else {
        localArray.push({ "name": getInputVal.value })

        setItem()

        var newDiv = document.createElement("div")
        var item = document.createElement('h2')
        item.style.display = 'inline'
        var itemText = document.createTextNode(getInputVal.value)
        var delBtn = document.createElement('button')
        delBtn.style.display = 'inline'
        delBtn.setAttribute('onclick', 'deleteItem(this)')
        var delBtnText = document.createTextNode('Delete')
        delBtn.appendChild(delBtnText)
        item.appendChild(itemText)

        newDiv.appendChild(item)
        newDiv.appendChild(delBtn)
        div.appendChild(newDiv)
        getInputVal.value = ""
    }
}

function setItem() {
    localStorage.setItem('names', JSON.stringify(localArray))
}
function deleteItem(e) {
    e.parentNode.remove();


    for (var i = 0; i < localArray.length; i++) {
        var item = localArray[i]
        if (item.name === e.parentNode.firstChild.innerHTML) {
            var getIndex = localArray.indexOf(item)
            console.log(getIndex)
            localArray.splice(getIndex, 1);
        }
    }
    console.log(localArray)
    localStorage.setItem('names', JSON.stringify(localArray));
}

function localItems() {

    for (var i in localArray) {
        if (localArray[i].name != "") {

            var newDiv = document.createElement("div")
            var array = localArray[i]
            var item = document.createElement('h2')
            item.style.display = 'inline'
            var itemText = document.createTextNode(array.name)
            var delBtn = document.createElement('button')
            delBtn.style.display = 'inline'
            delBtn.setAttribute('onclick', 'deleteItem(this)')
            var delBtnText = document.createTextNode('Delete')
            delBtn.appendChild(delBtnText)
            item.appendChild(itemText)

            newDiv.appendChild(item)
            newDiv.appendChild(delBtn)
            div.appendChild(newDiv)

        }
    }
}


function getItem() {
    var namesData = JSON.parse(localStorage.getItem('names'))
    localArray = namesData
    if (!localArray) {
        localArray = []
    }
}
getItem()
