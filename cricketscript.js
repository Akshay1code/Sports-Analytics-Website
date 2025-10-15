document.addEventListener('DOMContentLoaded', () => {
    // 1. Navigation Dropdown Logic
    const menuButton = document.getElementById('menu-button');
    const dropdown = document.getElementById('analytics-dropdown');

    menuButton.addEventListener('click', () => {
        dropdown.classList.toggle('show');
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', (event) => {
        if (!event.target.matches('#menu-button') && !dropdown.contains(event.target)) {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        }
    });

    // 2. Men/Women Ranking Switch Logic
    const menButton = document.getElementById('men');
    const womenButton = document.getElementById('women');
    const rankCards = document.querySelectorAll('.rankcard');

    function updateRankings(gender) {
        // Toggle button active class
        menButton.classList.remove('active');
        womenButton.classList.remove('active');
        if (gender === 'men') {
            menButton.classList.add('active');
        } else {
            womenButton.classList.add('active');
        }

        // Toggle visibility of front/back in each rank card
        rankCards.forEach(card => {
            const front = card.querySelector('.rankcard-front');
            const back = card.querySelector('.rankcard-back');

            if (gender === 'men') {
                front.style.display = 'block';
                back.style.display = 'none';
            } else {
                front.style.display = 'none';
                back.style.display = 'block';
            }
        });
    }

    menButton.addEventListener('click', () => updateRankings('men'));
    womenButton.addEventListener('click', () => updateRankings('women'));

    // Initialize the rankings to 'Men' on load
    updateRankings('men');
});