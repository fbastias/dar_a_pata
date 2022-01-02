/*********************************
NAVBAR FUNCTIONS

*********************************/

// Toggle between showing and hiding the sidebar when clicking the menu icon
var mySidebar = document.getElementById("mySidebar");

// Open the sidebar with the hamburguer button
function w3_open() {
  if (mySidebar.style.display === "block") {
    mySidebar.style.display = "none";
  } else {
    mySidebar.style.display = "block";
  }
}

// Close the sidebar with the close button
function w3_close() {
  mySidebar.style.display = "none";
}

/**
 * Set the navbar different styles depending on the page user currently is
 */
var top1 = $("#home").offset().top;
var top2 = $("#about").offset().top;
var top3 = $("#team").offset().top;
var top4 = $("#contact").offset().top;

$(document).on("scroll", function () {
  var scrollPos = $(document).scrollTop();
  // HOME PAGE
  if (scrollPos >= top1 && scrollPos < top2) {
    $("#myNavbar").css("background-color", "");
    $(".navbar-sections").css("color", "white");
    // ABOUT PAGE
  } else if (scrollPos >= top2 && scrollPos < top3) {
    $("#myNavbar").css("background-color", "white");
    $(".navbar-sections").css("color", "black");
    // TEAM PAGE
  } else if (scrollPos >= top3 && scrollPos < top4) {
    $("#myNavbar").css("background-color", "white");
    $(".navbar-sections").css("color", "black");
    // CONTACT PAGE
  } else if (scrollPos >= top4) {
    $("#myNavbar").css("background-color", "white");
    $(".navbar-sections").css("color", "black");
  }
});

/*********************************
IMAGE AUTOMATIC SLIDESHOW

*********************************/

// Automatic Slideshow - change image every 4 seconds
var myIndex = 0;
// carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 4000);
}

/*********************************
ONCLICK FUNCTIONS

*********************************/

/**
 * Functions for Slideshow in Team Section
 */
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var prevButton = document.getElementsByClassName("prev");
  var nextButton = document.getElementsByClassName("next");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  // Disable next button if in image 2 and able the prev button
  if (slideIndex === 1) {
    prevButton[0].style.display = "none";
    nextButton[0].style.display = "block";
  }
  // Disable prev button if in image 1 and able the next button
  if (slideIndex === 2) {
    prevButton[0].style.display = "block";
    nextButton[0].style.display = "none";
  }
}
