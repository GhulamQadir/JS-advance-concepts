var div = document.getElementById('testing')

var localArray = [];
function saveItem() {

    var getInputVal = document.getElementById('save_item')
    if (getInputVal.value === "") {
        console.log("Please enter some value")
    }
    else {
        localArray.push({ "name": getInputVal.value })

        setItem()


        var para = document.createElement('p')
        var paraText = document.createTextNode(getInputVal.value)
        para.appendChild(paraText)
        var delBtn = document.createElement('button')
        delBtn.setAttribute('onclick', 'deleteItem(this)')
        var delBtnText = document.createTextNode('Delete')
        delBtn.appendChild(delBtnText)
        para.appendChild(delBtn)
        div.appendChild(para)

        getInputVal.value = ""
    }
}

function setItem() {
    localStorage.setItem('names', JSON.stringify(localArray))
}
function deleteItem(e) {
    e.parentNode.remove(this)
    localArray.splice(e, 1)
    console.log(localArray)
    localStorage.setItem('names', JSON.stringify(localArray));
}

function localItems() {

    for (var i in localArray) {
        if (localArray[i].name != "") {

            var array = localArray[i]
            var para = document.createElement('p')
            var paraText = document.createTextNode(array.name)
            var delBtn = document.createElement('button')
            delBtn.setAttribute('onclick', 'deleteItem(this)')
            var delBtnText = document.createTextNode('Delete')
            delBtn.appendChild(delBtnText)
            para.appendChild(paraText)
            para.appendChild(delBtn)
            div.appendChild(para)

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
// saveItem()
