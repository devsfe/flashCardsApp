const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const addCardForm = document.getElementById('form-add-card');
const addCardContainer = document.getElementById('add-card-container');
const cardContainer = document.getElementById('card-container');
const cardArr = [];
var currentCard = 0;
const cardElementArr = [];



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
        cardElementArr.push(cardElement);
        }
    });

    cardElementArr[0].classList.add('active');
}

// show next card
function showNextCard() {
    
    currentCard = currentCard + 1;

    cardElementArr[currentCard].classList.add('active');

    cardElementArr[currentCard - 1].classList.remove('active');

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
nextBtn.addEventListener('click', showNextCard);
