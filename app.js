let value = Number(document.getElementById('value').innerText);
const increment = document.getElementById('increment');
const decrement = document.getElementById('decrement');

increment.addEventListener('click', () => {
    value++;
    return document.getElementById('value').innerText = value;
})

decrement.addEventListener('click', () => {
    value--;
    return document.getElementById('value').innerText = value;
})