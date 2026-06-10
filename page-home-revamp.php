<?php

/**
 * Template Name: Home Revamp
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

get_header();

$template_uri = get_template_directory_uri();

$hero_slides = [
  [
    'title' => 'Perfect Paint Shops Digitally',
    'description' => 'Validate paint shop processes, predict coating risks, and optimize production decisions before physical testing starts.',
    'tab_title' => 'Digital paint shop validation',
    'image' => $template_uri . '/assets/images/revamp/home/hero-biw.png',
    'image_alt' => 'Blue digital body-in-white automotive structure',
    'ctas' => [
      [
        'label' => 'View Products',
        'url' => home_url('/products'),
      ],
      [
        'label' => 'Contact Us',
        'url' => home_url('/contact'),
      ],
    ],
  ],
  [
    'title' => 'Measure. Optimize. Spray.',
    'description' => 'Use ESS software to shorten spray validation loops, improve robot paths, and reduce costly paint shop trial runs.',
    'tab_title' => 'Paint IQ optimization',
    'image' => $template_uri . '/assets/images/Artboard 1-8.png',
    'image_alt' => 'Digital automotive body geometry for Paint IQ',
    'ctas' => [
      [
        'label' => 'Explore Paint IQ',
        'url' => home_url('/paint-iq'),
      ],
      [
        'label' => 'Request Demo',
        'url' => home_url('/contact'),
      ],
    ],
  ],
  [
    'title' => 'Find Coating Risks Early',
    'description' => 'Identify air entrapment, paint carry over, and coverage-sensitive geometry while designs can still change.',
    'tab_title' => 'Black Box risk detection',
    'image' => $template_uri . '/assets/images/BlackBoxImages/BlackBoxHeroIllust.png',
    'image_alt' => 'Digital body-in-white geometry for Black Box risk checks',
    'ctas' => [
      [
        'label' => 'View Black Box',
        'url' => home_url('/black-box'),
      ],
      [
        'label' => 'Talk to ESS',
        'url' => home_url('/contact'),
      ],
    ],
  ],
  [
    'title' => 'Simulate the Full Process',
    'description' => 'Bring dip paint, sealing, oven curing, top coating, and reporting into one digital validation workflow.',
    'tab_title' => 'Full process simulation',
    'image' => $template_uri . '/assets/images/BlackBoxImages/Black Box GUI.png',
    'image_alt' => 'Blue automotive body simulation visual',
    'ctas' => [
      [
        'label' => 'View Platform',
        'url' => home_url('/products'),
      ],
      [
        'label' => 'Contact Us',
        'url' => home_url('/contact'),
      ],
    ],
  ],
  [
    'title' => 'Engineering Support That Ships',
    'description' => 'Work with ESS experts on simulation, consulting, training, and custom production challenges.',
    'tab_title' => 'Engineering support',
    'image' => $template_uri . '/assets/images/cube/illust-simulations.webp',
    'image_alt' => 'Automotive engineering validation visual',
    'ctas' => [
      [
        'label' => 'Speak With an Expert',
        'url' => home_url('/contact'),
      ],
    ],
  ],
];

while (have_posts()) :
  the_post();
?>

  <main class="ess-home-revamp">
    <?php
    get_template_part(
      'template-parts/revamp/section',
      'home-hero',
      [
        'slides' => $hero_slides,
      ]
    );
    ?>
  </main>

<?php
endwhile;

get_footer();
