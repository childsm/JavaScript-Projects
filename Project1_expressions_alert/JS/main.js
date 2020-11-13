alert("Hello 2 U World!"); //for JC step 31; **make an alert button

window.alert("& HAPPY FRIDAY!"); //was for JC step 35; make a an "alert" window with an OK button (dont' see the diff from just using "alert" statement)
 
document.write("Hello 2 U World & HAPPY FRIDAY!<br>"); //for JC step 37 also found one way to add line breaks; 

var A = "First JavaS string.<br><br>"; //for JC step 40; **assign a variable and display
document.write(A);

var my = "So happy! It's Friday!"; //for JC step 43 **assign a variable and display in alert window
window.alert(my); //commented out so I don't have to keep pressing OK before seeing rest of code

document.write("\"What day is it?\", I think to myself . . .<br>" //for JC step 45 & 47; **use the backslash and also concatinate
+   "Ah yes, it is \"Blursday\"! <br><br>");

var concat = "Concatinating " + "strings " + "together.<br><br>"; //for JC step 49; **display a concatinated variable
document.write(concat);

var quest = "My favorite color is ", b = "blue", r = "red", g = "green"; //for JC step 50; **set multiple variables with one statement
document.write(quest, b);

document.write("<br><br>"); //adding a blank line
var b = b.fontcolor("blue"), r = r.fontcolor("red"), g = g.fontcolor("green"); // for JC step 52; **change the font color
document.write(quest, b, r, g);


document.write("<br><br>"); //adding a blank line again
var x = 2, y = 16;          //for JC step 54; **write an expression
document.write(x * y);