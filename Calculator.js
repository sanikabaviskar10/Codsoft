let display = document.getElementById('result');
let currentInput = '';

function appendToDisplay(value) {
    currentInput += value;
    display.textContent = currentInput;
}

function clearDisplay() {
    currentInput = '';
    display.textContent = '0';
}

function calculate() {
    try {
        currentInput = eval(currentInput);
        display.textContent = currentInput;
    } catch (error) {
        display.textContent = 'Error';
    }
}
