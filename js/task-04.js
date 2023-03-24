const counterValueEl = document.querySelector('#value');
let counterValue = 0;
console.log(counterValue)
const counterDecrementButtonEl = document.querySelector('[data-action="decrement"]');
const counterIncrementButtonEl = document.querySelector('[data-action="increment"]');

const onDecrementButton = event => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}
   
const onIncrementButton = event => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;
}

counterDecrementButtonEl.addEventListener('click', onDecrementButton);
counterIncrementButtonEl.addEventListener('click', onIncrementButton)
