  // Optimized particle creation
  function createParticles() {
    const emojis = ['❤️', '🌎', '🌠', '💝', '🌟', '💞'];
    const container = document.body;
    let lastTime = 0;

    function animate(timestamp) {
        if (!lastTime || timestamp - lastTime >= 500) { // Reduced frequency
            const particle = document.createElement('div');
            particle.className = 'love-particle';
            particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDuration = Math.random() * 3 + 3 + 's';
            container.appendChild(particle);
            setTimeout(() => particle.remove(), 6000);
            lastTime = timestamp;
        }
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

// Optimized message animation
let currentMessage = 0;
const messages = document.querySelectorAll('.message');
const finalQuestion = document.querySelector('.final-question');

function showNextMessage() {
    requestAnimationFrame(() => {
        if (currentMessage > 0) {
            messages[currentMessage - 1].classList.add('exit');
        }
        
        if (currentMessage < messages.length) {
            messages[currentMessage].classList.add('active');
            currentMessage++;
            setTimeout(showNextMessage, 3000);
        } else {
            finalQuestion.style.display = 'block';
            finalQuestion.style.opacity = '1';
        }
    });
}

// Button interactions
document.querySelector('.yes-btn').addEventListener('click', function() {
    const celebration = document.querySelector('.celebration');
    celebration.style.display = 'block';

    // Optimized heart burst
    requestAnimationFrame(() => {
        for (let i = 0; i < 50; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-burst';
            heart.textContent = '❤️';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 0.5 + 's';
            celebration.appendChild(heart);
        }
    });

    finalQuestion.innerHTML = 
        "<h2>🎉 I know you're my babe Deepika 💝</h2>" +
        "<p>Dear Deepika,</p>"+
        "<p>I love you. I love you with all my heart. I have to write to you, because while i am sitting here, the silence of my room i s not empty, its full of you. Only and Only you. I am standing on the edge, knowing that to step inside is to lose oneself completely, and Finding another one already moving.</p>" +
        "<p>You can see, there is a fear in me. The friend of mine who sees me as a glass that to be truly seen is to be shattered. But when i think about you. The friend of mine seem different. The friend that you can only see the surface, the reflection on the glass, and not the deep shadowy room behind it that i long for you to inhabit.</p>"+
        "<p>I do not want to love you as a view from the windows. I want to be forest for you. I want you to step inside, i want you to get lost in me, to find the places where light barely reaches, the place i myself is afraid to go. Can you be there for me ? The one who understands that this depth. I speak of is not of rest, but a place of truth. I am writing you from the edge of my forest. And i am waiting for the sound of your footstep on the leaves.</p>"+
        "<p>Your love,</p>"+
        "<p><b>Star loves deepika💞</b></p>"+
        "<div style='margin-top: 2rem; font-size: 3rem'>💞🌟</div>";
});

document.querySelector('.no-btn').addEventListener('mouseover', function() {
    requestAnimationFrame(() => {
        this.style.transform = 
            `translate(${Math.random() * 200 - 100}px, 
            ${Math.random() * 200 - 100}px)
            rotate(${Math.random() * 360}deg)`;
        this.style.transition = 'all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)';
    });
});

// Initialize
createParticles();
setTimeout(showNextMessage, 1000);