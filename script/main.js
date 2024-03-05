const counterElement = document.getElementById("result")
const startBtn = document.getElementById("startBtn")
const pauseBtn = document.getElementById("pauseBtn")
const resetBtn = document.getElementById("resetBtn")

let counterValue = 0
let counterInterval
let isPaused = false

// Добавляем переменные для отслеживания последнего обнуления и текущей даты
let lastResetDate = new Date().toLocaleDateString()
let currentDate

function updateCounter() {
  if (!isPaused) {
    let hours = Math.floor(counterValue / 3600)
    let minutes = Math.floor((counterValue % 3600) / 60)
    let seconds = counterValue % 60

    let formattedTime =
      (hours < 10 ? "0" : "") + hours + ":" +
      (minutes < 10 ? "0" : "") + minutes + ":" +
      (seconds < 10 ? "0" : "") + seconds

    counterElement.textContent = formattedTime
    counterValue++

    // Получаем текущую дату при каждом обновлении
    currentDate = new Date().toLocaleDateString()

    // Если текущая дата отличается от последней даты обнуления, сбрасываем savedCounterValue
    if (currentDate !== lastResetDate) {
      counterValue = 0
      lastResetDate = currentDate
      localStorage.setItem("savedCounterValue", counterValue)
    }
  }
}

function startCounter() {
  clearInterval(counterInterval)
  isPaused = false
  counterInterval = setInterval(updateCounter, 1000)
}

function pauseCounter() {
  isPaused = true
  localStorage.setItem("savedCounterValue", counterValue)
}

function resetCounter() {
  counterValue = 0
  pauseCounter()
  counterElement.textContent = counterValue
  alert("Прогресс обнулен!")
}

startBtn.onclick = startCounter
pauseBtn.onclick = pauseCounter
resetBtn.onclick = resetCounter

let savedCounterValue = localStorage.getItem("savedCounterValue")
if (savedCounterValue !== null) {
  counterValue = parseInt(savedCounterValue)
  updateCounter()
}
