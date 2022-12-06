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
    document.documentElement.style.setProperty('--font-color', '#080908');
    document.documentElement.style.setProperty('--background-color', '#F2F6F0');
    document.documentElement.style.setProperty('--variation-color', '#34c80f');
    lightTheme = true;
  } else if (lightTheme === true) {
    document.documentElement.style.setProperty('--font-color', '#F2F6F0');
    document.documentElement.style.setProperty('--background-color', '#080908');
    document.documentElement.style.setProperty('--variation-color', '#44F917');
    lightTheme = false;
  }
});

const colorChoice = document.getElementById('color');
let color = document.getElementById('color').textContent;
console.log(color);


colorChoice.addEventListener('DOMCharacterDataModified', () => {
  color = document.getElementById('color').textContent;
  document.documentElement.style.setProperty('--variation-color', '#' + color);
});
