const formEl = document.querySelector('form');
formEl.addEventListener('submit', onFormSubmit);


function onFormSubmit(event) {
    event.preventDefault();
    if (!event.currentTarget.elements.email.value || !event.currentTarget.elements.password.value) {
        alert `Please, fill the inputs to proceed`
    } else {
        const objNew = {
            email: event.currentTarget.elements.email.value,
            password: event.currentTarget.elements.password.value,
        };
        console.log(objNew);
        event.currentTarget.reset()
    }
}
