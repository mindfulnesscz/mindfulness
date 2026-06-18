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
$inline_graphic = '';

if ($graphic && 0 === strpos($graphic, trailingslashit(get_template_directory_uri()))) {
  $relative_graphic_path = substr($graphic, strlen(trailingslashit(get_template_directory_uri())));
  $candidate_graphic_path = realpath(get_template_directory() . '/' . $relative_graphic_path);
  $theme_path = realpath(get_template_directory());

  if (
    $candidate_graphic_path &&
    $theme_path &&
    0 === strpos($candidate_graphic_path, $theme_path . DIRECTORY_SEPARATOR) &&
    'svg' === strtolower(pathinfo($candidate_graphic_path, PATHINFO_EXTENSION))
  ) {
    $inline_graphic = file_get_contents($candidate_graphic_path); // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
  }
}

if (!$title && empty($title_lines) && !$graphic) {
  return;
}
?>

<section class="revamp-home-numbers" data-revamp-section="home-numbers" data-motion-numbers>
  <span class="revamp-home-numbers__rule" data-motion-numbers-rule aria-hidden="true"></span>
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
        <div class="revamp-home-numbers__graphic" data-motion-numbers-graphic role="img" aria-label="<?php echo esc_attr($graphic_alt); ?>">
          <?php if ($inline_graphic) : ?>
            <?php
            $inline_graphic = preg_replace('/<svg\b/', '<svg class="revamp-home-numbers__svg" data-motion-numbers-svg aria-hidden="true" focusable="false"', $inline_graphic, 1);
            echo $inline_graphic; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            ?>
          <?php else : ?>
            <img src="<?php echo esc_url($graphic); ?>" alt="" loading="lazy">
          <?php endif; ?>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>
