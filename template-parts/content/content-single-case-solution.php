<?php
/**
 * Template part for displaying page content in page.php
 *
 * @package WordPress
 * @subpackage Mindfulness
 * @since 1.0.0
 */

?>
<article>
<h1 class="underline">
<?php

	the_title();
	?>
</h1>


	<?php
	the_content();
?>
<div class="social-line">
    <ul>
        <li>
            <a onclick="window.print(); return false;" >
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
<?php 
    $link = get_permalink();
?>


