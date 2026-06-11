<?php

/**
 * Revamp homepage digital validation process section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$title = $args['title'] ?? '';
$image = $args['image'] ?? '';
$image_alt = $args['image_alt'] ?? '';
$cards = $args['cards'] ?? [];
$marker_plus = $args['marker_plus'] ?? '';
$marker_plus_active = $args['marker_plus_active'] ?? '';
$active_key = '';

if (!$title && !$image && empty($cards)) {
  return;
}

foreach ($cards as $card) {
  if (!empty($card['active'])) {
    $active_key = $card['key'] ?? sanitize_title($card['title'] ?? '');
    break;
  }
}

if (!$active_key && !empty($cards[0])) {
  $active_key = $cards[0]['key'] ?? sanitize_title($cards[0]['title'] ?? '');
}
?>

<section class="revamp-home-process" data-revamp-section="home-process" data-process-section data-process-default="<?php echo esc_attr($active_key); ?>">
  <div class="revamp-home-process__frame">
    <div class="container revamp-home-process__inner">
      <div class="revamp-home-process__title-row">
        <?php if ($title) : ?>
          <h2 class="revamp-home-process__title"><?php echo esc_html($title); ?></h2>
        <?php endif; ?>
        <span class="revamp-home-process__title-spacer" aria-hidden="true"></span>
      </div>

      <div class="revamp-home-process__body">
        <?php if (!empty($cards) && is_array($cards)) : ?>
          <div class="revamp-home-process__cards" aria-label="Paint shop process risks">
            <?php foreach ($cards as $card) :
              $card_key = $card['key'] ?? sanitize_title($card['title'] ?? '');
              $card_title = $card['title'] ?? '';
              $card_text = $card['text'] ?? '';
              $card_icon = $card['icon'] ?? '';
              $is_active = $card_key === $active_key;
            ?>
              <article
                class="revamp-home-process-card<?php echo $is_active ? ' is-active' : ''; ?>"
                role="button"
                tabindex="0"
                aria-pressed="<?php echo $is_active ? 'true' : 'false'; ?>"
                data-process-target="<?php echo esc_attr($card_key); ?>"
              >
                <?php if ($card_icon) : ?>
                  <span class="revamp-home-process-card__icon revamp-home-process-card__icon--<?php echo esc_attr($card_key); ?>" aria-hidden="true">
                    <img src="<?php echo esc_url($card_icon); ?>" alt="" loading="lazy" />
                  </span>
                <?php endif; ?>

                <span class="revamp-home-process-card__copy">
                  <?php if ($card_title) : ?>
                    <span class="revamp-home-process-card__title"><?php echo esc_html($card_title); ?></span>
                  <?php endif; ?>

                  <?php if ($card_text) : ?>
                    <span class="revamp-home-process-card__text"><?php echo esc_html($card_text); ?></span>
                  <?php endif; ?>
                </span>
              </article>
            <?php endforeach; ?>
          </div>
        <?php endif; ?>

        <div class="revamp-home-process__visual" aria-label="Interactive body-in-white process graphic">
          <div class="revamp-home-process__visual-stage">
            <?php if ($image) : ?>
              <img class="revamp-home-process__image" src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="lazy" />
            <?php endif; ?>

            <?php foreach ($cards as $card) :
              $card_key = $card['key'] ?? sanitize_title($card['title'] ?? '');
              $card_title = $card['title'] ?? '';
              $marker_position = $card['marker'] ?? '';
              $marker_class = $marker_position === 'hex' ? 'left' : $marker_position;
              $is_active = $card_key === $active_key;

              if (!$marker_plus || !$marker_plus_active || !$marker_class) {
                continue;
              }
            ?>
              <button
                class="revamp-home-process__marker revamp-home-process__marker--<?php echo esc_attr($marker_class); ?><?php echo $is_active ? ' is-active' : ''; ?>"
                type="button"
                aria-label="<?php echo esc_attr(sprintf(__('Show %s', 'mindfulness'), $card_title)); ?>"
                aria-pressed="<?php echo $is_active ? 'true' : 'false'; ?>"
                data-process-target="<?php echo esc_attr($card_key); ?>"
              >
                <span class="revamp-home-process__marker-asset revamp-home-process__marker-asset--idle" aria-hidden="true">
                  <img src="<?php echo esc_url($marker_plus); ?>" alt="" loading="lazy" />
                </span>
                <span class="revamp-home-process__marker-asset revamp-home-process__marker-asset--active" aria-hidden="true">
                  <img src="<?php echo esc_url($marker_plus_active); ?>" alt="" loading="lazy" />
                </span>
              </button>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
