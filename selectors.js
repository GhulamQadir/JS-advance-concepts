// Query Selector example (targets the first element of the given selector)
changeText = () => {
    let simpleQuerySel = document.querySelector('.myQuerySelectors')
    simpleQuerySel.innerHTML = "Text changed using query selector"
}



// Query Selector All example (target all the elements of the given selector)
changeColor = () => {
    let querySelAll = document.querySelectorAll('.myQuerySelectorsAll')
    for (let i = 0; i < querySelAll.length; i++) {
        querySelAll[i].style.color = "blue"
    }
}



document.getElementById('eventListenerBtn').addEventListener("click", () => {
    document.getElementById('test').innerHTML = "Text change by usign event listener(click)"
})