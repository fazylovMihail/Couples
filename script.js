import { createBoard } from './js/createBoard.js';

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