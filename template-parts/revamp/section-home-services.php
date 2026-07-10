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

<section class="revamp-home-services" data-revamp-section="home-services" data-motion-services <?php echo $background ? 'style="--services-bg: url(' . esc_url($background) . ');"' : ''; ?>>
  <div class="revamp-home-services__background" data-motion-services-background aria-hidden="true"></div>
  <div class="revamp-home-services__overlay" aria-hidden="true"></div>
  <span class="revamp-home-services__rule" data-motion-services-rule aria-hidden="true"></span>

  <div class="revamp-home-services__top">
    <div class="container revamp-home-services__inner">
      <?php if ($statement) : ?>
        <div class="revamp-home-services__title-row">
          <h2 class="revamp-home-services__statement" data-motion-services-statement>
            <?php
            $statement_words = preg_split('/\s+/', trim($statement));
            foreach ($statement_words as $word_index => $word) :
              if ($word_index > 0) {
                echo ' ';
              }
            ?><span data-motion-services-word><?php echo esc_html($word); ?></span><?php endforeach; ?>
          </h2>
          <div class="revamp-home-services__title-spacer" aria-hidden="true"></div>
        </div>
      <?php endif; ?>
    </div>
  </div>

  <?php if ($eyebrow || !empty($items)) : ?>
    <div class="container revamp-home-services__bottom">
      <?php if ($eyebrow) : ?>
        <p class="revamp-home-services__eyebrow" data-motion-services-list-item><?php echo esc_html($eyebrow); ?></p>
      <?php endif; ?>

      <?php if (!empty($items)) : ?>
        <ul class="revamp-home-services__list">
          <?php foreach ($items as $item) : ?>
            <li data-motion-services-list-item><?php echo esc_html($item); ?></li>
          <?php endforeach; ?>
        </ul>
      <?php endif; ?>
    </div>
  <?php endif; ?>
</section>
