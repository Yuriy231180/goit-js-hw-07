const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

let userName = " ";

nameInput.addEventListener("input", (event) => {
  userName = event.target.value;

  if (userName.trim() == '') {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = userName.trim();
  }
});
