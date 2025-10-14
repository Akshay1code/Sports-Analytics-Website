document.addEventListener('DOMContentLoaded', () => {
    const menBtn = document.getElementById('men');
    const womenBtn = document.getElementById('women');
    const rankcards = document.querySelectorAll('.rankcard'); // Get all rankcards

    menBtn.addEventListener('click', () => {
        rankcards.forEach(card => card.classList.remove('flip'));
    });

    womenBtn.addEventListener('click', () => {
        rankcards.forEach(card => card.classList.add('flip'));
    });
});
document.getElementById('menu-button').addEventListener('click', function() {
    const dropdown = document.getElementById('analytics-dropdown');
    // Toggle the 'show' class to display/hide the content
    dropdown.classList.toggle('show');
});

// Optional: Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
    if (!event.target.matches('#menu-button')) {
        const dropdowns = document.getElementsByClassName('dropdown-content');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
});