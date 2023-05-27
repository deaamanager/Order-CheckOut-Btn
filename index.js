

////** */ code for dark light mode 
const darkModeToogleBtn = document.getElementById('dark-mode-toggle');
let theme = localStorage.getItem('theme');
if (theme == 'dark') enableDarkMode();



darkModeToogleBtn.addEventListener('chang', (event) => {
  theme = localStorage.getItem('theme');
  if (theme == 'dark') {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


function enableDarkMode() {
  darkModeToogleBtn.innerHTML = '🌞';
  localStorage.setItem('theme', 'dark');
  document.querySelector.classList.add('dark-mode');
}

function disableDarkMode() {
  darkModeToogleBtn.innerHTML = '🌘';
  localStorage.setItem('theme', 'light');
  document.querySelector.classList.remove('dark-mode');
}
window.matchMedia('(prefers-color-schema: dark)').addListener((e) => (e.matches ? enableDarkMode() : disableDarkMode()));









/// code just for order btn 
const order = document.querySelector(".order");

function handleOrderClick() {
  if (!order.classList.contains("animate")) {
    order.classList.add("animate");
    setTimeout(function () {
      order.classList.remove("animate");
    }, 10000);
  }
}

function init() {
  order.addEventListener("click", handleOrderClick);
}

init();