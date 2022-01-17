<?php

/**
 * The template for Product Pages
 *
 * Template Name: Product
 * The shortened version of the template. Full featured template is called product-full
 * and can be loaded from page-product-full.php
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
<!-- ========================================== CONTACT STRIP ========================================== -->


<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>



<?php get_footer(); ?>