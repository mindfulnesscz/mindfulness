<?php

/**
 * Revamp homepage PaintIQ feature section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$title = $args['title'] ?? '';
$headline = $args['headline'] ?? '';
$description = $args['description'] ?? '';
$background = $args['background'] ?? '';
$cta = $args['cta'] ?? [];

if (!$title && !$headline && !$description && !$background) {
  return;
}
?>

<section class="revamp-home-paint-iq" data-revamp-section="home-paint-iq"<?php echo $background ? ' style="' . esc_attr('--paint-iq-bg: url(' . esc_url($background) . ');') . '"' : ''; ?>>
  <div class="revamp-home-paint-iq__feature">
    <div class="container revamp-home-paint-iq__inner">
      <div class="revamp-home-paint-iq__title-row">
        <?php if ($title) : ?>
          <h2 class="revamp-home-paint-iq__title"><?php echo esc_html($title); ?></h2>
        <?php endif; ?>

        <div class="revamp-home-paint-iq__copy">
          <?php if ($headline) : ?>
            <p class="revamp-home-paint-iq__headline"><?php echo esc_html($headline); ?></p>
          <?php endif; ?>

          <?php if ($description) : ?>
            <p class="revamp-home-paint-iq__description"><?php echo esc_html($description); ?></p>
          <?php endif; ?>
        </div>
      </div>
    </div>
  </div>

  <?php if (!empty($cta['label']) && !empty($cta['url'])) : ?>
    <div class="container revamp-home-paint-iq__cta-row">
      <?php
      get_template_part(
        'template-parts/revamp/component',
        'cta-button',
        [
          'label' => $cta['label'],
          'url' => $cta['url'],
          'class' => 'revamp-home-paint-iq__cta',
        ]
      );
      ?>
    </div>
  <?php endif; ?>
</section>
