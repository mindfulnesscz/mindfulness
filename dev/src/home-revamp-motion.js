import { inView, scroll } from 'motion';
import { animate } from 'motion/mini';
import Lenis from 'lenis';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

function initRevampSmoothScroll() {
  if (!document.body.classList.contains('ess-revamp-shell') || reducedMotion.matches) {
    return;
  }

  const lenis = new Lenis({
    anchors: true,
    autoRaf: true,
    lerp: 0.085,
    smoothWheel: true,
    stopInertiaOnNavigate: true,
  });

  window.addEventListener('pagehide', () => lenis.destroy(), { once: true });
}

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

function initIntroMotion(section) {
  const rule = section.querySelector('[data-motion-intro-rule]');
  const statement = section.querySelector('[data-motion-intro-statement]');
  const words = Array.from(section.querySelectorAll('[data-motion-intro-word]'));
  const cardsContainer = section.querySelector('.revamp-home-intro__cards');
  const cards = Array.from(section.querySelectorAll('.revamp-home-intro-card'));
  let cardsHavePlayed = false;

  if (!rule || !statement || !words.length || !cardsContainer || !cards.length) {
    return;
  }

  words.forEach((word) => {
    word.style.opacity = '0.28';
  });

  initScrollRule(rule, () => {}, ['start 92%', 'start 62%']);

  scroll((progress) => {
    words.forEach((word, index) => {
      const wordStart = (index / words.length) * 0.76;
      const wordProgress = Math.min(1, Math.max(0, (progress - wordStart) / 0.24));
      const easedProgress = wordProgress * wordProgress * (3 - 2 * wordProgress);
      word.style.opacity = String(0.28 + easedProgress * 0.72);
    });
  }, {
    target: statement,
    offset: ['start 65%', 'center 48%'],
  });

  cards.forEach((card) => {
    const title = card.querySelector('.revamp-home-intro-card__title');
    const text = card.querySelector('.revamp-home-intro-card__text');

    [title, text].filter(Boolean).forEach((element) => {
      element.style.opacity = '0';
      element.style.transform = 'translateY(14px)';
    });
  });

  inView(cardsContainer, () => {
    if (cardsHavePlayed) {
      return;
    }

    cardsHavePlayed = true;
    cards.forEach((card, index) => {
      const title = card.querySelector('.revamp-home-intro-card__title');
      const text = card.querySelector('.revamp-home-intro-card__text');
      const cardDelay = index * 0.18;

      [title, text].filter(Boolean).forEach((element, contentIndex) => {
        animate(element, {
          opacity: 1,
          transform: 'translateY(0px)',
        }, {
          duration: 0.5,
          delay: cardDelay + contentIndex * 0.11,
          ease: [0.22, 1, 0.36, 1],
        });
      });
    });
  }, {
    amount: 0.42,
    margin: '0px 0px -12% 0px',
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

function initToolsMotion(section) {
  const rule = section.querySelector('[data-motion-tools-rule]');
  const title = section.querySelector('.revamp-home-tools__statement');
  const introMark = section.querySelector('.revamp-home-tools__intro-mark');
  const introTitle = section.querySelector('.revamp-home-tools__intro-title');
  const introText = section.querySelector('.revamp-home-tools__intro-text');
  const leadElements = [title, introMark, introTitle, introText].filter(Boolean);
  const carousel = section.querySelector('.revamp-home-tools__carousel');
  const carouselHead = section.querySelector('.revamp-home-tools__carousel-head');
  const cards = Array.from(section.querySelectorAll('.revamp-home-tool-card'));
  const indicator = section.querySelector('.revamp-home-tools__indicator');
  let titleHasPlayed = false;
  let carouselHasPlayed = false;

  if (!rule || !leadElements.length || !carousel || !carouselHead || !cards.length) {
    return;
  }

  leadElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(26px)';
  });

  carouselHead.style.opacity = '0';
  carouselHead.style.transform = 'translateY(16px)';

  cards.forEach((card) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(42px) scale(0.965)';
  });

  if (indicator) {
    indicator.style.opacity = '0';
    indicator.style.transform = 'scaleX(0.82)';
    indicator.style.transformOrigin = 'left center';
  }

  function playTitle() {
    if (titleHasPlayed) {
      return;
    }

    titleHasPlayed = true;
    leadElements.forEach((element, index) => {
      animate(element, {
        opacity: 1,
        transform: 'translateY(0px)',
      }, {
        duration: 0.64,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      });
    });
  }

  function playCarouselSequence() {
    if (carouselHasPlayed) {
      return;
    }

    carouselHasPlayed = true;

    animate(carouselHead, {
      opacity: 1,
      transform: 'translateY(0px)',
    }, {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    });

    cards.forEach((card, index) => {
      animate(card, {
        opacity: 1,
        transform: 'translateY(0px) scale(1)',
      }, {
        duration: 0.72,
        delay: 0.16 + index * 0.11,
        ease: [0.16, 1, 0.3, 1],
      });
    });

    if (indicator) {
      animate(indicator, {
        opacity: 1,
        transform: 'scaleX(1)',
      }, {
        duration: 0.48,
        delay: 0.3 + cards.length * 0.11,
        ease: [0.22, 1, 0.36, 1],
      });
    }
  }

  initScrollRule(rule, playTitle, ['start 92%', 'start 62%']);
  inView(carousel, playCarouselSequence, {
    amount: 0.22,
    margin: '0px 0px -10% 0px',
  });
}

