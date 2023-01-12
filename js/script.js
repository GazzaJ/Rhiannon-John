const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

// Hamburger Button Listner.
btn.addEventListener('click', navToggle);

// Display the Mobile Menu items
function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
}