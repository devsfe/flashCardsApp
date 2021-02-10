const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn')
const addCardContainer = document.getElementById('add-card-container');



// open add card container
openBtn.addEventListener('click', () => {
    addCardContainer.classList.add('active');
});

// close add card container
closeBtn.addEventListener('click', () => {
    addCardContainer.classList.remove('active');
});