let counterElement = document.getElementById("myprogress")

let savedCounterValue = localStorage.getItem("savedCounterValue")


if (savedCounterValue !== null) {
  counterValue = parseInt(savedCounterValue)
  let hours = Math.floor(counterValue / 3600)
  let minutes = Math.floor((counterValue % 3600) / 60)
  let seconds = counterValue % 60
  let formattedTime = ''
  if (hours) formattedTime = hours + 'часов' + ' '
  if (minutes) formattedTime += minutes + 'минут' + ' '
  if (seconds) formattedTime += seconds + 'секунд!'

  counterElement.textContent = formattedTime
} else {
  counterElement.textContent = 0
}