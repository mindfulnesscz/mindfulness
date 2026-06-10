<?php

/**
 * Revamp homepage hero carousel section.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$slides = $args['slides'] ?? [];

if (empty($slides) || !is_array($slides)) {
  return;
}
?>

<section class="revamp-home-hero" data-home-hero-carousel data-revamp-section="home-hero">
  <div class="revamp-home-hero__background" aria-hidden="true"></div>
  <div class="revamp-home-hero__hexagon" aria-hidden="true"></div>

  <div class="revamp-home-hero__controls" aria-label="Homepage carousel controls">
    <button class="revamp-home-hero__arrow" type="button" data-carousel-prev aria-label="Previous slide">
      <span aria-hidden="true">&larr;</span>
    </button>
    <button class="revamp-home-hero__arrow" type="button" data-carousel-next aria-label="Next slide">
      <span aria-hidden="true">&rarr;</span>
    </button>
  </div>

  <div class="revamp-home-hero__slides">
    <?php foreach ($slides as $index => $slide) :
      $title = $slide['title'] ?? '';
      $description = $slide['description'] ?? '';
      $image = $slide['image'] ?? '';
      $image_alt = $slide['image_alt'] ?? '';
      $ctas = $slide['ctas'] ?? [];
      $is_active = $index === 0;
    ?>
      <article
        class="revamp-home-hero__slide<?php echo $is_active ? ' is-active' : ''; ?>"
        data-carousel-slide
        aria-hidden="<?php echo $is_active ? 'false' : 'true'; ?>"
        <?php echo $is_active ? '' : 'inert'; ?>
      >
        <div class="container revamp-home-hero__inner">
          <div class="revamp-home-hero__content">
            <div class="revamp-home-hero__copy">
              <div class="revamp-home-hero__rule" aria-hidden="true"></div>

              <?php if ($title) : ?>
                <?php if ($index === 0) : ?>
                  <h1 class="revamp-home-hero__title"><?php echo esc_html($title); ?></h1>
                <?php else : ?>
                  <h2 class="revamp-home-hero__title"><?php echo esc_html($title); ?></h2>
                <?php endif; ?>
              <?php endif; ?>

              <?php if ($description) : ?>
                <p class="revamp-home-hero__text"><?php echo esc_html($description); ?></p>
              <?php endif; ?>

              <?php if (!empty($ctas) && is_array($ctas)) : ?>
                <div class="revamp-home-hero__actions">
                  <?php foreach ($ctas as $cta) :
                    get_template_part(
                      'template-parts/revamp/component',
                      'cta-button',
                      [
                        'label' => $cta['label'] ?? '',
                        'url' => $cta['url'] ?? '',
                        'class' => 'revamp-home-hero__cta',
                      ]
                    );
                  endforeach; ?>
                </div>
              <?php endif; ?>
            </div>

            <?php if ($image) : ?>
              <div class="revamp-home-hero__visual">
                <img src="<?php echo esc_url($image); ?>" alt="<?php echo esc_attr($image_alt); ?>" loading="<?php echo $is_active ? 'eager' : 'lazy'; ?>" />
              </div>
            <?php endif; ?>
          </div>
        </div>
      </article>
    <?php endforeach; ?>
  </div>

  <div class="container revamp-home-hero__tabs-wrap">
    <div class="revamp-home-hero__tabs" role="tablist" aria-label="Homepage hero slides">
      <?php foreach ($slides as $index => $slide) :
        $tab_title = $slide['tab_title'] ?? ($slide['title'] ?? '');
        $tab_image = $slide['thumbnail'] ?? ($slide['image'] ?? '');
        $is_active = $index === 0;
      ?>
        <button
          class="revamp-home-hero__tab<?php echo $is_active ? ' is-active' : ''; ?>"
          type="button"
          role="tab"
          data-carousel-tab
          data-carousel-index="<?php echo esc_attr($index); ?>"
          aria-selected="<?php echo $is_active ? 'true' : 'false'; ?>"
        >
          <?php if ($tab_image) : ?>
            <span class="revamp-home-hero__tab-thumb" aria-hidden="true">
              <img src="<?php echo esc_url($tab_image); ?>" alt="" loading="lazy" />
            </span>
          <?php endif; ?>
          <span class="revamp-home-hero__tab-label"><?php echo esc_html($tab_title); ?></span>
        </button>
      <?php endforeach; ?>
    </div>
  </div>
</section>
