document.addEventListener("DOMContentLoaded", () => {

    //card options

    const cardArray = [
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'cheeseburger',
            img: './images/cheeseburger.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'fries',
            img: './images/fries.png'
        },
        {
            name: 'hotdog',
            img: './images/hotdog.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'ice-cream',
            img: './images/ice-cream.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        },
        {
            name: 'milkshake',
            img: './images/milkshake.png'
        },
        {
            name: 'pizza',
            img: './images/pizza.png'
        }
    ];

    const grid = document.querySelector('.grid');

    // game board
    createBoard = () => {
        for (let i = o; i < cardArray.length; i++){
            let card = document.createElement('img');
            card.setAttribute('src', './images/blank.png');
            card.setAttribute('data-1', i);
            //card.addEventListener('click', flipcard);
            grid.appendChild(card);
        }
    }
})