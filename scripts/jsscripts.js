// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// get elements
  var logo = document.getElementById("homelogo");
  var nav = document.getElementById("buttons");

// Get the offset position of the logo and nav
  var sticky = logo.offsetTop;
  var stickynav = nav.offsetTop;
  var navheight = nav.offsetHeight;




// Add the sticky class to the header and nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {

//logo
  if (window.pageYOffset >= sticky){
    logo.classList.add("stickylogo");
   // window.alert(logoheight);
  }
  else
  {logo.classList.remove("stickylogo");
  }

//nav
  if (window.pageYOffset >= stickynav -(logo.offsetHeight + navheight))
  {nav.classList.add("stickynav");}
  else
  {nav.classList.remove("stickynav");}

}
