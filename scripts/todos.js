"use strict";
const userDrop = document.querySelector("#user-drop");

function loadUserDrop() {
  fetch("http://localhost:8083/api/users")
    .then((response) => response.json())
    .then((users) => {
      for (const user of users) {
        let option = document.createElement("option");
        option.value = user.id;
        option.innerText = user.name;
        userDrop.appendChild(option);
      }
    });
}

loadUserDrop();
