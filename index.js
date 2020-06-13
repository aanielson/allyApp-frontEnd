window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrolltop > 180 || document.documentElement.scrollTop > 180) {
    document.getElementById("navlinks").style.top = "0";
    document.getElementById("navlinks").style.height = "100px";
    // document.getElementById("logo").style.display = "none";
    // document.getElementById("logo2").style.display = "block";
    document.getElementById("navlinks").style.backgroundColor = "lightgray";
  
  } else {
    document.getElementById("navlinks").style.backgroundColor = "transparent";
    document.getElementById("logo").style.display = "block";
    // document.getElementById("logo2").style.display = "none";
  }
}