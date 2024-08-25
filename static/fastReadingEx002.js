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
        document.getElementById('userInput').focus();
        document.getElementById('feedback').textContent = ''; // Clear feedback on new test

     
    }, 500); // Show number for half a second
}

function generateRandomNumber(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0');
}

function checkResult() {
    const feedbackElement = document.getElementById('feedback');
    let userInput = inputField.value.trim(); // Get and trim user input


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

function begain() {
    function runTest() {
        startTest(); // Start the test

        // Add event listener for user input
        const checkAndReset = function (event) {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent the default action
                checkResult(); // Pass user input to checkResult

                // Remove event listener after processing
                inputField.removeEventListener('keypress', checkAndReset);

                // If the checkbox is checked, wait 1 seconds and start the test again
                if (LoopController.checked) {
                    setTimeout(runTest, 1000); // Wait 1 seconds before repeating the test
                }
            }
        };

        inputField.addEventListener('keypress', checkAndReset);
    }

    runTest(); // Start the first test
}
