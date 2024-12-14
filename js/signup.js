// Hent alle dropdown-elementer fra dokumentet
const dropdowns = document.querySelectorAll('.dropdown');

// Gennemgå hvert enkelt dropdown-element
dropdowns.forEach(dropdown => {
    // Find de nødvendige elementer inde i hver dropdown
    const select = dropdown.querySelector('.select');       // Selve dropdown-feltet
    const caret = dropdown.querySelector('.caret');         // Pilen (caret)
    const menu = dropdown.querySelector('.menu');           // Menuen med muligheder
    const options = dropdown.querySelectorAll('.menu li');  // Alle valgmuligheder
    const selected = dropdown.querySelector('.selected');   // Felt til den valgte mulighed

    // Tilføj et klik-event til dropdown-feltet
    select.addEventListener('click', (event) => {
        // Stop eventet fra at boble op, så klik ikke registreres af document
        event.stopPropagation();

        // Toggle klasser for at åbne/lukke dropdown-menuen
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    // Gennemgå alle valgmuligheder i menuen
    options.forEach(option => {
        option.addEventListener('click', () => {
            // Opdater det viste indhold til den valgte mulighed
            selected.innerText = option.innerText;

            // Luk dropdown-menuen og fjern aktive stilarter
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            // Fjern den aktive klasse fra alle muligheder
            options.forEach(item => {
                item.classList.remove('active');
            });

            // Marker den valgte mulighed som aktiv
            option.classList.add('active');
        });
    });

    // Tilføj et klik-event på dokumentet for at lukke dropdown, hvis man klikker udenfor
    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) { // Tjek om det klikkede element IKKE er inde i dropdown
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });
});
