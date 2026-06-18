import { inView, scroll } from 'motion';
import { animate } from 'motion/mini';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initScrollRule(rule, onLead, offset = ['start 85%', 'start 45%']) {
  let hasLed = false;

  rule.style.transform = 'scaleX(0)';
  rule.style.transformOrigin = 'left center';

  scroll(
    (progress) => {
      const easedProgress = progress * progress * (3 - 2 * progress);
      rule.style.transform = `scaleX(${easedProgress})`;

      if (!hasLed && progress >= 0.55) {
        hasLed = true;
        onLead();
      }
    },
    { target: rule, offset }
  );
}

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
    initScrollRule(rule, () => {
      ruleHasLed = true;
      queuedReveals.splice(0).forEach((reveal) => reveal());
    });
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

function initProcessMotion(section) {
  const rule = section.querySelector('[data-motion-process-rule]');
  const title = section.querySelector('.revamp-home-process__title');
  const image = section.querySelector('.revamp-home-process__image');
  const markers = Array.from(section.querySelectorAll('.revamp-home-process__marker'));
  const toggles = Array.from(section.querySelectorAll('.revamp-home-process__mode-button'));
  const cards = Array.from(section.querySelectorAll('.revamp-home-process-card'));
  const clockwiseCards = [cards[0], cards[1], cards[3], cards[2]].filter(Boolean);
  const replayItems = [image, ...markers, ...toggles, ...cards].filter(Boolean);
  let initialSequencePlayed = false;

  if (!rule || !title || !image || !cards.length) {
    return;
  }

  title.style.opacity = '0';
  title.style.transform = 'translateY(28px)';
  image.style.opacity = '0';

  markers.forEach((marker) => {
    marker.style.opacity = '0';
  });

  toggles.forEach((toggle) => {
    toggle.style.opacity = '0';
    toggle.style.transform = 'translateY(10px)';
  });

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(18px)';
  });

  function playBodySequence(baseDelay = 0) {
    animate(image, { opacity: 1 }, {
      duration: 0.58,
      delay: baseDelay,
      ease: [0.22, 1, 0.36, 1],
    });

    markers.forEach((marker, index) => {
      animate(marker, { opacity: 1 }, {
        duration: 0.34,
        delay: baseDelay + 0.16 + index * 0.07,
        ease: [0.22, 1, 0.36, 1],
      });
    });

    const toggleStart = baseDelay + 0.16 + markers.length * 0.07;

    toggles.forEach((toggle, index) => {
      animate(toggle, {
        opacity: 1,
        transform: 'translateY(0px)',
      }, {
        duration: 0.42,
        delay: toggleStart + index * 0.09,
        ease: [0.22, 1, 0.36, 1],
      });
    });

    const cardsStart = toggleStart + toggles.length * 0.09 + 0.12;

    clockwiseCards.forEach((card, index) => {
      animate(card, {
        opacity: 1,
        transform: 'translateY(0px)',
      }, {
        duration: 0.52,
        delay: cardsStart + index * 0.085,
        ease: [0.22, 1, 0.36, 1],
      });
    });
  }

  function playInitialSequence() {
    if (initialSequencePlayed) {
      return;
    }

    initialSequencePlayed = true;
    animate(title, {
      opacity: 1,
      transform: 'translateY(0px)',
    }, {
      duration: 0.62,
      ease: [0.22, 1, 0.36, 1],
    });
    playBodySequence(0.42);
  }

  function replayBodySequence() {
    animate(replayItems, { opacity: 0 }, {
      duration: 0.14,
      ease: 'ease-out',
    });

    window.setTimeout(() => {
      toggles.forEach((toggle) => {
        toggle.style.transform = 'translateY(10px)';
      });
      cards.forEach((card) => {
        card.style.transform = 'translateY(18px)';
      });
      playBodySequence();
    }, 150);
  }

  section.addEventListener('revamp:process-mode-change', replayBodySequence);
  initScrollRule(rule, playInitialSequence, ['start 92%', 'start 62%']);
}

function initRevampMotion() {
  if (reducedMotion.matches) {
    return;
  }

  document.querySelectorAll('[data-motion-reveal-group]').forEach(initRevealGroup);
  document.querySelectorAll('[data-motion-process]').forEach(initProcessMotion);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRevampMotion, { once: true });
} else {
  initRevampMotion();
}
