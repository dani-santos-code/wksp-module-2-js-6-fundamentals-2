// Exercise 1.1
// ----------
// Take a look at the HTML file
// There are 4 buttons that are supposed to do different
// things when clicked.

// button one disappears
// button two turns 'crimson'
// button three turns 'lightblue'
// button four starts shaking... (animation provided in styles.css as a class called 'jitters')

// NO MODIFICATIONS OUTSIDE OF THE EXERCISE FOLDER (i.e. the css is read-only)

// Guidelines
// - write only one event listener
// - use a switch statement

const ul = document.querySelector("#btn-list");

const handleButtonCall = buttonId => {
  switch (buttonId) {
    case 1:
      document.querySelector("#btn-1").style.display = "none";
      document
        .querySelector("#btn-1")
        .removeEventListener("click", handleButtonCall);
      break;
    case 2:
      document.querySelector("#btn-2").style.backgroundColor = "crimson";
      document
        .querySelector("#btn-2")
        .removeEventListener("click", handleButtonCall);
      break;
    case 3:
      document.querySelector("#btn-3").style.backgroundColor = "lightblue";
      document
        .querySelector("#btn-3")
        .removeEventListener("click", handleButtonCall);
      break;
    case 4:
      document.querySelector("#btn-4").classList.add("jitters");
      document
        .querySelector("#btn-4")
        .removeEventListener("click", handleButtonCall);
      break;
  }
};
for (let i = 1; i <= 4; i++) {
  let liId = document.querySelector(`#btn-${i}`);
  liId.addEventListener("click", event => {
    handleButtonCall(i);
  });
}
