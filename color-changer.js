var button = document.querySelector("button");
var body = document.querySelector("body");
var white = true;

<!-- needed listeners -->
button.addEventListener("click", backgroundPurpleToggle);

<!-- toggle between purple and white background-->
function backgroundPurpleToggle() {
  if (white) {
    body.style.backgroundColor = "purple";
    white = false;
  }
  else {
    body.style.backgroundColor = "white";
    white = true;
  }
}
