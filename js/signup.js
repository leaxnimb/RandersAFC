// Håndtering af dropdowns
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', (event) => {
        event.stopPropagation();
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(item => item.classList.remove('active'));
            option.classList.add('active');
        });
    });

    document.addEventListener('click', (event) => {
        if (!dropdown.contains(event.target)) {
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
        }
    });
});

// Håndtering af formular og bekræftelsesknap
const form = document.getElementById('confirmationForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();  // Forhindrer formularen i at blive sendt
    window.location.href = 'godkendt.html';  // Navigerer til godkendt.html
});

