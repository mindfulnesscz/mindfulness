<?php

/**
 * Revamp homepage hero section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$eyebrow = $args['eyebrow'] ?? '';
$title = $args['title'] ?? '';
$text = $args['text'] ?? '';
$cta_label = $args['cta_label'] ?? '';
$cta_url = $args['cta_url'] ?? '';
?>

<section class="revamp-home-hero" data-revamp-section="home-hero">
  <div class="revamp-home-hero__media" aria-hidden="true"></div>

  <div class="container revamp-home-hero__inner">
    <div class="revamp-home-hero__copy">
      <?php if ($eyebrow) : ?>
        <p class="revamp-kicker revamp-home-hero__eyebrow"><?php echo esc_html($eyebrow); ?></p>
      <?php endif; ?>

      <?php if ($title) : ?>
        <h1 class="revamp-home-hero__title"><?php echo esc_html($title); ?></h1>
      <?php endif; ?>

      <?php if ($text) : ?>
        <p class="revamp-home-hero__text"><?php echo esc_html($text); ?></p>
      <?php endif; ?>

      <?php if ($cta_label && $cta_url) : ?>
        <a class="revamp-cta-link" href="<?php echo esc_url($cta_url); ?>"><?php echo esc_html($cta_label); ?></a>
      <?php endif; ?>
    </div>
  </div>
</section>
