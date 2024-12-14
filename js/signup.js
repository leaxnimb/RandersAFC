// Get all dropdowns from document
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li'); // Ensure you're getting all li items
    const selected = dropdown.querySelector('.selected');

    // Add a click event to the select element
    select.addEventListener('click', () => {
        // Toggle the clicked styles for select, caret, and menu
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    // Loop through all the options
    options.forEach(option => { // Change variable name to 'option'
        option.addEventListener('click', () => {
            // Set the selected option text
            selected.innerText = option.innerText;

            // Close the dropdown and remove active styles
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            // Remove active class from all options
            options.forEach(item => {
                item.classList.remove('active');
            });

            // Add active class to the clicked option
            option.classList.add('active');
        });
    });
});
