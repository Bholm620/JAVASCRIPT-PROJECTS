

var x = "5";
var y = ",000";

document.getElementById("demo").innerHTML = x + y; //string concatenation
//document.write(x + y); //string concatenation

document.write(x+y); //string concatenation
//Function concatenation
function myFunction() {
    var sentence = "I am learning JavaScript!";
    sentence += " It is fun!";
    document.getElementById("concatenate").innerHTML = sentence;
}

