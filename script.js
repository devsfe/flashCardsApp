const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const addCardForm = document.getElementById('form-add-card');
const addCardContainer = document.getElementById('add-card-container');
const cardContainer = document.getElementById('card-container');
const cardArr = [];


// add new card
function addNewCard(e) {
    e.preventDefault();
    
    let question = document.getElementById('question').value;
    let answer = document.getElementById('answer').value;
    const cardContent = {question, answer};

    cardArr.push(cardContent);

    showCardsDom();
}

// show cards in DOM
function showCardsDom() {
    cardArr.forEach((card, index, array) => {
        if(index === array.length - 1) {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = 
            `<p class="card-question">${card.question}</p>
            <hr>
            <p class="card-answer">${card.answer}</p>
            <button class="show-answer-btn">Show answer</button>`
            
        cardContainer.appendChild(cardElement);
        }
    });
}

// open add card container
openBtn.addEventListener('click', () => {
    addCardContainer.classList.add('active');
});

// close add card container
closeBtn.addEventListener('click', () => {
    addCardContainer.classList.remove('active');
});

addCardForm.addEventListener('submit', addNewCard);
