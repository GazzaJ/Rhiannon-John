const imgs = document.querySelectorAll('.image');
const btt = document.getElementById('btt');
let imgSrc;

// Getting the source of the image
//Adapted from https://dev.to/salehmubashar/create-an-image-modal-with-javascript-2lf3
imgs.forEach((img) => {
    img.addEventListener('click', (e) => {
        imgSrc = e.target.src;
        imgModal(imgSrc);
    });
});

//Display modal on clicking image
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal flex justify-center items-center");
    // Add the modal to the main section / parent element
    document.querySelector(".main").append(modal);

    // Add image to the modal
    const newImg = document.createElement("img");
    newImg.setAttribute("src", src);
    newImg.setAttribute("class", "responsive")

    // Adding the Close Button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fa-solid fa-circle-xmark close");

    // Close Modal Function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImg, closeBtn);
};

//Back to Top Button
// Adapted from https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
window.onscroll = function () { scrollFunction() };

scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        btt.style.display = "block"
    } else {
        btt.style.display = "none"
    }
}

//Scroll to the top when the user clicks the button
backToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Hamburger mobile menu button
const btn = document.getElementById('menu-btn')
const menu = document.getElementById('menu')

btn.addEventListener('click', navToggle);

function navToggle() {
    btn.classList.toggle('open')
    menu.classList.toggle('flex')
    menu.classList.toggle('hidden')
}