"use strict"
// const todoDrop = document.querySelector("#todo-drop");

function loadTodoDrop(){
    fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            let userName = user.username
            console.log(userName);
        }
    })
}

loadTodoDrop();