const button = document.querySelector('button');
const button2 = document.querySelector('#dismiss');
const main = document.querySelector('#main');
const modal = document.querySelector('#modal');


button.addEventListener('click', () => {
    main.style.display = 'none';
    modal.style.display = 'block';
})

button2.addEventListener('click', () => {
    main.style.display = 'flex';
    modal.style.display = 'none';
})