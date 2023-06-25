const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__nav')

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  menu.classList.toggle('d-none');
}

