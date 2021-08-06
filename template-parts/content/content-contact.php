<?php
/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Mindbootstrap
 * @since 1.0
 * @version 1.0
 */

?>
			

			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				<header class="entry-header">
	
					<?php if ( '' !== get_the_post_thumbnail() && ! is_single() ) : ?>
					<div class="post-thumbnail pb-3 rounded" style="height: 300px; overfow: hidden;">
						<?php 
							$thumb_id = get_post_thumbnail_id(get_the_ID()); 
							$thumb_attr = wp_get_attachment_image_src($thumb_id);
						?>
						<img sizes="(max-width: 960px) 100vw, 730px" srcset="<?php echo esc_attr(wp_get_attachment_image_srcset($thumb_id));  ?>" src="<?php echo $thumb_attr[0]; ?>" alt="<?php $post->post_title;?>">				
					</div><!-- .post-thumbnail -->
					<?php endif; ?>
					<?php
						the_title( '					<h2 class="entry-title">', '</h2>' );
					?>
				</header><!-- .entry-header -->

				<div class="row rounded align-items-center bg-light" style="box-shadow: 0 0 5px #ccc;">
					<div class="col-md-6 text-center ">
						<div class="entry-content s pb-5 pt-5">
						<?php 
								the_content( sprintf(
			__( 'Continue reading<span class="screen-reader-text"> "%s"</span>', 'mindbootstrap' ),
			get_the_title()
		) );

		wp_link_pages( array(
			'before'      => '<div class="page-links">' . __( 'Pages:', 'twentyseventeen' ),
			'after'       => '</div>',
			'link_before' => '<span class="page-number">',
			'link_after'  => '</span>',
		) );
?>							
						</div><!-- .entry-content -->
					</div><!-- .col -->
					<div class="col-md-6">
						<iframe 
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2607.2082085185607!2d16.609957383045145!3d49.196609678679906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4712945a02765b51%3A0x8fd993542b3a39ef!2sFreeland!5e0!3m2!1sen!2scz!4v1508832757320" 
							width="100%" height="300" frameborder="0" style="border:0" allowfullscreen
						></iframe>
					</div><!-- .col -->
				</div><!-- .row -->	
				<h2 class="mt-3">napište nám:</h2>
			<?php echo do_shortcode( '[mind-contact-form user_id="1" type="normal"]' );?>

	<?php
	if ( is_single() ) {
		//twentyseventeen_entry_footer();
	}
	?>

</article><!-- #post-## -->
