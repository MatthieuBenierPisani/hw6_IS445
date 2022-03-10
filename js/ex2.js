const displayText400 = () => {
    var classesElem = document.getElementsByClassName("400level");
    for (var i = 0; i < classesElem.length; i++) {
        var classes = classesElem[i].innerText;
        console.log(classes);
    }
}

displayText400();
