<?php

/**
 * The template for displaying homepage
 *
 * Template Name: Home
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<header id="ess-header">
  <div id="ess-home-header">
    <div id="ess-intro" class="container">
      <div class="row start-xs middle-md">
        <div class="col col-xs-12 col-md-4 col-xs-offset-0 col-md-offset-3">
          <div class="row no-margin no-padding middle-xs">
            <div class="col-xs-12 col-md-4 no-padding no-margin" style="text-align: center;">
              <div id="scene">
                <div id="rotator">
                  <div id="cube">
                    <div id="front"></div>
                    <div id="back"></div>
                    <div id="left"></div>
                    <div id="right"></div>
                    <div id="top"></div>
                    <div id="bottom"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xs-12 col-md-8 no-padding">
              <h1 id="logo-text">ess</h1>
            </div>
          </div>
        </div>
        <div class="col col-xs-12 col-md-5">
          <h1 id="ess-header-claim">
            <span>painting the future</span><br>
            <span> of advanced</span><br>
            <span>technology</span>
          </h1>
        </div>
      </div>
    </div>
  </div>
</header>



<!--   MAIN  =========================================================================================================================-->





<?php

while (have_posts()) : the_post();

  // Include the page content template.
  get_template_part('template-parts/content/content', 'page');
endwhile;

?>


<!--   BANNER  =======================================================================================================================-->

<div class="mind-slider-holder">
  <ul id="ess-home-banner-classic" class="mind-slider">


    <li id="ess-cube-banner-its" class="slide ess-cube-banner-item" style=" padding-bottom: 2rem !important;">

      <a href="https://dynairix.com" style="padding-bottom: 0 !important;">
        <div class="top-border"></div>
        <div class="bottom-border"></div>

        <div class="banner-image-part" style="max-width: 80%; width: 400px; height: 135px;">
          <img width="400" height="130" style="max-width: 100%" src="<?php echo home_url() . '/ess-media/home-banner/dynairix/dynairix_logo_bw_400x135.svg'; ?>">
        </div>

        <div class="banner-text-part">
          <h3>Simulate together<br>for a safer World</h3>
          <div class="circle-tagline">
            <h3>check now!<br>live</h3>
          </div>
        </div>

        <div class="banner-mannequin"><img src="<?php echo home_url() . '/ess-media/home-banner/dynairix/mannequin_165x400.png'; ?>"></div>

      </a>



    </li>


  </ul>
</div>

<!--   INDUSTRIES  =========================================================================================================================-->

<section class="border-bot-light border-top-light no-padding bg-secondary">
  <div class="container">
    <div class="col-xs-12">
      <h3 class="no-margin p-bot-double p-top-double textalign-center">
        ESS Fields of Expertise:
      </h3>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/content/content', 'industries'); ?>

</div>

<?php get_footer();
