<?php

/**
 * The template for displaying Events
 *
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header();


//

$PastEventsArray = [];
$FutureEventsArray = [];
$RunningEventsArray = [];



?>

<!--   ESS HEADER ============================================================================================== -->





<header id="ess-header">
  <div class="ess-tiny-header">
    <a href="<?php echo get_post_type_archive_link('events'); ?>">
      <h1 class="ess-cut-corners">
        Events
      </h1>
      <div class="cl-both"></div>
    </a>
  </div>
</header>

<main class="ess-main has-gray-lighten-5-background-color p-top-0">
  <?php


  while (have_posts()) : the_post();

    $meta = get_post_meta(get_the_id());
    $starts = $meta['_esseventstarts_text_metafield'][0];
    $ends = $meta['_esseventends_text_metafield'][0];
    $loc = $meta['_essevent_location'][0];
    $now = date('Y-m-d\Th:i:s');

    $starts_t   = strtotime($starts);
    $ends_t   = strtotime($ends);


    $event_post = [];
    $event_post['title']   = get_the_title();
    $event_post['starts']   = date('d/m', $starts_t);
    $event_post['ends']   = date('d/m Y', $ends_t);
    $event_post['loc']     = $loc;
    $event_post['excerpt']   = get_the_excerpt();
    $event_post['ID']     = get_the_id();
    $event_post['link']   = get_the_permalink($event_post['ID']);


    if ($now > $ends) {  // past event
      array_push($PastEventsArray, $event_post);
    } else if ($now < $starts) {  // future event
      array_push($FutureEventsArray, $event_post);
    } else {  // running event
      array_push($RunningEventsArray, $event_post);
    }
  endwhile;

  // ******************************** RUNNING EVENTS ********************************

  if (!empty($RunningEventsArray)) :


  ?>
    <section class="bg-gray-lighter">
      <div class="container">
        <h3 class="textalign-center"><?php _e('Currently running Events', 'mindfulness') ?>:</h3>
      </div>
    </section>

    <?php
    foreach ($RunningEventsArray as $event_post) :

      $thumb_id = get_post_thumbnail_id($event_post['ID']);
      if ($thumb_id == '')
        $thumb_id = default_image_id();
      $tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
      $small = wp_get_attachment_image_src($thumb_id, 'small_uncropped');
    ?>

      <section class="running-section" style="background-image: url('<?php echo $small[0] ?>'); background-size: cover; background-position: center center;">
        <div class="container">
          <div class="row alignitems-center">
            <div class="col-xs-12 col-md-6">

              <a href="<?php echo $event_post['link']; ?>">
                <img src="<?php echo $small[0] ?>" class="thumb-image responsive-img" srcset="
												<?php echo $tiny[0] ?> 150w,
												<?php echo $small[0] ?> 400w" sizes="
												calc(100vw/3 - 20px),
												(min-width: 461px) calc((100vw/6) - 3*10px),
												(min-width: 760px) calc((100vw/4) - 5*10px),
												(min-width: 1200px) calc((100vw/4) - 5*12px),  
												(min-width: 1440px) calc((1440px/4) - 5*15px)
											">
              </a>
            </div>
            <div class="col-xs-12 col-md-6">
              <h1><a class=" mega-font" href="<?php echo $event_post['link']; ?>"><?php echo $event_post['title']; ?></a></h2>

                <div class="icon-headline small-icon gray-text text-lighten-1"><span class="ess-icon icon_map"></span>
                  <p class="gray-text text-lighten-1 no-margin"><strong><?php echo $event_post['loc']; ?></strong></p>
                </div>
                <div class="icon-headline small-icon gray-text text-lighten-1"><span class="ess-icon icon_calendar"></span>
                  <p class="gray-text text-lighten-1 no-margin"><strong><?php echo $event_post['starts']; ?> -
                      <?php echo $event_post['ends']; ?></strong></p>
                </div>
                <p class="shades-text text-white">
                  <?php echo $event_post['excerpt']; ?>
                </p>
            </div>
          </div>
        <?php
      endforeach;
        ?>
        </div>
      </section>
    <?php
  endif;

  // *********************************** FUTURE EVENTS ********************************** 


  if (!empty($FutureEventsArray)) :
    ?>
      <section class="bg-gray-lighter">
        <div class="container">
          <h3 class="textalign-center"><?php _e('Upcoming Events', 'mindfulness') ?>:</h3>
          <div class="row news-row just-center">
            <?php
            foreach ($FutureEventsArray as $event_post) :

              $thumb_id = get_post_thumbnail_id($event_post['ID']);
              if ($thumb_id == '')
                $thumb_id = default_image_id();
              $tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
              $small = wp_get_attachment_image_src($thumb_id, 'small_uncropped');
            ?>
              <div class="news-col col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="row p-top-base">
                  <div class="news-col-image col-xs-4 col-md-12">
                    <div>
                      <a href="<?php echo $event_post['link']; ?>">

                        <img src="<?php echo $small[0] ?>" class="thumb-image responsive-img" srcset="
															<?php echo $tiny[0] ?> 150w,
															<?php echo $small[0] ?> 400w" sizes="
															calc(100vw/3 - 20px),
															(min-width: 461px) calc((100vw/6) - 3*10px),
															(min-width: 760px) calc((100vw/4) - 5*10px),
															(min-width: 1200px) calc((100vw/4) - 5*12px),  
															(min-width: 1440px) calc((1440px/4) - 5*15px)
											">

                      </a>
                    </div>
                  </div>
                  <div class="news-col-text col-xs-8 col-md-12">
                    <div class="icon-headline small-icon">
                      <span class="ess-icon icon_map"></span>
                      <p class=" no-margin"><strong><?php echo $event_post['loc']; ?></strong></p>
                    </div>
                    <div class="icon-headline small-icon"><span class="ess-icon icon_calendar"></span>
                      <p class=" no-margin"><strong><?php echo $event_post['starts']; ?> -
                          <?php echo $event_post['ends']; ?></strong></p>
                    </div>
                    <h4><a href="<?php echo $event_post['link']; ?>"><?php echo $event_post['title']; ?></a>
                    </h4>
                    <p><?php echo $event_post['excerpt']; ?>
                    </p>
                  </div>
                </div>

              </div>
            <?php
            endforeach;
            ?>
          </div>
        </div>
      </section>
    <?php
  endif;

  // ******************************* PAST EVENTS ************************************************************

  if (!empty($PastEventsArray)) :
    ?>
      <section class="bg-gray-lighter">
        <div class="container">
          <h3 class="textalign-center"><?php _e('Past Events', 'mindfulness') ?>::</h3>
          <div class="row news-row">
            <?php
            foreach ($PastEventsArray as $event_post) :

              $thumb_id = get_post_thumbnail_id($event_post['ID']);
              if ($thumb_id == '')
                $thumb_id = default_image_id();
              $tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
              $small = wp_get_attachment_image_src($thumb_id, 'small_uncropped');
            ?>
              <div class="news-col col-xs-12 col-sm-6 col-md-4 col-lg-3">
                <div class="row p-top-base">
                  <div class="news-col-image col-xs-4 col-md-12">
                    <div>
                      <a href="<?php echo $event_post['link']; ?>">

                        <img src="<?php echo $small[0] ?>" class="thumb-image responsive-img" srcset="
															<?php echo $tiny[0] ?> 150w,
															<?php echo $small[0] ?> 400w" sizes="
															calc(100vw/3 - 20px),
															(min-width: 461px) calc((100vw/6) - 3*10px),
															(min-width: 760px) calc((100vw/4) - 5*10px),
															(min-width: 1200px) calc((100vw/4) - 5*12px),  
															(min-width: 1440px) calc((1440px/4) - 5*15px)
											">

                      </a>
                    </div>
                  </div>
                  <div class="news-col-text col-xs-8 col-md-12">
                    <div class="icon-headline small-icon">
                      <span class="ess-icon icon_map"></span>
                      <p class="m-zero"><strong><?php echo $event_post['loc']; ?></strong></p>
                    </div>
                    <div class="icon-headline small-icon"><span class="ess-icon icon_calendar"></span>
                      <p class="m-zero"><strong><?php echo $event_post['starts']; ?> -
                          <?php echo $event_post['ends']; ?></strong></p>
                    </div>
                    <h4><a href="<?php echo $event_post['link']; ?>"><?php echo $event_post['title']; ?></a>
                    </h4>
                    <p><?php echo $event_post['excerpt']; ?>
                    </p>
                  </div>
                </div>

              </div>
            <?php
            endforeach;
            ?>
          </div>
        </div>
      </section>
    <?php
  endif;


    ?>

</main>


<!-- ========================================== CONTACT STRIP ========================================== -->

<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>



<?php get_footer(); ?>