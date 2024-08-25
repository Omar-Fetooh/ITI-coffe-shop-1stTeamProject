let msg = document.querySelector('span.msg');
let mydate = new Date();
let time = mydate.getHours();
if (time < 12) {
    msg.innerHTML = `Good Moring`;
    msg.style.backgroundColor = 'yellow';
    msg.style.opacity = '0.7';
}
else if (time < 18) {
    msg.innerHTML = 'Good Afternoon';
    msg.style.backgroundColor = 'orange';
    msg.style.opacity = '0.7';
}
else {
    msg.innerHTML = 'Good Evening';
    msg.style.backgroundColor = 'black';
    msg.style.color = 'white';
    msg.style.opacity = '0.7';
}

// =================================================================================

let days = 6;
let hours = 20;
let mins = 33;
let seconds = 50;


let daysDisplay = document.querySelector("#Days")
let hoursDisplay = document.querySelector("#Hours")
let minsDisplay = document.querySelector("#Mins")
let secondsDisplay = document.querySelector("#Seconds")

function countDown() {
    --seconds;
    if (seconds == 0) {
        seconds = 60;
        --mins;
    }
    if (mins == 0) {
        mins = 60;
        --hours;
    }
    if (hours == 0) {
        hours = 24;
        --days;
    }

    if (days < 10 && days[0] != '0') days = `0${days}`
    if (hours < 10) hours = `0${hours}`
    if (mins < 10) mins = `0${mins}`
    if (seconds < 10) seconds = `0${seconds}`


    daysDisplay.innerHTML = days;
    hoursDisplay.innerHTML = hours;
    minsDisplay.innerHTML = mins;
    secondsDisplay.innerHTML = seconds;


}

setInterval(countDown, 1000)