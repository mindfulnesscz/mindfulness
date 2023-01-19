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
    <a href="<?php echo get_post_type_archive_link('case_solution'); ?>">
      <h1 class="ess-cut-corners">
        Case Solutions
      </h1>
      <div class="cl-both"></div>
    </a>
  </div>
</header>

<main class="ess-main no-padding">

  <section class="ess-posts-filter bg-gray-lighter p-hor-base">

    <div class="container" id="filter-holder">

      <?php
      $categories = get_categories(array(
        'orderby'   => 'name',
        'order'     => 'ASC',
        'parent'  => 0,
        'exclude'   => array('1', '11')
      ));

      foreach ($categories as $category) :


        //print_r($category);
      ?>

        <h6 class="color-gray-darker">filter by <?php echo $category->name ?></h6>
        <ul class="filter-row" row="<?php echo $category->slug ?>">
          <li class="filter-item" data-filter="all"><button class="wm-button filter-active">All</button></li>
          <?php
          $sub_cat = get_categories(array(
            'orderby'   => 'name',
            'order'     => 'ASC',
            'parent'  => $category->term_id
          ));

          foreach ($sub_cat as $sub_cat_item) :
          ?>
            <li class="filter-item" data-filter="<?php echo $sub_cat_item->slug ?>"><button class="wm-button"><?php echo $sub_cat_item->name ?></button></li><?php
                                                                                                                                                            endforeach;
                                                                                                                                                              ?>
        </ul>
      <?php
      endforeach;
      ?>
    </div>
  </section>


  <section>
    <div class="container p-hor-base">
      <div class="filtr-container row news-row">

        <?php

        while (have_posts()) : the_post();

          // Include the page content template.
          get_template_part('template-parts/content/content', 'casesolution');
        endwhile;



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