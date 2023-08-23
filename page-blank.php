<?php

/**
 * The template for Custom build Pages
 *
 * Template Name: Blank Page
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

</main>



<?php get_footer(); ?>