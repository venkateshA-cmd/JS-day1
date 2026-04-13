// Step 1: Get the button from HTML
const button = document.getElementById("btn");

// Step 2: Add event listener (wait for click)
button.addEventListener("click", function () {

  // Step 3: Get value from input box
  const name = document.getElementById("nameInput").value;

  // Step 4: Show value in paragraph
  document.getElementById("output").innerText = "HELLO" + " " + name.length;

});