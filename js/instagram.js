"use strict";
document.addEventListener('DOMContentLoaded', () => { /*koden først køres når hele HTML'en er blevet indlæst*/
    const slider = document.querySelector('.instagram-images'); 
    const images = document.querySelectorAll('.instagram-images img'); /*Henter alle billed-elementer inde i .instagram-images */
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const maxIndex = images.length - 3; // Antallet af billeder minus dem, der vises på én gang (3)

    function updateSlider() {
        const translateX = -currentIndex * (100 / 3); // Flytter med 1/3 af bredden pr. klik
        slider.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => { /*Tilføjer en klik-hændelse til "forrige"-knappen*/
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }else{
            currentIndex = maxIndex;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => { /*Tilføjer en klik-hændelse til "næste"-knappen*/
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }else {
            currentIndex = 0;
            updateSlider();}   
    });
});
