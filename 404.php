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
 * @version 1.0
 */

get_header(); ?>

<!--   ESS HEADER ============================================================================================== -->


		<header id="ess-header">
            <div class="ess-tiny-header">
                <div class="container">
                    <div class="row row-container force-margin">
                        <div class="col-xs-12 col-lg-9">
                            <h1 class="ess-cut-corners">
                                404 - oops
                            </h1>
                        </div>
                    </div>

                </div>
            </div>
        </header>

<!--   ESS MAIN ============================================================================================== -->

        <main class="ess-main">
            <section>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h1 class="aligncenter color-primary" style="font-size: 25vw !important;">404</h1>
                        </div>
                        
                    </div>
                </div>
            </section>
            <section class="bg-grey-lighter">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12" style="padding: 4rem 0 10rem 0;">
                            <h2 class="aligncenter">Maybe try the search engine</h2>
                        
                            <form style="text-align: center;" role="search" method="get" id="searchform-big" action="<?php echo home_url( '/' ); ?>">
                                    <div class="border-outset">
                                    <input type="text" style="padding: 1rem 0" class="ess-input big-text aligncenter color-grey-darker" value="Enter Keyword" name="s" id="s" />
                                    </div>
                                    <input class="ess-button big-button ess-submit" type="submit" id="searchsubmit" value="Search" />
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>

	
 <!-- ========================================== CONTACT STRIP ========================================== -->


            <section class="dark-block">
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12">
                            <h2>HAVE A SPECIAL REQUEST?</h2>
                            <button id="ess-contact-sales-button" class="ess-button ess-lg-button outlined">
                                CONTACT US
                            </button>
                            <p><a href="#">or see our pricing list</a></p>
                        </div>
                    </div>
                </div>
            </section>   



<?php get_footer();?>
