<?php

/**
 * The template for displaying single news post
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

$link = get_permalink();

$thumb_id = get_post_thumbnail_id();

if ($thumb_id == '')
  $thumb_id = default_image_id();


$small = wp_get_attachment_image_src($thumb_id, 'small_uncropped');
$medium = wp_get_attachment_image_src($thumb_id, 'medium');
$large = wp_get_attachment_image_src($thumb_id, 'large');


$postMetaSubtitle = get_post_meta(get_the_ID(), 'sub_title', true);
$postMetaClient = get_post_meta(get_the_ID(), 'client', true);
$postMetaServices = get_post_meta(get_the_ID(), 'services', true);
$postMetaTimescope = get_post_meta(get_the_ID(), 'time_scope', true);


$theme_url = get_template_directory_uri();


while (have_posts()) :
  the_post();
  $thumb_id = get_post_thumbnail_id();
  $postFeaturedImage = wp_get_attachment_image_src($thumb_id, 'large');
?>

  <?php

  // ESS HEADER  ========================================================================================================================= 
  // Thumbnail image  ========================================================================================================================= 
  ?>

  <header id="ess-header" class="basic bg-secondary has-gray-lighten-4-background-color">

    <div class="ess-keypage-header">
      <div class="container">
        <div class="row content-center p-vert-double">

          <div class="col-xs-12 col-md-6">
            <img src="<?php echo $small[0] ?>" srcset="
              <?php echo $small[0] . ' 400w'; ?>
              <?php echo (($medium[0] != '') ? ', ' . $medium[0] . ' 600w' : ''); ?>
              <?php echo ($large[0] != '' ? ', ' . $large[0] . ' 900w' : ''); ?>" sizes="
              calc(100vw - 20px),
              (min-width: 1200px) 83vw,  
              (min-width: 1440px) 1200px" class="single-thumbnail">
          </div>

          <div class="col-xs-12 col-md-6 p-vert-double">
            <h1><?php echo the_title() ?></h1>
            <h4><?php echo $postMetaSubtitle; ?></h4>

            <?php
            if ($postMetaClient != '')
              echo ('client: <b>' . $postMetaClient . '</b>');

            if (($postMetaClient != '' and $postMetaServices != '') or ($postMetaClient != '' and $postMetaTimescope != '' and $postMetaServices == ''))
              echo ('<br>');

            if ($postMetaServices != '')
              echo ('services: <b>' . $postMetaServices . '</b>');

            if ($postMetaServices != '' and $postMetaTimescope != '')
              echo ('<br>');

            if ($postMetaTimescope != '')
              echo ('time scope: <b>' . $postMetaTimescope . '</b>');

            ?>
            <div class="topSocialIcons" id="topSocialIconsDesktop">
              <br><br>
              <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20<?php echo $link; ?>"><img src="<?php echo $theme_url; ?>/assets/icons/social/email.svg"></a>
              &nbsp;&nbsp;
              <a href="http://www.facebook.com/sharer.php?u=<?php echo $link; ?>" target="_blank"><img src="<?php echo $theme_url; ?>/assets/icons/social/Facebook.svg"></a>
              &nbsp;&nbsp;
              <a href="https://twitter.com/share?url=<?php echo $link; ?>&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank"><img src="<?php echo $theme_url; ?>/assets/icons/social/Twitter.svg"></a>
              &nbsp;&nbsp;
              <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $link; ?>" target="_blank"><img src="<?php echo $theme_url; ?>/assets/icons/social/LinkedIn.svg"></a>
            </div>

          </div>


        </div>
      </div>
    </div>


  </header>

  <!--   MAIN  =========================================================================================================================-->



  <main class="ess-main p-top-zero has-white-background-color m-zero">

    <div class="divider div-inverse div-gray div-left d-left"></div>
    <div class="divider div-inverse div-gray div-right"></div>


  <?php
  // Include the page content template.
  get_template_part('template-parts/content/content', 'single-case-solution');

endwhile;



  ?>

  <?php
  get_template_part('template-parts/content/content', 'contactstrip');
  ?>

  <?php get_footer();
