// Håndtering af dropdown-menuer
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


