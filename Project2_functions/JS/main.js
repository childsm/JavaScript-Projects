function mouseAlert() { //for step 60 find a new HTML event and use
    alert("The only way to land. On water!"); }

function stringFunction() { //for step 61 use the getElementById method
    var str = "Purple String";
    var result = str.fontcolor("purple");
    document.getElementById("purpleWords").innerHTML = result;
}

function concatF() { //for step 63 use the += operator
    var first = "Now it is time ";
    first += "to go to sleep";
    document.getElementById("concat").innerHTML = first;
}

function finalClick() { //for step 68 use JS function and ById method
    var x = 2, y = 16;
    var z = Math.pow(x, y);
    document.getElementById("maybeMath").innerHTML = z;
}