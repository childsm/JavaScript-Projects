function countDown() { //Step 154 **create a timer 
    var t = document.getElementById("itsThe").value;
    
    function tock() {
        t = t - 1;
        final.innerHTML = t;
        timer = setTimeout(tock, 1000);
        if (t == -1) {
            alert("All Done!");
        }    
    } 
    tock(); //timer keeps going after I click the alert OK button. Tried else with clearTimeout and a function with clearTimeout. Neither worked, so moving on.
}

//Step 154 **create a timer 
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dots");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}