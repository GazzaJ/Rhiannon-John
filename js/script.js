const imgs = document.querySelectorAll('.image');
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

    // Adding the Close Button
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fa-solid fa-circle-xmark close");

    // Close Modal Function
    closeBtn.onclick = () => {
        modal.remove();
    };
    modal.append(newImg, closeBtn);
};
