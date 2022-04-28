<?php

/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.2
 */

$template_url = get_template_directory_uri();

?>


<!--   FOOOTER  ========================================================================================================================= -->


<footer id="ess-footer" class="page-footer">
  <div class="container">
    <div class="row">

      <!--   footer CONTACT  ............................................... -->

      <div class="col-footer-contact col-xs-12 col-sm-4 col-lg-3">
        <div class="darker-gray ess-divider ess-show-on-small-and-down "></div>
        <h5>QUICK CONTACT</h5>
        <p>ESS Engineering Software Steyr<br> Berggasse 35, 4400 Steyr, Austria
        </p>
        <div class="ess-margin"></div>
        <h6>+43 7252 20446</h6>
        <h5>STAY UPDATED</h5>


        <!--   footer SUBSCRIBE BUTTON  ............................................... -->

        <div class="ess-subscribe-footer" style="flex-wrap: wrap;">
          ` <div class="button-holder ">
            <button class="ess-button modal-trigger" data-target="ess-modal-subscribe">subscribe</button>
          </div>
        </div>
      </div>

      <!--   footer NEWS ............................................... -->

      <div class="col-footer-news col-xs-12 col-sm-4 col-md-4 col-lg-2 ">

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
          <h6>Hottest News</h6>
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
                  <div class="lightest-gray-darker ">
                    <a href="<?php echo get_permalink() ?>">
                      <img class="responsive-img " src="<?php echo get_the_post_thumbnail_url($post_id) ?> " srcset="
												<?php echo $tiny[0] ?> 150w,
                                                <?php echo $small[0] ?> 400w" sizes="
													(min-width: 1440px) calc((1440px/4) - 5*15px),
													(min-width: 1200px) calc((100vw/4) - 5*12px),
													(min-width: 760px) calc((100vw/4) - 5*10px),
													(min-width: 461px) calc((100vw/6) - 3*10px),
													calc(100vw - 20px)      
											">
                    </a>
                  </div>
                  <div class="ess-footer-article-content ">
                    <h7><?php echo get_the_title(); ?></h7>
                    <br>
                    <a href="<?php echo get_permalink() ?>"><button class="ess-button ess-sm-button ">read more</button></a>
                  </div>
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

      <div class="col-footer-events col-xs-12 col-sm-4 col-md-4 col-lg-2 ">
        <div class="darker-gray ess-divider ess-show-on-small-and-down "></div>
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

          <h6>Closest Events: </h6>
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
                  <div class="lightest-gray-darker ">
                    <a href="<?php echo get_permalink() ?>">
                      <img class="responsive-img " src="<?php echo get_the_post_thumbnail_url($post_id) ?> " srcset="
												<?php echo $tiny[0] ?> 150w,
                                                <?php echo $small[0] ?> 400w" sizes="
												calc(100vw - 20px),
												(min-width: 461px) calc((100vw/6) - 3*10px),
												(min-width: 760px) calc((100vw/4) - 5*10px),
												(min-width: 1200px) calc((100vw/4) - 5*12px),  
                                                (min-width: 1440px) calc((1440px/4) - 5*15px)
										">
                    </a>
                  </div>
                  <div class="ess-footer-article-content ">
                    <h7><?php echo get_the_title(); ?></h7>
                    <br>
                    <a href="<?php echo get_permalink() ?>"><button class="ess-button ess-sm-button ">read more</button></a>
                  </div>
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
      <div class="col-footer-menu col-sm-12 col-lg-5 ">
        <div class="darker-gray ess-divider ess-show-on-med-and-down "></div>
        <div class="icon-headline normal-icon col-gray"><span class="ess-icon icon_home_outline"></span>
          <h5 class="">ENGINEERING SOFTWARE STEYR</h5>
        </div>
        <div class="row ">
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>ABOUT US</h6>
              </li>
              <li><a href="<?php echo $h ?>/about-us">Ess company</a></li>
              <li><a href="<?php echo $h ?>/about-us#our-team">Team</a></li>
              <li><a href="<?php echo $h ?>/career-opportunities">Career</a></li>
              <li><a href="<?php echo $h ?>/contact">Contact</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>INDUSTRIES</h6>
              </li>
              <li><a href="<?php echo get_post_type_archive_link('case_solution'); ?>/energy-environment">Energy & Environment</a></li>
              <li><a href="<?php echo $h ?>/oil-gas">Oil & Gas</a></li>
              <li><a href="<?php echo $h ?>/processing">Mineral Processing</a></li>
              <li><a href="<?php echo $h ?>/automotive-industry">Automotive</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>SOLUTIONS</h6>
              </li>
              <li><a href="<?php echo $h ?>/alsim-paintshop">alsim Paintshop</a></li>
              <li><a href="<?php echo $h ?>/alsim-data-cleaning">alsim Data Cleaning</a></li>
              <li><a href="<?php echo $h ?>/alsim-processing">alsim Processing</a></li>
              <li><a href="<?php echo $h ?>/alsim-mobility">alsim Mobility</a></li>
              <li><a href="<?php echo $h ?>/alsim-environment">alsim Environment</a></li>
              <li><a href="<?php echo $h ?>/alsim-washing">alsim Washing</a></li>
              <li><a href="<?php echo $h ?>/alsim-oil-gas">alsim Oil & Gas</a></li>
            </ul>
          </div>
          <div class="col-xs-6 col-sm-3 ">
            <ul>
              <li>
                <h6>USE CASES</h6>
              </li>
              <li><a href="<?php echo $c ?>">Energy & Environment</a></li>
              <li><a href="<?php echo $c ?>">Oil & Gas</a></li>
              <li><a href="<?php echo $c ?>">Mineral Processing</a></li>
              <li><a href="<?php echo $c ?>">Automotive</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-copyright ">
    <div class="container ">
      <div class="copyright-element"> © <?php echo date('Y') ?> ESS - Engineering Software Steyr GmbH</div>
      <div class="copyright-element"><a href="<?php echo home_url() . '/legal-notice' ?>">legal notice</a></div>
    </div>
  </div>
</footer>

<!-- ................................... SUBSCRIBE MODAL ................................... -->




</div><!-- ess-main-container" -->
<script type="text/javascript">
  window.mindfulness_version = '<?php echo constant("MINDFULNESS_VERSION"); ?>';

  <?php $home = home_url(); ?>
  var url_array = [];

  url_array.automotive = '<?php echo $home ?>/automotive';
  url_array.environment = '<?php echo $home ?>/environment';
  url_array.mineral = '<?php echo $home ?>/mineral';
  url_array.oil = '<?php echo $home ?>/oil';
  url_array.whoweare = '<?php echo $home ?>/about-us';
  url_array.careeropportunities = '<?php echo $home ?>/career';
  url_array.ourteam = '<?php echo $home ?>/about-us/#our-team';
  url_array.news = '<?php echo $home ?>/news';
  url_array.contactus = '<?php echo $home ?>/contact';
  url_array.signinregister = '<?php echo $home ?>/login';;
  url_array.onlinetrial = 'http://alsim.petrmucha.cz';
  url_array.paintshop = '<?php echo $home ?>/alsim-paintshop';
  url_array.merge = '<?php echo $home ?>/alsim-merge';
  url_array.services = '<?php echo $home ?>/services';
  url_array.sense = '<?php echo $home ?>/alsim-sense';
  url_array.press = '<?php echo $home ?>/press';
  url_array.usecases = '<?php echo $home ?>/case_solution';
  url_array.linkedin = 'https://linked.in';
  url_array.subscribe = 'action_abc';
  url_array.twitter = 'https://twitter.com';
  url_array.facebook = 'https://facebook.com';
  url_array.events = '<?php echo $home ?>/events';

  window.ess_url_array = url_array;
  url_array = '';

  window.template_url = "<?php echo (get_template_directory_uri()) ?>";
</script>

<?php

get_template_part('template-parts/content/footer/content', 'subscribeform');

?>

<?php wp_footer(); ?>

</body>

</html>