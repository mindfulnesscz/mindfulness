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

if (!$title && !$image && empty($cards)) {
  return;
}
?>

<section class="revamp-home-process" data-revamp-section="home-process">
  <div class="container revamp-home-process__inner">
    <?php if ($title) : ?>
      <h2 class="revamp-home-process__title"><?php echo esc_html($title); ?></h2>
    <?php endif; ?>

    <div class="revamp-home-process__body">
      <?php if (!empty($cards) && is_array($cards)) : ?>
        <div class="revamp-home-process__cards">
          <?php foreach ($cards as $card) :
            $card_title = $card['title'] ?? '';
            $card_text = $card['text'] ?? '';
            $is_active = !empty($card['active']);
          ?>
            <article class="revamp-home-process-card<?php echo $is_active ? ' is-active' : ''; ?>">
              <span class="revamp-home-process-card__icon" aria-hidden="true"></span>

              <?php if ($card_title) : ?>
                <h3 class="revamp-home-process-card__title"><?php echo esc_html($card_title); ?></h3>
              <?php endif; ?>

              <?php if ($card_text) : ?>
                <p class="revamp-home-process-card__text"><?php echo esc_html($card_text); ?></p>
              <?php endif; ?>
            </article>
          <?php endforeach; ?>
        </div>
      <?php endif; ?>

      <div class="revamp-home-process__visual">
        <?php if ($image) : ?>
          <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="lazy" />
        <?php endif; ?>

        <span class="revamp-home-process__marker revamp-home-process__marker--top" aria-hidden="true">+</span>
        <span class="revamp-home-process__marker revamp-home-process__marker--left" aria-hidden="true"></span>
        <span class="revamp-home-process__marker revamp-home-process__marker--right" aria-hidden="true">+</span>
        <span class="revamp-home-process__marker revamp-home-process__marker--bottom" aria-hidden="true">+</span>
      </div>
    </div>

    <div class="revamp-home-process__toggles" aria-label="Validation mode">
      <span class="is-active">Risks</span>
      <span>Optimization</span>
    </div>
  </div>
</section>
