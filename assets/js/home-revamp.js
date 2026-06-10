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

  document.addEventListener('DOMContentLoaded', function () {
    Array.prototype.forEach.call(document.querySelectorAll('[data-home-hero-carousel]'), initHomeHeroCarousel);
  });
}());
