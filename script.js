const openBtn = document.getElementById('open-btn');
const addCardContainer = document.getElementById('add-card-container');



// open add card container
openBtn.addEventListener('click', () => {
    addCardContainer.classList.add('active');
});