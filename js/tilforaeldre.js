"use strict";

// Hent JSON-filen fra serveren
fetch('../json/jsondata.json')
    .then(response => {
        // Tjek om svaret er OK (200-statuskode)
        if (!response.ok) {
            // Hvis der er et problem med netværket, kast en fejl
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        // Konverter svaret til JSON-format
        return response.json();
    })
    .then(data => {
        // Vis JSON-data i konsollen (til debugging)
        console.log('JSON data loaded:', data);

        // Find HTML-sektionen, hvor billedet skal tilføjes
        const middleSection = document.querySelector('.middle-section');

        // Opret et nyt billede-HTML-element
        const middleImg = document.createElement('img');

        // Tjek om der er et element i data-arrayet på index 3, og om dette element har en "middleBillede"-egenskab
        if (data[3] && data[3].middleBillede) {
            // Hvis begge betingelser er sande &&:
            // 1. "data[3]" eksisterer (dvs. data-arrayet har et element på index 3).
            // 2. "middleBillede" findes i det element (dvs. "middleBillede" har en værdi, som ikke er undefined eller null).
            // Så fortsætter vi med at hente billedet og tilføje det til siden.

            middleImg.src = data[3].middleBillede; // Hent middleBillede fra JSON
            middleImg.alt = 'Glade spiller';

            // Tilføj billedet til den fundne sektion
            middleSection.appendChild(middleImg);

            // Log billedets kilde i konsollen (til debugging)
            console.log('Billede tilføjet:', middleImg.src);
        } else {
            // Hvis én af betingelserne ikke er sand (f.eks. hvis data[3] ikke findes eller hvis middleBillede ikke er defineret),
            // vis en fejl i konsollen.
            console.error('middleBillede not found in JSON data at index 3.');
        }
    })
    .catch(error => {
        // Hvis fetch-anmodningen mislykkes, log fejl
        console.error('Fetch failed:', error);
    });