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
<?php /*
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
*/ ?>

<!--   MAIN  =========================================================================================================================-->


<?php

while (have_posts()) : the_post();
	// Include the page content template.
	get_template_part('template-parts/content/content', 'single');
endwhile;

?>



<!-- ========================================== CONTACT STRIP ========================================== -->

<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>


<?php get_footer();
