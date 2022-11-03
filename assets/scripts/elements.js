let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
const numberControl = 5

const buttonPlay = document.querySelector('.btn-play')
const buttonStop = document.querySelector('.btn-stop')
const buttonAddition = document.querySelector('.btn-addition')
const buttonSubtraction = document.querySelector('.btn-subtraction')
let minutes = Number(minutesDisplay.textContent)

const buttonForest = document.querySelector('.btn-forest')
const buttonRain = document.querySelector('.btn-rain')
const buttonCoffe = document.querySelector('.btn-coffe')
const buttonFireplace = document.querySelector('.btn-fireplace')

export {
  minutesDisplay,
  secondsDisplay,
  numberControl,
  buttonPlay,
  buttonStop,
  buttonAddition,
  buttonSubtraction,
  minutes,
  buttonForest,
  buttonRain,
  buttonCoffe,
  buttonFireplace,
}