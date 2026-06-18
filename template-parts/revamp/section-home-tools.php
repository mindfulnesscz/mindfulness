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
$meta_arrow = $args['meta_arrow'] ?? '';
$variant = !empty($args['variant']) ? sanitize_html_class($args['variant']) : '';
$section_label = $args['section_label'] ?? __('ESS tools carousel controls', 'mindfulness');
$prev_label = $args['prev_label'] ?? __('Previous tool', 'mindfulness');
$next_label = $args['next_label'] ?? __('Next tool', 'mindfulness');
$intro = $args['intro'] ?? [];
$section_classes = 'revamp-home-tools';

if ($variant) {
  $section_classes .= ' revamp-home-tools--' . $variant;
}

if (!$statement && empty($cards)) {
  return;
}
?>

<section class="<?php echo esc_attr($section_classes); ?>" data-revamp-section="<?php echo esc_attr($variant ? 'home-' . $variant : 'home-tools'); ?>" data-tools-carousel<?php echo !$variant ? ' data-motion-tools' : ''; ?>>
    <?php if (!$variant) : ?>
      <span class="revamp-home-tools__rule" data-motion-tools-rule aria-hidden="true"></span>
    <?php endif; ?>
    <div class="revamp-home-tools__frame">
      <div class="container revamp-home-tools__inner">
      <?php if (!empty($intro)) : ?>
        <div class="revamp-home-tools__intro">
          <?php if (!empty($intro['image'])) : ?>
            <img class="revamp-home-tools__intro-mark" src="<?php echo esc_url($intro['image']); ?>" alt="" aria-hidden="true">
          <?php endif; ?>

          <div class="revamp-home-tools__intro-copy">
            <?php if (!empty($intro['title_lines'])) : ?>
              <h2 class="revamp-home-tools__intro-title">
                <?php foreach ($intro['title_lines'] as $line) : ?>
                  <span><?php echo esc_html($line); ?></span>
                <?php endforeach; ?>
              </h2>
            <?php endif; ?>

            <?php if (!empty($intro['description'])) : ?>
              <p class="revamp-home-tools__intro-text"><?php echo esc_html($intro['description']); ?></p>
            <?php endif; ?>
          </div>
        </div>
      <?php elseif ($statement) : ?>
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

            <div class="revamp-home-tools__controls" aria-label="<?php echo esc_attr($section_label); ?>">
              <button class="revamp-home-tools__control revamp-home-tools__control--prev" type="button" data-tools-prev aria-label="<?php echo esc_attr($prev_label); ?>">
                <?php if ($arrow_left) : ?>
                  <img src="<?php echo esc_url($arrow_left); ?>" alt="" aria-hidden="true">
                <?php else : ?>
                  <span aria-hidden="true">&larr;</span>
                <?php endif; ?>
              </button>
              <button class="revamp-home-tools__control revamp-home-tools__control--next" type="button" data-tools-next aria-label="<?php echo esc_attr($next_label); ?>">
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
                $card_url = $card['url'] ?? '';
                ?>
                <article class="revamp-home-tool-card revamp-home-tool-card--<?php echo esc_attr($slug); ?><?php echo $is_active ? ' is-active' : ''; ?>" data-tools-card data-tools-index="<?php echo esc_attr((string) $index); ?>">
                  <?php if ($card_url) : ?>
                    <a class="revamp-home-tool-card__link" href="<?php echo esc_url($card_url); ?>" aria-label="<?php echo esc_attr($card['label'] ?? ($card['title'] ?? __('View product', 'mindfulness'))); ?>">
                  <?php else : ?>
                    <div class="revamp-home-tool-card__link">
                  <?php endif; ?>
                      <div class="revamp-home-tool-card__visual">
                        <?php if (!empty($card['title'])) : ?>
                          <h3 class="revamp-home-tool-card__title" data-title="<?php echo esc_attr($card['title']); ?>"><?php echo esc_html($card['title']); ?></h3>
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
                          <?php if (!empty($card['category'])) : ?>
                            <p class="revamp-home-tool-card__meta-name"><?php echo esc_html($card['label'] ?? ($card['title'] ?? '')); ?></p>
                            <p class="revamp-home-tool-card__meta-category"><?php echo esc_html($card['category']); ?></p>
                          <?php else : ?>
                            <div class="revamp-home-tool-card__meta-copy">
                              <?php if (!empty($card['kicker'])) : ?>
                                <span class="revamp-home-tool-card__meta-kicker"><?php echo esc_html($card['kicker']); ?></span>
                              <?php endif; ?>
                              <p><?php echo esc_html($card['label'] ?? ($card['title'] ?? '')); ?></p>
                            </div>
                          <?php endif; ?>
                          <span class="revamp-home-tool-card__meta-action">
                            <?php if ($meta_arrow) : ?>
                              <img class="revamp-home-tool-card__meta-arrow" src="<?php echo esc_url($meta_arrow); ?>" alt="" aria-hidden="true">
                            <?php else : ?>
                              <span class="revamp-home-tool-card__meta-arrow" aria-hidden="true">&rarr;</span>
                            <?php endif; ?>
                            <span class="revamp-home-tool-card__meta-show"><?php echo esc_html($card['action'] ?? 'Show'); ?></span>
                          </span>
                        </div>

                        <?php if (!empty($card['description'])) : ?>
                          <div class="revamp-home-tool-card__description">
                            <p><?php echo esc_html($card['description']); ?></p>
                          </div>
                        <?php endif; ?>
                      </div>
                  <?php if ($card_url) : ?>
                    </a>
                  <?php else : ?>
                    </div>
                  <?php endif; ?>
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
