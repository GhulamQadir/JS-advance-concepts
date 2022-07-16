
var localArray = [];
function saveItem() {
    var getInputVal = document.getElementById('save_item')
    localArray.push({ "name": getInputVal.value })
    // console.log(localArray)

    localStorage.setItem('names', JSON.stringify(localArray))



    for (var i in localArray) {
        var div = document.getElementById('testing')
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
