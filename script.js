window.onload = function() {
    var morning = "Good Morning!";
    var afternoon = "Good Afternoon!";
    var evening = "Good Evening!";
  
  
    function getGreeting(date) {
        if (date.getHours() < 12) {
            return morning;
        }
        else if (date.getHours() >= 12 && date.getHours() < 18) {
            return afternoon;
        }
        else {
            return evening;
        }
    }
    
    document.getElementById("greeting").innerHTML = getGreeting(new Date());
}