<?php

$cs_args  = array(
  'numberposts'      => 4,
  'orderby'         => 'post_date',
  'order'           => 'ASC',
  'post_type'       => 'case_solution',
);

$case_solutions = get_posts($cs_args);

?>

<div id='ess-cube-navigation-holder'>
  <div id="breadcrub-cont">
    <?php custom_breadcrumbs() ?>
  </div>
  <!-- Here is where the menu settings and search bar was originally rendered -->
  <div id="right-part"></div>

  <div id="csscube-cont">

    <div id="csscube-scene">
      <button class="csscube-navbutton left-button">
        <span class="ess-icon color-primary big-icon icon_simple_arrow_left"></span>
        <!--<img src="<?php echo $template_url . '/assets/images/cube_arrow_left.png'; ?>">-->
      </button>
      <button class="csscube-navbutton right-button">
        <span class="ess-icon color-primary big-icon icon_simple_arrow_right"></span>
        <!--<img src="<?php echo $template_url . '/assets/images/cube_arrow_right.png'; ?>">-->
      </button>
      <div id="csscube-rotator">
        <div id="csscube">


          <!-- ................................... 6 - FRONT - CONTACT ................................... -->

          <div id="csscube-front">
            <div class="css_block css-block-header w_xii h_iii x_o y_o">
              <div>
                <h1>Contact</h1>
              </div>
            </div>
            <div class="css_block w_viii h_viii x_o y_iii css-gray">
              <a href="<?php echo home_url() . '/contact'; ?>">
                <h2>Contact Us</h2>
              </a>
            </div>
            <div class="css_block w_iv h_viii x_viii y_iii css-gray">
              <a id="cube_subscribe_button">
                <h2>Subscribe</h2>
              </a>
            </div>
            <div class="css_block w_iv h_iv x_o y_xi css-gray-lighter">
              <a href="https://www.facebook.com/essteyr" target="_blank">
                <h2><span class="ess-icon icon_facebook biggest-text"></span></h2>
              </a>
            </div>
            <div class="css_block w_iv h_iv x_iv y_xi css-gray-lighter">
              <a href="https://twitter.com/ESSteyr" target="_blank">
                <h2><span class="ess-icon icon_twitter biggest-text"></span></h2>
              </a>
            </div>
            <div class="css_block w_iv h_iv x_viii y_xi css-gray-lighter">
              <a href="https://www.linkedin.com/company/ess-engineeringsoftwaresteyr" target="_blank">
                <h2><span class="ess-icon icon_linkedin biggest-text"></span></h2>
              </a>
            </div>
          </div>



          <!-- ................................... 3 - BACK - PRODUCTS ................................... -->


          <div id="csscube-back">


            <div class="css_block css-block-header w_xii h_ii x_o y_o">
              <div>
                <h1>OUR SOLUTIONS</h1>
              </div>
            </div>


            <div class="css_block w_iii h_v x_o y_ii css-white product-block main-product-block">
              <a href="<?php echo home_url(); ?>/alsim-cloud">
                <img class="main-product-logo" src="<?php echo $template_url; ?>/assets/images/product-logos/logo_cloud.svg">
                <h4>alsim</h4>
                <h3>CLOUD</h3>
              </a>
            </div>
            <div class="css_block w_vi h_v x_iii y_ii css-white product-block main-product-block">
              <a href="<?php echo home_url(); ?>/alsim-platform">
                <img class="main-product-logo" src="<?php echo $template_url; ?>/assets/images/product-logos/logo_platform.svg">
                <h4>alsim</h4>
                <h3>PLATFORM</h3>
              </a>
            </div>
            <div class="css_block w_iii h_v x_ix y_ii css-white product-block main-product-block">
              <a href="<?php echo home_url(); ?>/alsim-services">
                <img class="main-product-logo" src="<?php echo $template_url; ?>/assets/images/product-logos/logo_services.svg">
                <h4>alsim</h4>
                <h3>SERVICES</h3>
              </a>
            </div>

            <!-- ROW II ................................... -->

            <div id="cube-side-paintshop" class="css_block w_iv h_iv x_o y_vii css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-paintshop">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Paint Shop</h3>
              </a>
            </div>
            <div id="cube-side-data-cleaning" class="css_block w_iv h_iv x_iv y_vii css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-data-cleaning">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Data Cleaning</h3>
              </a>
            </div>
            <div id="cube-side-processing" class="css_block w_iv h_iv x_viii y_vii css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-processing">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Processing</h3>
              </a>
            </div>

            <!-- ROW III ................................... -->

            <div id="cube-side-mobility" class="css_block w_iii h_iv x_o y_xi css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-mobility">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Mobility</h3>
              </a>
            </div>
            <div id="cube-side-environment" class="css_block w_iii h_iv x_iii y_xi css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-environment">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Environment</h3>
              </a>
            </div>
            <div id="cube-side-washing" class="css_block w_iii h_iv x_vi y_xi css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-washing">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Washing</h3>
              </a>
            </div>
            <div id="cube-side-oil-gas" class="css_block w_iii h_iv x_ix y_xi css-gray-lighter product-block">
              <a href="<?php echo home_url(); ?>/alsim-oil-gas">
                <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                <h4>alsim</h4>
                <h3>Oil & Gas</h3>
              </a>
            </div>
          </div>


          <!-- ................................... 4 - LEFT - CASE SOLUTIONS ................................... -->

          <div id="csscube-left">
            <div class="css_block css-block-header w_xii h_iii x_o y_o">
              <div>
                <h1>Case Solutions</h1>
              </div>
            </div>
            <div class="css_block w_vi h_iv x_o y_iii css-gray">
              <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[0]->ID); ?>">
                <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[0]->ID, 'thumbnail')); ?>">
                <h3><?php echo $case_solutions[0]->post_title; ?></h3>
              </a>
            </div>
            <div class="css_block w_vi h_iv x_vi y_iii css-gray">
              <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[1]->ID); ?>">
                <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[1]->ID, 'thumbnail')); ?>">
                <h3><?php echo $case_solutions[1]->post_title; ?></h3>
              </a>
            </div>
            <div class="css_block w_vi h_iv x_o y_vii css-gray">
              <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[2]->ID); ?>">
                <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[2]->ID, 'thumbnail')); ?>">
                <h3><?php echo $case_solutions[2]->post_title; ?></h3>
              </a>
            </div>
            <div class="css_block w_vi h_iv x_vi y_vii css-gray">
              <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[3]->ID); ?>">
                <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[3]->ID, 'thumbnail')); ?>">
                <h3><?php echo $case_solutions[3]->post_title; ?></h3>
              </a>
            </div>
            <div class="css_block w_xii h_iv x_o y_xi css-gray-lighter">
              <a href="<?php echo get_post_type_archive_link('case_solution'); ?>">
                <h2 class="has-text-align-right icon-headline medium-icon just-right color-secondary">
                  <span class="color-primary ess-icon icon_circle_arrow_right"></span>
                  See More Case Solutions
                </h2>
              </a>
            </div>


            <!--<div class="css_block w_xii h_xii x_o y_iii css-gray">
              <div>
                <span class="ess-icon icon_circle_arrow_right huge-text color-secondary"><span>
              </div>
            </div>-->
          </div>


          <!-- ................................... 2 - RIGHT - INDUSTRIES  ................................... -->

          <div id="csscube-right">
            <div class="css_block css-block-header w_xii h_iii x_o y_o">
              <div>
                <h1>INDUSTRIES</h1>
              </div>
            </div>
            <div class="cbl-industry css_block w_vi h_vi x_o y_iii css-gray-lighter">
              <a href="<?php echo home_url() . '/automotive'; ?>">
                <div class="cc-icon-h">
                  <?php get_template_part('template-parts/content/industries/content', 'automotive'); ?>
                </div>
                <h2>Automotive</h2>
              </a>
            </div>
            <div class="cbl-industry css_block w_vi h_vi x_vi y_iii css-gray-lighter">
              <a href="<?php echo home_url() . '/oil-gas'; ?>">
                <div class="cc-icon-h">
                  <?php get_template_part('template-parts/content/industries/content', 'oil-gas'); ?>
                </div>
                <h2>Oil & Gas</h2>
              </a>
            </div>
            <div class="cbl-industry css_block w_vi h_vi x_o y_ix css-gray-lighter">
              <a href="<?php echo home_url() . '/processing'; ?>">
                <div class="cc-icon-h">
                  <?php get_template_part('template-parts/content/industries/content', 'processing'); ?>
                </div>
                <h2>Processing</h2>
              </a>
            </div>
            <div class="cbl-industry css_block w_vi h_vi x_vi y_ix css-gray-lighter">
              <a href="<?php echo home_url() . '/energy-environment'; ?>">
                <div class="cc-icon-h">
                  <?php get_template_part('template-parts/content/industries/content', 'environment-energy'); ?>
                </div>
                <h2>Environment & Energy</h2>
              </a>
            </div>
          </div>
          <div id="csscube-top">
          </div>

          <!-- ................................... 1 - BOTTOM - ABOUT  ................................... -->


          <div id="csscube-bottom">
            <div class="css_block w_xii h_v x_o y_o css-gray-lighter">
              <a href="<?php echo home_url(); ?>">
                <img id="cube-ess-logo" alt="ESS - Engineering Software Steyr" src="<?php echo get_template_directory_uri() . '/assets/images/ess_logo.svg'; ?>">
              </a>
            </div>


            <div class="css_block w_vi h_iii x_o y_v css-gray-lighter">
              <a href="<?php echo home_url() . '/about-us' ?>">
                <!--<img style="height: 60%; width: auto;" src="<?php echo get_template_directory_uri() . '/assets/images/logo_image_ess.svg' ?>">-->
                <h2>About us</h2>
              </a>
            </div>
            <div class="css_block w_vi h_iii x_vi y_v css-gray-lighter">
              <a href="<?php /*echo get_post_permalink(ess_get_career_page_id());*/ echo home_url() . '/career' ?>">
                <h2>Career</h2>
              </a>
            </div>
            <!--<div class="css_block w_vi h_v x_vi y_v css-gray-lighter">
              <a href="<?php echo home_url() . '/about-us#our-team' ?>">
                <h2>Our Team</h2>
              </a>
            </div>-->
            <div class="css_block w_vi h_iii x_o y_viii css-gray-lighter">
              <a href="<?php echo  get_post_type_archive_link('news'); ?>">
                <h2>News</h2>
              </a>
            </div>
            <div class="css_block w_vi h_iii x_vi y_viii css-gray-lighter">
              <a href="<?php echo  get_post_type_archive_link('events'); ?>">
                <h2>Events</h2>
              </a>
            </div>
            <div class="css_block w_xii h_iv x_0 y_xi">
              <div class="mind-slider-holder no-padding">

                <!-- ******************************************* HOME CUBE BANNER ******************************************* -->


                <?php get_template_part('template-parts/navigation/navigation', 'cube-banner-repair'); ?>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="csscube-shadow"></div>
    </div>


  </div>
</div>