// Store tasks (now objects, not just strings)
const tasks = [];

const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const text = input.value;

  // basic validation
  if (text === "") return;

  // add task as object
  tasks.push({
    text: text,
    done: false
  });

  input.value = ""; // clear input

  render();
});

function render() {
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {
    const li = document.createElement("li");

    // show text
    li.innerText = tasks[i].text;

    // mark done style
    if (tasks[i].done) {
      li.style.textDecoration = "line-through";
    }

    // TOGGLE DONE BUTTON
    const doneBtn = document.createElement("button");
    doneBtn.innerText = "Done";

    doneBtn.addEventListener("click", function () {
      tasks[i].done = !tasks[i].done; // toggle true/false
      render();
    });

    // DELETE BUTTON
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function () {
      tasks.splice(i, 1);
      render();
    });

    li.appendChild(doneBtn);
    li.appendChild(delBtn);

    list.appendChild(li);
  }

  // update count
  document.getElementById("count").innerText =
    "Total: " + tasks.length;
}