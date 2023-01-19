<?php

/**
 * The Template for Careers List Page
 *
 * Template Name: Career
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.1
 */

get_header(); ?>



<?php

$page_id = null;


while (have_posts()) : the_post();

  // Include the page content template.
  get_template_part('template-parts/content/content', 'page');
endwhile;


?>


<!-- ========================================== LOOP OF CAREER POSTS ========================================== -->

<?php

$args  = array(
  'numberposts'     => 10,
  'orderby'         => 'post_date',
  'order'           => 'ASC',
  'post_type'       => 'opened_position',
  'post_status'     => 'publish'
);

$posts = get_posts($args);
?>


<?php

//$post_name = get_the_title(); probably nonsense see if it breaks something commented if not delete


if (!empty($posts)) : ?>
  <section class="no-padding has-gray-lighten-5-background-color">
    <div class="container p-vert-double">

      <h3 class="textalign-center p-bot-base p-top-base">
        <?php _e('We are currently looking for:'); ?>
      </h3>
      <div class="row">
        <div class="col-xs-12 col-sm-6 col-md-4">
          <select name="job_location" default="all">
            <option value="all">All Locations</option>
            <option value="steyr">Steyr</option>
            <option value="poland">Poland</option>
          </select>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4">
          <select name="job_location" default="all">
            <option value="all">All Departments</option>
            <option value="steyr">Steyr</option>
            <option value="poland">Poland</option>
          </select>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-4 flex">
          <input type="text" placeholder="Enter Search Phrase" name="search" />
          <a class="wm-button m-left-base bottom-base p-vert-base" style="float: right">Search</a>
        </div>
      </div>
    </div>
  </section>


  <section>
    <div class="container main-block p-bot-base">
      <div class="row no-margin ">
        <div class="col-xs-12">

          <div class="row news-row not-archive just-center">
            <?php

            foreach ($posts as $post) :

              $thumb_id = get_post_thumbnail_id();
              if ($thumb_id == '')
                $thumb_id = $default_image_id;

              $tiny  = wp_get_attachment_image_src($thumb_id, 'tiny');
              $small = wp_get_attachment_image_src($thumb_id, 'thumbnail');

            ?>
              <div class="news-col col-xs-12 col-md-4 col-lg-4">
                <div class="row no-margin">
                  <div class="news-col-image col-xs-4 col-md-12">
                    <div>
                      <a href="<?php the_permalink(); ?>">
                        <img src="<?php echo get_the_post_thumbnail_url(); ?>" class="thumb-image responsive-img" srcset="
												<?php echo $tiny[0] ?> 150w,
												<?php echo $small[0] ?> 400w" sizes="
															calc(100vw/3 - 20px),
															(min-width: 461px) calc((100vw/2/3) - 4*10px),
															(min-width: 760px) calc((100vw/4) - 5*10px),
															(min-width: 1440px) calc((1440px/4) - 5*15px)
										">
                      </a>
                    </div>
                  </div>
                  <div class="news-col-text col-xs-8 col-md-12">
                    <h3><a href="<?php the_permalink(); ?>"><?php echo the_title(); ?></a></h3>
                    <?php the_excerpt(); ?>
                  </div>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>
<?php endif; ?>



<!-- ========================================== CONTACT STRIP ========================================== -->


<?php
get_template_part('template-parts/content/content', 'contactstrip');
?>


<!-- ========================================== footer ========================================== -->

<?php get_footer(); ?>