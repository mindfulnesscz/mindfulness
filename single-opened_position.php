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
		<a href="<?php echo get_post_permalink( ess_get_career_page_id() ); ?>">
			<h1 class="ess-cut-corners">
				CAREER
			</h1>
			<div class="cl-both"></div>
		</a>
	</div>
</header>

<!--   MAIN  =========================================================================================================================-->



<main class="ess-main career-main">

	<section>
		<div class="container single-container">

			<div class="row single-row">
				<!-- ------------ Single sidebar left  ------------------ -->
				<div class="col-xs-12 col-md-3 col-lg-2">
					<h3></h3>
				</div>

				<!-- ------------ Single sidebar MAIN  ------------------ -->
				<div class="col-single-main col-xs-12 col-md-10 col-lg-8">


					<?php 

 while ( have_posts() ) : the_post();
 
			// Include the page content template.
			get_template_part( 'template-parts/content/content', 'single' );
endwhile;

?>

				</div>

				<!-- ------------ Single sidebar right  ------------------ -->

				<div class="col-xs-12 col-md-3 col-lg-2 sidebar-right">
					<!--<h3>Other Positions:</h3>
							<?php 
								$posts = get_posts([
									'post_type' => 'opened_position',
									'post_status' => 'publish',
									'numberposts' => 5,
									'exclude'   => array(get_the_id())
								]);
								foreach($posts as $post):
									?>
										<a href="<?php echo get_permalink($post->ID); ?>"><h4><?php echo $post->post_title; ?></h4></a>
									<?php 
								endforeach;
							?>-->
				</div>
			</div>

		</div>
	</section>

	<!-- ========================================== CONTACT STRIP ========================================== -->


	<?php 
	get_template_part( 'template-parts/content/content', 'contactstrip' );
?>

	<?php get_footer();