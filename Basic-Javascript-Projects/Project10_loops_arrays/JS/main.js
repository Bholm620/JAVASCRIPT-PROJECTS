//for loop
var Instruments = ["Guitar", "Drums", "Piano", "Bass",];
var Content = "";
var Y;
function for_Loop() {
    for (Y=0; Y<Instruments.length; Y++) {
    Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//const keyword
function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "the cost of the " +
        Musical_Instrument.type + " was " + Musical_Instrument.price;
}

//while loop
function count_to_Ten(){
    var Digit = "";
    var X = 1;
    while (X<11){
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById(Counting_to_Ten).innerHTML = Digit;
}

//arrays
function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " +
    Cat_Picture[2] + ".";
}

//let
var P = 89;
document.write(P);
{
    let P = 40;
    document.write("<br" + P);
}
document.write("<br>" + P);
