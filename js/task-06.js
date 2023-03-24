const inputEl = document.querySelector('input')
const inputLength = inputEl.getAttribute('data-length')
const onInputElBlur = event => {
    if (inputEl.value.length < inputLength) {
        inputEl.classList.add('invalid')
        return
    } else (inputEl.value.length > inputLength)
    inputEl.classList.add('valid')
    return
}
    

inputEl.addEventListener('blur', onInputElBlur)
