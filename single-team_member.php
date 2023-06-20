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

        <header id="ess-header halfsize ">
            <div class="ess-keypage-header member-background">
                <div class="container">
                    <div class="row">

                        <div class="col-xs-12 col-md-6 last-md p-hor-double">
                            <?php the_post_thumbnail(); ?>
                        </div>

                        <div class="col-xs-12 col-md-6">
                            <h1 class="ess-cut-corners"><?php the_title(); ?> </h1>
                            <ul>
                                <li><?php  echo get_field('email');?></li>
                                <li><?php  echo get_field('phone');?></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </header>

        <!--   MAIN  =========================================================================================================================-->



        <main class="ess-main">

            <section>
                <div class="container">

                    <div class="row">
                        <!-- ------------ Single sidebar left  ------------------ -->
                        <div class="col-xs-12 col-md-3 col-lg-3">
                            <h3></h3>
                        </div>

                        <!-- ------------ Single sidebar MAIN  ------------------ -->
                        <div class="col-single-main col-xs-12 col-md-6 col-lg-6">
						

<?php 

 while ( have_posts() ) : the_post();
 
            // Include the page content template.
            get_template_part( 'template-parts/content/content', 'single' );
endwhile;

?>

							</div>

                        <!-- ------------ Single sidebar right  ------------------ -->
                        <div class="col-xs-12 col-md-3 col-lg-3">
                            <h3></h3>
                        </div>
                    </div>

                </div>
            </section>

<!-- ========================================== CONTACT STRIP ========================================== -->


<?php 
	get_template_part( 'template-parts/content/content', 'contactstrip' );
?>
		
<?php get_footer();
