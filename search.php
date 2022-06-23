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

get_header();

$search_result = '';

if (isset($_GET['s'])) {
  $search_result = filter_input(INPUT_GET, 's', FILTER_SANITIZE_SPECIAL_CHARS);
  //$search_result = filter_input(INPUT_GET, 's', FILTER_SANITIZE_ENCODED);
}
?>

<!--   ESS HEADER ============================================================================================== -->


<header id="ess-header" class="halfsize bg-blue-gradient">
  <div class="ess-keypage-header">
    <div class="container">
      <div class="row row-container force-margin">
        <div class="col-xs-12 col-lg-9">
          <h4 class="color-white no-padding">Search Results for:</h4>
          <h1 class="color-white biggest-text">
            <?php echo $search_result ?>
          </h1>
        </div>
      </div>

    </div>
  </div>
</header>

<main class="ess-main has-gray-lighten-5-background-color">
  <section>
    <div class="container">
      <div class="row news-row">

        <?php
        if (have_posts()) :
          while (have_posts()) : the_post();

            // Include the page content template.
            get_template_part('template-parts/content/content', 'archive');


          endwhile;
        else :

        ?>

          <div class="col-xs-12" style="padding: 10rem 0;">
            <h2 class="aligncenter">Unfotunately, we have currently no clue on what You're looking for.<br> Please try to change Your key words</h2>

            <form style="text-align: center;" role="search" method="get" id="searchform-big" action="<?php echo home_url('/'); ?>">
              <div class="border-outset">
                <input type="text" style="padding: 1rem 0" class="ess-input big-text aligncenter color-gray-darker" value="Enter Keyword" name="s" id="s" />
              </div>
              <input class="ess-button big-button ess-submit" type="submit" id="searchsubmit" value="Search" />
            </form>
          </div>

        <?php

        endif;


        ?>
      </div>
    </div>
  </section>
</main>


<!-- ========================================== CONTACT STRIP ========================================== -->


<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>



<?php get_footer(); ?>