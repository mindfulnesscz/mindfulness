<?php

/**
 * Template Name: Home Revamp
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

get_header('revamp');

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

$intro_cards = [
  [
    'title' => 'No physical testing',
    'text' => 'Validate paint shop processes digitally before production trials are needed.',
    'size' => 'large',
  ],
  [
    'title' => 'No defects in production',
    'text' => 'Predict coating risks before they appear on finished parts.',
    'size' => 'small',
  ],
  [
    'title' => 'No more trial-and-error',
    'text' => 'Replace trial-and-error setup with simulation, measurement, and process optimization.',
    'size' => 'small',
  ],
];

$process_cards = [
  [
    'key' => 'geometry',
    'title' => 'Geometry risks',
    'text' => 'Early coating risks in CAD and BIW geometry.',
    'icon' => $template_uri . '/assets/images/revamp/home/process/icon-geometry.svg',
    'marker' => 'hex',
    'active' => true,
  ],
  [
    'key' => 'liquid',
    'title' => 'Trapped liquid',
    'text' => 'Drainage risks before paint carryover.',
    'icon' => $template_uri . '/assets/images/revamp/home/process/icon-liquid.svg',
    'marker' => 'top',
    'active' => false,
  ],
  [
    'key' => 'air',
    'title' => 'Air entrapment',
    'text' => 'Trapped air before unpainted areas appear.',
    'icon' => $template_uri . '/assets/images/revamp/home/process/icon-air.svg',
    'marker' => 'right',
    'active' => false,
  ],
  [
    'key' => 'film',
    'title' => 'Film build',
    'text' => 'Coverage and coating thickness before testing.',
    'icon' => $template_uri . '/assets/images/revamp/home/process/icon-film.svg',
    'marker' => 'bottom',
    'active' => false,
  ],
];

$tools_cards = [
  [
    'slug' => 'paint-iq',
    'title' => 'Paint IQ',
    'label' => 'PaintIQ',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/tools/paint-iq-biw.png',
    'image_alt' => 'Blue body-in-white Paint IQ validation model',
    'icon' => $template_uri . '/assets/images/revamp/home/tools/icon-paint-iq.svg',
    'active' => false,
  ],
  [
    'slug' => 'black-box',
    'title' => 'Black Box',
    'label' => 'Black Box',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/tools/black-box-biw.png',
    'image_alt' => 'Blue Black Box automotive risk model',
    'icon' => $template_uri . '/assets/images/revamp/home/tools/icon-black-box.svg',
    'active' => true,
  ],
  [
    'slug' => 'anode-iq',
    'title' => 'Anode IQ',
    'label' => 'Anode IQ',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/tools/anode-iq-biw.png',
    'image_alt' => 'Blue Anode IQ vehicle body model',
    'icon' => $template_uri . '/assets/images/revamp/home/tools/icon-anode-iq.svg',
    'active' => false,
  ],
  [
    'slug' => 'sealing',
    'title' => 'Sealing',
    'label' => 'Sealing',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/tools/sealing-tool.png',
    'image_alt' => 'Blue sealing robot tool',
    'icon' => $template_uri . '/assets/images/revamp/home/tools/icon-sealing.svg',
    'active' => false,
  ],
];

$modules_cards = [
  [
    'slug' => 'dip-paint',
    'title' => 'DipPaint',
    'category' => 'Module',
    'label' => 'DipPaint',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/modules/dip-paint-biw.png',
    'image_alt' => 'Blue body-in-white dip paint simulation model',
    'icon' => $template_uri . '/assets/images/revamp/home/modules/icon-dip-paint.svg',
    'active' => false,
  ],
  [
    'slug' => 'merge',
    'title' => 'Merge',
    'category' => 'Utility',
    'label' => 'PaintIQ',
    'action' => 'Show',
    'description' => 'Here will be three lines description about the product. Here will be three lines description about the product.',
    'image' => $template_uri . '/assets/images/revamp/home/modules/merge-biw.png',
    'image_alt' => 'Blue vehicle body merge utility model',
    'icon' => $template_uri . '/assets/images/revamp/home/modules/icon-merge.svg',
    'active' => true,
  ],
  [
    'slug' => 'module-sealing',
    'title' => 'Sealing',
    'category' => 'Module',
    'label' => 'Sealing',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/modules/sealing-biw.png',
    'image_alt' => 'Blue sealing module vehicle body model',
    'icon' => $template_uri . '/assets/images/revamp/home/modules/icon-sealing.svg',
    'active' => false,
  ],
  [
    'slug' => 'report',
    'title' => 'Report',
    'category' => 'Module',
    'label' => 'Report',
    'action' => 'Show',
    'description' => 'Fast, reliable and cost-effective tool that can be used by anyone, developed for ease of use and quick turnaround times.',
    'image' => $template_uri . '/assets/images/revamp/home/modules/report-tool.png',
    'image_alt' => 'Blue report module robot tool',
    'icon' => $template_uri . '/assets/images/revamp/home/modules/icon-report.svg',
    'active' => false,
  ],
];

$case_studies = [
  [
    'title' => 'The Audi ESS Journey<br>in Transformative<br>Paint Shop Innovation',
    'description' => 'Audi uses ESS technologies to reduce physical testing, validate paint shop processes digitally, and detect coating risks before production starts.',
    'image' => $template_uri . '/assets/images/revamp/home/case-studies/audi-car.png',
    'logo' => $template_uri . '/assets/images/revamp/home/case-studies/logo-audi.svg',
    'logo_alt' => 'Audi',
    'link_label' => 'View Case Study',
    'url' => home_url('/case-studies'),
  ],
  [
    'title' => 'Paint Shop Simulation<br>Proven in Production',
    'description' => 'Audi uses ESS technologies to reduce physical testing, validate paint shop processes digitally, and detect coating risks before production starts.',
    'image' => $template_uri . '/assets/images/revamp/home/case-studies/skoda-factory.png',
    'logo' => $template_uri . '/assets/images/revamp/home/case-studies/logo-skoda.svg',
    'logo_alt' => 'Skoda',
    'link_label' => 'View Case Study',
    'url' => home_url('/case-studies'),
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

    get_template_part(
      'template-parts/revamp/section',
      'home-intro',
      [
        'statement' => 'ESS replaces physical paint shop testing with digital validation that predicts defects and optimizes production before the line is touched.',
        'cards' => $intro_cards,
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-process',
      [
        'title' => 'Digitally validate the full paint shop process',
        'image' => $template_uri . '/assets/images/revamp/home/process/biw-process.png',
        'image_alt' => 'Blue digital body-in-white validation model',
        'cards' => $process_cards,
        'marker_plus' => $template_uri . '/assets/images/revamp/home/process/marker-plus.svg',
        'marker_plus_active' => $template_uri . '/assets/images/revamp/home/process/marker-plus-active.svg',
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-paint-iq',
      [
        'title' => 'Paint IQ',
        'headline' => 'Measure. Optimise. Spray.',
        'description' => 'A standalone laser sensor system that replaces manual spray measurement with a 5-second scan, generates optimized robot paths, and predicts 3D film build before a single production body is sprayed.',
        'background' => $template_uri . '/assets/images/revamp/home/paint-iq/background.png',
        'cta' => [
          'label' => 'Explore PaintIQ',
          'url' => home_url('/paint-iq'),
        ],
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-tools',
      [
        'statement' => 'ESS replaces physical paint shop testing with digital validation that predicts defects and optimizes production before the line is touched.',
        'eyebrow' => 'Discover ess products',
        'cards' => $tools_cards,
        'arrow_left' => $template_uri . '/assets/images/revamp/home/tools/arrow-left.svg',
        'arrow_right' => $template_uri . '/assets/images/revamp/home/tools/arrow-right.svg',
        'meta_arrow' => $template_uri . '/assets/images/revamp/home/tools/meta-arrow.svg',
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-numbers',
      [
        'title_lines' => [
          'Paint Shop Simulation',
          'Proven in Production',
        ],
        'graphic' => $template_uri . '/assets/images/revamp/home/numbers/numbers-graphic.svg',
        'graphic_alt' => 'Experience numbers over a dotted world map',
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-tools',
      [
        'variant' => 'modules',
        'intro' => [
          'image' => $template_uri . '/assets/images/revamp/home/modules/paintshop-mark.svg',
          'title_lines' => [
            'ess',
            'PaintShop',
          ],
          'description' => 'PaintShop brings ESS simulation tools into one modular platform for validating and optimizing the full automotive paint shop process.',
        ],
        'eyebrow' => '',
        'cards' => $modules_cards,
        'arrow_left' => $template_uri . '/assets/images/revamp/home/modules/arrow-right.svg',
        'arrow_right' => $template_uri . '/assets/images/revamp/home/modules/arrow-right.svg',
        'meta_arrow' => $template_uri . '/assets/images/revamp/home/modules/meta-arrow.svg',
        'section_label' => __('Paintshop modules carousel controls', 'mindfulness'),
        'prev_label' => __('Previous module', 'mindfulness'),
        'next_label' => __('Next module', 'mindfulness'),
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-services',
      [
        'statement' => 'ESS supports the full path from digital validation to production use, helping paint shop teams simulate processes, interpret results, implement solutions, and extend the technology to specific production challenges.',
        'eyebrow' => 'Engineering Support',
        'items' => [
          'Simulation',
          'Consultation',
          'Training',
          'Custom Projects',
        ],
        'background' => $template_uri . '/assets/images/revamp/home/services/background.png',
      ]
    );

    get_template_part(
      'template-parts/revamp/section',
      'home-case-studies',
      [
        'title' => 'Real Paint Shop Results',
        'cases' => $case_studies,
      ]
    );
    ?>
  </main>

<?php
endwhile;

get_footer('revamp');
