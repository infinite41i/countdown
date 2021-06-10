document.addEventListener('DOMContentLoaded', main);

const eidTimestamp = new Date(2022, 3, 20, 19, 03, 00);

function printDifference() {
    let now = new Date();
    let dhms = getDHMS(now); //day-hour-minute-second
    let timerDigits = {
        day: document.querySelector('.timer__digits__day'),
        hour: document.querySelector('.timer__digits__hour'),
        minute: document.querySelector('.timer__digits__min'),
        second: document.querySelector('.timer__digits__sec')
    };
    timerDigits.day.innerHTML = dhms.day;
    timerDigits.hour.innerHTML = dhms.hour;
    timerDigits.minute.innerHTML = dhms.minute;
    timerDigits.second.innerHTML = dhms.second;
}

function getDHMS(currentDate) {
    let timeDifferenceMilisecond = eidTimestamp - currentDate;
    let dateDifferenceObject = {};
    if (timeDifferenceMilisecond > 0) {
        dateDifferenceObject.day = Math.floor(timeDifferenceMilisecond / 86400000); //there is 86,400,000 miliseconds in a year
        let remainingHoursInMiliseconds = timeDifferenceMilisecond % 86400000;
        dateDifferenceObject.hour = Math.floor(remainingHoursInMiliseconds / 3600000); //there is 3,600,000 miliseconds in an hour
        let remainingMinutesInMiliseconds = remainingHoursInMiliseconds % 3600000;
        dateDifferenceObject.minute = Math.floor(remainingMinutesInMiliseconds / 60000); //there is 60,000 miliseconds in a minute
        let remainingSecondsInMiliseconds = remainingMinutesInMiliseconds % 60000;
        dateDifferenceObject.second = Math.floor(remainingSecondsInMiliseconds / 1000); //there is 1000 miliseconds in a second
        // console.log(dateDifferenceObject);
    } else {
        dateDifferenceObject.day = 0;
        dateDifferenceObject.hour = 0;
        dateDifferenceObject.minute = 0;
        dateDifferenceObject.second = 0;
    }
    return dateDifferenceObject;
}

function main() {
    // console.log('DOM ready!');
    // let now = new Date();
    // console.log(now);
    // console.log(eidTimestamp);
    setInterval(printDifference, 1000);
    // setTimeout(function(){console.log('hey')} ,1000);
}