let count = 0;

const countElement = document.getElementById("count");
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const resetButton = document.getElementById("reset");

plusButton.addEventListener("click", () => {
  count++;
  countElement.textContent = count;
});

minusButton.addEventListener("click", () => {
  count--;
  countElement.textContent = count;
});

resetButton.addEventListener("click", () => {
  count = 0;
  countElement.textContent = count;
});
