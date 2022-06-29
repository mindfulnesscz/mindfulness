<?php

/**
 * Displays top navigation
 *
 * @package WordPress
 * @subpackage Mindfulness
 * @since 1.0
 * @version 1.0
 */

?>

<?php

// DESKTOP BIG SCREEN NAV
// =======================================================

?>

<div id="wm-top-nav">
  <a href="<?php echo home_url(); ?>">
    <div id="wm-nav-logo">
      <img src="<?php echo get_template_directory_uri() . '/assets/images/ess_logo.svg';  ?>" />
    </div>
  </a>

  <ul id="wm-nav-list">
    <li><a class="wm-cube-menu-link" data-target="bottom" class="active">ESS</a></li>
    <li><a class="wm-cube-menu-link" data-target="right">Industries</a></li>
    <li><a class="wm-cube-menu-link" data-target="back">Solutions</a></li>
    <li><a class="wm-cube-menu-link" data-target="left">Case Solutions</a></li>
    <li><a class="wm-cube-menu-link" data-target="front">Contact</a></li>
  </ul>

  <div id="wm-nav-settings">

  </div>
</div>


<?php

// DEVICE SMALL SCREEN NAV
// =======================================================
// Here the content will be injected via React wm-small-nav is the container. Let's be a bit modern here.
?>

<div id="wm-device-nav">

</div>