# RandersAFC
I dette projekt....

## Features

- Scroll to top
- Loading side
- Img slider
- Dropdown


## Loading

### Funktionalitet

Loading-funktionen viser en loader på siden, mens den indlæses. Den inkluderer en animeret GIF og en tekst, der beder brugeren om at vente. Loaderen fjernes automatisk efter 1,5 sekunder.

### Struktur

Featuren består af tre filer:
1. **JavaScript**: Loaderen og dens indhold tilføjes dynamisk til body-elementet ved hjælp af JavaScript.
2. **CSS**: Definerer udseendet og layoutet af loaderen, herunder centrering af indholdet og styling af GIF og tekst.
3. **JSON**: Indeholder data om filplaceringerne for den animerede loading GIF.


#### **JavaScript (loading.js)**
Her er metoden loader er kodet ved hjælp af javascript.

```javascript
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