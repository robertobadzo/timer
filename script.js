const button = document.querySelector("button")
const minutesElement = document.getElementById("minutes")
const secondsElement = document.getElementById("seconds")
const sound = new Audio("timer.mp3")
let minutes = 10
let seconds = 0

button.addEventListener("click", startTimer)
function startTimer() {
    removeEvent()
    const interval = setInterval(() => {
        if (seconds > 0) seconds--
        else {
            seconds = 59
            minutes--
        }
        changeHtml()
        const time = timesUp()
        if (time) clearInterval(interval) //Check if time is up
    }, 1000);
}
function changeHtml() {

    minutes <= 9 ? minutesElement.innerHTML = "0" + minutes + ":" : minutesElement.innerHTML = minutes + ":"
    seconds <= 9 ? secondsElement.innerHTML = "0" + seconds : secondsElement.innerHTML = seconds


}

function removeEvent() {
    button.removeEventListener("click", startTimer)
}

function timesUp() {
    if (minutes === 0 && seconds === 0) {
        return setTimeout(() => {
            sound.play()
        }, 10);

    }
}