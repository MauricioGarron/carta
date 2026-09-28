// Elementos de audio y pantalla inicial
const welcomeScreen = document.getElementById('welcomeScreen');
const enterBtn = document.getElementById('enterBtn');
const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('musicBtn');
const musicIcon = document.getElementById('musicIcon');

// Elementos de la sorpresa final
const surpriseBtn = document.getElementById('surpriseBtn');
const hiddenGift = document.getElementById('hiddenGift');

// 1. Al presionar "Abrir dedicatoria"
enterBtn.addEventListener('click', () => {
  // Desvanecer la pantalla inicial
  welcomeScreen.classList.add('hidden');

  // Iniciar la música
  bgMusic.play().then(() => {
    musicIcon.textContent = '⏸️';
  }).catch((err) => {
    console.log('El navegador restringió la reproducción inicial:', err);
  });
});

// 2. Control de Play / Pausa flotante
musicBtn.addEventListener('click', () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicIcon.textContent = '⏸️';
  } else {
    bgMusic.pause();
    musicIcon.textContent = '▶️';
  }
});

// 3. Botón de sorpresa final
surpriseBtn.addEventListener('click', () => {
  if (hiddenGift.style.display === 'block') {
    hiddenGift.style.display = 'none';
    surpriseBtn.textContent = 'Tócame aquí ✨';
  } else {
    hiddenGift.style.display = 'block';
    surpriseBtn.textContent = 'Cerrar mensajito';
  }
});