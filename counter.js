const count = document.querySelector("#counter");
const incrementButton = document.querySelector("#increment");
const decrementButton = document.querySelector("#decrement");
const resetButton = document.querySelector("#reset");

let currentCount = 0;

function renderCount() {
  count.classList.toggle("positive", currentCount > 0);
  count.classList.toggle("zero", currentCount === 0);
}

incrementButton.addEventListener("click", () => {
  currentCount++;
  count.textContent = currentCount;
  renderCount();
});

decrementButton.addEventListener("click", () => {
  if (currentCount > 0) currentCount--;
  count.textContent = currentCount;
  renderCount();
});

resetButton.addEventListener("click", () => {
  currentCount = 0;
  count.textContent = currentCount;
  renderCount();
});
