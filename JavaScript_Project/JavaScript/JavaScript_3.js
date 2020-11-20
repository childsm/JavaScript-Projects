//Step 243 **write a data attribute
function showSize(bear) {
    var bearSize = bear.getAttribute("data-bear_size");
    alert("A " + bearSize + " is size " + bear.innerHTML + ".");
}