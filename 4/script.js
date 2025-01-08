const buttonContainer = document.getElementById("buttonContainer");
const buttonChildContainer = document.getElementById("buttonChildContainer");
const button3 = document.getElementById("button3");
const buttons = document.getElementsByTagName("button");

buttonContainer.addEventListener("click", (event) => {
  alert("Container clicked!");
});

buttonChildContainer.addEventListener("click", (event) => {
  const buttonId = event.target.id;
  if (buttonId === "button4" || buttonId === "button5") {
    alert(`${event.target.textContent} is clicked`);
  }
  event.stopImmediatePropagation();
});

buttonChildContainer.addEventListener("click", () => {
  alert("Child container clicked!");
});

const button2 = document.getElementById("button2");
button2.onclick = function () {
  alert("Button 2 is clicked");
};

button3.addEventListener("click", (event) => {
  alert("Button 3 is clicked");
});

// this function is blocking button 4 and button 5 from working
// they work when this is commented, but buttons 1, 2, 3 get bubbling
// for (let button of buttons) {
//   button.addEventListener("click", (event) => {
//     event.stopPropagation();
//   });
// }

// stop propagation for button 1, 2, 3 separately?
for (let i = 0; i < Math.min(3, buttons.length); i++) {
  buttons[i].addEventListener("click", (event) => {
    event.stopPropagation();
  });
}