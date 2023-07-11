<?php

/**
 * Template part for displaying page content in page.php
 *
 * @package WordPress
 * @subpackage Mindfulness
 * @since 1.0.0
 */

?>

<?php
$link = get_permalink();
?>

<?php
  $postMetaSubtitle = get_post_meta(get_the_ID(),'sub_title',true);
  $postMetaClient = get_post_meta(get_the_ID(),'client',true);
  $postMetaServices = get_post_meta(get_the_ID(),'services',true);
  $postMetaTimescope = get_post_meta(get_the_ID(),'time_scope',true);
  $postMetaRequirement = get_post_meta(get_the_ID(),'requirement',true);
  $postMetaKeysuccesses = get_post_meta(get_the_ID(),'key_successes',true);
  $postMetaEssSolutions = get_post_meta(get_the_ID(),'ess_solutions',true);

  $thumb_id = get_post_thumbnail_id();
  $postFeaturedImage = wp_get_attachment_image_src($thumb_id, 'large');
?>

<article>
  <!--<h1 class="p-bot-quad">
    <?php
    //the_title();
    ?>
  </h1>-->




<style>
    .topColumnRight{ 
      margin-left: 10px;
      margin-right: 10px;
      
      padding: 15px;
      <?php
       if($postMetaClient != '' or $postMetaServices != '' or $postMetaTimescope != ''){ 
        echo('border: 1.5px solid #d9d9d9;');
        echo('margin-top: 10px;');
       }
        else {
        echo('border: 0px solid #d9d9d9;');
        echo('margin-top: 0px;');
        }
       
      ?>
    }
</style>


<div class="topRow has-gray-lighten-4-background-color">
  <div class="topColumn" id="topColumnMobile">
    <h2 class="topTitle" id="topTitleMobile"><?php echo the_title() ?></h2>
    <h4 class="topSubtitle" id="topSubtitleMobile"><?php echo $postMetaSubtitle; ?></h4>
    <img id="topImageMobile" src="<?php echo $postFeaturedImage[0] ?>" maxwidth="80%">
  </div>
  <div class="topColumn" id="topColumnDesktop">
    <img src="<?php echo $postFeaturedImage[0] ?>" maxwidth="80%">
  </div>
  <div class="topColumn">
    <div class="topColumnRight">
      <h2 class="topTitle" id="topTitleDesktop"><?php echo the_title() ?></h2>
      <h4 class="topSubtitle" id="topSubtitleDesktop"><?php echo $postMetaSubtitle; ?></h4>
      <?php 
        if($postMetaClient != '') {
          echo('client: <b>'.$postMetaClient.'</b>');
        }
        if(($postMetaClient != '' and $postMetaServices != '') or ($postMetaClient != '' and $postMetaTimescope != '' and $postMetaServices == '')) {
          echo('<br>');
        }
        if($postMetaServices != '') {
          echo('services: <b>'.$postMetaServices.'</b>');
        }
        if($postMetaServices != '' and $postMetaTimescope != '') {
          echo('<br>');
        }
        if($postMetaTimescope != '') {
          echo('time scope: <b>'.$postMetaTimescope.'</b>');
        }
      ?>
      <div class="topSocialIcons" id="topSocialIconsDesktop">
        <br><br>
        <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20<?php echo $link; ?>"><img src="../../wp-content/themes/mindfulness/assets/icons/social/email.svg"></a>
        &nbsp;&nbsp;
        <a href="http://www.facebook.com/sharer.php?u=<?php echo $link; ?>" target="_blank"><img src="../../wp-content/themes/mindfulness/assets/icons/social/Facebook.svg"></a>
        &nbsp;&nbsp;
        <a href="https://twitter.com/share?url=<?php echo $link; ?>&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank"><img src="../../wp-content/themes/mindfulness/assets/icons/social/Twitter.svg"></a>
        &nbsp;&nbsp;
        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $link; ?>" target="_blank"><img src="../../wp-content/themes/mindfulness/assets/icons/social/LinkedIn.svg"></a>
      </div>
    </div>
  </div>
  <div class="topSocialIcons" id="topSocialIconsMobile">
    <br><br>    
    <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20<?php echo $link; ?>"><img src="../../wp-content/themes/mindfulness/assets/icons/social/email.svg"></a>
      &nbsp;&nbsp;
      <a href="http://www.facebook.com/sharer.php?u=<?php echo $link; ?>" target="_blank"><img src="../../wp-content/themes/mindfulness/assets/icons/social/Facebook.svg"></a>
      &nbsp;&nbsp;
      <a href="https://twitter.com/share?url=<?php echo $link; ?>&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank"><img src="../../wp-content/themes/mindfulness/assets/icons/social/Twitter.svg"></a>
      &nbsp;&nbsp;
      <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $link; ?>" target="_blank"><img src="../../wp-content/themes/mindfulness/assets/icons/social/LinkedIn.svg"></a>
      <br><br><br>
    </div>
</div>




  <?php 
    if($postMetaRequirement != '' or $postMetaKeysuccesses != '' or $postMetaEssSolutions != '') {
      echo('<div class="blueBox">');

      if($postMetaRequirement != '') {
        echo('<p>
        <b class="blueBoxTitles">Requirement</b><br>
        <span class="blueBoxText">'.$postMetaRequirement.'</span>
      </p>');
      }

      if($postMetaKeysuccesses != '') {
        echo('<p>
        <b class="blueBoxTitles">Key successes</b><br>
        <span class="blueBoxText">'.$postMetaKeysuccesses.'</span>
      </p>');
      }

      if($postMetaEssSolutions != '') {
        echo('<p>
        <b class="blueBoxTitles">ESS solutions</b><br>
        <span class="blueBoxText">'.$postMetaEssSolutions.'</span>
      </p>');
      }
      echo('</div>');
  }
  ?>
  



  <?php
  the_content();
  ?>
  <div class="social-line">
    <ul>
      <li>
        <a onclick="window.print(); return false;">
          <span class="ess-icon icon_print"></span>
        </a>
      </li>
      <li>
        <a href="mailto:?Subject=Simple Share Buttons&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 <?php echo $link; ?>">
          <span class="ess-icon icon_send"></span>
        </a>
      </li>
      <li>
        <a href="http://www.facebook.com/sharer.php?u=<?php echo $link; ?>" target="_blank">
          <span class="ess-icon icon_facebook"></span>
        </a>
      </li>
      <li>
        <a href="http://www.linkedin.com/shareArticle?mini=true&amp;url=<?php echo $link; ?>" target="_blank">
          <span class="ess-icon icon_linkedin"></span>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/share?url=<?php echo $link; ?>&amp;text=Simple%20Share%20Buttons&amp;hashtags=simplesharebuttons" target="_blank">
          <span class="ess-icon icon_twitter"></span>
        </a>
      </li>
    </ul>

  </div>

</article>
