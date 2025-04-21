// Get DOM elements
const counterElement = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

// Initialize counter value
let counter = 0;

// Update counter display
function updateCounter() {
    counterElement.textContent = counter;
    counterElement.style.color = counter === 0 ? '#333' : counter > 0 ? '#4CAF50' : '#f44336';
}

// Event listeners
increaseBtn.addEventListener('click', () => {
    counter++;
    updateCounter();
});

decreaseBtn.addEventListener('click', () => {
    counter--;
    updateCounter();
});

resetBtn.addEventListener('click', () => {
    counter = 0;
    updateCounter();
});

// Initialize
updateCounter();