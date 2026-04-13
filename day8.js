function changeText() {
  document.getElementById("title").innerText = "Changed!";
}

function changeColor() {
  document.getElementById("title").style.color = "red";
}

function showName() {
  const name = document.getElementById("nameInput").value;
  document.getElementById("output").innerText = name;
}

function toggleText() {
  const el = document.getElementById("title");

  if (el.innerText === "Hello") {
    el.innerText = "Welcome";
  } else {
    el.innerText = "Hello";
  }
}

function greetUser(){
    const name = document.getElementById("username").value;

    if(name === ""){
        document.getElementById("result").innerText="Enter name";
    }
    else{
        document.getElementById("result").innerText= "Hello" +" " + name;
    }
}