function initServicesMotion(section) {
  const rule = section.querySelector('[data-motion-services-rule]');
  const statement = section.querySelector('[data-motion-services-statement]');
  const words = Array.from(section.querySelectorAll('[data-motion-services-word]'));
  const listItems = Array.from(section.querySelectorAll('[data-motion-services-list-item]'));
  const background = section.querySelector('[data-motion-services-background]');
  let listHasPlayed = false;

  if (!rule || !statement || !words.length) {
    return;
  }

  words.forEach((word) => {
    word.style.opacity = '0.28';
  });

  initScrollRule(rule, () => {}, ['start 92%', 'start 62%']);

  scroll(
    (progress) => {
      words.forEach((word, index) => {
        const wordStart = (index / words.length) * 0.76;
        const wordProgress = Math.min(1, Math.max(0, (progress - wordStart) / 0.24));
        const easedProgress = wordProgress * wordProgress * (3 - 2 * wordProgress);
        word.style.opacity = String(0.28 + easedProgress * 0.72);
      });
    },
    {
      target: statement,
      offset: ['start 65%', 'center 48%'],
    }
  );

  listItems.forEach((item) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';
  });

  if (listItems.length) {
    inView(section.querySelector('.revamp-home-services__bottom'), () => {
      if (listHasPlayed) {
        return;
      }

      listHasPlayed = true;
      listItems.forEach((item, index) => {
        animate(item, {
          opacity: 1,
          transform: 'translateY(0px)',
        }, {
          duration: 0.55,
          delay: index * 0.1,
          ease: [0.22, 1, 0.36, 1],
        });
      });
    }, {
      amount: 0.35,
      margin: '0px 0px -8% 0px',
    });
  }

  if (background) {
    scroll((progress) => {
      const translateY = (progress - 0.5) * 120;
      background.style.transform = `translate3d(0, ${translateY}px, 0)`;
    }, {
      target: section,
      offset: ['start end', 'end start'],
    });
  }
}

function initNumbersMotion(section) {
  const rule = section.querySelector('[data-motion-numbers-rule]');
  const title = section.querySelector('.revamp-home-numbers__title');
  const graphic = section.querySelector('[data-motion-numbers-graphic]');
  const svg = section.querySelector('[data-motion-numbers-svg]');
  const mobileGraphic = section.querySelector('[data-motion-numbers-mobile]');
  const mobileBackground = section.querySelector('[data-motion-numbers-mobile-background]');
  const mobileStats = Array.from(section.querySelectorAll('[data-motion-numbers-mobile-stat]'));
  const useMobileGraphic = window.matchMedia('(max-width: 1096px)').matches;
  let titleHasPlayed = false;
  let graphicHasPlayed = false;

  if (!rule || !title || !graphic) {
    return;
  }

  title.style.opacity = '0';
  title.style.transform = 'translateY(26px)';

  initScrollRule(rule, () => {
    if (titleHasPlayed) {
      return;
    }

    titleHasPlayed = true;
    animate(title, {
      opacity: 1,
      transform: 'translateY(0px)',
    }, {
      duration: 0.64,
      ease: [0.22, 1, 0.36, 1],
    });
  }, ['start 92%', 'start 62%']);

  if (useMobileGraphic && mobileGraphic && mobileBackground && mobileStats.length) {
    mobileBackground.style.clipPath = 'inset(0 0 100% 0)';

    mobileStats.forEach((stat) => {
      stat.style.opacity = '0';
      stat.style.transform = 'translateY(20px)';
    });

    inView(mobileGraphic, () => {
      if (graphicHasPlayed) {
        return;
      }

      graphicHasPlayed = true;
      animate(mobileBackground, {
        clipPath: 'inset(0 0 0% 0)',
      }, {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      });

      mobileStats.forEach((stat, index) => {
        animate(stat, {
          opacity: 1,
          transform: 'translateY(0px)',
        }, {
          duration: 0.6,
          delay: 0.52 + index * 0.13,
          ease: [0.22, 1, 0.36, 1],
        });
      });
    }, {
      amount: 0.16,
      margin: '0px 0px -8% 0px',
    });

    return;
  }

  if (!svg) {
    return;
  }

  const directChildren = Array.from(svg.children);
  const globe = directChildren.find((element) => element.tagName.toLowerCase() === 'g');
  const statisticPaths = directChildren.filter((element) => element.tagName.toLowerCase() === 'path');
  const statisticGroups = [];

  statisticPaths.forEach((path) => {
    const centerX = path.getBBox().x + path.getBBox().width / 2;
    const groupIndex = centerX < 520 ? 0 : centerX < 890 ? 1 : centerX < 1320 ? 2 : 3;

    if (!statisticGroups[groupIndex]) {
      statisticGroups[groupIndex] = [];
    }

    statisticGroups[groupIndex].push(path);
    path.style.opacity = '0';
    path.style.transform = 'translateY(18px)';
  });

  if (globe) {
    globe.style.clipPath = 'inset(0 0 100% 0)';
  }

  inView(graphic, () => {
    if (graphicHasPlayed) {
      return;
    }

    graphicHasPlayed = true;

    if (globe) {
      animate(globe, {
        clipPath: 'inset(0 0 0% 0)',
      }, {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      });
    }

    statisticGroups.filter(Boolean).forEach((paths, index) => {
      animate(paths, {
        opacity: 1,
        transform: 'translateY(0px)',
      }, {
        duration: 0.62,
        delay: 0.58 + index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      });
    });
  }, {
    amount: 0.2,
    margin: '0px 0px -8% 0px',
  });
}

