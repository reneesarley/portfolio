// When the user scrolls the page, execute myFunction
window.onscroll = function() {TopNav()};

// get elements
  var logo = document.getElementById("homelogo");
  var nav = document.getElementById("buttons");
  var header = document.getElementById("header");
  var nameText =document.getElementById("homelogo").innerHTML;

// Get the offset position of the logo and nav
  var sticky = logo.offsetTop;
  var stickynav = nav.offsetTop;

  //get heights of header elements
  var logoheight = logo.offsetHeight;
  var navheight = nav.offsetHeight;

// Add the sticky class to the header and nav when you reach its scroll position. Remove "sticky" when you leave the scroll position
function TopNav() {
//logo;
if (window.pageYOffset >= (sticky * 1.5)){
  logo.classList.add("stickylogo")
  logo.innerHTML = "renee sarley";
  }

  else
  {
    logo.classList.remove("stickylogo")
    logo.innerHTML = nameText;
  }

//nav
  if (window.pageYOffset >= ((sticky + navheight * 1.5) + navheight))
  {nav.classList.add("stickynav");}
  else
  {nav.classList.remove("stickynav");}

}
