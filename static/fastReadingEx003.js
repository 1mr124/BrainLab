let displayedNumber = '';
let displayedLetter = '';
let charCounter = 0; // Define counter variable
let numberCounter = 0; // Define counter variable



let numberInput = document.getElementById('numbersInput');
let letterInput = document.getElementById('lettersInput');
const cardNumber = document.getElementById('numberCard');
const cardLetter = document.getElementById('letterCard');

const cardNumberInput = document.getElementById('numberCardInput');
const cardLetterInput = document.getElementById('letterCardInput');


const LoopController = document.getElementById("LoopController");
const inputField = document.getElementById('userInput');
const speedLevel = document.getElementById('speedLevel');
const feedbackElement = document.getElementById('feedback');
const plate = document.getElementById('Plate');



function startTest() {
    const speedLevelNumber = speedLevel.value;
    

    displayedNumber = generateRandomNumber(4);
    displayedLetter = getRandomArabicLetters();

    cardNumber.textContent = displayedNumber;
    cardLetter.textContent = displayedLetter;

    setTimeout(() => {
        // cardNumber.remove();// Hide the number
        // cardLetter.remove();
        
        cardNumber.classList.add("none");
        cardLetter.classList.add("none");

        document.getElementById('result').style.display = 'block';

        // you should replace this with func to show input 
        // document.querySelectorAll('.none').forEach(element => element.classList.remove('none'));
        showInputs();
        
        clearInput(letterInput);
        clearInput(numberInput);
        letterInput.focus();
        feedbackElement.textContent = ''; // Clear feedback on new test

        // Clear previous event listeners to avoid duplicates
        letterInput.removeEventListener('keydown', handleKeyPress);
        // Add event listener for user input
        letterInput.addEventListener('keydown', handleKeyPress);

    }, speedLevelNumber); // Show number for half a second
}

function clearInput(e) {
    e.value='';
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
    let userNumberInput = numberInput.value ;
    let userLetterInput = letterInput.value ;


    if (userNumberInput == displayedNumber && userLetterInput == displayedLetter) {
        feedbackElement.textContent = 'Correct!';
        feedbackElement.classList.remove('wrong');
        feedbackElement.classList.add('correct');
    } else {
        feedbackElement.textContent = `Wrong! your input was ${userLetterInput} ${userNumberInput} .`;
        feedbackElement.classList.remove('correct');
        feedbackElement.classList.add('wrong');
    }

    reset();
}

function showInputs() {
    cardLetterInput.classList.remove('none');
    cardNumberInput.classList.remove('none');

}

function reset() {
    cardLetterInput.classList.add('none');
    cardNumberInput.classList.add('none');
    cardLetter.classList.remove('none');
    cardNumber.classList.remove('none');
    charCounter = 0; // Define counter variable
    
}

function handleKeyPress(event) {
    let char = event.key;
    
    
    // Only handle leters
    if (char.length === 1 && /[\u0600-\u06FF]/.test(char)) {
        event.preventDefault(); // Prevent the default character from being inserted

        // Get the current value of the input
        let currentValue = letterInput.value;
        
        // Insert the character and a space
        letterInput.value = currentValue + char + ' ';
        
        charCounter+=1

        if (charCounter === 3) {
                        
            // Clear previous event listeners to avoid duplicates
            letterInput.removeEventListener('keydown', handleKeyPress);

            // Delay focusing to ensure letterInput is updated
            setTimeout(() => {
                clearInput(numberInput);
                numberInput.focus(); // Focus on numberInput
                numberInput.addEventListener('keydown', handleNumberPress);
            }, 0);
            }} 
    else if(char === 'Backspace' || char === 'Delete') {
        // Handle backspace or delete
        if (charCounter > 0) {
            charCounter -= 1; // Decrement the counter
            letterInput.value = letterInput.value.slice(0, -1);

        }}
    else{
            event.preventDefault();
            if (!document.querySelector('#notes .time')) {
                document.getElementById('notes').innerHTML += '<span class="time">Only Arabic Letters</span>';
            }
            
            }
            }





function handleNumberPress(event) {
        let char = event.key;
        
        // Only handle numbers (0-9)
        if (char.length === 1 && /\d/.test(char)) {
            event.preventDefault(); // Prevent the default character from being inserted
    
            // Get the current value of the input (assuming input is a text input)
            let currentValue = numberInput.value;
    
            // Insert the character and a space
            numberInput.value = currentValue + char ;
            
            // Increment counter
            charCounter += 1;
    
            // Check if the counter reaches 3
            if (charCounter === 7) {
                event.preventDefault(); // Prevent the default character from being inserted
                numberInput.removeEventListener('keypress', handleKeyPress);
                numberInput.blur()
                checkResult();
                  // If the checkbox is checked, wait 1 second and start the test again
                if (LoopController.checked) {
                    setTimeout(startTest, 1700); // Wait 1 second before repeating the test
        }           
    
            }
        }else if(char === 'Backspace' || char === 'Delete') {
            // Handle backspace or delete
            if (charCounter > 0) {
                charCounter -= 1; // Decrement the counter
                
    
            }}
        else{
            event.preventDefault();
            notes = document.querySelector('#notes .time');
            
            if (!notes) {
                document.getElementById('notes').innerHTML += '<span class="time">Only Numbers</span>';
            }else if (notes.textContent === 'Only Arabic Letters'){
                notes.textContent = 'Only Numbers';
            }
            
        }

      
    }


function begain() {
    startTest(); // Start the test
}



