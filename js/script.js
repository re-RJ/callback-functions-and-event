//// Basic example of a Callback Function ////
//button.addEventListener("click", function () {
//cat.classList.add("show");
//});

//// KEYDOWN EVENTS ////
var body = document.querySelector("body");

document.addEventListener("keydown", function (e) {
  console.log(e);
  if (e.key === "l") {
    body.classList.add("light");
  } else if (d.key !== "d") {
    if (body.classList.contains("light")) {
      body.classList.remove("light");
    }
  }
});

//// CHANGE EVENTS ////
var fave = document.querySelector("#favorite");
var heading = document.querySelector("h1");
var selection = "regular";

fave.addEventListener("change", function (e) {
  selection = e.target.value;
  if (selection === "stealth") {
    heading.innerText = "Stealth Quincy 😎";
  } else if (selection === "party") {
    heading.innerText = "Party Quincy 🥳";
  } else {
    heading.innerText = "Quincy";
  }
});
