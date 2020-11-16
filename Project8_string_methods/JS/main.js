function myCon() { //for step 143 **utilize the concat() method
    var begin = "What ";
    var middle1 = "the ";
    var middle2 = "he** ";
    var middle3 = "happened ";
    var end = "to you?";
    var Whole = begin.concat(middle1, middle2, middle3, end);
    document.getElementById("sentence").innerHTML = Whole;
}

function myCut() { //for step 145 **utilize the slice() method
    var full = "The quick brown fox jumped over the lazy dog.";
    var Portion = full.slice(16,20);
    document.getElementById("extract").innerHTML = Portion;
}

function myUpper() { //for step 146 **utilize the toUpperCase() method
    var start = "about to rise up.";
    var Moved = start.toUpperCase();
    document.getElementById("moveUp").innerHTML = Moved;
}
function mySearch() { //for step 146 **utilize the search() method
    var itsHere = "Sunday Monday happy days. Tuesday Wednesday happy days.";
    var Where = itsHere.search("days");
    document.getElementById("find").innerHTML = Where;
}

function myStr() { //for step 148 **utilize the toString() method
    var y = 2020;
    document.getElementById("what").innerHTML = y.toString();
}

function bePrecise() { //Step 150 **utilize toPrecision() method; select # of significant digits 
    var x = 2
    var y = Math.sqrt(x);
    document.getElementById("short").innerHTML = y.toPrecision(4);
}

function myFix() { //Step 151 **utilize the toFixed() method; turns number to string
    var x = 2.18, y = 3.14;
    var z = Math.pow(x, y);
    document.getElementById("2bString").innerHTML = z.toFixed(3);
}
function valueWho() { //Step 151 **utilize valueOf() method; returns primitive value
    var s = "Sorry, It's a Monday.";
    document.getElementById("prime").innerHTML = s.valueOf();
}