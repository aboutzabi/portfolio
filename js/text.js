function typeEffect(words, index, speed) {
    if (index < words.length) {
        document.getElementById('typed-text').innerHTML = words.substring(0, index + 1);
        setTimeout(function () {
            typeEffect(words, index + 1, speed);
        }, speed);
    } else {
        setTimeout(function () {
            eraseEffect(words, index, speed);
        }, 1000); // Wait for 1 second before erasing
    }
}

// Function to simulate erasing effect
function eraseEffect(words, index, speed) {
    if (index >= 0) {
        document.getElementById('typed-text').innerHTML = words.substring(0, index);
        setTimeout(function () {
            eraseEffect(words, index - 1, speed);
        }, speed);
    } else {
        if (words === wordsArray[0]) {
            typeEffect(wordsArray[1], 0, speed);
        } else {
            typeEffect(wordsArray[0], 0, speed);
        }
    }
}

// Start the type effect
const wordsArray = ['Design', 'Development'];
let speed = 100; // Adjust the speed as needed

typeEffect(wordsArray[0], 0, speed);






