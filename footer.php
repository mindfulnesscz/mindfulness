<?php

/**
 * The template for displaying the footer
 * Contains the closing of the #content div and all content after.
 */

$template_url = get_template_directory_uri();

?>


<!--   FOOOTER  ========================================================================================================================= -->


<footer id="ess-footer">
  <div class="container">
    <div id="ess-footer-body-row" class="row">

      <!--   footer CONTACT  ............................................... -->

      <div class="footer-section col-footer-contact col-xs-12 col-sm-4 col-lg-3">
        <div class="darker-gray ess-divider ess-show-on-small-and-down "></div>
        <h6 class="footer-section-headline center">Quick Contact</h6>
        <p class="text-sm center">ESS Engineering Software Steyr<br> Berggasse 35, 4400 Steyr, Austria
        </p>
        <p class="text-sm center">+43 7252 20446</p>
        <h6 class="center">STAY UPDATED</h6>


        <!--   footer SUBSCRIBE BUTTON  ............................................... -->

        <div class="ess-subscribe-footer">
          <div class="center">
            <button class="ess-button outlined modal-trigger">subscribe</button>
          </div>
        </div>
      </div>

      <!--   footer NEWS ............................................... -->

      <div class="footer-section col-footer-news col-xs-6 col-sm-4 col-md-4 col-lg-2 ">

        <?php

        $c = 0;

        // Query Arguments
        $args = array(
          'post_type' => 'news',
          'posts_per_page' => '3'
        );

        // The query
        $the_query = new WP_Query($args);

        // The Loop
        if ($the_query->have_posts()) : ?>
          <h6 class="footer-section-headline">Hottest News:</h6>
          <div class="mind-slider-holder">
            <ul class="mind-slider" id="ess-news-slider">
              <?php while ($the_query->have_posts()) :
                $c++;
                $the_query->the_post();
                $post_id = get_the_ID();
                $thumb_id = get_post_thumbnail_id();
                if ($thumb_id == '')
                  $thumb_id = default_image_id();
                $tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
                $small = wp_get_attachment_image_src($thumb_id, 'thumbnail');

              ?>
                <li class="slide <?php echo (($c == 1 ? 'curr' : '')); ?>">
                  <a href="<?php echo get_permalink() ?>">
                    <div class="footer-feed-img-holder">
                      <img loading="lazy" class="footer-feed-img responsive-img " src="<?php echo get_the_post_thumbnail_url($post_id) ?> " srcset="
                        <?php echo $tiny[0] ?> 150w,
                        <?php echo $small[0] ?> 400w" sizes="
                          (min-width: 1440px) calc((1440px/4) - 5*15px),
                          (min-width: 1200px) calc((100vw/4) - 5*12px),
                          (min-width: 760px) calc((100vw/4) - 5*10px),
                          (min-width: 461px) calc((100vw/6) - 3*10px)    
                      ">
                    </div>
                    <div class="ess-footer-article-content ">
                      <h6 class="footer-section-headline"><?php echo get_the_title(); ?></h6>
                    </div>
                  </a>
                </li>

              <?php endwhile; ?>

            </ul>
          </div>

        <?php
        else :
          echo 'no posts found';
        endif;

        wp_reset_postdata(); // reset global $post;

        ?>

      </div>


      <!--   footer EVENTS  ............................................... -->

      <div class="footer-section col-footer-events col-xs-6 col-sm-4 col-md-4 col-lg-2 ">
        <?php

        $c = 0;

        // Query Arguments
        $args = array(
          'post_type' => 'events',
          'posts_per_page' => '3'
        );

        // The query
        $the_query = new WP_Query($args);

        // The Loop
        if ($the_query->have_posts()) : ?>

          <h6 class="footer-section-headline">Closest Events: </h6>
          <div class="mind-slider-holder">
            <ul class="mind-slider" id="ess-events-slider">
              <?php while ($the_query->have_posts()) :
                $c++;
                $the_query->the_post();
                $post_id = get_the_ID();


                $thumb_id = get_post_thumbnail_id();
                if ($thumb_id == '')
                  $thumb_id = default_image_id();
                $tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
                $small = wp_get_attachment_image_src($thumb_id, 'thumbnail');

              ?>
                <li class="slide <?php echo (($c == 1 ? 'curr' : '')); ?>">
                  <a href="<?php echo get_permalink() ?>">
                    <div class="footer-feed-img-holder center">
                      <img loading="lazy" class="footer-feed-img responsive-img" src="<?php echo get_the_post_thumbnail_url($post_id) ?> " srcset="
                        <?php echo $tiny[0] ?> 150w,  <?php echo $small[0] ?> 400w" sizes="
                        (min-width: 461px) calc((100vw/6) - 3*10px),
                        (min-width: 760px) calc((100vw/4) - 5*10px),
                        (min-width: 1200px) calc((100vw/4) - 5*12px),  
                        (min-width: 1440px) calc((1440px/4) - 5*15px)
                    ">
                    </div>
                    <div class="ess-footer-article-content ">
                      <h6><?php echo get_the_title(); ?></h6>
                    </div>
                  </a>
                </li>

              <?php endwhile; ?>

            </ul>
          </div>

        <?php
        else :
          echo 'no posts found';
        endif;

        wp_reset_postdata(); // reset global $post;

        ?>
      </div>


      <!--   footer MENU  ............................................... -->
      <?php
      $h = get_home_url();
      $c = get_post_type_archive_link('case_solution');
      ?>
      <div class="footer-section col-footer-menu col-sm-12 col-lg-5 ">
        <h6 class="footer-section-headline">Engineering Software Steyr</h6>

        <div class="row text-sm ">
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>ABOUT US</h6>
              </li>
              <li class="text-sm"><a href="<?php echo $h ?>/about-us">Ess company</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/about-us#our-team">Team</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/career-opportunities">Career</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/contact">Contact</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>INDUSTRIES</h6>
              </li>
              <li class="text-sm"><a href="<?php echo get_post_type_archive_link('case_solution'); ?>/energy-environment">Energy & Environment</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/oil-gas">Oil & Gas</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/processing">Mineral Processing</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/automotive-industry">Automotive</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>SOLUTIONS</h6>
              </li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-paintshop">alsim Paintshop</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-data-cleaning">alsim Data Cleaning</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-processing">alsim Processing</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-mobility">alsim Mobility</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-environment">alsim Environment</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-washing">alsim Washing</a></li>
              <li class="text-sm"><a href="<?php echo $h ?>/alsim-oil-gas">alsim Oil & Gas</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>USE CASES</h6>
              </li>
              <li class="text-sm"><a href="<?php echo $c ?>">Energy & Environment</a></li>
              <li class="text-sm"><a href="<?php echo $c ?>">Oil & Gas</a></li>
              <li class="text-sm"><a href="<?php echo $c ?>">Mineral Processing</a></li>
              <li class="text-sm"><a href="<?php echo $c ?>">Automotive</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="footer-copyright text-sm has-gray-lighten-1-background-color p-vert-base ">
    <div class="container ">
      <div class="copyright-element"> © <?php echo date('Y') ?> ESS - Engineering Software Steyr GmbH</div>
      <div class="copyright-element"><a href="<?php echo home_url() . '/legal-notice' ?>">legal notice</a></div>
    </div>
  </div>

</footer>

</div><!-- ess-main-container" -->



<!-- ................................... SUBSCRIBE MODAL ................................... -->

<div id="ess-modal-holder">
  <div class="ess-modal-background">
  </div>
  <div class="ess-modal">

  </div>
</div>


<?php wp_footer(); ?>



<?php

// ................................... CONSOLE ...................................
// print the console if in debug mode
wm_print_console();


?>
</body>

</html>