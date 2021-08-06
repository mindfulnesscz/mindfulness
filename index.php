<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.01
 */

get_header(); ?>

<!--   ESS HEADER ============================================================================================== -->


		<header id="ess-header">
            <div class="ess-tiny-header">
                <div class="container">
                    <div class="row row-container force-margin">
                        <div class="col-xs-12 col-lg-9">
                            <h1>
                                NEWS - generic page
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </header>

		<main class="ess-main has-grey-lighten-5-background-color">
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


			<section class="dark-block">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2>GOT YOU INTERESTED?</h2>
                            <button id="ess-contact-sales-button" class="ess-button ess-lg-button outlined">
                                CONTACT SALES
                            </button>
                            <p><a href="#">or see our pricing list</a></p>
                        </div>
                    </div>
                </div>
            </section>   



<?php get_footer();?>
