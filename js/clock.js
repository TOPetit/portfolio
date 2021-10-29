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
        document.getElementById("greeting").innerHTML = "Good Morning"
    }
    else if (hour < 18) {
        document.getElementById("greeting").innerHTML = "Good Afternoon"
    } else {
        document.getElementById("greeting").innerHTML = "Good Evening"
    }

}
showTime();
