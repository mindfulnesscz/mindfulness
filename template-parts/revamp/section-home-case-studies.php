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

<section class="revamp-home-cases" data-revamp-section="home-case-studies" data-motion-cases>
  <div class="revamp-home-cases__header">
    <span class="revamp-home-cases__header-rule" data-motion-cases-header-rule aria-hidden="true"></span>
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
        $case_url = $case['url'] ?? '';
        $media_label = !empty($case['title']) ? wp_strip_all_tags($case['title']) : __('View case study', 'mindfulness');
        ?>
        <article class="revamp-home-case<?php echo esc_attr($corner_class); ?>" data-motion-case>
          <span class="revamp-home-case__rule" data-motion-case-rule aria-hidden="true"></span>
          <div class="container revamp-home-case__inner">
            <?php if ($case_url) : ?>
              <a class="revamp-home-case__media" href="<?php echo esc_url($case_url); ?>" aria-label="<?php echo esc_attr($media_label); ?>">
            <?php else : ?>
              <div class="revamp-home-case__media" aria-hidden="true">
            <?php endif; ?>
              <?php if (!empty($case['image'])) : ?>
                <img src="<?php echo esc_url($case['image']); ?>" alt="" loading="lazy">
              <?php endif; ?>
            <?php if ($case_url) : ?>
              </a>
            <?php else : ?>
              </div>
            <?php endif; ?>

            <div class="revamp-home-case__content">
              <?php if ($case_url) : ?>
                <a class="revamp-home-case__detail-link" href="<?php echo esc_url($case_url); ?>">
              <?php else : ?>
                <div class="revamp-home-case__detail-link">
              <?php endif; ?>
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
              <?php if ($case_url) : ?>
                </a>
              <?php else : ?>
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
