"use strict";

document.addEventListener("DOMContentLoaded", () => {
    // Hent data fra JSON-filen og sikre at hvis den ikke kan hente at den giver en error besked.
    fetch("../json/jsondata.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Kunne ikke hente data");
        }
        return response.json();
      })
      .then((data) => {
        // sætter den til hente fra andet objekt fra array af objekter.
        const jsonData = data[1]; // Tilgå det relevante objekt.

        // Henter id fra html og giver den en ny værdi.
        document.getElementById("status-ikon").src = jsonData.ikon;
        document.getElementById("status-titel").textContent = jsonData.titel;
        document.getElementById("status-besked").textContent = jsonData.besked;
      })
      //hvis der fejl i at hente objekterne i json så fejl skriver den.
      .catch((error) => {
        console.error(error);
        document.getElementById("status-titel").textContent = "Fejl!";
        document.getElementById("status-besked").textContent = "Kunne ikke indlæse indholdet.";
      });

        // igen hentes der id og giver den en adventlistner og en funktion til at gå tilbage til index siden.
        document.getElementById("tilbage-knap").addEventListener("click", () => {
        window.location.href = "index.html";
    });
});