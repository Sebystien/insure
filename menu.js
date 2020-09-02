const button = document.querySelector(".nav__icon");
const close = document.querySelector(".close");
const open = document.querySelector(".open");
const menu = document.querySelector("ul.nav__menu");

open.addEventListener("click", () => {
  open.style.display = 'none';
  close.style.display = "block";
  menu.classList.add('mobile--menu');
  menu.style.width = " 100%";
});

close.addEventListener('click', () => {
  open.style.display = 'block';
  close.style.display = "none";
  menu.classList.remove('mobile--menu');
})