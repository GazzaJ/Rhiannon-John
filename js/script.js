const imgs = document.querySelectorAll('.image');
let imgSrc;

// Getting the source of the image
//Adapted from https://dev.to/salehmubashar/create-an-image-modal-with-javascript-2lf3
imgs.forEach((img) => {
    img.addEventListener('click', (e) => {
        imgSrc = e.target.src;
    });
});

//Display modal on clicking image
let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");

    // Add the modal to the main section / parent element
    document.querySelector(".main").append(modal);

    // Add image to the modal
    const newImg = document.createElement("img");
    newImg.setAttribute("src", src);
    modal.append(newImg)
};
