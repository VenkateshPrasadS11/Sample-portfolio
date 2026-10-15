export function triggerConfetti() {
  const count = 75;
  const container = document.createElement('div');
  container.className = 'fixed inset-0 pointer-events-none z-50 overflow-hidden';
  document.body.appendChild(container);

  const colors = ['#00f0ff', '#38bdf8', '#a855f7', '#10b981', '#f59e0b', '#ec4899'];

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 6;
    const isCircle = Math.random() > 0.5;

    const startX = window.innerWidth / 2 + (Math.random() - 0.5) * 200;
    const startY = window.innerHeight * 0.7;

    const endX = startX + (Math.random() - 0.5) * 600;
    const endY = startY - Math.random() * 500 - 100;
    const dropY = window.innerHeight + 50;

    confetti.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: ${isCircle ? '50%' : '2px'};
      left: ${startX}px;
      top: ${startY}px;
      opacity: 1;
      transform: rotate(${Math.random() * 360}deg);
      box-shadow: 0 0 10px ${color};
      transition: all 1.8s cubic-bezier(0.25, 1, 0.5, 1);
    `;

    container.appendChild(confetti);

    // Animate burst
    requestAnimationFrame(() => {
      confetti.style.left = `${endX}px`;
      confetti.style.top = `${endY}px`;
      confetti.style.transform = `rotate(${Math.random() * 720}deg) scale(${Math.random() * 1.2 + 0.6})`;

      setTimeout(() => {
        confetti.style.transition = 'all 1.5s cubic-bezier(0.4, 0, 1, 1)';
        confetti.style.top = `${dropY}px`;
        confetti.style.opacity = '0';
      }, 500);
    });
  }

  setTimeout(() => {
    container.remove();
  }, 2500);
}
