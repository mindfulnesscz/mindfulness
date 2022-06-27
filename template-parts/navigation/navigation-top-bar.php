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

<div id="wm-top-nav">
  <a href="<?php echo home_url(); ?>">
    <div id="wm-nav-logo">
      <div class="ess-navcube-cube">
        <div class="navcube-scene">
          <div class="navcube-rotator">
            <div class="navcube">
              <div class="navcube-front"></div>
              <div class="navcube-back"></div>
              <div class="navcube-left"></div>
              <div class="navcube-right"></div>
              <div class="navcube-top"></div>
              <div class="navcube-bottom"></div>
            </div>
          </div>
        </div>
      </div>
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