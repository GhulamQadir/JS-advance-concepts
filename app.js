var div = document.getElementById('testing')

var localArray = [];
function saveItem() {
    var getInputVal = document.getElementById('save_item')
    localArray.push({ "name": getInputVal.value })

    setItem()


    var para = document.createElement('p')
    var paraText = document.createTextNode(getInputVal.value)
    para.appendChild(paraText)
    div.appendChild(para)

    getInputVal.value = ""
}

function setItem() {
    localStorage.setItem('names', JSON.stringify(localArray))
}

function localItems() {


    for (var i in localArray) {
        var array = localArray[i]
        var para = document.createElement('p')
        var paraText = document.createTextNode(array.name)
        para.appendChild(paraText)
        div.appendChild(para)
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
saveItem()
