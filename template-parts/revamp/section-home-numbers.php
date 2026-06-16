<?php

/**
 * Revamp homepage experience numbers section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$title = $args['title'] ?? '';
$title_lines = $args['title_lines'] ?? [];
$graphic = $args['graphic'] ?? '';
$graphic_alt = $args['graphic_alt'] ?? '';

if (!$title && empty($title_lines) && !$graphic) {
  return;
}
?>

<section class="revamp-home-numbers" data-revamp-section="home-numbers">
  <div class="revamp-home-numbers__frame">
    <div class="container revamp-home-numbers__inner">
      <?php if ($title || !empty($title_lines)) : ?>
        <div class="revamp-home-numbers__title-row">
          <h2 class="revamp-home-numbers__title">
            <?php if (!empty($title_lines)) : ?>
              <?php foreach ($title_lines as $line) : ?>
                <span><?php echo esc_html($line); ?></span>
              <?php endforeach; ?>
            <?php else : ?>
              <?php echo esc_html($title); ?>
            <?php endif; ?>
          </h2>
          <div class="revamp-home-numbers__title-spacer" aria-hidden="true"></div>
        </div>
      <?php endif; ?>

      <?php if ($graphic) : ?>
        <div class="revamp-home-numbers__graphic">
          <img src="<?php echo esc_url($graphic); ?>" alt="<?php echo esc_attr($graphic_alt); ?>" loading="lazy">
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>
