// Exercise 1.2
// ----------

// STEP 1
// Reimplement the functionality of 1.1 (Try to NOT look at your previous solution)
// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css)

// STEP 2
// This time the buttons should toggle.
// Meaning if the user clicks on them a second time, it should go back to initial state.
// initial button color is 'gold'

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Hint:
// create a toggleColor function
// Because we are now going to work with the opacity and background of the buttons,
// they need to be set here. So that they are referencable via the the style attribute.
// initialize the background color for all of the buttons in here. (for loop)

let toggleColor = false;

const handleButtonCall = buttonId => {
  switch (buttonId) {
    case 1:
      toggleColor = !toggleColor;
      if (toggleColor) {
        document.querySelector("#btn-1").style.backgroundColor = "gold";
      } else {
        document.querySelector("#btn-1").style.backgroundColor = "white";
        document
          .querySelector("#btn-1")
          .removeEventListener("click", handleButtonCall);
      }
      break;
    case 2:
      toggleColor = !toggleColor;
      if (toggleColor) {
        document.querySelector("#btn-2").style.backgroundColor = "gold";
      } else {
        document.querySelector("#btn-2").style.backgroundColor = "white";
        document
          .querySelector("#btn-2")
          .removeEventListener("click", handleButtonCall);
      }
      break;
    case 3:
      toggleColor = !toggleColor;
      if (toggleColor) {
        document.querySelector("#btn-3").style.backgroundColor = "gold";
      } else {
        document.querySelector("#btn-3").style.backgroundColor = "white";
        document
          .querySelector("#btn-3")
          .removeEventListener("click", handleButtonCall);
      }
      break;
    case 4:
      toggleColor = !toggleColor;
      if (toggleColor) {
        document.querySelector("#btn-4").style.backgroundColor = "gold";
        document.querySelector("#btn-4").classList.add("jitters");
      } else {
        document.querySelector("#btn-4").style.backgroundColor = "white";
        document
          .querySelector("#btn-4")
          .removeEventListener("click", handleButtonCall);
      }
      break;
  }
};
for (let i = 1; i <= 4; i++) {
  let liId = document.querySelector(`#btn-${i}`);
  liId.addEventListener("click", event => {
    handleButtonCall(i);
  });
}
