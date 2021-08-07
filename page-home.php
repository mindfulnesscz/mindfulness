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
<section>
  <div class="row main-block">
    <div class="col-xs-12 align-center">
      <a href="<?php echo get_home_url() . '/about-us' ?>" class="ess-lg-button ess-hover-shadow">read more about
        us</a>
    </div>
  </div>
</section>


<!--   BANNER  =======================================================================================================================-->

<div class="container" id="homepage-banner">
  <div class="row just-center">
    <div class="col-xs-12 col-lg-10 no-padding no-margin">
      <div class="mind-slider-holder">
        <ul id="ess-home-banner-classic" class="mind-slider">
          <li id="ess-cube-banner-its" class="slide ess-cube-banner-item" style="background: #e8e9ee; padding-bottom: 0 !important;">
            <a href="<?php echo home_url() . '/vishal'; ?>" style="padding-bottom: 0 !important;">
              <div class="banner-image-part" style="max-width: 100%">
                <img src="<?php echo home_url() . '/ess-media/home-banner/210808_vishal/vishal.jpg'; ?>">
              </div>
              <div class="banner-text-part" style="background-color: #333; color: white; padding: 2rem 0 !important">
                <h3 style="color: white">Thank You<br>Vishal Nair<br>1984 - 2021</h3>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
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
