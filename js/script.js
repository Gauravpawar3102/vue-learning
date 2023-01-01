let count = 0;

const countHeader = document.getElementById('count');

const countAddBtn = document.getElementById('increment');
const countDecreaseBtn = document.getElementById('decrement');

countHeader.innerText = count;

countAddBtn.addEventListener('click', () => {
  count++;
  countHeader.innerText = count;
});

countDecreaseBtn.addEventListener('click', () => {
  count--;
  countHeader.innerText = count;
});
