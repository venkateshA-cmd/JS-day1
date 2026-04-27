const names = [];

const button = document.getElementById("btn");

button.addEventListener("click", function () {

  const name = document.getElementById("nameInput").value;

  if (name === "") return;

  names.push(name);

  // clear input (correct place)
  document.getElementById("nameInput").value = "";

  showList();
});

function showList() {
  const list = document.getElementById("list");

  list.innerHTML = "";

  for (let i = 0; i < names.length; i++) {

    const li = document.createElement("li");
    li.innerText = "user Name" + " : " + names[i];

    const delBtn = document.createElement("button");
    delBtn.innerText = "Delete";

    delBtn.addEventListener("click", function () {
      names.splice(i, 1);
      showList();
    });

    li.appendChild(delBtn);
    list.appendChild(li);

    document.getElementById("count").innerText = "Total items: " + names.length;

    
  }
}