// Declaring variables for each IDS
let counterPlaceHolder = document.getElementById("counter-placeholder");

let btnIncrement = document.getElementById("btn-increment");

let btnDecrement = document.getElementById("btn-decrement");

let number = 0;

// Function to change color of the number
// If number is less than 0 color is red, if more than 0 color is green and if 0, color is white.

let changeColor = (number) => {
  let color = "";
  if (number < 0) {
    color = "red";
  } else if (number > 0) {
    color = "green";
  } else {
    color = "white";
  }
  return color;
};

btnIncrement.addEventListener("click", () => {
  number++;
  counterPlaceHolder.innerHTML = number;
  counterPlaceHolder.style.color = changeColor(number);
});

btnDecrement.addEventListener("click", () => {
  number--;
  counterPlaceHolder.innerHTML = number;
  counterPlaceHolder.style.color = changeColor(number);
});
