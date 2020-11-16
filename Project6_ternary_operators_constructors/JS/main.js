function rideFunction() { //for step 118; **first use of Tenary operator
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function yourAge() { //step 119; **user input for ternary operator code.
    var Age = document.getElementById("uAge").value;
    var Can_Vote = (Age > 17) ? "You can vote.":"You are not old enough to vote.";
    document.getElementById("uEnter").innerHTML = Can_Vote;
}