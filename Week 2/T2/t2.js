// array for todo list
const todoList = [
  {
    id: 1,
    task: "Learn HTML",
    completed: true,
  },
  {
    id: 2,
    task: "Learn CSS",
    completed: true,
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

// add your code here
const list = document.querySelector("ul");

for (const items of todoList) {
  const listItems = document.createElement("li");
  const checkbox = document.createElement("input");
  const label = document.createElement("label");
  label.htmlFor = `${items.id}`;
  label.textContent = items.task;
  checkbox.type = "checkbox";
  checkbox.id = `${items.id}`;
  checkbox.checked = items.completed;

  listItems.append(checkbox);
  listItems.append(label);
  list.appendChild(listItems);
}
//const listText = items.task;
//  listItems.append(listText);
