// Variables to store user-defined phrases
let phrases = [];

// Reference to input page elements
const inputPage = document.getElementById('input-page');
const raindropPage = document.getElementById('raindrop-page');
const wordInput = document.getElementById('word-input');
const startButton = document.getElementById('start-button');

// Array to keep track of all created raindrops
let raindrops = [];

// Track the cursor position
let cursorX = 0;
let cursorY = 0;
document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
});

// Handle the start button click
startButton.addEventListener('click', () => {
    const inputText = wordInput.value.trim();
    if (inputText) {
        phrases = inputText.split(',').map(word => word.trim()); // Split words and trim whitespace
        inputPage.style.display = 'none'; // Hide input page
        raindropPage.style.display = 'block'; // Show raindrop animation page
        startRaindropAnimation(); // Start the raindrop animation
    } else {
        alert('Please enter at least one word.');
    }
});

// Function to start the raindrop animation
function startRaindropAnimation() {
    function createRaindrop() {
        // Create a new div element to represent the raindrop
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        // Set random text content for the raindrop
        raindrop.textContent = phrases[Math.floor(Math.random() * phrases.length)];

        // Set random horizontal position
        raindrop.style.left = Math.random() * 100 + 'vw';

        // Set random animation duration (fall speed)
        raindrop.style.animationDuration = ((Math.random() * 10 + 4))/4 + 's'; // Between 5 and 10 seconds

        // Set random font size
        raindrop.style.fontSize = (Math.random() * 30 + 10) + 'px'; // Font size between 10px and 30px

        // Add the raindrop to the raindrop page and track it
        raindropPage.appendChild(raindrop);
        raindrops.push(raindrop);

        // Check and remove old raindrops if count exceeds 200
        if (raindrops.length > 300) {
            for (let i = 0; i < 5; i++) {
                const oldRaindrop = raindrops.shift(); // Remove from the array
                if (oldRaindrop && oldRaindrop.parentNode) {
                    oldRaindrop.remove(); // Remove from the DOM
                }
            }
        }

        // Check if the raindrop is near the cursor
        function checkProximity() {
            const rect = raindrop.getBoundingClientRect();
            const distance = Math.hypot(cursorX - (rect.left + rect.width / 2), cursorY - (rect.top + rect.height / 2));
            if (distance < 100) {
                raindrop.style.color = 'red';
                raindrop.classList.add('near-cursor');
            }
        }

        // Continuously check proximity
        const proximityInterval = setInterval(() => {
            checkProximity();
        }, 100);

        // Clear proximity checking interval when raindrop is removed
        raindrop.addEventListener('animationend', () => {
            clearInterval(proximityInterval);
            raindrops = raindrops.filter(r => r !== raindrop);
            raindrop.remove();
        });
    }

    // Continuously create raindrops
    setInterval(createRaindrop, 20); // Reduced interval for denser raindrop generation
}

// Handle click to remove all red raindrops
document.addEventListener('click', () => {
    raindrops = raindrops.filter(raindrop => {
        if (raindrop.classList.contains('near-cursor')) {
            raindrop.remove(); // Remove from DOM
            return false; // Remove from array
        }
        return true;
    });
});
