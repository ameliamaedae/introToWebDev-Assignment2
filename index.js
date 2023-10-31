var sound = new Audio; 

function timerRunning() { 
    var nope = new Audio('Sounds/emergency-meeting.mp3'); 
    nope.play();
    delay(200);
    alert("A timer is already running!");
}

function curDate() {
    var curDate = new Date();
    console.log(curDate);
    var aHour = curDate.getHours().toString().padStart(2,"0");
    var bMin = curDate.getMinutes().toString().padStart(2,"0");
    var cSec = curDate.getSeconds().toString().padStart(2,"0");
    var aYear = curDate.getFullYear();
    var bMonth = curDate.getMonth() + 1;
    bMonth = bMonth.toString().padStart(2,"0");
    var cDay = curDate.getDate();
    var curDateFormat = aYear + "-" + bMonth + "-" + cDay + "T" + aHour + ":" + bMin;
    console.log(curDateFormat); 
    var x = document.getElementById("startDate");
    x.value = curDateFormat;
}

function startTimer() {;
    var endDate = new Date(document.getElementById("endDate").value);
    var soundSelect = document.getElementById("soundSelect").value;
    var nameInput = document.getElementById("nameInput").value;
    switch (soundSelect){
        case "FF7":
            //code
            sound = new Audio('Sounds/ff7.mp3')
        break;
        case "Megaman":
            //code
            sound = new Audio('Sounds/megaman.mp3')
        break;
        case "Sims":
            //code
            sound = new Audio('Sounds/sims.mp3')
        break;
        case "Sweet_Victory":
            //code
            sound = new Audio('Sounds/sweet.mp3')
        break;
        case "Uhm":
            //code
            sound = new Audio('Sounds/Uhm.mp3')
        break;
        case "Windows":
            //code
            sound = new Audio('Sounds/windows.mp3')
        break;
        default: 
        alert("How did this happen?");
    }

    if (!nameInput) {
        alert("Please enter a name!");
        return
    }
    var check = new Date();
    if (endDate < check | !document.getElementById("endDate").value){
        alert("Please enter a date and time!");
        return
    }

    document.getElementById("go").setAttribute("onclick", "timerRunning()");

    document.getElementById("timerGo").innerHTML = "TIMER, I CHOOSE YOU!";
    console.log(endDate);

    var timerX = setInterval(function(){
        var now = new Date().getTime();
        var timeLeft = endDate - now;
        console.log(timeLeft);

        var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("timerGo").innerHTML = nameInput + " || " + days + "d" + hours + "h" + minutes + "m" + seconds + "s";

        if (timeLeft < 0){
            clearInterval(timerX);
            document.getElementById("timerGo").innerHTML = nameInput + " || TIMER DONE" 
            sound.play();
            document.getElementById("go").setAttribute("onclick", "startTimer()");
        }
    }, 1000 );

}