function initCasesMotion(section) {
  const headerRule = section.querySelector('[data-motion-cases-header-rule]');
  const heading = section.querySelector('.revamp-home-cases__title');
  const cases = Array.from(section.querySelectorAll('[data-motion-case]'));
  let headingHasPlayed = false;

  if (!headerRule || !heading) {
    return;
  }

  heading.style.opacity = '0';
  heading.style.transform = 'translateY(28px)';

  initScrollRule(headerRule, () => {
    if (headingHasPlayed) {
      return;
    }

    headingHasPlayed = true;
    animate(heading, {
      opacity: 1,
      transform: 'translateY(0px)',
    }, {
      duration: 0.66,
      ease: [0.22, 1, 0.36, 1],
    });
  }, ['start 92%', 'start 62%']);

  cases.forEach((caseStudy) => {
    const rule = caseStudy.querySelector('[data-motion-case-rule]');
    const media = caseStudy.querySelector('.revamp-home-case__media');
    const contentItems = [
      caseStudy.querySelector('.revamp-home-case__logo'),
      caseStudy.querySelector('.revamp-home-case__title'),
      caseStudy.querySelector('.revamp-home-case__summary'),
      caseStudy.querySelector('.revamp-home-case__link'),
    ].filter(Boolean);
    let hasPlayed = false;

    if (!rule || !media) {
      return;
    }

    media.style.clipPath = 'inset(0 0 100% 0)';
    contentItems.forEach((item) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(20px)';
    });

    initScrollRule(rule, () => {
      if (hasPlayed) {
        return;
      }

      hasPlayed = true;
      animate(media, {
        clipPath: 'inset(0 0 0% 0)',
      }, {
        duration: 0.9,
        ease: [0.76, 0, 0.24, 1],
      });

      contentItems.forEach((item, index) => {
        animate(item, {
          opacity: 1,
          transform: 'translateY(0px)',
        }, {
          duration: 0.58,
          delay: index * 0.13,
          ease: [0.22, 1, 0.36, 1],
        });
      });
    }, ['start 92%', 'start 66%']);
  });
}

function initFooterMotion(footer) {
  const items = [
    footer.querySelector('.ess-revamp-footer__brand'),
    footer.querySelector('.ess-revamp-footer__contact'),
    ...footer.querySelectorAll('.ess-revamp-footer__column'),
    ...footer.querySelectorAll('.ess-revamp-footer__bottom > *'),
  ].filter(Boolean);

  items.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(18px)';

    inView(item, () => {
      animate(item, {
        opacity: 1,
        transform: 'translateY(0px)',
      }, {
        duration: 0.56,
        delay: Math.min(index * 0.045, 0.24),
        ease: [0.22, 1, 0.36, 1],
      });
    }, {
      amount: 0.25,
      margin: '0px 0px -5% 0px',
    });
  });
}

function initRevampMotion() {
  initRevampSmoothScroll();

  if (reducedMotion.matches) {
    return;
  }

  document.querySelectorAll('[data-motion-reveal-group]').forEach(initRevealGroup);
  document.querySelectorAll('[data-motion-intro]').forEach(initIntroMotion);
  document.querySelectorAll('[data-motion-process]').forEach(initProcessMotion);
  document.querySelectorAll('[data-motion-tools]').forEach(initToolsMotion);
  document.querySelectorAll('[data-motion-numbers]').forEach(initNumbersMotion);
  document.querySelectorAll('[data-motion-services]').forEach(initServicesMotion);
  document.querySelectorAll('[data-motion-cases]').forEach(initCasesMotion);
  document.querySelectorAll('[data-motion-footer]').forEach(initFooterMotion);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initRevampMotion, { once: true });
} else {
  initRevampMotion();
}
