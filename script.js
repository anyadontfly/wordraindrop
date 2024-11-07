let phrases = [];

const inputPage = document.getElementById('input-page');
const raindropPage = document.getElementById('raindrop-page');
const wordInput = document.getElementById('word-input');
const startButton = document.getElementById('start-button');

let raindrops = [];

let cursorX = 0;
let cursorY = 0;
document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
});

startButton.addEventListener('click', () => {
    const inputText = wordInput.value.trim();
    if (inputText) {
        phrases = inputText.split(',').map(word => word.trim());
        inputPage.style.display = 'none';
        raindropPage.style.display = 'block';
        startRaindropAnimation();
    } else {
        alert('Please enter at least one word.');
    }
});

function startRaindropAnimation() {
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        raindrop.textContent = phrases[Math.floor(Math.random() * phrases.length)];

        raindrop.style.left = Math.random() * 100 + 'vw';

        raindrop.style.animationDuration = ((Math.random() * 10 + 4))/4 + 's';

        raindrop.style.fontSize = (Math.random() * 30 + 10) + 'px';

        raindropPage.appendChild(raindrop);
        raindrops.push(raindrop);

        if (raindrops.length > 300) {
            for (let i = 0; i < 5; i++) {
                const oldRaindrop = raindrops.shift();
                if (oldRaindrop && oldRaindrop.parentNode) {
                    oldRaindrop.remove();
                }
            }
        }

        function checkProximity() {
            const rect = raindrop.getBoundingClientRect();
            const distance = Math.hypot(cursorX - (rect.left + rect.width / 2), cursorY - (rect.top + rect.height / 2));
            if (distance < 100) {
                raindrop.style.color = 'red';
                raindrop.classList.add('near-cursor');
            }
        }

        const proximityInterval = setInterval(() => {
            checkProximity();
        }, 100);

        raindrop.addEventListener('animationend', () => {
            clearInterval(proximityInterval);
            raindrops = raindrops.filter(r => r !== raindrop);
            raindrop.remove();
        });
    }

    setInterval(createRaindrop, 20);
}

document.addEventListener('click', () => {
    raindrops = raindrops.filter(raindrop => {
        if (raindrop.classList.contains('near-cursor')) {
            raindrop.remove();
            return false;
        }
        return true;
    });
});
