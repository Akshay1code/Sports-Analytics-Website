document.addEventListener('DOMContentLoaded', () => {
    const menData = {
        matches: [
            { p1: 'Magnus Carlsen', p2: 'Fabiano Caruana', result: '1-0' },
            { p1: 'Hikaru Nakamura', p2: 'Ian Nepomniachtchi', result: 'In Progress' },
        ],
        rankings: [
            { rank: 1, name: 'Magnus Carlsen', rating: 2830, change: '+2' },
            { rank: 2, name: 'Fabiano Caruana', rating: 2805, change: '-1' },
            { rank: 3, name: 'Hikaru Nakamura', rating: 2795, change: '+5' },
        ],
        news: [
            { title: 'Carlsen Wins Speed Chess Championship', timestamp: '2 hours ago' },
            { title: 'Upcoming: World Chess Championship 2025', timestamp: '1 day ago' },
        ]
    };

    const womenData = {
        matches: [
            { p1: 'Ju Wenjun', p2: 'Lei Tingjie', result: '1/2-1/2' },
            { p1: 'Humpy Koneru', p2: 'Aleksandra Goryachkina', result: 'In Progress' },
        ],
        rankings: [
            { rank: 1, name: 'Hou Yifan', rating: 2632, change: '0' },
            { rank: 2, name: 'Ju Wenjun', rating: 2560, change: '+3' },
            { rank: 3, name: 'Humpy Koneru', rating: 2554, change: '-2' },
        ],
        news: [
            { title: 'Ju Wenjun Defends Her World Title', timestamp: '5 hours ago' },
            { title: 'New Rising Star in Women\'s Chess', timestamp: '3 days ago' },
        ]
    };

    const toggle = document.getElementById('data-toggle');
    const matchesContainer = document.querySelector('.matches-container');
    const rankingsContainer = document.querySelector('.rankings-container');
    const newsContent = document.querySelector('.news-content');
    const leftSection = document.getElementById('left-section');
    const rightSection = document.getElementById('right-section');

    function updateMatches(data) {
        matchesContainer.innerHTML = '';
        data.forEach(match => {
            const card = document.createElement('div');
            card.className = 'match-card';
            card.innerHTML = `
                <p>${match.p1} <span>vs</span> ${match.p2}</p>
                <span class="result">${match.result}</span>
            `;
            matchesContainer.appendChild(card);
        });
    }

    function updateRankings(data) {
        rankingsContainer.innerHTML = '';
        data.forEach(player => {
            const card = document.createElement('div');
            card.className = 'player-card';
            if (player.rank === 1) {
                card.classList.add('rank-1');
            }
            card.innerHTML = `
                <p><strong>${player.rank}. ${player.name}</strong></p>
                <span>Rating: ${player.rating} (${player.change})</span>
            `;
            rankingsContainer.appendChild(card);
        });
    }

    function updateNews(data) {
        newsContent.innerHTML = '';
        // Duplicate news for seamless scroll
        const newsItems = [...data, ...data];
        newsItems.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';
            newsItem.innerHTML = `
                <h4>${item.title}</h4>
                <span>${item.timestamp}</span>
            `;
            newsContent.appendChild(newsItem);
        });
    }

    function updateUI(isWomen) {
        const data = isWomen ? womenData : menData;
        
        // Fade out
        leftSection.style.animation = 'fadeOut 0.3s forwards';
        rightSection.style.animation = 'fadeOut 0.3s forwards';

        setTimeout(() => {
            updateMatches(data.matches);
            updateRankings(data.rankings);
            updateNews(data.news);
            
            // Fade in
            leftSection.style.animation = 'slideInUp 0.8s forwards';
            rightSection.style.animation = 'slideInUp 1s forwards';
        }, 300);
    }

    toggle.addEventListener('change', (e) => {
        updateUI(e.target.checked);
    });

    // Initial Load
    updateUI(false);
});
