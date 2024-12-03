// селекторы
const boardSelector = '.board';
const submitBtnSelector = '.submit-btn';
const inputContentSelector = '.input-content';

// переменные
const gameBoard = document.querySelector(boardSelector);
const submitBtn = document.querySelector(submitBtnSelector);
const inputContent = document.querySelector(inputContentSelector);

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault()
  
    let columns = inputContent.value;
    let count;
  
    if (columns >= 2 && columns <= 6 && columns % 2 == 0) {
        count = columns * columns;
    } 
    else {
        alert("Нужно написать четное число в указанном диапазоне.");
        return;
    }
  
    createBoard(columns, count);
}); 

function createBoard(columns, count){
    const gameBoard = document.querySelector(".board");

    gameBoard.innerHTML = null;
  
    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    const gameTable = template.querySelector('.table');
    const restartBtn = template.querySelector(".table-btn");
  
    const icons = createIconsArray(count);
  
    icons.forEach((icon) => {
      gameTable.append(createCard(icon));
    });
  
    gameTable.style = `
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${columns}, 1fr);
    `;
  
    gameBoard.append(gameTable);
  
    restartBtn.addEventListener("click", () => {
      location.reload();
    });
  
    gameBoard.append(restartBtn);
}


function createCard(flippedIcon) {
    const template = document.querySelector('#card-template').cloneNode(true).content;
    const card = template.querySelector('.card');
    card.querySelector('#flipped-icon').classList.add(`fa-${flippedIcon}`);
  
    return card;
  }
  
  function createIconsArray(initialCount) {
    const cardsIcons = [
      "compass",
      "cloud",
      "play",
      "bolt",
      "stop",
      "cogs",
      "atom",
      "basketball-ball",
      "arrows",
      "angle-left",
      "bars",
      "file",
      "filter",
      "gear",
      "folder",
      "folder-open",
      "shield",
      "scissors",
      "pen-clip",
    ];
  
    let cards = cardsIcons.slice(0, Math.floor(initialCount / 2));
    const duobleCards = dublicateElements(cards);
  
    return shuffleArray(duobleCards);
  };
  
function shuffleArray(array) {
    let currentIndex = array.length;
  
    while (currentIndex !== 0) {
        currentIndex--;
        const randomIndex = Math.floor(Math.random() * currentIndex);
        
        const temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    };
  
    return array;
  }
  
  function dublicateElements(array) {
    const arr = [];
  
    array.forEach((item) => {
        arr.push(item, item);
    });
  
    return arr;
  }