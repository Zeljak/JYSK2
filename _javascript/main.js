document.addEventListener('DOMContentLoaded', () => {
  // console.log('Hello Bulma!');
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


if (window.innerWidth > 767) {}
var navi = document.querySelector('.nav-menu-wrapper');
window.addEventListener('scroll', function() {
  if (window.scrollY > 40) {
    navi.classList.add('dark');
  } else {
    navi.classList.remove('dark');
  }
});

