<?php
/**
 * The template for Product Pages
 *
 * Template Name: Product
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>



<?php 




 while ( have_posts() ) : the_post();
 
            // Include the page content template.
            get_template_part( 'template-parts/content/content', 'page' );
endwhile;


$cats_ids = array();
$cats = get_the_category();
foreach($cats as $value){
	foreach ($value as $key=>$item):
		if($key == 'term_id'):
			//echo '<h2>'.$item.'</h2><br>';
			array_push($cats_ids, $item);
		endif;
	endforeach;
}
$args  = array(
	'numberposts'      => 3,
    'category'        => $cats_ids,
    'orderby'         => 'post_date',
    'order'           => 'ASC',
    'post_type'       => 'case_solution',
    'post_status'     => 'publish'
 	); 

$posts = get_posts($args);

?>


<!-- ========================================== USE CASES ========================================== -->

<?php

	if(!empty($posts)): ?>
<section class=" no-padding">
	<div class="container">

			<h3 class="textalign-center p-bot-base p-top-base">
				See our Use Cases for <?php echo get_the_title(); ?>
			</h3>
	</div>
</section>
<section>
	<div class="container main-block">
		<div class="row no-margin ">
			<div class="col-xs-12">

				<div class="row news-row not-archive just-center">
					<?php



	
								
		foreach ($posts as $post) : 
								
			$thumb_id = get_post_thumbnail_id();
			if($thumb_id == '')
				$thumb_id = $default_image_id;
								
			$tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
			$small = wp_get_attachment_image_src($thumb_id, 'thumbnail');
							?>
					<div class="news-col col-xs-12 col-md-4 col-lg-4">
						<div class="row no-margin">
							<div class="news-col-image col-xs-4 col-md-12">
								<div>
									<a href="<?php the_permalink();?>">
										<img src="<?php echo get_the_post_thumbnail_url();?>"
											class="thumb-image responsive-img" srcset="
                                                			<?php echo $tiny[0]?> 150w,
                                                			<?php echo $small[0]?> 400w" sizes="
															calc(100vw/3 - 20px),
															(min-width: 461px) calc((100vw/2/3) - 4*10px),
															(min-width: 760px) calc((100vw/4) - 5*10px),
                                                			(min-width: 1440px) calc((1440px/4) - 5*15px)
		
                                            		">
									</a>
								</div>
							</div>
							<div class="news-col-text col-xs-8 col-md-12">
								<h3><a href="<?php the_permalink();?>"><?php echo the_title(); ?></a></h3>
								<?php the_excerpt(); ?>
							</div>
						</div>
					</div>
					<?php endforeach; 
	endif; ?>
					<div class="col-xs-12 see-more-link">

						<a href="<?php echo get_post_type_archive_link( 'case_solution');?>"
							class="p-top-base p-bot-base no-decoration has-text-align-right icon-headline medium-icon just-center">
							<span class="color-primary ess-icon icon_circle_arrow_right"></span>
							<h4 class="color-secondary  ">See More Use Cases</h4>
						</a>

					</div>

				</div>
			</div>

			<!-- ========================================== DOWNLOAD AREA ========================================== -->
		</div>
	</div>
	<!-- <div class="container-main-block">
		<div class="row just-center">
			<div class="col-xs-12 col-sm-8 col-md-6 col-lg-4">
				<a href="<?php echo home_url().'/download-area' ;?>" class="deposit-link-block">
					<span class="claim p-top-base p-bot-base">Check The Download Area</span>
				</a>
			</div>
		</div>
	</div> -->
</section>

<!-- ========================================== INDUSTRIES ========================================== -->


<!-- ========================================== CONTACT STRIP ========================================== -->


<?php 
	get_template_part( 'template-parts/content/content', 'contactstrip' );
?>



<?php get_footer();?>