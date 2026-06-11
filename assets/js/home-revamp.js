(function () {
  function initHomeHeroCarousel(carousel) {
    var slides = Array.prototype.slice.call(carousel.querySelectorAll('[data-carousel-slide]'));
    var tabs = Array.prototype.slice.call(carousel.querySelectorAll('[data-carousel-tab]'));
    var prev = carousel.querySelector('[data-carousel-prev]');
    var next = carousel.querySelector('[data-carousel-next]');
    var index = 0;
    var timer = null;
    var prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!slides.length) {
      return;
    }

    function setActive(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;

      slides.forEach(function (slide, slideIndex) {
        var isActive = slideIndex === index;
        slide.classList.toggle('is-active', isActive);
        slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');

        if (isActive) {
          slide.removeAttribute('inert');
        } else {
          slide.setAttribute('inert', '');
        }
      });

      tabs.forEach(function (tab, tabIndex) {
        var isActive = tabIndex === index;
        tab.classList.toggle('is-active', isActive);
        tab.setAttribute('aria-selected', isActive ? 'true' : 'false');
      });
    }

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
    }

    function startAutoplay() {
      if (prefersReducedMotion || slides.length < 2) {
        return;
      }

      stopAutoplay();
      timer = window.setInterval(function () {
        setActive(index + 1);
      }, 6500);
    }

    if (prev) {
      prev.addEventListener('click', function () {
        setActive(index - 1);
        startAutoplay();
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        setActive(index + 1);
        startAutoplay();
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        setActive(parseInt(tab.getAttribute('data-carousel-index'), 10) || 0);
        startAutoplay();
      });
    });

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    setActive(0);
    startAutoplay();
  }

  function initHomeProcess(section) {
    var targets = Array.prototype.slice.call(section.querySelectorAll('[data-process-target]'));
    var defaultKey = section.getAttribute('data-process-default') || '';
    var committedKey = defaultKey || (targets[0] ? targets[0].getAttribute('data-process-target') : '');

    if (!targets.length) {
      return;
    }

    function setActive(key) {
      targets.forEach(function (target) {
        var isActive = target.getAttribute('data-process-target') === key;

        target.classList.toggle('is-active', isActive);

        if (target.hasAttribute('aria-pressed')) {
          target.setAttribute('aria-pressed', isActive ? 'true' : 'false');
        }
      });
    }

    targets.forEach(function (target) {
      var key = target.getAttribute('data-process-target');

      target.addEventListener('mouseenter', function () {
        setActive(key);
      });

      target.addEventListener('mouseleave', function () {
        setActive(committedKey);
      });

      target.addEventListener('focus', function () {
        setActive(key);
      });

      target.addEventListener('blur', function () {
        setActive(committedKey);
      });

      target.addEventListener('click', function () {
        committedKey = key;
        setActive(committedKey);
      });

      target.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') {
          return;
        }

        event.preventDefault();
        committedKey = key;
        setActive(committedKey);
      });
    });

    setActive(committedKey);
  }

  function initHomeToolsCarousel(section) {
    var viewport = section.querySelector('[data-tools-viewport]');
    var track = section.querySelector('[data-tools-track]');
    var cards = Array.prototype.slice.call(section.querySelectorAll('[data-tools-card]'));
    var prev = section.querySelector('[data-tools-prev]');
    var next = section.querySelector('[data-tools-next]');
    var indicator = section.querySelector('[data-tools-indicator]');
    var activeIndex = -1;

    cards.forEach(function (card, index) {
      if (activeIndex === -1 && card.classList.contains('is-active')) {
        activeIndex = index;
      }
    });

    if (!viewport || !track || !cards.length) {
      return;
    }

    if (activeIndex < 0) {
      activeIndex = 0;
    }

    function setActive(index) {
      activeIndex = Math.max(0, Math.min(index, cards.length - 1));

      cards.forEach(function (card, cardIndex) {
        card.classList.toggle('is-active', cardIndex === activeIndex);
      });
    }

    function getStep() {
      if (cards.length < 2) {
        return viewport.clientWidth;
      }

      var firstRect = cards[0].getBoundingClientRect();
      var secondRect = cards[1].getBoundingClientRect();

      return Math.max(1, secondRect.left - firstRect.left);
    }

    function scrollByCard(direction) {
      viewport.scrollBy({
        left: getStep() * direction,
        behavior: 'smooth',
      });
    }

    function updateIndicator() {
      if (!indicator) {
        return;
      }

      var scrollable = viewport.scrollWidth - viewport.clientWidth;
      var widthRatio = viewport.scrollWidth > 0 ? viewport.clientWidth / viewport.scrollWidth : 1;
      var thumbWidth = Math.min(1, Math.max(0.12, widthRatio)) * 100;
      var maxLeft = 100 - thumbWidth;
      var left = scrollable > 0 ? (viewport.scrollLeft / scrollable) * maxLeft : 0;

      indicator.style.width = thumbWidth + '%';
      indicator.style.transform = 'translateX(' + left + '%)';
    }

    cards.forEach(function (card, index) {
      card.setAttribute('tabindex', '0');

      card.addEventListener('mouseenter', function () {
        setActive(index);
      });

      card.addEventListener('focus', function () {
        setActive(index);
      });

      card.addEventListener('click', function () {
        setActive(index);
      });

      card.addEventListener('keydown', function (event) {
        if (event.key !== 'Enter' && event.key !== ' ') {
          return;
        }

        event.preventDefault();
        setActive(index);
      });
    });

    if (prev) {
      prev.addEventListener('click', function () {
        scrollByCard(-1);
      });
    }

    if (next) {
      next.addEventListener('click', function () {
        scrollByCard(1);
      });
    }

    viewport.addEventListener('scroll', updateIndicator, { passive: true });
    window.addEventListener('resize', updateIndicator);

    if ('ResizeObserver' in window) {
      new ResizeObserver(updateIndicator).observe(viewport);
    }

    setActive(activeIndex);
    updateIndicator();
  }

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-home-hero-carousel]'), initHomeHeroCarousel);
    Array.prototype.forEach.call(document.querySelectorAll('[data-process-section]'), initHomeProcess);
    Array.prototype.forEach.call(document.querySelectorAll('[data-tools-carousel]'), initHomeToolsCarousel);
  });
}());
