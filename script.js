let clock = document.querySelector(".clock");

let sec = 0,
    min = 0,
    hr = 0,
    intervalID;
const startStopwatch = () => {
    intervalID = setInterval(() => {
        if (sec < 59) {
            sec++;
        } else if (min >= 59) {
            hr++;
            min = 0;
        } else {
            sec = 0;
            min++;
        }

        const second = sec.toString().padStart(2, "0");
        const minute = min.toString().padStart(2, "0");
        const hour = hr.toString().padStart(2, "0");

        clock.innerText = `${hour}:${minute}:${second}`
    }, 1000)
}

f    clearInterval(intervalID);
}