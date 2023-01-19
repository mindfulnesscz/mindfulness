<?php

/**
 * The template for displaying Download Section
 *
 * Template Name: Download Section
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>


<header id="ess-header">
  <div class="ess-tiny-header">
    <div class="container">
      <div class="row row-container force-margin">
        <div class="col-xs-12 col-lg-9">
          <h1>
            <?php the_title() ?>
          </h1>
        </div>
      </div>

    </div>
  </div>
</header>
<main class="ess-main">

  <?php

  /*


 while ( have_posts() ) : the_post();
 
            // Include the page content template.
            get_template_part( 'template-parts/content/content', 'page' );
endwhile;
*/

  ?>


  <!-- ========================================== DOWNLOAD AREA ========================================== -->
  <section class="ess-posts-filter bg-gray-light-iii">

    <div class="container" id="filter-holder">


      <?php


      $slugs_array = []; // array of all downloadable second level slugs

      $download_term = get_terms(array(
        'taxonomy' => 'nt_wmc_folder',
        'slug' => 'downloadable',
        'hide_empty' => false
      ));

      $d_t_firstlevels = get_terms(array(
        'taxonomy' => 'nt_wmc_folder',
        'parent' => $download_term[0]->term_id,
        'hide_empty' => false
      ));

      foreach ($d_t_firstlevels as $firstlevel_term) :
      ?>
        <h6 class="color-gray-darker">filter by <?php echo $firstlevel_term->name ?></h6>
        <ul class="filter-row" row="<?php echo $firstlevel_term->slug ?>">
          <li class="filter-item" data-filter="all"><button class="wm-button filter-active">All</button></li>

          <?php
          $d_t_secondlevels = get_terms(array(
            'taxonomy' => 'nt_wmc_folder',
            'parent' => $firstlevel_term->term_id,
            'hide_empty' => false
          ));
          foreach ($d_t_secondlevels as $secondlevel_term) :

            $slugs_array[] = $secondlevel_term->slug;
          ?>
            <li class="filter-item" data-filter="<?php echo $secondlevel_term->slug ?>"><button class="wm-button"><?php echo $secondlevel_term->name ?></button></li>
          <?php
          endforeach;
          ?>

        </ul>
      <?php
      endforeach;
      ?>
    </div>
  </section>

  <section class="p-top-quad p-bot-quad" style="min-height: 600px;">
    <div id="download-container" class="container">
      <div class="filtr-container row news-row">

        <?php
        $posts_array = get_posts(
          array(
            'showposts' => 1000,
            'post_type' => 'attachment',
            'tax_query' => array(
              array(
                'taxonomy' => 'nt_wmc_folder',
                'field' => term_id,
                'terms' => $slugs_array,
              )
            )
          )
        );


        if (!empty($posts_array)) :
          foreach ($posts_array as $post) :
            $trm_string = '';
            $trms = wp_get_post_terms($post->ID, 'nt_wmc_folder');

            foreach ($trms as $trm) {
              $trm_string .= $trm->slug . ' ';
            }
        ?>
            <div class="<?php echo $trm_string; ?>col-download-area force-margin p-all-quarter">
              <a href="<?php echo wp_get_attachment_url($post->ID); ?>" class="icon-headline medium-icon download-link-block bg-white">
                <span class="ess-icon icon_download"></span>
                <?php echo $post->post_title; ?>

              </a>
            </div>
          <?php
          endforeach;
        else : // case there is no attachments
          ?>

          <h4>there is no content available</h4>

        <?php
        endif;
        ?>
      </div>
    </div>
  </section>


  <!-- ========================================== CONTACT STRIP ========================================== -->


  <?php
  get_template_part('template-parts/content/content', 'contactstrip');
  ?>



  <?php get_footer(); ?>