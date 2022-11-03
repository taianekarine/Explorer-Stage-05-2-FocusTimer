import { Timer } from './timer.js'
import {minutesDisplay, secondsDisplay, numberControl, buttonPlay, buttonStop, buttonAddition, buttonSubtraction, minutes, buttonForest, buttonRain, buttonCoffe, buttonFireplace} from './elements.js'

const configTimer = Timer({
  minutesDisplay, 
  secondsDisplay, 
  minutes,
  numberControl,
})

buttonPlay.addEventListener('click', () => { configTimer.countDown() })

buttonStop.addEventListener('click', () => { configTimer.Hold() })

buttonAddition.addEventListener('click', () => { configTimer.incrementTimer() })

buttonSubtraction.addEventListener('click', () => { configTimer.decrementTimer() })


buttonForest.addEventListener('click', () => {
  buttonRain.classList.remove('hide')
  buttonCoffe.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  buttonForest.classList.toggle('hide')

})

buttonRain.addEventListener('click', () => {
  buttonForest.classList.remove('hide')
  buttonCoffe.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  buttonRain.classList.toggle('hide')
})

buttonCoffe.addEventListener('click', () => {
  buttonForest.classList.remove('hide')
  buttonRain.classList.remove('hide')
  buttonFireplace.classList.remove('hide')
  buttonCoffe.classList.toggle('hide')
})

buttonFireplace.addEventListener('click', () => {
  buttonForest.classList.remove('hide')
  buttonCoffe.classList.remove('hide')
  buttonRain.classList.remove('hide')
  buttonFireplace.classList.toggle('hide')
})