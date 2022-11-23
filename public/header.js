const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".descktop-nav");
const menuLinks = document.querySelector("header");
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    menu.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('active');
    menuOpen = false;
  }
});

menuLinks.addEventListener('click', (event) => {
  if (event.target.classList.contains("menu-button") || event.target.classList.contains("menu-button-container") || event.target.classList.contains("button-part")) {
    return;
  } else {
    menuBtn.classList.remove('open');
    menu.classList.remove('active');
    menuOpen = false;
  }
});
