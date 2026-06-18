import { inView } from 'motion';
import { animate } from 'motion/mini';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initRevealGroup(section) {
  const items = Array.from(section.querySelectorAll('[data-motion-reveal]'));

  if (!items.length) {
    return;
  }

  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = `translateY(${index === 0 ? 36 : 22}px)`;
  });

  items.forEach((item, index) => {
    inView(
      item,
      () => {
        animate(
          item,
          {
            opacity: 1,
            transform: 'translateY(0px)',
          },
          {
            duration: 0.72,
            delay: Math.min(index * 0.045, 0.12),
            ease: [0.22, 1, 0.36, 1],
          }
        );
      },
      {
        amount: 0.35,
        margin: '0px 0px -10% 0px',
      }
    );
  });
}

function initRevampMotion() {
  if (reducedMotion.matches) {
    return;
  }

  document.querySelectorAll('[data-motion-reveal-group]').forEach(initRevealGroup);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRevampMotion, { once: true });
} else {
  initRevampMotion();
}
