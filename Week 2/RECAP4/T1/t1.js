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

// todo list container
const todo = document.querySelector("ul");

function renderTodoItem(item) {
  const li = document.createElement("li");
  const isChecked = item.completed ? "checked" : "";

  li.innerHTML = `
    <input type="checkbox" id="todo-${item.id}" ${isChecked}>
    <label for="todo-${item.id}">${item.task}</label>
    <button class="delete-btn">Delete</button>
  `;

  const checkbox = li.querySelector("input[type=checkbox]");
  checkbox.addEventListener("change", function (evt) {
    item.completed = evt.target.checked;
    console.log("Updated todoList (Checkbox changed):", todoList);
  });

  const deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    const index = todoList.findIndex((t) => t.id === item.id);
    if (index !== -1) {
      todoList.splice(index, 1);
    }

    todo.removeChild(li);

    console.log("Updated todoList (Item deleted):", todoList);
  });

  todo.appendChild(li);
}

todoList.forEach((item) => {
  renderTodoItem(item);
});

const formPopup = document.querySelector("dialog");
const addTodoButton = document.querySelector(".add-btn");
addTodoButton.addEventListener("click", function (evt) {
  formPopup.showModal();
});

const saveButton = formPopup.querySelector("button[type=submit]");
saveButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  const inputText = formPopup.querySelector("input[type=text]");
  const newTodoItem = inputText.value.trim();

  if (newTodoItem === "") return;

  const newTodoItemID =
    todoList.length > 0 ? todoList[todoList.length - 1].id + 1 : 1;
  const newItem = {
    id: newTodoItemID,
    task: newTodoItem,
    completed: false,
  };

  todoList.push(newItem);

  renderTodoItem(newItem);

  inputText.value = "";
  formPopup.close();
  console.log("Updated todoList (New item added):", todoList);
});
