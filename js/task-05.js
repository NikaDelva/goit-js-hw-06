const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

const onInputCreate = event => {
    if (inputEl.value === '') {
        spanEl.innerHTML = 'Anonymous';
        return
    } 
    spanEl.innerHTML = inputEl.value;
}

inputEl.addEventListener('input', onInputCreate);
