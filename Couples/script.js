// селекторы
const boardSelector = '.board';
const submitBtnSelector = '.submit-btn';
const inputContentSelector = '.input-content';

// переменные
const board = document.querySelector(boardSelector);
const submitBtn = document.querySelector(submitBtnSelector);
const inputContent = document.querySelector(inputContentSelector);

// основной код
function createBoard(){
    board.innerHTML = null;
}

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    const inputContentValue = inputContent.value;

    if(inputContentValue >= 2 && inputContentValue <= 6){
        const totalValue = inputContentValue * inputContentValue;

        console.log(inputContentValue);
        console.log(totalValue);

        createBoard();
    }
    else{
        alert('Пожалуйста запиши чётное число в указанном диапазоне')
    }
})
