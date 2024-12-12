"use strict";

document.addEventListener("DOMContentLoaded", () => {
  // Opret en loader-container
  const loader = document.createElement("div");
  loader.id = "global-loader";
  loader.innerHTML = `
      <div class="loading-container">
          <img src="loading.gif" alt="Loading..." class="loading-gif">
          <p class="loading-text">Indlæser, vent venligst...</p>
      </div>
  `;
  document.body.appendChild(loader);

  // Skjul loader efter 3 sekunder
  setTimeout(() => {
      loader.style.display = "none";
  }, 3000);
});