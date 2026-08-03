function showmessage() {
  alert("button clicked!");
}

function doubleClick() {
  alert("button double clicked!");
  console.log("button double clicked!");
}

function mouseOver() {
  // alert("mouse over the button!");
  console.log("mouse over the button!");
}

function mouseOut() {
  alert("mouse left the button!");
  console.log("mouse left the button!");
}

function mouseDown() {
  alert("mouse button pressed!");
  console.log("mouse button pressed!");
}

function mouseUp() {
  alert("mouse button released!");
  console.log("mouse button released!");
}

function keyDown() {
  console.log("key pressed!");
}

function keyUp() {
  console.log("key released!");
}

function submitForm() {
  // alert("Form submitted!");
  console.log("Form submitted!");
  return false; //no refresh
}

function changeColor() {
  document.body.style.background = "lightblue";
}

let heart = document.getElementById("heart");
let liked = false;
heart.addEventListener("dblclick", function () {
  if (liked) {
    heart.innerHTML = "🤍";

    liked = false;
  } else {
    heart.innerHTML = "❤️";

    liked = true;
  }
});
