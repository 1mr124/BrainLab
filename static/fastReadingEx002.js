let displayedNumber = '';
let correctAnswers = 0;
let wrongAnswers = 0;
const LoopController = document.getElementById("LoopController");
const inputField = document.getElementById('userInput');
const digit = document.getElementById('digits');
const speedLevel = document.getElementById('speedLevel');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score'); // Assuming you have an element with ID 'score' to display the score

function startTest() {
    const digitCount = digit.value;
    const speedLevelNumber = speedLevel.value;
    displayedNumber = generateRandomNumber(digitCount);
    const card = document.getElementById('card');
    card.textContent = displayedNumber;

    setTimeout(() => {
        card.textContent = ''; // Hide the number
        document.getElementById('result').style.display = 'block';
        inputField.focus();
        feedbackElement.textContent = ''; // Clear feedback on new test

        // Clear previous event listeners to avoid duplicates
        inputField.removeEventListener('keypress', handleKeyPress);
        // Add event listener for user input
        inputField.addEventListener('keypress', handleKeyPress);

    }, speedLevelNumber); // Show number for half a second
}

function generateRandomNumber(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0');
}

function checkResult() {
    let userInput = inputField.value.trim(); // Get and trim user input


    if (userInput === displayedNumber) {
        correctAnswers++;
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.remove('wrong');
        feedbackElement.classList.add('correct');
    } else {
        wrongAnswers++;
        feedbackElement.textContent = `Wrong! The correct number was ${displayedNumber}.`;
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('wrong');
    }

    updateScore(); // Update the score after each attempt
    reset();
}

function updateScore() {
    const totalAttempts = correctAnswers + wrongAnswers;
    const percentage = ((correctAnswers / totalAttempts) * 100).toFixed(2); // Calculate the percentage of correct answers
    scoreElement.innerHTML = `<strong>Score</strong>: <span style="color: #4CAF50;">${correctAnswers}</span> correct,  <span style="color: red;">${wrongAnswers}</span>  wrong. Accuracy: ${percentage}%`;
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

inputField.addEventListener('input', autoCheckResult);

function autoCheckResult(e) {
    let numberOfInput = inputField.value.length;
    
    if (numberOfInput == digit.value ){
        checkResult();
        // Remove event listener after processing
        inputField.removeEventListener('keypress', handleKeyPress);

        // If the checkbox is checked, wait 1 second and start the test again
        if (LoopController.checked) {
            setTimeout(startTest, 1000); // Wait 1 second before repeating the test
        }
    }
}
