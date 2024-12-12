"use strict";

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const imageContainer = document.querySelector('.instagram-images');
const images = document.querySelectorAll('.instagram-images img');

let currentIndex = 0; // Start på første billede
const visibleImages = 3; // Antal synlige billeder
const totalImages = images.length; // Total antal billeder
const imageWidth = imageContainer.clientWidth / visibleImages; // Bredden af hvert billede

// Opdater containerbredden for at passe til antal billeder
imageContainer.style.width = `${totalImages * imageWidth}px`;

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - visibleImages) {
        currentIndex++;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = currentIndex * imageWidth;
    imageContainer.style.transform = `translateX(-${offset}px)`;
}
