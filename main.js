// Sub Navigation search bar toggle
const searchBtn = document.querySelector('.search-btn');
const searchCloseBtn = document.querySelector('.search-close-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', ()=> {
    searchCloseBtn.style.display = 'inline-flex';
    searchInput.style.display = 'block';
    searchBtn.style.display = 'none';
});

searchCloseBtn.addEventListener('click', ()=> {
    searchCloseBtn.style.display = 'none';
    searchInput.style.display = 'none';
    searchBtn.style.display = 'inline-flex';
});

// / Sub Navigation search bar toggle

