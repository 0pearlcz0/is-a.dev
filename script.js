document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const binaryBackground = document.createElement('div');
    binaryBackground.id = 'binary-background';
    body.appendChild(binaryBackground);

    let keysPressed = {};

    function createBinaryStream(length) {
        let stream = '';
        for (let i = 0; i < length; i++) {
            stream += Math.random() > 0.5 ? '1' : '0';
        }
        return stream;
    }

    function getRandomPosition() {
        return Math.floor(Math.random() * 100);
    }

    function appendBinaryStream() {
        const stream = createBinaryStream(1); // Pouze jedno číslo
        const binaryElement = document.createElement('div');
        binaryElement.textContent = stream;
        binaryElement.style.position = 'absolute';
        binaryElement.style.top = '0';
        binaryElement.style.left = `${getRandomPosition()}%`;
        binaryElement.style.color = 'lightgreen';
        binaryBackground.appendChild(binaryElement);

        binaryElement.animate(
            [
                { transform: 'translateY(0)' },
                { transform: 'translateY(100vh)' }
            ],
            {
                duration: 5000,
                iterations: 1,
                easing: 'linear'
            }
        ).onfinish = () => {
            binaryBackground.removeChild(binaryElement);
        };
    }

    window.addEventListener('keydown', (e) => {
        if (!keysPressed[e.key]) {
            keysPressed[e.key] = true;
            const clickSound = new Audio('click-sound.mp3');
            clickSound.play(); // Přehrání zvuku při stisku klávesy
            appendBinaryStream(); // Přidání jednoho čísla
        }
    });

    window.addEventListener('keyup', (e) => {
        keysPressed[e.key] = false;
    });
});
