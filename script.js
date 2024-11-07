let phrases = ["lab", "intern", "business"];
let phraseCounter = 0;

const startPage = document.getElementById('start-page');
const internPage = document.getElementById('intern-page');
const businessPage = document.getElementById('business-page');
const brokePage = document.getElementById('broke-page');

const startButton = document.getElementById('start-button');
const internButton = document.getElementById('intern-button');
const businessButton = document.getElementById('business-button');
const brokeButton = document.getElementById('broke-button');

const raindropPageLab = document.getElementById('raindrop-page-lab');
const raindropPageIntern = document.getElementById('raindrop-page-intern');
const raindropPageBusiness = document.getElementById('raindrop-page-business');

let raindropsLab = [];
let raindropsEliminatedLab = 0;

let raindropsIntern = [];
let raindropsEliminatedIntern = 0;

let raindropsBusiness = [];
let raindropsEliminatedBusiness = 0;

let cursorX = 0;
let cursorY = 0;
document.addEventListener('mousemove', (event) => {
    cursorX = event.clientX;
    cursorY = event.clientY;
});

startButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    internPage.style.display = 'none';
    businessPage.style.display = 'none';
    brokePage.style.display = 'none';
    raindropPageLab.style.display = 'block';
    raindropPageIntern.style.display = 'none';
    raindropPageBusiness.style.display = 'none';
    removeAllRaindrops()
    startRaindropAnimationLab();
});

internButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    internPage.style.display = 'none';
    businessPage.style.display = 'none';
    brokePage.style.display = 'none';
    raindropPageLab.style.display = 'none';
    raindropPageIntern.style.display = 'block';
    raindropPageBusiness.style.display = 'none';
    removeAllRaindrops()
    startRaindropAnimationIntern();
});

businessButton.addEventListener('click', () => {
    startPage.style.display = 'none';
    internPage.style.display = 'none';
    businessPage.style.display = 'none';
    brokePage.style.display = 'none';
    raindropPageLab.style.display = 'none';
    raindropPageIntern.style.display = 'none';
    raindropPageBusiness.style.display = 'block';
    removeAllRaindrops()
    startRaindropAnimationBusiness();
});

brokeButton.addEventListener('click', () => {
    // startPage.style.display = 'block';
    // internPage.style.display = 'none';
    // businessPage.style.display = 'none';
    // brokePage.style.display = 'none';
    // raindropPageLab.style.display = 'none';
    // raindropPageIntern.style.display = 'none';
    // raindropPageBusiness.style.display = 'none';
    // removeAllRaindrops()
    location.reload();
});

function startRaindropAnimationLab() {
    console.log("in");
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        raindrop.textContent = phrases[0];
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = ((Math.random() * 10 + 4)) / 4 + 's';
        raindrop.style.fontSize = (Math.random() * 30 + 10) + 'px';

        raindropPageLab.appendChild(raindrop);
        raindropsLab.push(raindrop);

        if (raindropsLab.length > 150) {
            for (let i = 0; i < 5; i++) {
                const oldRaindrop = raindropsLab.shift();
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
            if (distance >= 100) {
                raindrop.style.color = 'blue';
                raindrop.classList.remove('near-cursor');
            }
        }

        const proximityInterval = setInterval(() => {
            checkProximity();
        }, 100);

        raindrop.addEventListener('animationend', () => {
            clearInterval(proximityInterval);
            raindropsLab = raindropsLab.filter(r => r !== raindrop);
            raindrop.remove();
        });
    }

    setInterval(createRaindrop, 20);
}

function startRaindropAnimationIntern() {
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        raindrop.textContent = phrases[1];
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = ((Math.random() * 10 + 4)) / 4 + 's';
        raindrop.style.fontSize = (Math.random() * 30 + 10) + 'px';

        raindropPageIntern.appendChild(raindrop);
        raindropsIntern.push(raindrop);

        if (raindropsIntern.length > 150) {
            for (let i = 0; i < 5; i++) {
                const oldRaindrop = raindropsIntern.shift();
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
            if (distance >= 100) {
                raindrop.style.color = 'blue';
                raindrop.classList.remove('near-cursor');
            }
        }

        const proximityInterval = setInterval(() => {
            checkProximity();
        }, 100);

        raindrop.addEventListener('animationend', () => {
            clearInterval(proximityInterval);
            raindropsIntern = raindropsIntern.filter(r => r !== raindrop);
            raindrop.remove();
        });
    }

    setInterval(createRaindrop, 20);
}

