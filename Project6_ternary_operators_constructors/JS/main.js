function rideFunction() { //for step 118; **first use of Tenary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function yourAge() { //step 119; **attempt to convert user entered value to a number.
    var A = document.getElementById("uAge").value;
    var Age = parceFloat(A); //get error in console "Uncaught ReferenceError: parceFloat is not defined at yourAge (line 11). at HTMLButtonElement.onclick (line 22)"
    document.getElementById("uEnter").innerHTML = Age;
}

//was going to try even more things but asking for assistance first.
function Voting() {
    var A = document.getElementById("uAge").value;
    var Age = parceFloat(A);
    document.write(typeof Age);
    //var Can_Vote = ("Age" >= 18) ? "You can vote.":"You are not old enough to vote.";
    //document.getElementById("uVote").innerHTML = Can_Vote;
}