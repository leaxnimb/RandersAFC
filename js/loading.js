"use strict";

document.addEventListener("DOMContentLoaded", async () => {
    // Hent data fra JSON-filen
    const response = await fetch('../json/jsondata.json');
    const data = await response.json();
  
    // erklær en variable som henter JSON-data som indeholder "loadingGif" med stien til GIF'en
    const gifUrl = data[2].loadingGif;
  
    // Opretter en loader-container
    const loader = document.createElement("div");
    loader.id = "global-loader";
    loader.innerHTML = `
        <div class="loading-container">
            <img src="${gifUrl}" alt="Loading..." class="loading-gif">
            <p class="loading-text">Indlæser, vent venligst...</p>
        </div>
    `;
    document.body.appendChild(loader);
  
    // Skjul loader efter 1.5 sekunder
    setTimeout(() => {
      loader.style.display = "none";
    }, 1500);
  });

  