<?php

/**
 * The template for Industry Pages
 *
 * Template Name: Industry
 * The shortened version of the templated. Full featured template is called industry-full
 * and can be loaded from page-industry-full.php
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */


//  ------------------------- HEADER

get_header();







//  ------------------------- DISPLAY CONTENT


$page_id = null;

while (have_posts()) : the_post();

  get_template_part('template-parts/content/content', 'page');

endwhile;







//  ------------------------- DISPLAY CONTACT STRIP

get_template_part('template-parts/content/content', 'contactstrip');







//  ------------------------- DISPLAY FOOTER

get_footer();
