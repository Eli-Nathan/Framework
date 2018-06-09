// for IE10, .getElementsByClassName()[0];
var toggle = document.querySelector(".toggle");
var topNav = document.querySelector(".nav--top");


// Listen for click event on toggle var
toggle.addEventListener('click', function() {
  console.log("toggle clicked");
  // toggle class "active" on topNav var
  topNav.classList.toggle("active");
}, false);
