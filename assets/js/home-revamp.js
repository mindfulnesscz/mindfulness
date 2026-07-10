(function () {
  function initRevampNavScrollState() {
    var header = document.querySelector('.ess-revamp-header');

    if (!header) {
      return;
    }

    function updateHeaderState() {
      header.classList.toggle('is-scrolled', window.scrollY > 2);
    }

    updateHeaderState();
    window.addEventListener('scroll', updateHeaderState, { passive: true });
  }

  function initRevampLinkCursor() {
    if (!document.body.classList.contains('ess-revamp-shell')) {
      return;
    }

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    var links = Array.prototype.slice.call(document.querySelectorAll('a[href]')).filter(function (link) {
      var href = link.getAttribute('href') || '';

      return href &&
        href.charAt(0) !== '#' &&
        href.indexOf('mailto:') !== 0 &&
        href.indexOf('tel:') !== 0 &&
        href.indexOf('javascript:') !== 0;
    });

    if (!links.length) {
      return;
    }

    var cursor = document.createElement('div');
    var mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    };
    var rendered = {
      x: mouse.x,
      y: mouse.y,
    };
    var isActive = false;
    var scale = 0.72;

    cursor.className = 'ess-revamp-link-cursor';
    cursor.setAttribute('aria-hidden', 'true');
    document.body.appendChild(cursor);

    function setMousePosition(event) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    }

    function setActive(event) {
      isActive = true;
      setMousePosition(event);
      cursor.classList.add('is-active');
    }

    function setInactive() {
      isActive = false;
      cursor.classList.remove('is-active');
    }

    function render() {
      rendered.x += (mouse.x - rendered.x) * 0.22;
      rendered.y += (mouse.y - rendered.y) * 0.22;
      scale += ((isActive ? 1 : 0.72) - scale) * 0.2;

      cursor.style.transform = 'translate3d(' + rendered.x + 'px, ' + rendered.y + 'px, 0) translate(-50%, -50%) scale(' + scale + ')';

      window.requestAnimationFrame(render);
    }

    links.forEach(function (link) {
      link.classList.add('ess-revamp-cursor-target');
      link.addEventListener('mouseenter', setActive);
      link.addEventListener('mousemove', setMousePosition);
      link.addEventListener('mouseleave', setInactive);
    });

    window.addEventListener('mousemove', setMousePosition, { passive: true });
    window.addEventListener('blur', setInactive);
    document.addEventListener('mouseleave', setInactive);

    render();
  }

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
    var modeButtons = Array.prototype.slice.call(section.querySelectorAll('[data-process-mode]'));
    var modeCopies = Array.prototype.slice.call(section.querySelectorAll('[data-process-mode-copy]'));
    var defaultKey = section.getAttribute('data-process-default') || '';
    var committedKey = defaultKey || (targets[0] ? targets[0].getAttribute('data-process-target') : '');
    var activeMode = 'risks';

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

    function setMode(mode, announceChange) {
      activeMode = mode === 'optimization' ? 'optimization' : 'risks';
      section.setAttribute('data-process-mode-active', activeMode);

      modeButtons.forEach(function (button) {
        var isActive = button.getAttribute('data-process-mode') === activeMode;
        button.classList.toggle('is-active', isActive);
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
      });

      modeCopies.forEach(function (copy) {
        var title = copy.querySelector('[data-process-card-title]');
        var text = copy.querySelector('[data-process-card-text]');

        if (title) {
          title.textContent = copy.getAttribute('data-' + activeMode + '-title') || '';
        }

        if (text) {
          text.textContent = copy.getAttribute('data-' + activeMode + '-text') || '';
        }
      });

      targets.forEach(function (target) {
        if (target.tagName === 'BUTTON' && target.classList.contains('revamp-home-process__marker')) {
          target.setAttribute('aria-label', target.getAttribute('data-' + activeMode + '-label') || '');
        }
      });

      setActive(committedKey);

      if (announceChange) {
        section.dispatchEvent(new CustomEvent('revamp:process-mode-change', {
          detail: { mode: activeMode },
        }));
      }
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

    modeButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        setMode(button.getAttribute('data-process-mode'), true);
      });
    });

    setMode(activeMode, false);
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

    function updateControls(scrollable) {
      var maxScroll = typeof scrollable === 'number' ? scrollable : viewport.scrollWidth - viewport.clientWidth;
      var atStart = viewport.scrollLeft <= 1;
      var atEnd = maxScroll <= 1 || viewport.scrollLeft >= maxScroll - 1;

      if (prev) {
        prev.disabled = atStart;
        prev.setAttribute('aria-disabled', atStart ? 'true' : 'false');
      }

      if (next) {
        next.disabled = atEnd;
        next.setAttribute('aria-disabled', atEnd ? 'true' : 'false');
      }
    }

    function updateIndicator() {
      var scrollable = viewport.scrollWidth - viewport.clientWidth;
      var widthRatio = viewport.scrollWidth > 0 ? viewport.clientWidth / viewport.scrollWidth : 1;
      var thumbWidth = Math.min(1, Math.max(0.12, widthRatio)) * 100;
      var maxLeft = 100 - thumbWidth;
      var left = scrollable > 0 ? (viewport.scrollLeft / scrollable) * maxLeft : 0;

      if (indicator) {
        indicator.style.width = thumbWidth + '%';
        indicator.style.left = left + '%';
      }

      updateControls(scrollable);
    }

    cards.forEach(function (card, index) {
      var cardLink = card.querySelector('a[href]');

      if (!cardLink) {
        card.setAttribute('tabindex', '0');
      }

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
        if (cardLink) {
          return;
        }

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

  function initHomeRevamp() {
    initRevampNavScrollState();
    initRevampLinkCursor();
    Array.prototype.forEach.call(document.querySelectorAll('[data-home-hero-carousel]'), initHomeHeroCarousel);
    Array.prototype.forEach.call(document.querySelectorAll('[data-process-section]'), initHomeProcess);
    Array.prototype.forEach.call(document.querySelectorAll('[data-tools-carousel]'), initHomeToolsCarousel);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeRevamp);
  } else {
    initHomeRevamp();
  }
}());
