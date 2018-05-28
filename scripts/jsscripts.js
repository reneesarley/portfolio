// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// get elements
  var logo = document.getElementById("homelogo");
  var nav = document.getElementById("buttons");
  var header = document.getElementById("header");
  var vid= document.getElementById("headerVid")

// Get the offset position of the logo and nav
  var sticky = logo.offsetTop;
  var vidTop =  vid.offsetTop;
  var stickynav = nav.offsetTop;
  var navheight = nav.offsetHeight;
  var headerPosition = header.offsetTop;

// Add the sticky class to the header and nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
//logo;
 //window.alert(sticky);
if (window.pageYOffset >= (sticky * 2)){
  logo.classList.add("stickylogo");
  // window.alert(sticky);
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
