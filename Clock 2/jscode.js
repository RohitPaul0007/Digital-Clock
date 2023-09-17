let clock = document.querySelector(".clock");
let date = clock.querySelector(".date");
let time = clock.querySelector(".time");
let hours = time.querySelector(".hours");
let minutes = time.querySelector(".minutes");
let seconds = time.querySelector(".seconds");

function updateTime() {
  let now = new Date();
  let hoursText = now.getHours();
  let minutesText = now.getMinutes();
  let secondsText = now.getSeconds();

  if (hoursText < 10) {
    hoursText = "0" + hoursText;
  }

  if (minutesText < 10) {
    minutesText = "0" + minutesText;
  }

  if (secondsText < 10) {
    secondsText = "0" + secondsText;
  }

 time.innerHTML = hoursText + ":"+ minutesText + ":" + secondsText;
}

function updateDate() {
  let now = new Date();
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  let ordinals = day === "01" ? "st" : day === "02" ? "nd" : day === "03" ? "rd" : "th";

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  date.innerHTML = day + ordinals + " " + months[month] + ", " + year;
}

updateTime();
updateDate();

setInterval(updateTime, 1000);
setInterval(updateDate, 1000);
