<?php

/**
 * The template for displaying About page
 *
 * Template Name: Contact Page
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>



<?php




while (have_posts()) : the_post();
  // Include the page content template.
  get_template_part('template-parts/content/content', 'page');
endwhile;

?>

<!-- ========================================== CONTACT FORM AND MAP ========================================== -->


<section class="" style="background-color: #f4f4f4">
  <h2 class="center-align p-bot-base">Arrange a meeting:</h2>
  <div id="microsoft-booking-iframe-holder" style=" overflow: hidden;">
    <iframe id="microsoft-booking-iframe" style="top: -240px; margin-bottom: -280px; width: 100%; border:0; height: 2100px; position: relative;  z-index: 0;" src="https://outlook.office365.com/owa/calendar/ESSEngineeringSoftwareSteyrGmbH@essteyr.com/bookings/" framborder="0">
    </iframe>
  </div>
</section>


<section class="no-padding bg-grey-lightest">

  <iframe id="ess-main-map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21341.305078203077!2d14.4066302!3d48.0395326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773c58d19fcd59b%3A0x5728351a7987830e!2sESS+Engineering+Software+Steyr+GmbH!5e0!3m2!1sen!2sat!4v1558684074566!5m2!1sen!2sat" style="border: 0px none; pointer-events: all;" allowfullscreen="" frameborder="0"></iframe>

</section>




<!-- ========================================== CONTACT STRIP ========================================== -->


<section class="dark-block">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 p-top-quad p-bot-quad">
        <h2>We are thrilled to meet You at our office</h2>
        <div class="show-on-mid-and-higher">
          <h4>Want to examine some more?<br>Just hit the cube:</h4>
          <div class="ess-navcube-cube" id="bottom-cube">
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
      </div>
    </div>
  </div>
</section>





<?php get_footer(); ?>