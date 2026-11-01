// array for todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: false,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: false,
  },
  {
    id: 3,
    task: "Learn JS",
    completed: false,
  },
  {
    id: 4,
    task: "Learn TypeScript",
    completed: false,
  },
  {
    id: 5,
    task: "Learn React",
    completed: false,
  },
];

//todo list
const todo = document.querySelector("ul");
for (let index = 0; index < todoList.length; index++) {
  const item = todoList[index];
  const isChecked = item.completed ? "checked" : "";
  const html = `
  <li> <input type="checkbox" id="todo-${item.id}" ${isChecked}>
  <label for="todo-${item.id}">${item.task}</label>
  </li>
  `;
  todo.insertAdjacentHTML("beforeend", html);
  //checkbox logic
  const checkbox = document.querySelector(`#todo-${item.id}`);
  checkbox.addEventListener("change", function (evt) {
    item.completed = evt.target.checked;
    console.log(todoList);
  });
}

//button
const formPopup = document.querySelector("dialog");
const addTodoButton = document.querySelector(".add-btn");
addTodoButton.addEventListener("click", function (evt) {
  formPopup.showModal();
});

const saveButton = formPopup.querySelector("button[type=submit]");
saveButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const inputText = formPopup.querySelector("input[type=text]");
  const newTodoItem = inputText.value;

  if (newTodoItem === "") return;

  const newTodoItemID = todoList.length + 1;
  const newItem = {
    id: newTodoItemID,
    task: newTodoItem,
    completed: false,
  };
  todoList.push(newItem);
  const itemHtml = `
  <li> <input type="checkbox" id="todo-${newItem.id}">
  <label for="todo-${newItem.id}">${newItem.task}</label>
  </li>
  `;
  todo.insertAdjacentHTML("beforeend", itemHtml);
  inputText.value = "";
  formPopup.close();
  console.log(todoList);
});

