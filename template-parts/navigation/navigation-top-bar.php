<?php

/**
 * Containers for React menu bar. One for mobile devices and one for desktop.
 * Source javascripts for each are in /assets/js/nav/desktop.js and /assets/js/nav/devices.js
 *
 * @since 3.0
 */


// DEVICE SMALL SCREEN NAV
// =======================================================
// Here the navigation bar with Hamburger menu and submenus is rendered with React.
// 
?>

<div id="wmnav-bar">
  <div id="wmnav-logo">
    <a href="<?php echo (get_home_url()); ?>">
      <image width="120" height="40" alt="ESS" loading="lazy" src="<?php echo get_template_directory_uri(); ?>/assets/images/ess_logo.svg" />
    </a>
  </div>

  <div id="wm-nav-cont">
    <?php
    // Here renders nav react menus for mobile and for devices
    ?>
  </div>
</div>