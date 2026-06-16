<?php

/**
 * Revamp homepage services section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$statement = $args['statement'] ?? '';
$eyebrow = $args['eyebrow'] ?? '';
$items = $args['items'] ?? [];
$background = $args['background'] ?? '';

if (!$statement && empty($items)) {
  return;
}
?>

<section class="revamp-home-services" data-revamp-section="home-services" <?php echo $background ? 'style="--services-bg: url(' . esc_url($background) . ');"' : ''; ?>>
  <div class="revamp-home-services__overlay" aria-hidden="true"></div>

  <div class="revamp-home-services__top">
    <div class="container revamp-home-services__inner">
      <?php if ($statement) : ?>
        <div class="revamp-home-services__title-row">
          <h2 class="revamp-home-services__statement"><?php echo esc_html($statement); ?></h2>
          <div class="revamp-home-services__title-spacer" aria-hidden="true"></div>
        </div>
      <?php endif; ?>
    </div>
  </div>

  <?php if ($eyebrow || !empty($items)) : ?>
    <div class="container revamp-home-services__bottom">
      <?php if ($eyebrow) : ?>
        <p class="revamp-home-services__eyebrow"><?php echo esc_html($eyebrow); ?></p>
      <?php endif; ?>

      <?php if (!empty($items)) : ?>
        <ul class="revamp-home-services__list">
          <?php foreach ($items as $item) : ?>
            <li><?php echo esc_html($item); ?></li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</section>
