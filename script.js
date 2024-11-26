// селекторы
const boardSelector = '.board';
const submitBtnSelector = '.submit-btn';
const inputContentSelector = '.input-content';

// переменные
const board = document.querySelector(boardSelector);
const submitBtn = document.querySelector(submitBtnSelector);
const inputContent = document.querySelector(inputContentSelector);

// основной код
function createBoard(columns, count){
    board.innerHTML = null;

    const template = document.querySelector('#gameTableTemplate').cloneNode(true).content;
    const table = template.querySelector('.table');
    const tableBtn = template.querySelector('.table-btn');

    table.style.display = 'grid';
    table.style = `
        grid-template-columns: repeat(${columns}, 1fr);
        grid-template-rows: repeat(${columns}, 1fr);
    `;

    board.append(table);
    board.append(tableBtn);

    tableBtn.addEventListener('click',()=>{location.reload()})

    for(let i = 0;i<count;i++){
        table.append(CreateCard());
    }
}

submitBtn.addEventListener('click',(event)=>{
    event.preventDefault();

    const inputContentValue = inputContent.value;

    if(inputContentValue >= 2 && inputContentValue <= 6 && inputContentValue%2==0){
        const totalValue = inputContentValue * inputContentValue;

        console.log(inputContentValue);
        console.log(totalValue);

        createBoard(inputContentValue, totalValue);
    }
    else{
        alert('Пожалуйста запиши чётное число в указанном диапазоне');
    }
})

function CreateCard(){
    const cardTemplate = document.querySelector('#card-template').cloneNode(true).content;
    const card = cardTemplate.querySelector('.card');

    return card;
}