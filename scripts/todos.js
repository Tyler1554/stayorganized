"use strict";
const userDrop = document.querySelector("#user-drop");
const todoCard = document.querySelector("#todo-card");

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

function displayTodos() {
  fetch(`http://localhost:8083/api/todos/byuser/${userDrop.value}`)
    .then((response) => response.json())
    .then((todos) => {
      for (let todo of todos) {
        buildCard(todo);
      }
    });
}

function buildCard(todo) {
    
  let currentCard = document.createElement("div");

  let currentH3 = document.createElement("h3");
  let currentH5 = document.createElement("h5");
  let currentP = document.createElement("p");
  let currentP2 = document.createElement("p");
  let currentP3 = document.createElement("p");

  currentCard.classList.add("card");

  currentH3.innerText = todo.category;
  currentH5.innerText = todo.description;
  currentP.innerText = todo.deadline;
  currentP2.innerText = todo.priority;
  currentP3.innerText = todo.completed;


  todoCard.appendChild(currentH3);
  todoCard.appendChild(currentH5);
  todoCard.appendChild(currentP);
  todoCard.appendChild(currentP2);
  todoCard.appendChild(currentP3);
  todoCard.appendChild(currentCard);
}

window.onload = function () {
  loadUserDrop();
  userDrop.onchange = displayTodos;
};
