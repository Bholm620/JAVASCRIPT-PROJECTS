document.write(typeof "Word");
document.write(typeof "7");
document.write("10" + 5);

//not a number

function my_Function() {
    document.getElementById("Test").innerHTML= 0/0;
    document.getElementById("Test").innerHTML = isNaN('This is a string');
    document.getElementById("Test").innerHTML = isNaN('007');
    
}

document.write(2E310);

document.write(10>5);
document.write(10<5);

console.log(2+2);

X="Hello";
Y="Hello";
Z="Hi";
document.write(X===Y);
document.write(Y===Z);


document.write(5>2&&10>4);
document.write(5>2&&10>11);
document.write(5>10||10>4);
document.write(5>10||10>4);

function Ride_Function() {
    var Age, Can_ride;
    Age=document.getElementById("Age").value;
    Can_ride=(Age<52)?"You are not good enough!":"You are good enough!";
    document.getElementById("Ridge").innerHTML=Can_ride + " ...to ride";
}