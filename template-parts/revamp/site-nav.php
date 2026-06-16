<?php

/**
 * Revamp site navigation.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$template_uri = get_template_directory_uri();

$left_links = [
  [
    'label' => 'Products',
    'url' => home_url('/products'),
  ],
  [
    'label' => 'Service',
    'url' => home_url('/services'),
  ],
  [
    'label' => 'Resources',
    'url' => home_url('/case-studies'),
  ],
];

$right_links = [
  [
    'label' => 'Company',
    'url' => home_url('/about-us'),
  ],
  [
    'label' => 'Account',
    'url' => home_url('/account'),
  ],
];
?>

<nav class="ess-revamp-nav" aria-label="<?php esc_attr_e('Revamp primary navigation', 'mindfulness'); ?>">
  <a class="ess-revamp-nav__brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('ESS home', 'mindfulness'); ?>">
    <img src="<?php echo esc_url($template_uri . '/assets/images/revamp/ess-logo-white.svg'); ?>" alt="ESS" width="64" height="21">
  </a>

  <div class="ess-revamp-nav__group ess-revamp-nav__group--center">
    <?php foreach ($left_links as $link) : ?>
      <a class="ess-revamp-nav__link" href="<?php echo esc_url($link['url']); ?>"><?php echo esc_html($link['label']); ?></a>
    <?php endforeach; ?>
  </div>

  <div class="ess-revamp-nav__group ess-revamp-nav__group--right">
    <?php foreach ($right_links as $link) : ?>
      <a class="ess-revamp-nav__link" href="<?php echo esc_url($link['url']); ?>"><?php echo esc_html($link['label']); ?></a>
    <?php endforeach; ?>
  </div>

  <a class="ess-revamp-nav__demo" href="<?php echo esc_url(home_url('/contact')); ?>">
    <?php esc_html_e('Request a Demo', 'mindfulness'); ?>
  </a>
</nav>
