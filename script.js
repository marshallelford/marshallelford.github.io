window.onload = function () {
    "use strict";
    var morning = "Good Morning!", afternoon = "Good Afternoon!", evening = "Good Evening!";
  
  
    function getGreeting(date) {
        if (date.getHours() < 12) {
            return morning;
        } else if (date.getHours() >= 12 && date.getHours() < 18) {
            return afternoon;
        } else {
            return evening;
        }
    }
    
    document.getElementById("greeting").innerHTML = getGreeting(new Date());
};