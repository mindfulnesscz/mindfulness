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
                <div class="container">
                    <div class="row row-container force-margin">
                        <div class="col-xs-12 col-lg-9">
                            <h1>
                                NEWS
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </header>

		<main id="ess-main" class="has-grey-lighten-5-background-color">
			<section>
				<div class="container">
                    <div class="row news-row">

<?php 

 while ( have_posts() ) : the_post();
 
            // Include the page content template.
            get_template_part( 'template-parts/content/content', 'archive' );
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