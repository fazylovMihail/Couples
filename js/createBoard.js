import { createIconsArray, createCard } from './cards.js';
import { startTimer } from './timer.js';

export function createBoard(columns, count){
    startTimer();
    
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