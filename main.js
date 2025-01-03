let input = document.getElementById("taskInput");
let ul1 = document.getElementById("tasks");
let addTaskButton = document.getElementById("addTaskButton");

// Add initial task
// let list = document.createElement("li");
// let disc = document.createElement("p");
// disc.textContent = input.value; // Initially empty or whatever value input has
// ul1.appendChild(list);
// list.appendChild(disc);
// input.value = "";

// Update the list item as the input changes
// input.addEventListener("input", () => {
//   //   disc.textContent = value;
// });

addTaskButton.addEventListener("click", () => {
  if (input.value.trim() === "") return;
  let list = document.createElement("li");
  let disc = document.createElement("p");

  let checkBox = document.createElement("input");
  let deletebutton = document.createElement("button");
  let taskContent = document.createElement("div");

  deletebutton.textContent = "❌";
  checkBox.type = "checkbox";
  disc.textContent = input.value;
  taskContent.classList.add("task-content");

  ul1.appendChild(list);
  list.appendChild(checkBox);
  list.appendChild(disc);
  taskContent.appendChild(checkBox);
  taskContent.appendChild(disc);

  list.appendChild(taskContent);

  list.appendChild(deletebutton);
  input.value = "";

  checkBox.addEventListener("change", () => {
    if (checkBox.checked) {
      disc.style.textDecoration = "line-through";
    } else {
      disc.style.textDecoration = "none";
    }
  });

  deletebutton.classList.add("delete-button");
  deletebutton.addEventListener("click", () => {
    list.remove();
  });
});
