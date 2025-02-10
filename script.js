let noBtn = document.getElementById('no-btn');
let clickCount = 0;

function moveNo() {
  let x = Math.random() * (window.innerWidth - 150);
  let y = Math.random() * (window.innerHeight - 100);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

function sayYes() {
  clickCount++;
  createHearts();
  if (clickCount === 3) {
    triggerCelebration();
    setTimeout(displayFinalMessage, 5000); // Wait for 5 seconds before showing the final message
  }
}

function createHearts() {
  for (let i = 0; i < 10; i++) {
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1500);
  }
}

function triggerCelebration() {
  displayFireworks();
  createBalloons();
}

function displayFireworks() {
  for (let i = 0; i < 10; i++) {
    let firework = document.createElement('div');
    firework.classList.add('firework');
    firework.style.left = `${Math.random() * window.innerWidth}px`;
    firework.style.top = `${Math.random() * window.innerHeight}px`;
    document.body.appendChild(firework);
    setTimeout(() => firework.remove(), 2000);
  }
}

function createBalloons() {
  for (let i = 0; i < 15; i++) {
    let balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = `${Math.random() * window.innerWidth}px`;
    balloon.style.animationDelay = `${i * 0.2}s`;
    document.body.appendChild(balloon);
    setTimeout(() => balloon.remove(), 4000);
  }
}

function displayFinalMessage() {
  document.body.innerHTML = `
    <div style="text-align: center; margin-top: 50px;">
      <h1 style="color: #E91E63; animation: fadeIn 2s ease-in-out;">💖 Ruth, You’re My Valentine Forever! 💖</h1>
      <img src="image.jpg" alt="Valentine Heart" 
           style="width: 300px; border-radius: 50%; box-shadow: 0 0 20px rgba(0,0,0,0.2); animation: pop 2s ease;">
    </div>`;
}









