
document.addEventListener('DOMContentLoaded', function() {
    const timerElem = document.getElementById('timer');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const resetButton = document.getElementById('resetButton');
    const fullTimeDisplay = document.getElementById('fullTimeDisplay');
    const readingSpeed = document.getElementById('readingSpeed');
    const textElement = document.querySelector('#pasteDiv');
    const progressText = document.getElementById('progress-text');


    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    const totalWords = 1920; // Total number of words

    function formatTime(ms) {
        const totalSeconds = Math.floor(ms / 1000);
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;
        return [hours, minutes, seconds]
            .map(num => num < 10 ? `0${num}` : num)
            .join(':');
    }

    function updateDisplay() {
        if (startTime) {
            elapsedTime = Date.now() - startTime;
            timerElem.innerHTML = formatTime(elapsedTime);
        }
    }

    function startTimer() {
        startTime = Date.now() - elapsedTime; // Adjust start time based on elapsed time
        timerInterval = setInterval(updateDisplay, 1000);
    }

    function stopTimer() {
        clearInterval(timerInterval);
        timerInterval = null;
        const totalMinutes = elapsedTime / 1000 / 60;
        const wordsPerMinute = totalWords / totalMinutes;
        fullTimeDisplay.textContent = `Full Time: ${formatTime(elapsedTime)}`;
        readingSpeed.textContent = `Your Speed: ${wordsPerMinute.toFixed(2)} words per minute`;
    }

    startButton.addEventListener('click', () => {
        if (!timerInterval) { // Start the timer only if it is not already running
            startTimer();
        }
    });

    stopButton.addEventListener('click', () => {
        stopTimer();
    });

    resetButton.addEventListener('click', () => {
        clearInterval(timerInterval);
        timerInterval = null;
        startTime = null;
        elapsedTime = 0;
        timerElem.innerHTML = '00:00:00';
        fullTimeDisplay.textContent = 'Full Time: 00:00:00';
        readingSpeed.textContent = 'Your Speed: 0 words per minute';
    });

    function updateProgressBar() {

        const scrollTop = textElement.scrollTop;
        const scrollHeight = textElement.scrollHeight;
        const clientHeight = textElement.clientHeight;

        // Calculate percentage
        const maxScrollTop = scrollHeight - clientHeight;
        const percentage = maxScrollTop > 0 ? (scrollTop / maxScrollTop) * 100 : 0;

        // Update the text to show the percentage
        progressText.textContent = `Progress: ${Math.round(percentage)}%`;
    }

    // Initialize the progress text
    updateProgressBar();

    // Update progress text on scroll
    textElement.addEventListener('scroll', updateProgressBar);



    document.getElementById('pasteButton').addEventListener('click', async function() {
        try {
            let text = await navigator.clipboard.readText();
            
            // Sanitize the clipboard content to avoid XSS
            text = text.replace(/</g, "&lt;").replace(/>/g, "&gt;");
            text = text.replace(/\n/g, "<br>");

            // Trim leading and trailing whitespace
            text = text.trim();
            // Insert the sanitized text into the div
            textElement.value = text;
        } catch (err) {
            textElement.textContent('Failed to read clipboard contents: ', err);
        }
    });
});

