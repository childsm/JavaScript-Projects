function myDY() { //for step 88; **make a dictionary
    var TBMs = {
        Type:"Double_Shield",
        Diameter:"13m",
        Conveyance:"Belt",
        Manlock:"Yes",
        Cutter:"17inch"
    };
    document.getElementById("Dictionary").innerHTML = TBMs.Type;
}

function myDictionary() { //for step 91; **delete a key and see what happens
    var TBMs = {
        Type:"Main_Beam",
        Diameter:"14.5m",
        Conveyance:"Belt",
        Manlock:"No",
        Cutter:"19inch"
    };
    delete TBMs.Type;
    document.getElementById("Dictionary2").innerHTML = TBMs.Type;
}