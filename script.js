const notes = [
  "You’ve been my constant for eight years — how wild is that?",
  "Our friendship deserves its own documentary, honestly.",
  "Ruu, you make ordinary days oddly special.",
  "Can’t believe how many bad jokes we’ve survived.",
  "You’re that person who just *gets it* before I explain.",
  "Thanks for always showing up — even in silence.",
  "If sarcasm was a superpower, we’d be Avengers.",
  "Remember: you’re doing better than you think.",
  "Some connections fade; ours glows steady.",
  "You make “everyday” feel worth remembering.",
  "Cheers to more caffeine-fueled catch-ups.",
  "Sometimes I wonder if the best connections are a tiny bit magical — like ours."
];

const notesContainer = document.getElementById('notesContainer');
const shuffleBtn = document.getElementById('shuffleBtn');
const copyBtn = document.getElementById('copyBtn');
const confettiBtn = document.getElementById('confettiBtn');
const typewriterText = document.getElementById('typewriterText');

function displayNotes() {
  notesContainer.innerHTML = '';
  notes.forEach(note => {
    const card = document.createElement('div');
    card.className = 'note-card';
    card.textContent = note;
    notesContainer.appendChild(card);
  });
}

function shuffleNotes() {
  for (let i = notes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [notes[i], notes[j]] = [notes[j], notes[i]];
  }
  displayNotes();
}

shuffleBtn.addEventListener('click', shuffleNotes);

copyBtn.addEventListener('click', () => {
  const randomNote = notes[Math.floor(Math.random() * notes.length)];
  navigator.clipboard.writeText(randomNote);
  alert('Copied: ' + randomNote);
});

// Simple confetti animation
confettiBtn.addEventListener('click', () => {
  const duration = 1000;
  const end = Date.now() + duration;
  (function frame() {
    const timeLeft = end - Date.now();
    if (timeLeft <= 0) return;
    const confetti = document.createElement('div');
    confetti.textContent = '✨';
    confetti.style.position = 'fixed';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = '0';
    confetti.style.fontSize = '1.5rem';
    confetti.style.animation = 'fall 1s linear';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1000);
    requestAnimationFrame(frame);
  })();
});

// Typewriter Effect
const lines = ['keep being you.', 'thanks for staying.', 'always my constant.'];
let index = 0, charIndex = 0;

function type() {
  if (index < lines.length) {
    if (charIndex < lines[index].length) {
      typewriterText.textContent += lines[index].charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      typewriterText.textContent += '\n';
      index++;
      charIndex = 0;
      setTimeout(type, 600);
    }
  }
}

displayNotes();
type();