function Delaying() { //Step 171 **use defer attribute
    var m = "Testing defer attribute."
    document.getElementById("delay").innerHTML = m;
}

function Loopiness() { //Step 179 **make a while loop
    var by2 = "";
    var f = 2, m = 0;
    while (m <= 20) {
        by2 += " &nbsp; " + m;
        m = m + 1*f; 
    }
    document.getElementById("Loopy").innerHTML = by2;
}

function strLength() { //Step 179 **use the string length property
    var str = document.getElementById("myString").value;
    var L = str.length;
    document.getElementById("myLength").innerHTML = L;
}

//Step 183 **make a for loop
var Flowers = ["Rose", "Carnation", "Lily", "Crocosmia", "Tullip"]
var all = "", C = 0;
function flowerList() { 
    for (C = 0; C < Flowers.length; C++) {
        all += Flowers[C] + " &nbsp; | &nbsp; ";
    }
    document.getElementById("listEach").innerHTML = all;
}

function picsLatte() { //Step 187 **write an array w/n a function
    var Latte_pix = []; //Latte is a dog
    Latte_pix[0] = "hoovering"; //traveling the flours eating any speck of food
    Latte_pix[1] = "sleeping";
    Latte_pix[2] = "stretching";
    Latte_pix[3] = "chase game";
    document.getElementById("Latte").innerHTML = "In this one, she is playing her all-time favorite " + Latte_pix[3] + " with her kids.";
}

function myConstant() { //Step 195 **use const keyword
    const Bears = {type:"grizzly", color:"brown", weight:"600"}; 
    Bears.weight = "1000";
    Bears.food = "salmon";
    document.getElementById("Bear").innerHTML = "The Alaskan " + Bears.type + " bear can weigh an impressive " + Bears.weight + " lbs and dines on " + Bears.food + ".";
}

//Step 197 **use let keyword
var a = 64;
document.write(a); //had to remove the defer attribute
{
    let a = 32;
    document.write(" &nbsp; " + a);
}
document.write(" &nbsp; " + a + " &nbsp; ");
 

//Using getElementById (as shown by w3school) gets the "Uncaught TypeError". Unsuccessful at displaying return value where I want (like on the page where the <p> element called its function
function theRoot(r) { //Step 200 **learn and use return statement
    return Math.sqrt(r); //Math.PI * squared(r);
}
console.log("Squareroot of 3")
console.log(theRoot(3)); //only successful way I've had to return value to browser. 
//function myDisplay() {
//    var sq = theRoot(3); 
//    document.getElementById("stopIt").innerHTML = sq;}
//console.log(theRoot(3)); 
//document.write("stopit").innerHTML = sq;


let dog = { //Step 203 **write an array w/n a function
    breed: "mutt",
    age: "3",
    name: "Latte",
    weight: "40",
    description: function() {
        return this.name + " is a purebred " + this.breed + ". She weighs " + this.weight + "lbs and is " + this.age + " years old.";
    }
};
function attemptReturn() {
    var g = dog.description();
    document.getElementById("dogObject").innerHTML = g;
}
//attempt below gets error "Uncaught TypeError: Cannot set property 'innerHTML' of null"
//document.getElementById("dogObject").innerHTML = dog.description();


function myBreak() { //Step 204 **learn and use break statement
    var by2 = "";
    var f = 2, m = 0;
    while (m <= 20) {
        if (m === 10) { break; }
        by2 += " &nbsp; " + m;
        m = m + 1*f; 
    }
    document.getElementById("stop").innerHTML = by2;
}
function myContinue() { //Step 204 **learn and use break statement
    var by2 = "";
    var f = 2, m = 0;
    while (m < 20) {
        m = m + 1*f; 
        if (m === 10) { continue; }
        by2 += " &nbsp; " + m;
    }
    document.getElementById("skip10").innerHTML = by2;
}