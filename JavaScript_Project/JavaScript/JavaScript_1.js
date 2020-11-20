function teamFunction() { //Step 207 **write a switch statement
    var teamOutput;
    var team = document.getElementById("team_input").value;
    var teamString = " is a wise and excellent choice!";
    switch (team) {
        case "Kraken":
          teamOutput = "Kraken" + teamString;
        break;
        case "Canucks":
          teamOutput = "Canucks" + teamString;
        break;
        case "Penguins":
          teamOutput = "Penguins" + teamString;
        break;
        case "Rangers":
          teamOutput = "Rangers" + teamString;
        break;
        case "Sharks":
          teamOutput = "Sharks" + teamString;
        break;
        case "Hurricanes":
          teamOutput = "Hurricanes" + teamString;
        break;
        default:
            teamOutput = "Please choose a name from the list and enter it exactly.";
    }
    document.getElementById("Output").innerHTML = teamOutput;
}

function clickF() { //Step 216 **utilize the document.getElementsByClassName() method
    var C = document.getElementsByClassName("Clicky");
    C[1].innerHTML = "No, today is Blursday";
}

//Step 219 **draw something in the HTML canvas
var w = document.getElementById("myWindow");
var ctx = w.getContext("2d");
ctx.font = "36px cursive";
ctx.strokeText("BLURS - DAY", 20, 100);

//Step 220 **utilize creatLinearGradient() method
var w = document.getElementById("myWindow");
var ctx = w.getContext("2d");
var grd = ctx.createLinearGradient(0,0,170,0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");
ctx.fillStyle = grd;
ctx.fillRect(0,110,320,200);