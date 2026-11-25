const count = document.querySelector("#counter");
const incrementButton = document.querySelector("#increment");
const increment10Button = document.querySelector("#increment10");
const decrementButton = document.querySelector("#decrement");
const decrement10Button = document.querySelector("#decrement10");
const resetButton = document.querySelector("#reset");

let currentCount = 0;

function renderCount() {
  count.textContent = currentCount;
  count.classList.toggle("positive", currentCount > 0);
  count.classList.toggle("zero", currentCount === 0);
}

incrementButton.addEventListener("click", () => {
  currentCount++;
  renderCount();
});

increment10Button.addEventListener("click", () => {
  currentCount += 10;
  renderCount();
});

decrementButton.addEventListener("click", () => {
  if (currentCount > 0) currentCount--;
  renderCount();
});

decrement10Button.addEventListener("click", () => {
  if (currentCount >= 10) currentCount -= 10;
  else currentCount = 0;
  renderCount();
});

resetButton.addEventListener("click", () => {
  currentCount = 0;
  renderCount();
});
