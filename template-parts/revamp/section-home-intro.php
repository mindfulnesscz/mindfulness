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

<section class="revamp-home-intro" data-revamp-section="home-intro" data-motion-intro>
  <span class="revamp-home-intro__rule" data-motion-intro-rule aria-hidden="true"></span>
  <div class="revamp-home-intro__frame">
    <div class="container revamp-home-intro__inner">
      <?php if ($statement) : ?>
        <div class="revamp-home-intro__title-row">
          <h2 class="revamp-home-intro__statement" data-motion-intro-statement>
            <?php
            $statement_words = preg_split('/\s+/', trim($statement));
            foreach ($statement_words as $word_index => $word) :
              if ($word_index > 0) {
                echo ' ';
              }
            ?><span data-motion-intro-word><?php echo esc_html($word); ?></span><?php endforeach; ?>
          </h2>
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
                <h3 class="revamp-home-intro-card__title" data-title="<?php echo esc_attr($primary_card['title']); ?>"><?php echo esc_html($primary_card['title']); ?></h3>
              <?php endif; ?>

              <?php if (!empty($primary_card['text'])) : ?>
                <p class="revamp-home-intro-card__text" data-text="<?php echo esc_attr($primary_card['text']); ?>"><?php echo esc_html($primary_card['text']); ?></p>
              <?php endif; ?>
            </article>
          <?php endif; ?>

          <div class="revamp-home-intro__secondary">
            <?php foreach ($secondary_cards as $card_index => $card) : ?>
              <article class="revamp-home-intro-card revamp-home-intro-card--secondary">
                <div class="revamp-home-intro-card__ghost-mark" aria-hidden="true">
                  <?php
                  $illustration_file = 0 === $card_index ? 'no-defects-neon.svg' : 'trial-error-neon.svg';
                  $illustration_path = get_template_directory() . '/assets/images/revamp/home/intro/' . $illustration_file;
                  $illustration_svg = file_exists($illustration_path) ? file_get_contents($illustration_path) : ''; // phpcs:ignore WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents

                  if ($illustration_svg) {
                    $illustration_svg = preg_replace('/<svg\b/', '<svg class="revamp-home-intro-card__neon-svg" focusable="false"', $illustration_svg, 1);
                    echo $illustration_svg; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
                  }
                  ?>
                </div>

                <?php if (!empty($card['title'])) : ?>
                  <h3 class="revamp-home-intro-card__title" data-title="<?php echo esc_attr($card['title']); ?>"><?php echo esc_html($card['title']); ?></h3>
                <?php endif; ?>

                <?php if (!empty($card['text'])) : ?>
                  <p class="revamp-home-intro-card__text" data-text="<?php echo esc_attr($card['text']); ?>"><?php echo esc_html($card['text']); ?></p>
                <?php endif; ?>
              </article>
            <?php endforeach; ?>
          </div>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>
