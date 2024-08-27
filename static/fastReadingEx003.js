let displayedNumber = '';
let displayedLetter = '';
let charCounter = 0; // Define counter variable
let numberCounter = 0; // Define counter variable


const LoopController = document.getElementById("LoopController");
const inputField = document.getElementById('userInput');
const speedLevel = document.getElementById('speedLevel');
const feedbackElement = document.getElementById('feedback');
const cardNumber = document.getElementById('numberCard');
const cardLetter = document.getElementById('letterCard');
const numberInput = document.getElementById('numbersInput');
const letterInput = document.getElementById('lettersInput');



function startTest() {
    const speedLevelNumber = speedLevel.value;
    displayedNumber = generateRandomNumber(4);
    displayedLetter = getRandomArabicLetters();

    cardNumber.textContent = displayedNumber;
    cardLetter.textContent = displayedLetter;

    setTimeout(() => {
        cardNumber.remove();// Hide the number
        cardLetter.remove();
        document.getElementById('result').style.display = 'block';

        document.querySelectorAll('.none').forEach(element => element.classList.remove('none'));
        console.log("all block");
        

        letterInput.focus();
        feedbackElement.textContent = ''; // Clear feedback on new test

        // Clear previous event listeners to avoid duplicates
        letterInput.removeEventListener('keypress', handleKeyPress);
        // Add event listener for user input
        let charCounter = 0; // Define counter variable
        letterInput.addEventListener('keypress', handleKeyPress);

    }, speedLevelNumber); // Show number for half a second
}

function generateRandomNumber(digits) {
    return Math.floor(Math.random() * Math.pow(10, digits)).toString().padStart(digits, '0');
}

function getRandomArabicLetters() {
    const arabicLetters = 'ابتثجحخدذرزسشصضطظعغفقكلمنهوي';
    let randomLetters = '';

    for (let i = 0; i < 3; i++) {
        randomLetters += arabicLetters.charAt(Math.random() * arabicLetters.length)+' ';
    }

    return randomLetters;
}


function checkResult() {
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
    inputField.value = '';
    document.getElementById('result').style.display = 'none';
}


function handleKeyPress(event) {
    let char = event.key;
    console.log(charCounter);
    
    
    // Only handle letters
    if (char.length === 1 && /[\u0600-\u06FF]/.test(char)) {
        event.preventDefault(); // Prevent the default character from being inserted
        console.log(char);

        

        // Get the current value of the input
        let currentValue = letterInput.value;
        
        // Insert the character and a space
        letterInput.value = currentValue + char + ' ';
        charCounter+=1
        if (charCounter === 3) {
            console.log("done 3 letters");
                        
            // Clear previous event listeners to avoid duplicates
            letterInput.removeEventListener('keypress', handleKeyPress);

            // Delay focusing to ensure letterInput is updated
            setTimeout(() => {
                numberInput.focus(); // Focus on numberInput
                numberInput.addEventListener('keypress', handleNumberPress);
            }, 0);
            }
            } else {
            event.preventDefault();
            console.log("nothing");
            }
            }





    function handleNumberPress(event) {
        let char = event.key;
        console.log(char);
        
        // Only handle numbers (0-9)
        if (char.length === 1 && /\d/.test(char)) {
            event.preventDefault(); // Prevent the default character from being inserted
    
            // Get the current value of the input (assuming input is a text input)
            let currentValue = numberInput.value;
    
            // Insert the character and a space
            numberInput.value = currentValue + char ;
            
            // Increment counter
            charCounter += 1;
            console.log(`Character Count: ${charCounter}`);
    
            // Check if the counter reaches 3
            if (charCounter === 7) {
                event.preventDefault(); // Prevent the default character from being inserted
                numberInput.removeEventListener('keypress', handleKeyPress);
                numberInput.blur()
                alert('working on the check Result Funtion!');
                
    
            }
        }else{
            event.preventDefault();
            console.log("nothing");
        }
    }


function begain() {
    startTest(); // Start the test
}



