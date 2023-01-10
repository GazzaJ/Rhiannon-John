const btn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const logo = document.getElementById('logo');

// Hamburger Button Listner.
btn.addEventListener('click', navToggle);

// Display the Mobile Menu items
function navToggle() {
    btn.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');

    if (menu.classList.contains('flex')) {
        logo.setAttribute('src', './images/logo-bookmark-footer.svg');
    } else {
        logo.setAttribute('src', './images/logo-bookmark.svg');
    }
}