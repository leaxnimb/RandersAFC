"use strict";

// henter btn:
let mybutton = document.getElementById("myBtn");

// Når bruger scoller x antal px fra top vises knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth > 991) { // Kun hvis skærmen er større end 991px
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    } else {
      mybutton.style.display = "none"; // Skjul knappen for mindre skærme
    }
  }

// Når brugeren klikker på knappen, scrolles til toppen for browsere:
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}