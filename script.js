// Create floating background hearts
function createHearts() {
    const container = document.getElementById('particles-js');
    if (!container) return;

    // Create new heart every 400ms
    setInterval(() => {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart', 'bg-heart');

        // Random size between 10px and 30px
        const size = Math.random() * 20 + 10;
        heart.style.fontSize = `${size}px`;

        // Random horizontal start position
        heart.style.left = `${Math.random() * 100}vw`;

        // Random falling speed between 6s and 12s
        const duration = Math.random() * 6 + 6;
        heart.style.animationDuration = `${duration}s`;

        container.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }, 400);
}

// Ensure the No button moves away when hovered or clicked
function moveButton(btn) {
    if (!btn) return;

    // Give it absolute positioning
    btn.style.position = 'fixed';

    const maxX = window.innerWidth - btn.offsetWidth;
    const maxY = window.innerHeight - btn.offsetHeight;

    const newX = Math.floor(Math.random() * maxX);
    const newY = Math.floor(Math.random() * maxY);

    btn.style.left = `${newX}px`;
    btn.style.top = `${newY}px`;
    btn.style.zIndex = '9999';
}

function moveButtonMobile(e) {
    e.preventDefault(); // Prevent default mobile click immediately triggering it normally
    moveButton(e.target);
}

// Initialize scripts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createHearts();

    const noBtn = document.querySelector('.no-btn');
    if (noBtn) {
        noBtn.addEventListener('mouseover', () => moveButton(noBtn));
        noBtn.addEventListener('touchstart', moveButtonMobile);
        noBtn.addEventListener('click', (e) => {
            e.preventDefault();
            moveButton(noBtn);
        });
    }
});

function celebrate() {
    const msg = document.getElementById('celebration-msg');
    const introMsg = document.getElementById('intro-msg');

    if (introMsg) {
        introMsg.classList.add('hidden');
    }

    if (msg) {
        msg.classList.remove('hidden');
    }

    // Create burst of hearts celebration
    for (let i = 0; i < 60; i++) {
        setTimeout(() => {
            const heart = document.createElement('i');
            heart.classList.add('fas', 'fa-heart', 'bg-heart');
            heart.style.color = Math.random() > 0.5 ? '#ff4d4d' : '#ffb3d9';
            heart.style.fontSize = `${Math.random() * 30 + 15}px`;
            heart.style.left = `${Math.random() * 100}vw`;
            // Make them float faster for celebration
            heart.style.animationDuration = `${Math.random() * 2 + 2}s`;

            document.body.appendChild(heart);

            // Clean up
            setTimeout(() => heart.remove(), 4000);
        }, i * 40);
    }

    // Hide the No button fully
    const noBtn = document.querySelector('.no-btn');
    if (noBtn) {
        noBtn.style.display = 'none';
    }
}
