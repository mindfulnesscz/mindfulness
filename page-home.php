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
