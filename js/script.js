const imgs = document.querySelectorAll('.image');
console.log(imgs);
imgs.forEach((img) => img.addEventListener('click', openModal))
//Display modal on clicking image

function openModal() {
    console.log('Boom!');
}