// array for todo list
const todoList = [
  {
    id: 1,
    task: 'Learn HTML',
    completed: true,
  },
  {
    id: 2,
    task: 'Learn CSS',
    completed: true,
  },
  {
    id: 3,
    task: 'Learn JS',
    completed: false,
  },
  {
    id: 4,
    task: 'Learn TypeScript',
    completed: false,
  },
  {
    id: 5,
    task: 'Learn React',
    completed: false,
  },
];

const list = document.querySelector("ul");

for (let index = 0; index < todoList.length; index++) {
  const item = todoList[index];
  const isChecked = item.completed ? "checked" : "";
  const html = `
  <li> <input type="checkbox" id="todo-${item.id}" ${isChecked}>
  <label for="todo-${item.id}">${item.task}</label>
  </li>
  `;

  list.insertAdjacentHTML("beforeend", html);
}
