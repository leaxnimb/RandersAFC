# RandersAFC
I dette projekt har vi arbejdet med en amerikansk fodboldklub i Randers ved navn RandersAFC. Vi har arbejdet med nogle forskellige features som kan ses nedenfor

## Features

- Scroll to top
- Loading side
- Img slider
- Dropdown

## Scroll-to-top

### Funktionalitet
Scroll-to-top funktionen er en knap, som gør det muligt at komme til toppen af siden med ét klik. Knappen bliver synlig ved >500 px scroll på siden. Knappen inkluderer to images, som skiftes ud ved hover.

### Struktur
Featuren består af tre filer
1.**HTML** Består af et enkelt img block-element i body med src, alt, on-click, id og title.
2.**CSS** Definere img/knappens placering, størrelse samt hover effekt.
3.**JavaScript** Sætter scroll-to-top funktionen

### **JavaScript (topbtn.js)**
Her er metoden scroll-to-top er kodet ved hjælp af JacaScript

```javascript
"use strict";

// Henter btn i html:
let mybutton = document.getElementById("myBtn");

// Når bruger scoller x antal px fra top vises knappen
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (window.innerWidth > 991) { // Kun hvis skærmen er større end 991px
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    } else {
      mybutton.style.display = "none"; // Skjuler knappen for mindre skærme
    }
  }

// Når brugeren klikker på knappen, scrolles til toppen for browsere:
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
```



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
```

----------------
## Img Slider

### Funktionalitet

Loading-funktionen viser en loader på siden, mens den indlæses. Den inkluderer en animeret GIF og en tekst, der beder brugeren om at vente. Loaderen fjernes automatisk efter 1,5 sekunder.

### Struktur

Featuren består af tre filer:
1. **JavaScript**: Img slideren og dens indhold tilføjes dynamisk til body-elementet ved hjælp af JavaScript.
2. **CSS**: Definerer udseendet og layoutet af loaderen, herunder centrering af indholdet, kasse og navigationsknapper.

### **JavaScript (instagram.js)**
Her er metoden instagram slideren er kodet ved hjælp af javascript.

```javascript
/*koden køres når hele HTML'en er blevet indlæst*/
document.addEventListener('DOMContentLoaded', () => { 
    const slider = document.querySelector('.instagram-images'); 
    /*Henter alle billed-elementer inde i .instagram-images */
    const images = document.querySelectorAll('.instagram-images img'); 
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    let currentIndex = 0;
    /*Antallet af billeder minus dem, der vises på én gang (3)*/
    const maxIndex = images.length - 3;

    function updateSlider() {
        /*Flytter med 1/3 af bredden pr. klik*/
        const translateX = -currentIndex * (100 / 3); 
        slider.style.transform = `translateX(${translateX}%)`;
    }

    /*Tilføjer en klik-hændelse til "forrige"-knappen*/
    prevButton.addEventListener('click', () => { 
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }else{
            currentIndex = maxIndex;
            updateSlider();
        }
    });

    /*Tilføjer en klik-hændelse til "næste"-knappen*/
    nextButton.addEventListener('click', () => { 
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSlider();
        }else {
            currentIndex = 0;
            updateSlider();}   
    });
});
```


##Dropdown

### Funktionalitet

Dropdown funktionen udvider valgmulighederne inde på sign up siden og giver mulighed for at vælge hold og om man har udstyr eller skal låne udstyr af klubben

### Struktur

Featuren består af tre filer:
1. **JavaScript**: Dropdownen bliver funktionel og klikbar igennem javascripten
2. **CSS**: Definerer udseendet og layoutet af dropdown knapperne.

### **JavaScript (Dropdown)**
```javascript
Her er metoden dropdown slideren er kodet ved hjælp af javascript.
// Find alle elementer med klassen 'dropdown' i dokumentet
const dropdowns = document.querySelectorAll('.dropdown');

// Gå gennem hver dropdown for at tilføje funktionalitet
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select'); // Klikbart dropdown-felt
    const caret = dropdown.querySelector('.caret');   // Pil-ikonet ved dropdown
    const menu = dropdown.querySelector('.menu');     // Menuen med valgmuligheder
    const options = dropdown.querySelectorAll('.menu li'); // Alle valgmuligheder i menuen
    const selected = dropdown.querySelector('.selected');  // Elementet, der viser den valgte mulighed

    // Tilføj en klik-hændelse på dropdown-feltet for at åbne/lukke menuen
    select.addEventListener('click', (event) => {
        event.stopPropagation(); // Forhindrer klik på dropdown i at lukke menuen
        select.classList.toggle('select-clicked'); // Tilføjer/fjerner en klasse for visuel effekt
        caret.classList.toggle('caret-rotate');    // Drejer pil-ikonet for at indikere åben/lukket tilstand
        menu.classList.toggle('menu-open');        // Viser eller skjuler menuen
    });

    // Tilføj en klik-hændelse til hver valgmulighed i menuen
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;  // Opdaterer tekst i dropdown med den valgte mulighed
            select.classList.remove('select-clicked'); // Lukker dropdown-menuen
            caret.classList.remove('caret-rotate');    // Nulstiller pilens rotation
            menu.classList.remove('menu-open');        // Skjuler menuen

            // Fjerner aktiv markering fra alle valgmuligheder
            options.forEach(item => item.classList.remove('active'));
            // Marker den valgte mulighed som aktiv
            option.classList.add('active');
        });
    });

    // Tilføj en klik-hændelse på dokumentet for at lukke dropdown, hvis man klikker udenfor
    document.addEventListener('click', (event) => {
        // Tjek om det klikkede element ikke er en del af dropdown
        if (!dropdown.contains(event.target)) {
            select.classList.remove('select-clicked'); // Lukker dropdown-menuen
            caret.classList.remove('caret-rotate');    // Nulstiller pilens rotation
            menu.classList.remove('menu-open');        // Skjuler menuen
        }
    });
});

// Håndtering af formular og bekræftelsesknap
// Find formularen med ID'et 'confirmationForm'
const form = document.getElementById('confirmationForm');

// Tilføj en hændelse for når formularen bliver sendt
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Forhindrer standard handling (genindlæsning af siden)
    window.location.href = 'godkendt.html'; // Navigerer brugeren til godkendt.html efter bekræftelse
});