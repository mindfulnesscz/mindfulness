import { inView, scroll } from 'motion';
import { animate } from 'motion/mini';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initRevealGroup(section) {
  const items = Array.from(section.querySelectorAll('[data-motion-reveal]'));
  const rule = section.querySelector('[data-motion-reveal-rule]');
  const queuedReveals = [];
  let ruleHasLed = !rule;

  if (!items.length) {
    return;
  }

  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = `translateY(${index === 0 ? 36 : 22}px)`;
  });

  if (rule) {
    rule.style.transform = 'scaleX(0)';
    rule.style.transformOrigin = 'left center';

    scroll(
      (progress) => {
        const easedProgress = progress * progress * (3 - 2 * progress);
        rule.style.transform = `scaleX(${easedProgress})`;

        if (!ruleHasLed && progress >= 0.55) {
          ruleHasLed = true;
          queuedReveals.splice(0).forEach((reveal) => reveal());
        }
      },
      {
        target: rule,
        offset: ['start 85%', 'start 45%'],
      }
    );
  }

  items.forEach((item, index) => {
    inView(
      item,
      () => {
        const revealOrder = Number.parseInt(item.getAttribute('data-motion-reveal-order'), 10);
        const revealDelay = Number.isNaN(revealOrder)
          ? Math.min(index * 0.045, 0.12)
          : Math.min(Math.max(revealOrder, 0) * 0.12, 0.24);
        const reveal = () => {
          animate(
            item,
            {
              opacity: 1,
              transform: 'translateY(0px)',
            },
            {
              duration: 0.72,
              delay: revealDelay,
              ease: [0.22, 1, 0.36, 1],
            }
          );
        };

        if (ruleHasLed) {
          reveal();
        } else {
          queuedReveals.push(reveal);
        }
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
