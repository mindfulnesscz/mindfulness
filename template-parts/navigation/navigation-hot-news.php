<?php

/**
 * Displays The hot news banner
 * @since 3.0.1
 * @version 1.0

 */
?>

<div id="hot-news-wrapper" style="position:relative; overflow:hidden; background:#4d4d4d;">

  <a class="hot-news-item" style="color:white; text-decoration:none; display:block; background:#4d4d4d; position:absolute; top:0; left:0; width:100%;" href="https://www.essteyr.com/digital-intelligence-webinars-series/">
    <div id="hot-news">
      <div class="row max-w-1200 m-auto">
        <div class="col-xs-12 center">
          🔥 <b></b>Next Webinar: TU 2.6. 10 am | AnodeIQ !
        </div>
      </div>
    </div>
  </a>

  <a class="hot-news-item" style="color:white; text-decoration:none; display:block; background:#4d4d4d; position:absolute; top:0; left:0; width:100%;" href="https://www.essteyr.com/career-opportunities/automation-engineer-copy/">
    <div id="hot-news">
      <div class="row max-w-1200 m-auto">
        <div class="col-xs-12 center">
          🔥 <b>Hot News:</b> Hiring in India: PaintIQ Application Engineer
        </div>
      </div>
    </div>
  </a>

</div>

<script>
  (function() {
    var wrapper = document.getElementById('hot-news-wrapper');
    var items = document.querySelectorAll('.hot-news-item');
    var current = 0;
    var dur = 700;

    function syncHeight() {
      wrapper.style.height = items[current].offsetHeight + 'px';
    }

    // Initial height + hide second item
    syncHeight();
    items[1].style.top = -items[1].offsetHeight + 'px';

    // Update height on resize (debounced)
    var resizeTimer;
    window.addEventListener('resize', function() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(syncHeight, 50);
    });

    setInterval(function() {
      var h = wrapper.offsetHeight; // snapshot px height — consistent for this entire transition
      var next = (current + 1) % items.length;
      var outgoing = items[current];
      var incoming = items[next];

      // Pin incoming just above the wrapper (px, not %) so it lines up exactly
      incoming.style.transition = 'none';
      incoming.style.top = -h + 'px';
      void incoming.offsetHeight; // flush so the snap takes before transition starts

      outgoing.style.transition = 'top ' + dur + 'ms cubic-bezier(0.25,0.46,0.45,0.94)';
      outgoing.style.top = h + 'px';

      incoming.style.transition = 'top ' + dur + 'ms cubic-bezier(0.25,0.46,0.45,0.94)';
      incoming.style.top = '0';

      current = next;

      setTimeout(function() {
        outgoing.style.transition = 'none';
        outgoing.style.top = -items[current].offsetHeight + 'px'; // reset above new current
        syncHeight(); // update wrapper height now the new banner has settled
      }, dur);

    }, 5000);
  }());
</script>