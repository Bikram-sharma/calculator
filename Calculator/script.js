let currentInput = '';
let previousInput = '';
let operation = null;

function clearDisplay() {
    currentInput = '';
    previousInput = '';
    operation = null;
    updateDisplay('0');
}

function appendToDisplay(value) {
    currentInput += value;
    updateDisplay(currentInput);
}

function setOperation(op) {
    if (currentInput === '') return;
    operation = op;
    previousInput = currentInput;
    currentInput = '';
}

function calculate() {
    if (previousInput === '' || currentInput === '' || operation === null) return;

    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    let result;

    switch (operation) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    operation = null;
    previousInput = '';
    updateDisplay(currentInput);
}

function updateDisplay(value) {
    document.getElementById('display').innerText = value;
}