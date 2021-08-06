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

<header id="ess-header">
	<div class="ess-tiny-header">
		<a href="<?php echo get_post_type_archive_link('news'); ?>">
			<h1 class="ess-cut-corners">
				News
			</h1>
			<div class="cl-both"></div>
		</a>
	</div>
</header>

<!--   MAIN  =========================================================================================================================-->



<main class="ess-main">

	<section>
		<div class="container">

			<div class="row">
				<!-- ------------ Single sidebar left  ------------------ -->
				<div class="col-xs-12 col-md-3 col-lg-2">
					<h3></h3>
				</div>

				<!-- ------------ Single sidebar MAIN  ------------------ -->
				<div class="col-single-main col-xs-12 col-md-6 col-lg-8">

					<?php 

 while ( have_posts() ) : the_post();
 
			// Include the page content template.
			get_template_part( 'template-parts/content/content', 'single' );
endwhile;

?>

				</div>

				<!-- ------------ Single sidebar right  ------------------ -->
				<div class="col-xs-12 col-md-3 col-lg-2">
					<h3></h3>
				</div>
			</div>

		</div>
	</section>
	</div><!-- /.ess-main -->
	<!-- ========================================== CONTACT STRIP ========================================== -->


	<?php 
	get_template_part( 'template-parts/content/content', 'contactstrip' );
?>


	</div>

	<?php get_footer();