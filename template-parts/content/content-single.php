<?php

/**
 * Template part for displaying page content in page.php
 *
 * @package WordPress
 * @subpackage Mindfulness
 * @since 0.8.1
 */


$link = get_permalink();
?>
<article class="ess-news">

  <div class="max-w-800 center p-top-okta p-bot-double m-auto">
    <h1 class="center">
      <?php

      the_title();
      ?>
    </h1>
  </div>


  <?php
  the_content();

  ?>
  <div class="social-line max-w-1000 m-auto p-vert-double">
    <ul class="center">
      <li>
        <a onclick="window.print(); return false;">
          <span class="ess-icon icon_print"></span>
        </a>
      </li>
      <li>
        <a href="mailto:?Subject=<?php echo (get_the_title());  ?>&amp;Body=<?php echo $link; ?>">
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
        <a href="https://twitter.com/share?url=<?php echo $link; ?>&amp;text=<?php echo (get_the_title()); ?>&amp;hashtags=ESS" target="_blank">
          <span class="ess-icon icon_twitter"></span>
        </a>
      </li>
    </ul>

  </div>
</article>