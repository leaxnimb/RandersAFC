"use strict";
document.addEventListener("DOMContentLoaded", () => {
    // Opretter en loader-container, hvor derefter der indsættes html
    const loader = document.createElement("div");
    loader.id = "global-loader";
    loader.innerHTML = `
        <div class="loading-container">
            <img src="../img/gif/load.gif" alt="Loading" class="loading-gif">
            <p class="loading-text">Vent venligst...</p>
        </div>
    `;
    document.body.appendChild(loader);

    // Sætter timer til load 1.5 sekunder og skjuler loader efter tidener gået.
    setTimeout(() => {
        loader.style.display = "none";
    }, 1500);
});