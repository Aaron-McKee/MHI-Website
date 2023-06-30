//set countdown date as futur date with 24 hour format
let countdownDate = new Date('10 July, 2023 21:19')
//Set countdown date by adding seconds to the current date

//  let countdownDate = new Date().setSeconds(new Date().getSeconds() + 5);

let timerInterval 

const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minElement = document.querySelector('#minutes');
const secElement = document.querySelector('#seconds');
const timerRunningContent = document.querySelector('#timer-container');
const timerEndContent = document.querySelector('#timer-container2');

const startCountdown = function() { 
   const now = new Date().getTime()
   const countdown = new Date(countdownDate).getTime()
   const difference = (countdown - now) / 1000
   
   if (difference < 1) {
       endCountdown()
   }

   let days = Math.floor(difference / (60 * 60 * 24))


let hours = Math.floor((difference % (60 * 60 * 24)) / (60 * 60))


let minutes = Math.floor((difference % (60 * 60)) / 60)
let seconds = Math.floor(difference % 60)

const formatTime = (time, string) => {
return time === 1 ? `<span>${time}</span> ${string}`:`<span>${time}</span> ${string}s`
}

daysElement.innerHTML = formatTime(days, 'Dia')
hoursElement.innerHTML = formatTime(hours, 'Hora')
minElement.innerHTML = formatTime(minutes, 'Minuto')
secElement.innerHTML = formatTime(seconds, 'Segundo')

}

const endCountdown = function () {
    clearInterval(timerInterval)
    timerRunningContent.classList.add('hidden')
    timerEndContent.classList.add('visible')
}

addEventListener('load', function() {
    startCountdown()
    timerInterval = setInterval(startCountdown, 1000)
});