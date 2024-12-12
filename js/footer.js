"use strict";
/* Der køres en window.onload som er en JavaScript begivenhedshandler, som kører en funktion når
 når hele siden er indlæst*/
window.onload = function() {
    // Henter elementet i HTML
    const footer = document.getElementById('footer');

    // Hent JSON-data
    fetch('../json/jsondata.json')
        .then(response => response.json())
        .then(data => {
            // Opretter logo-sektionen
            const logoSection = document.createElement('div');
            logoSection.id = 'logo-section';
            // Opretter img element, her gives src til hentes fra data, som er stien til jsondata-filen for finde stien til logo-img.
            const logoImg = document.createElement('img');
            logoImg.src = data[0].logo; 
            logoImg.alt = 'Logo';
            
            // Der sættes til størrelse for loget.
            logoImg.style.height = '5%'; 

            // Der afsluttes med append elemenet logoImg
            logoSection.appendChild(logoImg);

            // Opretter en kontakt-sektion
            const kontaktSection = document.createElement('div');
            kontaktSection.id = 'kontakt';

            // opretter en h3 til overskrifter, der efter gives den text som er kontakt.
            const kontaktHeading = document.createElement('h3');
            kontaktHeading.textContent = 'Kontakt';

            // opretter et nyt element p, og giver en indhold
            const kontaktEmail = document.createElement('p');
            kontaktEmail.innerHTML = '<img class="icon" src="../img/icons/mail.png" alt="Email"> Email: info@randersafc.dk';
            const KontaktTelefon = document.createElement('p');
            KontaktTelefon.innerHTML = '<img class="icon" src="../img/icons/mobil.png" alt="Telefon"> Telefon: +45 27573842';

            // Så afsluttes der med append elementer der skabt.
            kontaktSection.appendChild(kontaktHeading);
            kontaktSection.appendChild(kontaktEmail);
            kontaktSection.appendChild(KontaktTelefon);

            // opretter en section igen, med en h3 til overskrifter, der efter gives den text som er find os.
            const addresseSection = document.createElement('div');
            addresseSection.id = 'addresse';
            const addresseHeading = document.createElement('h3');
            addresseHeading.textContent = 'Find os';

            // opretter et nyt element p, og giver en indhold
            const addresseText = document.createElement('p');
            addresseText.innerHTML = '<img class="icon" src="../img/icons/lokation.png" alt="Adresse"> Randers NØ, Mariagervej 180 8930 Randers, Danmark';

            // Så afsluttes der med append elementer der skabt.
            addresseSection.appendChild(addresseHeading);
            addresseSection.appendChild(addresseText);

            // Så afsluttes der med append alle section elementer der skabt.
            footer.appendChild(logoSection);
            footer.appendChild(kontaktSection);
            footer.appendChild(addresseSection);
        })
        // hvis der sker en fejl så fortæller den at der en fejl med at hente (logoet med fetch).
        .catch(error => {
            console.error('Fetch error:', error);
        });
};

