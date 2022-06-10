// Selector
const valueDisplays = document.querySelectorAll(".counter");
// Main function
let interval = 4000;
valueDisplays.forEach((valueDisplay, i) => {
  console.log(i);
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-target"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    console.log("interval call:" + startValue);
    startValue += 1;
    valueDisplay.textContent = startValue;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
