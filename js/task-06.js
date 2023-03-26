const inputEl = document.querySelector('input')
const inputLength = inputEl.getAttribute('data-length')
const onInputElBlur = event => {
    if (inputEl.value.length < inputLength) {
        inputEl.classList.add('invalid')
        return
    }
    inputEl.classList.remove('invalid')
    inputEl.classList.add('valid')
}
    

inputEl.addEventListener('blur', onInputElBlur)
