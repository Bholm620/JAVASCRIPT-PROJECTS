function addition_Function() {
    var addition= 2 + 2;
    document.getElementById("Math").innerHTML= "2 + 2 = " + addition;
}


//subtraction
let x = (5 - 4);
document.write(x);
//multiplication
let y = (5 * 4);
document.write(y);
//division
let z = (5 / 4);
document.write(z);
//multiple operations
let a = (5 + 4) * 3;
document.write(a);
//modulus
let b = (5 % 4);
document.write(b);
//unary operator
let c = (5);
document.write(c);
//increment
let d = (5);
d++;
document.write(d);
//decrement
let e = (5);
e--;
document.write(e);
//math random
let f = Math.random();
document.write(f);  
//math object
let g = Math.PI;
document.write(g);

function my_Dictionary() {
    var Animal = {
        Species: "Dog",
        Color: "Brown",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}