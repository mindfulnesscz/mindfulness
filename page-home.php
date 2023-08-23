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

<section class="border-bot-gray border-top-light has-gray-lighten-4-background-color">
  <div class="container">
    <div class="col-xs-12">
      <h4 class="no-margin center p-vert-half m-zero regular has-gray-darken-1-color">
        ESS Fields of Expertise:
      </h4>
    </div>
  </div>
</section>

<?php get_template_part('template-parts/content/content', 'industries'); ?>

</div>

<?php get_footer();
