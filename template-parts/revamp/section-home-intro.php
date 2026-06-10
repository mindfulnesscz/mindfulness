<?php

/**
 * Revamp homepage intro claim and outcome cards.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$statement = $args['statement'] ?? '';
$cards = $args['cards'] ?? [];

if (!$statement && empty($cards)) {
  return;
}

$primary_card = $cards[0] ?? [];
$secondary_cards = array_slice($cards, 1, 2);
?>

<section class="revamp-home-intro" data-revamp-section="home-intro">
  <div class="revamp-home-intro__frame">
    <div class="container revamp-home-intro__inner">
      <?php if ($statement) : ?>
        <div class="revamp-home-intro__title-row">
          <h2 class="revamp-home-intro__statement"><?php echo esc_html($statement); ?></h2>
          <div class="revamp-home-intro__title-spacer" aria-hidden="true"></div>
        </div>
      <?php endif; ?>

      <?php if (!empty($cards) && is_array($cards)) : ?>
        <div class="revamp-home-intro__cards">
          <?php if (!empty($primary_card)) : ?>
            <article class="revamp-home-intro-card revamp-home-intro-card--primary">
              <div class="revamp-home-intro-card__cube-stack" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <?php if (!empty($primary_card['title'])) : ?>
                <h3 class="revamp-home-intro-card__title"><?php echo esc_html($primary_card['title']); ?></h3>
              <?php endif; ?>

              <?php if (!empty($primary_card['text'])) : ?>
                <p class="revamp-home-intro-card__text"><?php echo esc_html($primary_card['text']); ?></p>
              <?php endif; ?>
            </article>
          <?php endif; ?>

          <div class="revamp-home-intro__secondary">
            <?php foreach ($secondary_cards as $card) : ?>
              <article class="revamp-home-intro-card revamp-home-intro-card--secondary">
                <div class="revamp-home-intro-card__ghost-mark" aria-hidden="true">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <?php if (!empty($card['title'])) : ?>
                  <h3 class="revamp-home-intro-card__title"><?php echo esc_html($card['title']); ?></h3>
                <?php endif; ?>

                <?php if (!empty($card['text'])) : ?>
                  <p class="revamp-home-intro-card__text"><?php echo esc_html($card['text']); ?></p>
                <?php endif; ?>
              </article>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>
