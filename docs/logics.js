const passwordField = document.querySelector('#passField');
const passwordButton = document.querySelector('#passCheck');

const ENTER_KEY = 13;

passwordButton.addEventListener('click', () => {
    validateForm();
});

passwordField.addEventListener('keyup', event => {
    if (event.isComposing || event.keyCode === 229) {
        return;
    } else if (event.keyCode === ENTER_KEY) {
        validateForm();
    }
})

function validateForm() {
    const password = passwordField.value;
    const isPasswordCorrect = checkIfPasswordCorrect(password);
    if (isPasswordCorrect) {
        showResult();
    } else {
        showFailure();
    }
    clearField(passwordField);
}

function checkIfPasswordCorrect(passwordCandidate) {
    const passwordReal = 'sonders';
    return passwordCandidate === passwordReal;
}

function showResult() {
    window.location = 'result.html'
}

function showFailure() {
    alert('Hasło niepoprawne. Spróbuj ponownie');
}

function clearField(fieldToClear) {
    fieldToClear.value = '';
}

function loadInfoText() {
    
}
