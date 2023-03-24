const inputRangeEl = document.querySelector('#font-size-control');
console.log(inputRangeEl.value)
const textInSpanEl = document.querySelector('#text');

const onInputTextChange = (event) => {
   textInSpanEl.style.fontSize = event.currentTarget.value + 'px'
}

inputRangeEl.addEventListener('input', onInputTextChange)
