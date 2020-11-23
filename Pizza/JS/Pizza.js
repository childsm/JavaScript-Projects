// course JS step 279, pizza menu

function getReceipt() {
    //This intializes our string so it can get passed from
    //function to function, growing by line into a full receipt
    var text1 = "<h2>You Ordered:<h2> ";
    var runningTotal = 0;
    var sizeTotal = 0;
    var sizeArray = document.getElementsByClassName("size");
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize + "<br>";
        }
    }
    if (selectedSize === "Just-a-Taste Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Snack Pizza") {
        sizeTotal = 8;
    } else if (selectedSize === "Appetizer Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Main-Course Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Hungry-Teen Pizza") {
        sizeTotal = 18;
    }
    runningTotal = sizeTotal;
    console.log(selectedSize + " = $" + sizeTotal +".00");
    console.log("size text1: " + text1);
    console.log("subtotal: $" + runningTotal + ".00");
    //these variables will get passed on to each function;
    getTopping(runningTotal, text1);
};

//This is completing the text1 variable that lists all items purchased
function getTopping(runningTotal, text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("selected topping time: (" + toppingArray[j].value + ")");
            text1 = text1 + toppingArray[j].value + "<br>";
        }
    }
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount - 1);
    } else {
        toppingTotal = 0;
    }
    runningTotal = (runningTotal + toppingTotal);
    console.log("total selected topping items: " + toppingCount);
    console.log(toppingCount + " topping - 1 free topping = $" + toppingTotal + ".00");
    console.log("topping text1: " + text1);
    console.log("Purshase Total: $" + runningTotal + ".00");
    //This is displaying the receipt. It shows what was ordered and the total cost.
    document.getElementById("showText").innerHTML = text1;
    document.getElementById("totalPrice").innerHTML = "<h4>Total: <strong>$" + runningTotal + ".00" + "</strong></h4>";
};