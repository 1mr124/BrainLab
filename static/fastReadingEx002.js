let displayedNumber = '';
const LoopController = document.getElementById("LoopController");
const inputField = document.getElementById('userInput');

function startTest() {
    const digitCount = document.getElementById('digits').value;
    displayedNumber = generateRandomNumber(digitCount);

    const card = document.getElementById('card');
    card.textContent = displayedNumber;

    setTimeout(() => {
        card.textContent = ''; // Hide the number
        document.getElementById('result').style.display = 'block';
        inputField.focus();
        document.getElementById('feedback').textContent = ''; // Clear feedback on new test

        // Clear previous event listeners to avoid duplicates
        inputField.removeEventListener('keypress', handleKeyPress);
        // Add event listener for user input
        inputField.addEventListener('keypress', handleKeyPress);

    }, 500); // Show number for half a second
}

function generateRandomNumber(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0');
}

function checkResult() {
    const feedbackElement = document.getElementById('feedback');
    let userInput = inputField.value.trim(); // Get and trim user input

    console.log(userInput, " == ", displayedNumber);

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
    inputField.value = '';
    document.getElementById('result').style.display = 'none';
}


function handleKeyPress(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Prevent the default action
        checkResult(); // Pass user input to checkResult

        // Remove event listener after processing
        inputField.removeEventListener('keypress', handleKeyPress);

        // If the checkbox is checked, wait 1 second and start the test again
        if (LoopController.checked) {
            setTimeout(startTest, 1000); // Wait 1 second before repeating the test
        }
    }
}

function begain() {
    startTest(); // Start the test
}