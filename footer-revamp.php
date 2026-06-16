<?php

/**
 * Revamp footer.
 *
 * Duplicated from the default theme footer so revamp templates can use a
 * custom footer shell without changing legacy pages.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */
?>

<?php get_template_part('template-parts/revamp/site-footer'); ?>

</div><!-- ess-main-container -->

<div id="ess-modal-holder" style="display: none">
  <div id="ess-modal-background"></div>
  <div class="ess-modal" id="ess-subscribe-modal">
    <?php dynamic_sidebar('footer_contact'); ?>
  </div>
</div>

<?php wp_footer(); ?>

<?php
wm_print_console();
?>

<script type="text/javascript">
  function initApollo() {
    var n = Math.random().toString(36).substring(7),
      o = document.createElement("script");
    o.src = "https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache=" + n,
      o.async = !0,
      o.defer = !0,
      o.onload = function() {
        window.trackingFunctions.onLoad({
          appId: "67b32cae76109e00150ae42e"
        })
      },
      document.head.appendChild(o)
  }
  initApollo();
</script>

</body>

</html>
