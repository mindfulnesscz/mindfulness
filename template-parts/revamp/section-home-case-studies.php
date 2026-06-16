<?php

/**
 * Revamp homepage case studies section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$title = $args['title'] ?? '';
$cases = $args['cases'] ?? [];

if (!$title && empty($cases)) {
  return;
}
?>

<section class="revamp-home-cases" data-revamp-section="home-case-studies">
  <div class="revamp-home-cases__header">
    <div class="container revamp-home-cases__header-inner">
      <?php if ($title) : ?>
        <div class="revamp-home-cases__title-row">
          <h2 class="revamp-home-cases__title"><?php echo esc_html($title); ?></h2>
          <div class="revamp-home-cases__title-spacer" aria-hidden="true"></div>
        </div>
      <?php endif; ?>
    </div>
  </div>

  <?php if (!empty($cases)) : ?>
    <div class="revamp-home-cases__list">
      <?php foreach ($cases as $index => $case) : ?>
        <?php
        $corner_class = 0 === $index ? ' revamp-home-case--first' : '';
        $corner_class .= count($cases) - 1 === $index ? ' revamp-home-case--last' : '';
        ?>
        <article class="revamp-home-case<?php echo esc_attr($corner_class); ?>">
          <div class="container revamp-home-case__inner">
            <div class="revamp-home-case__media" aria-hidden="true">
              <?php if (!empty($case['image'])) : ?>
                <img src="<?php echo esc_url($case['image']); ?>" alt="" loading="lazy">
              <?php endif; ?>
            </div>

            <div class="revamp-home-case__content">
              <div class="revamp-home-case__main">
                <?php if (!empty($case['logo'])) : ?>
                  <img class="revamp-home-case__logo" src="<?php echo esc_url($case['logo']); ?>" alt="<?php echo esc_attr($case['logo_alt'] ?? ''); ?>" decoding="async">
                <?php endif; ?>

                <?php if (!empty($case['title'])) : ?>
                  <h3 class="revamp-home-case__title"><?php echo wp_kses_post($case['title']); ?></h3>
                <?php endif; ?>
              </div>

              <?php if (!empty($case['description'])) : ?>
                <div class="revamp-home-case__summary">
                  <p><?php echo esc_html($case['description']); ?></p>
                </div>
              <?php endif; ?>

              <?php if (!empty($case['link_label'])) : ?>
                <?php if (!empty($case['url'])) : ?>
                  <a class="revamp-home-case__link" href="<?php echo esc_url($case['url']); ?>"><?php echo esc_html($case['link_label']); ?></a>
                <?php else : ?>
                  <span class="revamp-home-case__link"><?php echo esc_html($case['link_label']); ?></span>
                <?php endif; ?>
              <?php endif; ?>
            </div>
          </div>
        </article>
      <?php endforeach; ?>
    </div>
  <?php endif; ?>
</section>
