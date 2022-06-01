<?php

/**
 * The template for displaying signle news post
 *
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<!--   ESS HEADER  =========================================================================================================================-->




<!--   MAIN  =========================================================================================================================-->



<?php

while (have_posts()) : the_post();
  // Include the page content template.
  get_template_part('template-parts/content/content', 'single-opened_position');
endwhile;

?>



<!-- ========================================== CONTACT STRIP ========================================== -->


<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>

<?php get_footer();
