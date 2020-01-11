const passwordField = document.querySelector('#passField');
const passwordButton = document.querySelector('#passCheck');

passwordButton.addEventListener('click', ()=>{
    const password = passwordField.value;
    const isPasswordCorrect = checkIfPasswordCorrect(password);
    if (isPasswordCorrect) {
        showResult();
    } else {
        showFailure();
    }
    clearField(passwordField);
})

function checkIfPasswordCorrect(passwordCandidate) {
    const passwordReal = 'cos';
    return passwordCandidate === passwordReal;
}

function showResult() {
    alert('Success');
}

function showFailure() {
    alert('Wrong password');
}

function clearField(fieldToClear) {
    fieldToClear.value = '';
}