const BirthDay = '13 Nov 2021';
const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const minutesEle = document.getElementById('minutes');
const secondsEle = document.getElementById('seconds');

function countdown() {
    const samBrithDay = new Date(BirthDay);
    const currentDate = new Date();

    const totalseconds = (samBrithDay - currentDate) / 1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor((totalseconds / 3600) % 24);
    const minutes = Math.floor((totalseconds / 60) % 60);
    const seconds = Math.floor(totalseconds) % 60;
    
    daysEle.innerHTML = days;
    hoursEle.innerHTML = hours;
    minutesEle.innerHTML = minutes;
    secondsEle.innerText = seconds;

}

countdown();

setInterval(countdown, 1000);