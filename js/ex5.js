function checkModulo(index) {
    return ((index + 1) % 4 === 0 ? true : false)
}

function addTable() {
    var myId = document.getElementById("output")
    var numberTable = document.createElement("table")
    var index = 0

    while (index < 12) {
        var tr = document.createElement("tr")
        var td = document.createElement("td")

        td.appendChild(document.createTextNode(index + 1))
        tr.appendChild(td)
        if (checkModulo(index)) {
            tr.classList.add("blueCell")
        }
        numberTable.appendChild(tr)
        index++
    }
    myId.appendChild(numberTable)
}