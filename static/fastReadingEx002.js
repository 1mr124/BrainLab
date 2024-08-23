let displayedNumber = '';

function startTest() {
    const digitCount = document.getElementById('digits').value;
    displayedNumber = generateRandomNumber(digitCount);

    const card = document.getElementById('card');
    card.textContent = displayedNumber;

    setTimeout(() => {
        card.textContent = ''; // Hide the number
        document.getElementById('result').style.display = 'block';
        document.getElementById('feedback').textContent = ''; // Clear feedback on new test
    }, 500); // Show number for half a second
}

function generateRandomNumber(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0');
}

function checkResult() {
    const userInput = document.getElementById('userInput').value;
    const feedbackElement = document.getElementById('feedback');

    if (userInput === displayedNumber) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.remove('wrong');
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.textContent = `Wrong! The correct number was ${displayedNumber}.`;
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('wrong');
    }

    reset();
}

function reset() {
    document.getElementById('userInput').value = '';
    document.getElementById('result').style.display = 'none';
}
