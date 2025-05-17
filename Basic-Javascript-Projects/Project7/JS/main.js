if (1<2) {
    document.write("Izquerda mas menor que derecha");
}

function get_Date(){
    if (new Date().getHours() < 18) {
    document.getElementById("Greeting").innerHTML="How are you today?";
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18) {
        Vote = "You are Old";
    }
    else {
        Vote = "You are not Old";
    }
    document.getElementById("How old are you?").innerHTML = Vote;
}

//else if statements
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply = "It is morning.";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon";
    }
    else {
        Reply ="it is PerformanceEventTiming.";
    }
    document.getElementById("Time_of_Day").innerHTML = Reply;
}