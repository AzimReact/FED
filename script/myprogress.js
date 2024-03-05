let counterElement = document.getElementById("myprogress")

let savedCounterValue = localStorage.getItem("savedCounterValue")


if (savedCounterValue !== null) {
  counterValue = parseInt(savedCounterValue)
  counterElement.textContent = counterValue
} else {
  counterElement.textContent = 0
}