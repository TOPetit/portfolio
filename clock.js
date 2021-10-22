setInterval(showTime, 1000);
function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;

    let currentTime = hour + ":"
        + min;

    document.getElementById("clock")
        .innerHTML = currentTime;

    if (hour < 12) {
        document.getElementById("greeting").innerHTML = "Good morning"
    }
    else {
        document.getElementById("greeting").innerHTML = "Good afternoon"
    }
}
showTime();
