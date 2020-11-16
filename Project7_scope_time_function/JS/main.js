//for step 131; **make global and local variables
var str = "Hello "; //lines 2-10 demonstrate global scope
function Global_1() { 
    document.write(str + "World! <br>");
}
function Global_2() { 
    document.write(str + "and Good Day! <br><br>");
}
Global_1();
Global_2();
function Local_1() { //lines 11-19 demonstrate local scope
    var strL = "Hello ";
    document.write(strL + "World! <br>");
}
function Local_2() { 
    document.write(strL + "and Good Day!");
}
Local_1();
Local_2();

function goodDay() { //for step 134 **utilize the new Date().getHours() method
    if (new Date().getHours() < 22) {
        document.getElementById("Greet").innerHTML = "Good Day.";
    }
}

//***why isn't "if" statement true?????*****
function goodMonth() { //for step 135 **write own if statement
    var m = new Date();
    if (m.getMonth() > 10) { 
        document.getElementById("Greeting").innerHTML = "Happy Holidays.";
    } else {
        document.getElementById("Greeting").innerHTML = "Hello.";
    }
}

function dogF() { //for step 135 **write own if statement
    var x = document.getElementById("yourNum").value;
    if (x == 0) { 
        document.getElementById("numDog").innerHTML = "Do you want to buy a puppy?";
    } else if (x < 8) {
        document.getElementById("numDog").innerHTML = "Congradulations, your a dog owner!";
    } else {
        document.getElementById("numDog").innerHTML = "Are you sure? Cuz WOW!, that's A LOT!";
    }

}