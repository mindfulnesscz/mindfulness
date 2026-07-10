(function () {
  if (!window.Lenis) {
    return;
  }

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var lenis = new window.Lenis({
    smoothWheel: true,
    syncTouch: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  // Lenis only recalculates its scroll limit on a resize event. Content
  // that grows after that (lazy-loaded images, late web fonts, etc.)
  // without a real window resize leaves the limit stale, so scrolling
  // stops short of the true document end. Watch the document height
  // directly and nudge Lenis to re-measure whenever it changes.
  if (window.ResizeObserver) {
    var resizeObserver = new window.ResizeObserver(function () {
      lenis.resize();
    });

    resizeObserver.observe(document.body);
  }

  window.essLenis = lenis;
})();
