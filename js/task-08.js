const formEl = document.querySelector('form');
formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    if (formEl.elements.email.value === '' || formEl.elements.password.value === '') {
        alert `Please, fill the inputs to proceed`
    } else {
        const dataEnties = {
            email: formEl.elements.email.value,
            password: formEl.elements.password.value,
        };
        console.log(dataEnties);
        formEl.reset()
    }
}
