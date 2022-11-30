var time = [0,0,0]; // hours, minutes, seconds
var tick = 0;
var displayElement = document.querySelector('#current-time')

function newTick() {
    [hours, minutes, seconds] = time;
    seconds += 1
    if(seconds > 60) {
        seconds = 0;
        minutes++;
    }
    if(minutes > 60) {
        minutes = 0;
        hours++;
    }
    time = [hours, minutes, seconds]
    displayElement.innerHTML = time.map(x => (x < 10 ? '0' : '') + x).join(':')
}

function convertToTime(seconds) {
    minutes = Math.floor(seconds/60)
    seconds %= 60
    hours = Math.floor(minutes/60)
    minutes %= 60
    return [hours, minutes, seconds]
}

function convertToNumber(time) {
    [hours, minutes, seconds] = time
    return (hours*60+minutes)*60+seconds
}