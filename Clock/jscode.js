
    let time = document.querySelector(".time");
    let dateTime = document.querySelector(".date-time");

    function updateClock() {
      
      let now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();
      let day = now.getDay();
      let date = now.getDate();
      let month = now.getMonth();
      let year = now.getFullYear();

      
      let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


      hours = hours % 12 || 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      date = date < 10 ? "0" + date : date;

     
      let period = hours < 12 ? "AM" : "PM";
      time.innerHTML = hours + ":" + minutes + ":" + seconds + " " + period;
      dateTime.innerHTML = dayNames[day] + ", " + monthNames[month] + " " + date + ", " + year;
    }

    updateClock();
    setInterval(updateClock, 1000);
