<?php

/**
 * Revamp homepage ESS tools carousel section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$statement = $args['statement'] ?? '';
$eyebrow = $args['eyebrow'] ?? '';
$cards = $args['cards'] ?? [];
$arrow_left = $args['arrow_left'] ?? '';
$arrow_right = $args['arrow_right'] ?? '';

if (!$statement && empty($cards)) {
  return;
}
?>

<section class="revamp-home-tools" data-revamp-section="home-tools" data-tools-carousel>
  <div class="revamp-home-tools__frame">
    <div class="container revamp-home-tools__inner">
      <?php if ($statement) : ?>
        <div class="revamp-home-tools__title-row">
          <h2 class="revamp-home-tools__statement"><?php echo esc_html($statement); ?></h2>
          <div class="revamp-home-tools__title-spacer" aria-hidden="true"></div>
        </div>
      <?php endif; ?>

      <?php if (!empty($cards)) : ?>
        <div class="revamp-home-tools__carousel">
          <div class="revamp-home-tools__carousel-head">
            <?php if ($eyebrow) : ?>
              <p class="revamp-home-tools__eyebrow"><?php echo esc_html($eyebrow); ?></p>
            <?php endif; ?>

            <div class="revamp-home-tools__controls" aria-label="<?php esc_attr_e('ESS tools carousel controls', 'mindfulness'); ?>">
              <button class="revamp-home-tools__control revamp-home-tools__control--prev" type="button" data-tools-prev aria-label="<?php esc_attr_e('Previous tool', 'mindfulness'); ?>">
                <?php if ($arrow_left) : ?>
                  <img src="<?php echo esc_url($arrow_left); ?>" alt="" aria-hidden="true">
                <?php else : ?>
                  <span aria-hidden="true">&larr;</span>
                <?php endif; ?>
              </button>
              <button class="revamp-home-tools__control revamp-home-tools__control--next" type="button" data-tools-next aria-label="<?php esc_attr_e('Next tool', 'mindfulness'); ?>">
                <?php if ($arrow_right) : ?>
                  <img src="<?php echo esc_url($arrow_right); ?>" alt="" aria-hidden="true">
                <?php else : ?>
                  <span aria-hidden="true">&rarr;</span>
                <?php endif; ?>
              </button>
            </div>
          </div>

          <div class="revamp-home-tools__viewport" data-tools-viewport>
            <div class="revamp-home-tools__track" data-tools-track>
              <?php foreach ($cards as $index => $card) : ?>
                <?php
                $slug = $card['slug'] ?? sanitize_title($card['title'] ?? ('tool-' . $index));
                $is_active = !empty($card['active']);
                ?>
                <article class="revamp-home-tool-card revamp-home-tool-card--<?php echo esc_attr($slug); ?><?php echo $is_active ? ' is-active' : ''; ?>" data-tools-card data-tools-index="<?php echo esc_attr((string) $index); ?>">
                  <div class="revamp-home-tool-card__visual">
                    <?php if (!empty($card['title'])) : ?>
                      <h3 class="revamp-home-tool-card__title"><?php echo esc_html($card['title']); ?></h3>
                    <?php endif; ?>

                    <?php if (!empty($card['image'])) : ?>
                      <img class="revamp-home-tool-card__image" src="<?php echo esc_url($card['image']); ?>" alt="<?php echo esc_attr($card['image_alt'] ?? ''); ?>">
                    <?php endif; ?>

                    <?php if (!empty($card['icon'])) : ?>
                      <img class="revamp-home-tool-card__icon" src="<?php echo esc_url($card['icon']); ?>" alt="" aria-hidden="true">
                    <?php endif; ?>
                  </div>

                  <div class="revamp-home-tool-card__meta">
                    <div class="revamp-home-tool-card__meta-head">
                      <p><?php echo esc_html($card['label'] ?? ($card['title'] ?? '')); ?></p>
                      <span><?php echo esc_html($card['action'] ?? 'Show'); ?></span>
                    </div>

                    <?php if (!empty($card['description'])) : ?>
                      <div class="revamp-home-tool-card__description">
                        <p><?php echo esc_html($card['description']); ?></p>
                      </div>
                    <?php endif; ?>
                  </div>
                </article>
              <?php endforeach; ?>
            </div>
          </div>

          <div class="revamp-home-tools__indicator" aria-hidden="true">
            <span data-tools-indicator></span>
          </div>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>
