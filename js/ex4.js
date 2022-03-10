function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function addLink() {
    body = document.getElementsByTagName("body")[0];
    myBodyElements = body.getElementsByTagName("ul");

    lastUl = myBodyElements[2];
    lastUl.id += "newId"

    let menu = document.getElementById("newId");
    var li = document.createElement('li');
    var a = document.createElement("a");

    a.textContent = "College of Business";
    a.setAttribute('href', "https://www.csulb.edu/college-of-business");
    li.appendChild(a);

    insertAfter(li,  menu.firstElementChild);
}

