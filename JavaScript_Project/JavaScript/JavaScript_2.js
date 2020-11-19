function validateForm() {
  var n = document.forms["basicForm"]["yname"];
  if (n.value == "") {
    window.alert("Please enter your name.");
    n.focus();
    return false;
  }
}