function startRaindropAnimationBusiness() {
    function createRaindrop() {
        const raindrop = document.createElement('div');
        raindrop.classList.add('raindrop');

        raindrop.textContent = phrases[2];
        raindrop.style.left = Math.random() * 100 + 'vw';
        raindrop.style.animationDuration = ((Math.random() * 10 + 4)) / 4 + 's';
        raindrop.style.fontSize = (Math.random() * 30 + 10) + 'px';

        raindropPageBusiness.appendChild(raindrop);
        raindropsBusiness.push(raindrop);

        if (raindropsBusiness.length > 150) {
            for (let i = 0; i < 5; i++) {
                const oldRaindrop = raindropsBusiness.shift();
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
            if (distance >= 100) {
                raindrop.style.color = 'blue';
                raindrop.classList.remove('near-cursor');
            }
        }

        const proximityInterval = setInterval(() => {
            checkProximity();
        }, 100);

        raindrop.addEventListener('animationend', () => {
            clearInterval(proximityInterval);
            raindropsBusiness = raindropsBusiness.filter(r => r !== raindrop);
            raindrop.remove();
        });
    }

    setInterval(createRaindrop, 20);
}

document.addEventListener('click', () => {
    if (phraseCounter == 0) {
        raindropsLab = raindropsLab.filter(raindrop => {
            if (raindrop.classList.contains('near-cursor')) {
                raindrop.remove();
                raindropsEliminatedLab++;
                if (raindropsEliminatedLab >= 20) {
                    raindropsEliminatedLab = 0;
                    phraseCounter++;
                    removeAllRaindrops()
                    startPage.style.display = 'none';
                    internPage.style.display = 'block';
                    businessPage.style.display = 'none';
                    brokePage.style.display = 'none';
                    raindropPageLab.style.display = 'none';
                    raindropPageIntern.style.display = 'none';
                    raindropPageBusiness.style.display = 'none';
                }
                return false;
            }
            return true;
        });
    }

    if (phraseCounter == 1) {
        raindropsIntern = raindropsIntern.filter(raindrop => {
            if (raindrop.classList.contains('near-cursor')) {
                raindrop.remove();
                raindropsEliminatedIntern++;
                if (raindropsEliminatedIntern >= 20) {
                    raindropsEliminatedIntern = 0;
                    phraseCounter++;
                    removeAllRaindrops()
                    startPage.style.display = 'none';
                    internPage.style.display = 'none';
                    businessPage.style.display = 'block';
                    brokePage.style.display = 'none';
                    raindropPageLab.style.display = 'none';
                    raindropPageIntern.style.display = 'none';
                    raindropPageBusiness.style.display = 'none';
                }
                return false;
            }
            return true;
        });
    }

    if (phraseCounter == 2) {
        raindropsBusiness = raindropsBusiness.filter(raindrop => {
            if (raindrop.classList.contains('near-cursor')) {
                raindrop.remove();
                raindropsEliminatedBusiness++;
                if (raindropsEliminatedBusiness >= 20) {
                    raindropsEliminatedBusiness = 0;
                    phraseCounter++;
                    removeAllRaindrops()
                    startPage.style.display = 'none';
                    internPage.style.display = 'none';
                    businessPage.style.display = 'none';
                    brokePage.style.display = 'block';
                    raindropPageLab.style.display = 'none';
                    raindropPageIntern.style.display = 'none';
                    raindropPageBusiness.style.display = 'none';
                }
                return false;
            }
            return true;
        });
    }
});

function removeAllRaindrops() {
    raindropsLab.forEach(raindrop => {
        if (raindrop && raindrop.parentNode) {
            raindrop.remove();
        }
    });
    raindropsLab = [];

    raindropsIntern.forEach(raindrop => {
        if (raindrop && raindrop.parentNode) {
            raindrop.remove();
        }
    });
    raindropsIntern = [];

    raindropsBusiness.forEach(raindrop => {
        if (raindrop && raindrop.parentNode) {
            raindrop.remove();
        }
    });
    raindropsBusiness = [];
}
