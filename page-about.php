<?php
/**
 * The template for displaying About page
 *
 * Template Name: About
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

$ess_home = get_template_directory_uri();

get_header(); ?>



<!--   MAIN  =========================================================================================================================-->



<?php 

 while ( have_posts() ) : the_post();
 
            // Include the page content template.
            get_template_part( 'template-parts/content/content', 'page' );
endwhile;

?>


<!--   TEAM  =========================================================================================================================-->

<main id="our-team">

<section class="wp-block-mindfulness-blocks-ess-section ess-section no-margin no-padding p-top-base">
	<div class="container">
			<h2 class="textalign-center">OUR TEAM:</h2>
	</div>
</section>
	<section class="">
		<div class="container">


			<?php 
					
$args  = array(
    'orderby'         => 'menu_order',
    'order'           => 'ASC',
    'post_type'       => 'team_member',
	'posts_per_page'  => 1000
 	); 

$posts = get_posts($args);

	if(!empty($posts)):
					
		$big_boss_arr 	= [];
		$peasants_arr	= [];			
								
		foreach ($posts as $post) :
					
					
		$thumb_id = get_post_thumbnail_id();
		if($thumb_id == '')
			$thumb_id = $default_image_id;
					
		
		//chech wether the team member is a big boss
		$is_big_boss = get_post_meta( $post->ID,'isbigboss', true );
		
		//gives the correct members to the appropriate array
		if($is_big_boss && $is_big_boss == 'true')		
			$big_boss_arr [] = $post;	
		else
			$peasants_arr [] = $post;
								
		endforeach;
					
// ---------------------------- BIG BOSS ARRAY ------------------------	
															
		if(!empty($big_boss_arr)):
								
		?>
			<div class="row team-row">
				<?php
					
			foreach($big_boss_arr as $big_boss_post):
					
					
			$thumb_id = get_post_thumbnail_id($big_boss_post->ID);
			if($thumb_id == '')
				$thumb_id = default_image_id();
			
			$img_src = ess_image_src( $thumb_id, array( 'small_uncropped', 'medium', 'large' ) );
					
			
				
		?>
				<div class="ess-hover-block">
					<img style="width: 100%;" src="<?php echo $img_src[0]?>" class="responsive-img" srcset="<?php echo $img_src[1] ?>" sizes="
								(min-width: 760px) calc((100vw/2.5)*<?php echo $i_ratio ?>),
								(min-width: 830px) 400px,
								calc(100vw - 20px)
							">
					<div class="ess-hover-toshow ">
						<h3><?php echo $big_boss_post->post_title ?></h3>
						<p><?php echo $big_boss_post->post_excerpt ?></p>
					</div>
				</div>




				<?php
			endforeach;
?>
			</div>
			<?php
		endif;
	endif;
					
// ---------------------------- PEASANTS ARRAY ------------------------					
			
					if(!empty($peasants_arr)):
?>

			<div class="ess-double-margin "></div>
			<div class="row team-row">
				<?php
	
						foreach($peasants_arr as $peasant):
							$thumb_id = get_post_thumbnail_id($peasant->ID);
							if($thumb_id == '')
								$thumb_id = default_image_id();
			
							$peasant_src = ess_image_src( $thumb_id, array( 'small_uncropped' ) );
					
?>

				<div class="people_person col-xs-6 col-sm-4 col-md-4 col-lg-3 ">
					<img class=" circle responsive-img " src="<?php echo $peasant_src[0]?>"
						srcset="<?php echo $peasant_src[1] ?>" sizes="
								(min-width: 760px) calc((100vw/2.5)*<?php echo $i_ratio ?>),
								(min-width: 830px) 400px,
								calc(100vw - 20px)
							">
					<h4><?php echo $peasant->post_title?></h4>
					<h5><?php echo $peasant->post_excerpt?></h5>
				</div>


				<?php
						endforeach;
					endif;
?>
				<div class="ess-double-margin"></div>
			</div>
	</section>
</main>

<div class='m-spacer-iv'></div>

<section class="bg-grey-lightest wp-block-mindfulness-blocks-ess-section ess-section no-margin no-padding p-top-base">
	<div class="container">
		<div class="justify-center center p-bot-base">
			<h2 class="has-secondary-color has-text-color">OUR SOLUTIONS:</h2>
		</div>
	</div>
</section>



<section class="no-padding bg-grey-lightest p-bot-double ">
	<div class="container">
		<div class="row p-top-double p-bot-double">
			<a href="<?php echo get_home_url(); ?>/alsim-cloud" class="p-top-double p-bot-quad col-xs-12 col-lg-4 ess-link-wrapper mf-scale-link aligncenter">
				<img style="max-width: 400px;" src="<?php echo get_template_directory_uri(); ?>/assets/images/product-logos/full_logo_cloud.svg">
				<div class='m-spacer-iv'></div>
			</a>
			<a href="<?php echo get_home_url(); ?>/alsim-platform" class="p-top-double p-bot-quad col-xs-12 col-lg-4 ess-link-wrapper mf-scale-link aligncenter">
				<img style="max-width: 400px;" src="<?php echo get_template_directory_uri(); ?>/assets/images/product-logos/full_logo_platform.svg">
				<div class='m-spacer-iv'></div>
			</a>
			<a href="<?php echo get_home_url(); ?>/alsim-services" class="p-top-double p-bot-quad col-xs-12 col-lg-4 ess-link-wrapper mf-scale-link aligncenter">
				<img style="max-width: 400px;" src="<?php echo get_template_directory_uri(); ?>/assets/images/product-logos/full_logo_services.svg">
				<div class='m-spacer-iv'></div>
			</a>
		</div>
	</div>
</section>




<!-- ========================================== CONTACT STRIP ========================================== -->

<?php 
	get_template_part( 'template-parts/content/content', 'contactstrip' );
?>


<?php get_footer();