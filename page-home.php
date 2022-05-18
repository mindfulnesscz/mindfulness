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
      <div class="row start-xs middle-lg">
        <div class="col col-xs-12 col-lg-4 col-xs-offset-0 col-lg-offset-3">
          <div class="row no-margin no-padding lg-xs">
            <div class="col-xs-12 col-lg-4 no-padding no-margin text-center">
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
            <div class="col-xs-12 col-lg-8 no-padding">
              <h1 id="logo-text">ess</h1>
            </div>
          </div>
        </div>
        <div class="col col-xs-12 col-lg-5">
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





<!--   BANNER  =======================================================================================================================-->

<?php

get_template_part('template-parts/navigation/navigation', 'mobile-banner');

?>



<!--   MAIN  =========================================================================================================================-->





<?php

while (have_posts()) : the_post();

  // Include the page content template.
  get_template_part('template-parts/content/content', 'page');

endwhile;

?>


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
