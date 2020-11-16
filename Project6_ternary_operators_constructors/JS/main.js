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

function Vehicle(Make, Model, Year, Color) { //for step 122 **write code exactly from step 121
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML = "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model + " manufactured in " + Erik.Vehicle_Year + ".";
}

function Dog(Breed, Age, Name, Weight) { //for step 123 **utilize the new keyword
    this.Dog_Breed = Breed;
    this.Dog_Age = Age;
    this.Dog_Name = Name;
    this.Dog_Weight = Weight;
}
var Michael = new Dog("Mutt", 3, "Latte", 40);
var Fred = new Dog("Husky", 6, "Shasta", 65);
var Joe = new Dog("Dachshund", 5, "Rocky", 15);
function myDog() {
    document.getElementById("New_and_This").innerHTML = "Michael owns a pure-bred " + Michael.Dog_Breed + " whose name is " + Michael.Dog_Name + ". She is " + Michael.Dog_Age * 7 + " in dog years.";
}

function Student(First, Last, Major, GPA) { //for step 125 **write an object constructor function
    this.Student_FirstName = First;
    this.Student_LastName = Last;
    this.Student_Major = Major;
    this.Student_GPA = GPA;
}

function nestedF() { //for step 128 **nested function
    document.getElementById("numberUp").innerHTML = count();
    function count() {
        var firstNum = 3;
        function multiTwo() {firstNum *= 2;}
        multiTwo();
        return firstNum;
    }
}