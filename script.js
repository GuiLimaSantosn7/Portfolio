const imagens = document.querySelectorAll('.col5 img');
const overlay = document.getElementById('overlay');
const controls = document.getElementById('controls');
const prevBtn = document.getElementById('prevBtn');
const closeBtn = document.getElementById('closeBtn');
const nextBtn = document.getElementById('nextBtn');
let currentImageIndex = 0;

function showImage(index) {
    imagens.forEach(imagem => imagem.classList.remove('expanded'));
    imagens[index].classList.add('expanded');
    overlay.classList.add('active');
    controls.classList.add('active');
}

imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
        currentImageIndex = index;
        showImage(index);
    });
});

overlay.addEventListener('click', () => {
    overlay.classList.remove('active');
    controls.classList.remove('active');
    const expandedImage = document.querySelector('.expanded');
    if (expandedImage) {
        expandedImage.classList.remove('expanded');
    }
});

prevBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + imagens.length) % imagens.length;
    showImage(currentImageIndex);
});

nextBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % imagens.length;
    showImage(currentImageIndex);
});

closeBtn.addEventListener('click', (event) => {
    event.stopPropagation();
    overlay.classList.remove('active');
    controls.classList.remove('active');
    const expandedImage = document.querySelector('.expanded');
    if (expandedImage) {
        expandedImage.classList.remove('expanded');
    }
});

//mobile

function isMobileDevice() {
    // Verifica a largura da janela
    return window.innerWidth <= 768;
}

function redirectToMobilePage() {
    const mobilePageLink = "https://guilimasantosn7.github.io/Portmobile/"
    if (isMobileDevice() && mobilePageLink) {
        window.location.href = mobilePageLink;
    }
}

document.addEventListener('DOMContentLoaded', (event) => {
    redirectToMobilePage();
});