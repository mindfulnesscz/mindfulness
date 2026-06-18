<?php

/**
 * Revamp site footer.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$template_uri = get_template_directory_uri();

$footer_columns = [
  [
    'title' => 'Products',
    'links' => [
      ['label' => 'Paint IQ', 'url' => home_url('/paint-iq')],
      ['label' => 'Black Box', 'url' => home_url('/black-box')],
      ['label' => 'Anode IQ', 'url' => home_url('/anode-iq')],
      ['label' => 'Sealing', 'url' => home_url('/sealing')],
      ['label' => '', 'url' => ''],
      ['label' => 'PaintShop', 'url' => home_url('/products')],
      ['label' => 'Report', 'url' => home_url('/report')],
      ['label' => 'Merge', 'url' => home_url('/merge')],
      ['label' => 'Sealing', 'url' => home_url('/sealing')],
      ['label' => 'Cloud', 'url' => home_url('/cloud')],
      ['label' => 'Dip Paint', 'url' => home_url('/dip-paint')],
      ['label' => 'E-coating', 'url' => home_url('/e-coating')],
      ['label' => 'Oven Curing', 'url' => home_url('/oven-curing')],
      ['label' => 'Top Coating', 'url' => home_url('/top-coating')],
      ['label' => 'Powder Coating', 'url' => home_url('/powder-coating')],
      ['label' => 'Anodizing', 'url' => home_url('/anodizing')],
      ['label' => 'Data Cleaning', 'url' => home_url('/data-cleaning')],
    ],
  ],
  [
    'title' => 'Services',
    'links' => [
      ['label' => 'Simulation', 'url' => home_url('/services')],
      ['label' => 'Consultation', 'url' => home_url('/services')],
      ['label' => 'Training', 'url' => home_url('/services')],
      ['label' => 'Custom Projects', 'url' => home_url('/services')],
    ],
  ],
  [
    'title' => 'Resources',
    'links' => [
      ['label' => 'Case Studies', 'url' => home_url('/case-studies')],
      ['label' => 'ESS Academy', 'url' => home_url('/ess-academy')],
      ['label' => 'Events', 'url' => get_post_type_archive_link('events') ?: home_url('/events')],
      ['label' => 'News', 'url' => get_post_type_archive_link('news') ?: home_url('/news')],
      ['label' => 'Download', 'url' => home_url('/download')],
    ],
  ],
  [
    'title' => 'Company',
    'links' => [
      ['label' => 'About Us', 'url' => home_url('/about-us')],
      ['label' => 'Team', 'url' => home_url('/about-us#our-team')],
      ['label' => 'Contact', 'url' => home_url('/contact')],
      ['label' => 'Careers', 'url' => home_url('/career')],
    ],
  ],
];
?>

<footer class="ess-revamp-footer" id="ess-footer" data-motion-footer>
  <div class="ess-revamp-footer__main">
    <a class="ess-revamp-footer__brand" href="<?php echo esc_url(home_url('/')); ?>" aria-label="<?php esc_attr_e('ESS home', 'mindfulness'); ?>">
      <img src="<?php echo esc_url($template_uri . '/assets/images/revamp/ess-logo-white.svg'); ?>" alt="ESS" width="112" height="36">
    </a>

    <div class="ess-revamp-footer__body">
      <div class="ess-revamp-footer__contact">
        <div class="ess-revamp-footer__contact-large">
          <a href="tel:0043725220446">+43 7252 20446</a>
          <a href="mailto:info@essteyr.com">info@essteyr.com</a>
        </div>
        <p>ESS Engineering Software Steyr GmbH<br>Berggasse 35,<br>4400 Steyr, Austria</p>
      </div>

      <div class="ess-revamp-footer__menus">
        <?php foreach ($footer_columns as $column) : ?>
          <div class="ess-revamp-footer__column">
            <h2><?php echo esc_html($column['title']); ?></h2>
            <ul>
              <?php foreach ($column['links'] as $link) : ?>
                <?php if (empty($link['label'])) : ?>
                  <li class="ess-revamp-footer__spacer" aria-hidden="true"></li>
                <?php else : ?>
                  <li><a href="<?php echo esc_url($link['url']); ?>"><?php echo esc_html($link['label']); ?></a></li>
                <?php endif; ?>
              <?php endforeach; ?>
            </ul>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </div>

  <div class="ess-revamp-footer__bottom">
    <p>© <?php echo esc_html(date('Y')); ?>, ESS – Engineering Software Steyr GmbH</p>
    <nav aria-label="<?php esc_attr_e('Footer legal navigation', 'mindfulness'); ?>">
      <a href="<?php echo esc_url(home_url('/legal-notice')); ?>"><?php esc_html_e('Legal', 'mindfulness'); ?></a>
      <a href="<?php echo esc_url(home_url('/privacy-policy')); ?>"><?php esc_html_e('Privacy', 'mindfulness'); ?></a>
    </nav>
    <nav class="ess-revamp-footer__social" aria-label="<?php esc_attr_e('Footer social navigation', 'mindfulness'); ?>">
      <a href="<?php echo esc_url('https://www.facebook.com/essteyr'); ?>"><?php esc_html_e('Facebook', 'mindfulness'); ?></a>
      <a href="<?php echo esc_url('https://www.linkedin.com/company/essteyr'); ?>"><?php esc_html_e('LinkedIn', 'mindfulness'); ?></a>
      <a href="<?php echo esc_url('https://www.youtube.com/@essengineeringsoftwarestey7097'); ?>"><?php esc_html_e('YouTube', 'mindfulness'); ?></a>
    </nav>
  </div>
</footer>
