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

get_header();

$thumb_id = get_post_thumbnail_id();
if ($thumb_id == '')
  $thumb_id = default_image_id();

$small = wp_get_attachment_image_src($thumb_id, 'small_uncropped');
$medium = wp_get_attachment_image_src($thumb_id, 'medium');
$large = wp_get_attachment_image_src($thumb_id, 'large');


?>



<!--   ESS HEADER  =========================================================================================================================-->

<header id="ess-header" class="basic bg-secondary">
  <div class="ess-keypage-header">
    <div class="container">
      <div class="row row-container force-margin just-center">
        <div class="col-xs-12 no-padding">
          <img src="
                                    <?php echo $small[0] ?>" srcset="
                                    <?php echo $small[0] . ' 400w'; ?>
                                    <?php echo (($medium[0] != '') ? ', ' . $medium[0] . ' 600w' : ''); ?>
                                    <?php echo ($large[0] != '' ? ', ' . $large[0] . ' 900w' : ''); ?>
                                    " sizes="
                                    calc(100vw - 20px),
                                    (min-width: 1200px) 83vw,  
                                    (min-width: 1440px) 1200px" class="single-thumbnail">
        </div>
      </div>

    </div>
  </div>

</header>

<!--   MAIN  =========================================================================================================================-->



<main class="ess-main p-top-zero">

  <!--   sidebar contact toggler  ------------------------------ -->


  <section>
    <div class="container">

      <div class="row just-center">
        <!-- ------------ Single sidebar left  ------------------ -->
        <div class="col-xs-12 col-md-6 col-lg-2">
          <h3></h3>
        </div>

        <!-- ------------ Single sidebar MAIN  ------------------ -->
        <div class="col-single-main col-xs-12 col-md-8 col-lg-8">

          <?php

          while (have_posts()) : the_post();

            // Include the page content template.
            get_template_part('template-parts/content/content', 'single-case-solution');
          endwhile;

          ?>

        </div>

        <!-- ------------ Single sidebar right  ------------------ -->
        <div class="col-xs-12 col-md-6 col-lg-2">
          <h3></h3>
        </div>
      </div>

    </div>
  </section>

  <?php
  get_template_part('template-parts/content/content', 'contactstrip');
  ?>

  <?php get_footer();
