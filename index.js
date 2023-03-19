let list = document.querySelector("form");
list.addEventListener("submit", (event) => {
    event.preventDefault();

    let pTag = document.querySelector("p");
    let ul = document.querySelector("ul");
    let listText = document.getElementById("list");
    // let del = document.createElement("input");

    if(listText.value) {
        let newLi = document.createElement("li");
        newLi.textContent = listText.value;
        // del.type = "submit";
        // del.value = "Delete"
        ul.append(newLi);
        pTag.textContent = "";
    }
    else {
        pTag.textContent = "Error! Todo cannot be empty";
    }
    listText.value = "";

    let oldList = document.querySelectorAll("li");
    oldList.forEach(li => {
        li.addEventListener("click", (event) => {
            li.style.textDecoration = "line-through";
        });
    });
});
