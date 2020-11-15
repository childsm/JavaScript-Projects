function simpleAdd() { //for step 70; **return addition result to paragraph element
    var addition = 14 + 10 + 6;
    document.getElementById("MathA").innerHTML = "14 + 10 + 6 = " + addition;
}

function simpleSubtr() { //for step 72; **return subtraction result to paragraph element
    var subtr = 2048 - 256;
    document.getElementById("MathS").innerHTML = "2048 - 256 = " + subtr;
}

function multiP() { //for step 74; **return multiplication result to paragraph element
    var multiple = 16 * 16;
    document.getElementById("MathM").innerHTML = "16 * 16 = " + multiple;
}
function deeVide() { //for step 74; **return division result to paragraph element
    var deeV = 2048 / 256;
    document.getElementById("MathD").innerHTML = "2048 / 256 = " + deeV;
}

function andMore() { //for step 76; **multiple operations, result sent to paragraph element
    var more = 2 + 4 * 6 / 8 - 10;
    document.getElementById("MathMM").innerHTML = "2 is added after 4 is multiplied by 6 and divided by 8, then minus 10 = " + more;
}

function modOper() { //for step 78; **find the modulus and send result to the paragraph element
    var modul = 338 % 9;
    document.getElementById("MathMod").innerHTML = "The remainder for 338 / 9 is " + modul;
}

function unaryOp() { //for step 80; **return negation operator result to paragraph element
    var m = -128;
    document.getElementById("MathU").innerHTML = -m;
}

function idOp1() { //for step 82; **return increment & decrement value to paragraph element
    var a = 3.14159;
    a++; 
    document.getElementById("MathID1").innerHTML = a;
}
function idOp2() { //for step 82; **return increment & decrement value to paragraph element
    var b = 2.71828;
    b--;
    document.getElementById("MathID2").innerHTML = b;
}

function randum() { //for step 84; **return increment & decrement value to paragraph element
    var c = Math.random();
    document.getElementById("MathR").innerHTML = c;
}

function mathObj() { //for step 85; **learn and utilize Math object and method
    var d = Math.pow(2, 3) + Math.sqrt(16) * Math.sin(30 * Math.PI / 180);
    document.getElementById("MathO").innerHTML = "2^3 + sqrt(16) * sin(30deg) = " + d;
}