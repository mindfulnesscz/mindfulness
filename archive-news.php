<?php
/**
 * The template for displaying Archive of posts
 *
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>

<!--   ESS HEADER ============================================================================================== -->


<header id="ess-header">
	<div class="ess-tiny-header">
		<a href="<?php echo get_post_type_archive_link('news'); ?>">
			<h1 class="ess-cut-corners">
				<?php _e('News', 'mindfulness');?>
			</h1>
			<div class="cl-both"></div>
		</a>
	</div>
</header>

<main class="ess-main has-grey-lighten-5-background-color">
	<section>
		<div class="container">
			<div class="row news-row">

				<?php 

 while ( have_posts() ) : the_post();
 
			// Include the page content template.
			get_template_part( 'template-parts/content/content', 'news' );
endwhile;
			
		

?>
			</div>
		</div>
	</section>
</main>


<!-- ========================================== CONTACT STRIP ========================================== -->

<?php 
	get_template_part( 'template-parts/content/content', 'contactstrip' );
?>



<?php get_footer();?>