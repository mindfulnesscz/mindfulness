<?php
/**
 * The template for displaying archive pages
 *
 * Template Name: Contact
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Mindbootstrap
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<div class="row ">
	<div id="primary" class="col-12 col-md-8">
		<main id="main" class="site-main" role="main">

								<?php
			while ( have_posts() ) : the_post();

				get_template_part( 'template-parts/page/content', 'contact' );

			endwhile; // End of the loop.
			?>	
				
		</main><!-- #main -->
	</div><!-- #primary -->

	<div class="col-12 col-md-4 pl-md-3">
		<div class="row">
	<?php get_sidebar(); ?>
	<?php get_sidebar('post')?>
		</div>
	</div>	
</div>

<?php get_footer();
