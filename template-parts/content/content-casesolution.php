<?php
/**
 * Template part for displaying page content in page.php
 *
 * @package WordPress
 * @subpackage Mindfulness
 * @since 1.0.0
 */


			$thumb_id = get_post_thumbnail_id();
			if($thumb_id == '')
				$thumb_id = default_image_id();
			$tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
			$small = wp_get_attachment_image_src($thumb_id, 'thumbnail');
			

			$cats = get_the_category();
			$cats_string = "";
			
			$n = sizeof($cats);
				
			for($i=0; $i<$n; $i++){
				$cats_string .= " " .$cats[$i]->slug ;
			}

			

?>

<div class="filtr-item news-col col-xs-12 col-sm-6 col-md-4 col-lg-3<?php echo $cats_string ?>">

	<?php  ?>


	<a class="image-link" href="<?php the_permalink(); ?>">

		<img src="<?php echo $small ?>" class="thumb-image responsive-img" srcset="
                                                			<?php echo $tiny[0]?> 150w,
                                                			<?php echo $small[0]?> 400w" sizes="
															calc(100vw/3 - 20px),
															(min-width: 461px) calc((100vw/6) - 3*10px),
															(min-width: 760px) calc((100vw/4) - 5*10px),
															(min-width: 1200px) calc((100vw/4) - 5*12px),  
                                                			(min-width: 1440px) calc((1440px/4) - 5*15px)
                                            ">

	</a>



<h4><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
	<p><?php the_excerpt(); ?>
	</p>

</div>