let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation-toogle');

navMain.classList.remove('navigation--nojs');
navToggle.classList.remove('navigation-toogle--closed');
navToggle.classList.remove('navigation-toogle--no-js');
navToggle.classList.add('navigation-toogle--opened');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
    navToggle.classList.add('navigation-toogle--closed');
    navToggle.classList.remove('navigation-toogle--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
    navToggle.classList.remove('navigation-toogle--closed');
    navToggle.classList.add('navigation-toogle--opened');
  }
});
