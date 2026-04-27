// Array to store names
const names = [];

// Get button
const button = document.getElementById("btn");

// Button click
button.addEventListener("click", function () {

  const input = document.getElementById("nameInput");
  const name = input.value;

  const message = document.getElementById("message");

  // Empty check
  if (name === "") {
    message.innerText = "Enter a name";
    return;
  }

  // Duplicate check
  if (names.includes(name)) {
    message.innerText = "Name already exists";
    return;
  }

  // Add to array
  names.push(name);

  // Clear input
  input.value = "";

  // Clear message
  message.innerText = "";

  // Update UI
  showList();
});


// Function to display list
function showList() {

  const list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < names.length; i++) {

    const li = document.createElement("li");

    // Show name
    li.innerText = names[i];

    // Special condition (admin)
    if (names[i] === "admin") {
      li.style.color = "red";
    }

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function () {
      names.splice(i, 1);
      showList();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
  }

  // Update count
  document.getElementById("count").innerText =
    "Total: " + names.length;
}