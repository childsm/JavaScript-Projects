function whatIsit() { //for step 94; **use "type of"
    var x = "What am I?";
    document.write(typeof x);
}

function myNaN() { //for step 97; **get screen to display NaN
    document.getElementById("Test1").innerHTML = 0/0;
}
function myTrue() { //for step 97; **get screen to display true
    document.getElementById("Test2").innerHTML = isNaN("La Lala Lala La");
}
function myFalse() { //for step 97; **get screen to display false
    document.getElementById("Test3").innerHTML = isNaN("43.21");
}

function Buzz() { //for step 100; **display infinity
    document.getElementById("spaceRanger").innerHTML = Math.PI*1E309;
}
function Alliance() { //for step 100; **display -infinity
    document.getElementById("Galactic").innerHTML = -Math.E*1E309;
}

function amiTrue() { //for step 102; **use Boolean logic to display true
    document.getElementById("boolT").innerHTML = Math.PI < 1;
}
function amiFalse() { //for step 102; **use Boolean logic to display true
    document.getElementById("boolF").innerHTML = 8192 > 2048;
}

function notF() { //for step 115; **using NOT
    document.getElementById("not").innerHTML = !(1 == 0);
}
function notFF() { //for step 115; **using NOT
    document.getElementById("notF").innerHTML = !(4 < 8);
}