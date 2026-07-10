(function () {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  if (window.matchMedia('(max-width: 781px)').matches) {
    return;
  }

  var layers = Array.prototype.slice.call(document.querySelectorAll('.paintiq-parallax'));

  if (!layers.length) {
    return;
  }

  // Reuse the site-wide Lenis instance from smooth-scroll.js when it's
  // available, so this page doesn't run two Lenis instances at once.
  var lenis = window.essLenis;

  if (!lenis) {
    if (!window.Lenis) {
      return;
    }

    lenis = new window.Lenis({
      smoothWheel: true,
      syncTouch: false,
    });

    var raf = function (time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
  }

  var states = [];

  function measure() {
    states = layers.map(function (layer) {
      return {
        el: layer,
        speed: Number(layer.getAttribute('data-parallax-speed')) || 0,
        naturalTop: layer.getBoundingClientRect().top + window.scrollY,
        height: layer.offsetHeight,
      };
    });
  }

  function applyParallax() {
    var scrollY = window.scrollY;
    var windowHeight = window.innerHeight;

    states.forEach(function (state) {
      var elementTop = state.naturalTop - scrollY;
      var elementCenter = elementTop + state.height / 2;
      var distanceFromCenter = elementCenter - windowHeight / 2;
      var offset = Math.round(distanceFromCenter * (state.speed / 10) * -1);

      state.el.style.transform = 'translate3d(0, ' + offset + 'px, 0)';
    });
  }

  function refresh() {
    layers.forEach(function (layer) {
      layer.style.transform = 'none';
    });

    measure();
    applyParallax();
  }

  lenis.on('scroll', applyParallax);

  refresh();
  window.addEventListener('load', refresh);
})();
