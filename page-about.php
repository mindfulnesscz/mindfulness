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

while (have_posts()) : the_post();

  // Include the page content template.
  get_template_part('template-parts/content/content', 'page');
endwhile;

?>


<!--   TEAM  =========================================================================================================================-->

<main id="our-team" class="p-top-double">

  <section class="wp-block-mindfulness-blocks-ess-section ess-section no-margin no-padding p-top-base">
    <div class="container">
      <h3 class="subsection-headline center">OUR TEAM:</h3>
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

      if (!empty($posts)) :

        $big_boss_arr   = [];
        $peasants_arr  = [];

        foreach ($posts as $post) :


          $thumb_id = get_post_thumbnail_id();
          if ($thumb_id == '')
            $thumb_id = $default_image_id;


          //chech wether the team member is a big boss
          $is_big_boss = get_post_meta($post->ID, 'isbigboss', true);

          //gives the correct members to the appropriate array
          if ($is_big_boss && $is_big_boss == 'true')
            $big_boss_arr[] = $post;
          else
            $peasants_arr[] = $post;

        endforeach;

        // ---------------------------- PEASANTS ARRAY ------------------------					

        if (!empty($peasants_arr)) :
      ?>

          <div class="ess-double-margin "></div>
          <div class="row team-row p-hor-zer md-p-hor-base lg-p-hor-okta">
            <?php

            $tm_count = 0;

            foreach ($peasants_arr as $peasant) :

              $tm_count++;

              $thumb_id = get_post_thumbnail_id($peasant->ID);
              if ($thumb_id == '')
                $thumb_id = default_image_id();

              $peasant_src = ess_image_src($thumb_id, array('small_uncropped'));

            ?>

              <div class="people_person col-xs-6 col-md-4 m-bot-base">
                <img class=" circle responsive-img " src="<?php echo $peasant_src[0] ?>" srcset="<?php echo $peasant_src[1] ?>" sizes="
                (min-width: 760px) calc((100vw/2.5)*<?php echo $i_ratio ?>),
                (min-width: 830px) 400px,
                calc(100vw - 20px)
              ">
                <h4 class="m-top-base m-bot-zero p-bot-half"><?php echo $peasant->post_title ?></h4>
                <h5 class="m-top-zero p-top-zero"><?php echo $peasant->post_excerpt ?></h5>
              </div>
          <?php
            endforeach;
          endif;
          ?>
          </div>
  </section>



  <?php

        // ---------------------------- BIG BOSS ARRAY ------------------------	
        if (!empty($big_boss_arr)) :

  ?>

    <section class="has-gray-lighten-4-background-color">

      <div class="container">
        <h4 class="subsection-headline center">Advisery Board</h3>
      </div>

      <div class="row team-row p-hor-zer md-p-hor-base lg-p-hor-okta">
        <?php

          foreach ($big_boss_arr as $big_boss_post) :


            $thumb_id = get_post_thumbnail_id($big_boss_post->ID);
            if ($thumb_id == '')
              $thumb_id = default_image_id();

            $img_src = ess_image_src($thumb_id, array('small_uncropped', 'medium', 'large'));



        ?>
          <div class="row advisory-member m-vert-double">
            <div class="col-md-4 p-hor-quad items-center">
              <img style="width: 100%;" src="<?php echo $img_src[0] ?>" class="responsive-img rounded-full" srcset="<?php echo $img_src[1] ?>" sizes="
        (min-width: 760px) calc((100vw/2.5)*<?php echo $i_ratio ?>),
        (min-width: 830px) 400px,
        calc(100vw - 20px)
      ">
            </div>
            <div class="col-md-6 items-center">
              <h3><?php echo $big_boss_post->post_title ?></h3>
              <p><?php echo $big_boss_post->post_excerpt ?></p>
            </div>
          </div>




        <?php
          endforeach;
        ?>
      </div>

    </section>
<?php
        endif;
      endif;
?>




<?php /* ---------------------- VISHAL --------------------------------------- */ ?>

<section class="p-top-quad p-bot-sexta">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-4 center">
        <p class="text-lg italic center m-bot-base">We dedicate all our efforts to the memory<br>
          of our great friend and colleague</p>
        <h3 class="center">Vishal Nair</h3>
        <p class="text-lg m-top-zero center">(1984-2021)</p>

        <img style="max-width: 400px; border-radius: 20px " src="<?php echo get_template_directory_uri() . '/assets/images/thank_you_vishal_nair.webp'; ?>" alt='Thank You Vishal Nair' width='' height='' />

      </div>
    </div>
  </div>
</section>



<?php /* OUR SOLUTION SECTION IS hidden because I think there's no dignity in passing products after the memory message. It feels odd  */ ?>
<!-- 

<section class="bg-gray-lightest wp-block-mindfulness-blocks-ess-section ess-section no-margin no-padding p-top-base">
  <div class="container">
    <div class="justify-center center p-bot-base">
      <h3 class="text-center subsection-headline">OUR SOLUTIONS:</h3>
    </div>
  </div>
</section>

<section class="no-padding bg-gray-lightest p-bot-double ">
  <div class="container">
    <div class="row p-top-double p-bot-double">
      <a href="<?php echo get_home_url(); ?>/alsim-cloud" class="p-top-double p-bot-quad col-xs-12 col-lg-4 ess-link-wrapper mf-scale-link aligncenter">
        <img style="max-width: 400px;" src="<?php echo get_template_directory_uri(); ?>/assets/images/product-logos/full_logo_cloud.svg">
        <div class=' m-spacer-iv'>
      </div>
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
-->







<!-- ========================================== CONTACT STRIP ========================================== -->

<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>


<?php get_footer();
