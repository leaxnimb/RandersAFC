"use strict";

const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const imageContainer = document.querySelector('.instagram-images');
    
    let scrollAmount = 0;

    prevButton.addEventListener('click', () => {
        scrollAmount -= imageContainer.clientWidth / 3;
        if (scrollAmount < 0) scrollAmount = 0;
        imageContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });

    nextButton.addEventListener('click', () => {
        scrollAmount += imageContainer.clientWidth / 3;
        if (scrollAmount > imageContainer.scrollWidth - imageContainer.clientWidth) {
            scrollAmount = imageContainer.scrollWidth - imageContainer.clientWidth;
        }
        imageContainer.style.transform = `translateX(-${scrollAmount}px)`;
    });