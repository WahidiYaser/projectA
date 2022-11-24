"use strict";
let toDoUl = document.querySelector(".to-do");
let doneUl = document.querySelector(".done");
let addTodoBtn = document.querySelector("#addTodo");
let finishTodoBtn = document.querySelector("#finishTodo");
isEmpty();
addTodoBtn.addEventListener("click", () => {
    let text = (document.querySelector("#addToText"));
    if (text.value == "null" || text.value == "")
        return;
    let nLi = document.createElement("li");
    let nIn = document.createElement("input");
    let label = document.createElement("label");
    nIn.setAttribute("type", "checkbox");
    let lastNameInp = document.querySelectorAll(".to-do input");
    nIn.setAttribute("name", (lastNameInp.length + 1).toString());
    label.setAttribute("for", (lastNameInp.length + 1).toString());
    label.setAttribute("id", (lastNameInp.length + 1).toString());
    label.innerHTML += " " + text.value;
    text.value = "";
    nLi.appendChild(nIn);
    nLi.appendChild(label);
    document.querySelector(".to-do").appendChild(nLi);
    isEmpty();
});
finishTodoBtn.addEventListener("click", () => {
    let checkBox = document.querySelectorAll(".to-do input");
    checkBox.forEach(ch => {
        if (ch.checked == true) {
            let inputLabel = document.getElementById(ch.name);
            let ul = document.querySelector(".done");
            let li = document.createElement("li");
            ch.remove();
            inputLabel.style.textDecoration = "line-through";
            inputLabel.style.color = "red";
            li.appendChild(inputLabel);
            ul.appendChild(li);
            isEmpty();
        }
    });
});
function isEmpty() {
    let checkTodo = document.querySelectorAll(".to-do input");
    let checkDone = document.querySelectorAll(".done label");
    if (checkTodo.length == 0)
        document.querySelector(".msgToDo").style.display = "block";
    else
        document.querySelector(".msgToDo").style.display = "none";
    if (checkDone.length == 0)
        document.querySelector(".msgDone").style.display = "block";
    else
        document.querySelector(".msgDone").style.display = "none";
}
