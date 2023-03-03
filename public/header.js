const colorChoice = document.getElementById('color');
let color = document.getElementById('color').textContent;

// function randomStart() {
//   color = Math.floor(Math.random()*16777215).toString(16);
//   while (color.length < 6) {
//     color = Math.floor(Math.random()*16777215).toString(16);
//   }

//   document.documentElement.style.setProperty('--variation-color', '#' + color);
//   colorChoice.innerHTML = color;
// }

// randomStart();

colorChoice.addEventListener('DOMCharacterDataModified', () => {
  color = document.getElementById('color').textContent;
  document.documentElement.style.setProperty('--variation-color', '#' + color);
});

const randomColor = document.getElementById('random-color');

randomColor.addEventListener('click', () => {
  color = Math.floor(Math.random()*16777215).toString(16);
  while (color.length < 6) {
    color = Math.floor(Math.random()*16777215).toString(16);
  }
  document.documentElement.style.setProperty('--variation-color', '#' + color);
  colorChoice.innerHTML = color;
});

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

const themeSwitcher = document.querySelector('.theme-switch');
let lightTheme = true;

themeSwitcher.addEventListener('click', () => {
  themeSwitcher.classList.toggle("dark");

  if (lightTheme === false) {
    document.documentElement.style.setProperty('--font-color', '#000000');
    document.documentElement.style.setProperty('--background-color', '#f0f5f6');
    lightTheme = true;
  } else if (lightTheme === true) {
    document.documentElement.style.setProperty('--font-color', '#f0f5f6');
    document.documentElement.style.setProperty('--background-color', '#000000');
    lightTheme = false;
  }
});
