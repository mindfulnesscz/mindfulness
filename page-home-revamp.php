<?php

/**
 * Template Name: Home Revamp
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

get_header();

while (have_posts()) :
  the_post();
?>

  <main class="ess-home-revamp">
    <?php
    get_template_part(
      'template-parts/revamp/section',
      'home-hero',
      [
        'eyebrow' => 'ESS Paint Shop Simulation',
        'title' => 'Perfect Paint Shops Digitally. No Physical Testing Needed.',
        'text' => 'ESS replaces physical paint shop testing with digital validation that predicts defects and optimizes production before the line is touched.',
        'cta_label' => 'Request a Demo',
        'cta_url' => home_url('/contact'),
      ]
    );
    ?>
  </main>

<?php
endwhile;

get_footer();
