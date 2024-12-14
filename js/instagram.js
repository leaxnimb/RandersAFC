document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.instagram-images');
    const images = document.querySelectorAll('.instagram-images img');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    const maxIndex = images.length - 3; // Antallet af billeder minus dem, der vises på én gang (3)

    function updateSlider() {
        const translateX = -currentIndex * (100 / 3); // Flytter med 1/3 af bredden pr. klik
        slider.style.transform = `translateX(${translateX}%)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }else{
            currentIndex = maxIndex;
            updateSlider();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }else {
            currentIndex = 0;
            updateSlider();}   
    });
});
