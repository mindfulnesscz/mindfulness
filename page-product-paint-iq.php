<?php

/**
 * Template Name: Product PaintIQ
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

get_header();

$template_uri = get_template_directory_uri();
$paintiq_assets = '/assets/images/paint-iq-images/';
$paintiq_assets_path = get_template_directory() . $paintiq_assets;

/**
 * Outputs width/height attributes for a paint-iq image so the browser
 * reserves the correct box before the lazy image loads, preventing the
 * layout shift that was throwing off the Lenis scroll height calculation.
 */
function paintiq_image_dims($filename) {
  global $paintiq_assets_path;
  $size = @getimagesize($paintiq_assets_path . $filename);
  return $size ? sprintf(' width="%d" height="%d"', $size[0], $size[1]) : '';
}

$intro_cards = [
  [
    'logo' => 'ess-paint-iq.svg',
    'title' => 'Set a 5-second scan as your new standard.',
    'text' => 'PaintIQ captures your actual spray pattern, characterises the atomizer, and hands your engineers everything they need to build an optimised robot program and predict film build on the real part geometry.',
    'image' => 'intro-paintiq.webp',
  ],
  [
    'logo' => 'paint-iq-plus.svg',
    'title' => 'Close the loop — from scan to robot, automatically.',
    'text' => 'PaintIQ+ takes the measurement further: it reads your existing robot program, predicts film build across every layer in a digital twin, optimizes the path against minimum spec, and writes the approved program straight back to the controller.',
    'image' => 'intro-paintiq-plus.webp',
  ],
];

$challenges = [
  [
    'title' => 'Overcoating & Material waste',
    'text' => 'Engineers add 3 to 7 µm of safety margin per layer above the minimum spec because there\'s no reliable way to see the actual film build on a real 3D surface. At 300,000 bodies per year, that margin costs €825,000 annually.',
    'icon' => 'overcoating.svg',
  ],
  [
    'title' => 'Transfer efficiency & Overspray',
    'text' => 'Robot paths are optimized for flat plates, not real geometry. The result: up to 50% of sprayed paint becomes overspray on a BIW line — and on bumper lines, it can climb to 65%.',
    'icon' => 'transfer-efficiency.svg',
  ],
  [
    'title' => 'Daily QC & Manual plate method',
    'text' => 'Three cells, 220 production days, one hour of plate measurement per cell per day. That is 660 operator hours per year spent on a method that gives you one number with no spatial information.',
    'icon' => 'daily-qc.svg',
  ],
  [
    'title' => 'Commissioning & Time to production',
    'text' => 'Programming a full car body robot path manually takes 120 to 200 hours. Each new colour, each new model, each facelift starts that clock again.',
    'icon' => 'commissioning.svg',
  ],
  [
    'title' => 'Prototype trials you could skip',
    'text' => '3 to 5 spray trials per model to validate film build. Each one requires physical measurements at up to 100 points on the part, and delays your SOP.',
    'icon' => 'blind-spots.svg',
  ],
  [
    'title' => 'Undocumented process knowledge',
    'text' => 'Your paint process runs on the experience of a few key people and because there\'s no automated daily QC record either, there\'s no baseline to compare against: deviations drift unnoticed until rework makes them visible.',
    'icon' => 'quality-tracking.svg',
  ],
];

$solution_cards = [
  [
    'title' => 'Perfect accuracy on real geometry',
    'text' => 'PaintIQ delivers SB50 at 90 to 95% accuracy and predicts 3D film build at 90% accuracy across the full CAD geometry of your part. Not a flat plate, but the actual surface.',
    'image' => 'solutions-accuracy.webp',
  ],
  [
    'title' => 'Production efficiency from day one',
    'text' => 'One sensor covers all three coating cells. Measurement takes 5 seconds per pass. The optimised robot program is generated automatically. Your engineers focus on decisions, not data collection.',
    'image' => 'solutions-production.webp',
  ],
  [
    'title' => 'Sustainability built in',
    'text' => 'Less overcoating means less paint consumed. Better transfer efficiency means less overspray. PaintIQ reduces material waste as a direct result of a more precise process, not as an afterthought.',
    'image' => 'solutions-sustainability.webp',
  ],
  [
    'title' => 'Savings that are immediate and measurable',
    'text' => 'BIW shop: €1.31M per year. Bumper shop: €1.1M per year. ROI of 7.0× for BIW and 14.1× for bumpers. Payback in under two months.',
    'image' => 'solutions-savings.webp',
  ],
];

$benefits = [
  [
    'title' => 'Lead with ease',
    'text' => 'PaintIQ fits into your existing setup without friction. Fully standalone, ready within one day, and completely independent from your robot controller. Your production line keeps running while PaintIQ gets to work.',
  ],
  [
    'title' => 'Full OLP read and write',
    'text' => 'Unlike other systems that give you parameter suggestions and leave the changes to your engineers, PaintIQ reads and overwrites robot programs directly. The optimised path is ready to run.',
  ],
  [
    'title' => 'One sensor per shop. All 3 cells covered',
    'text' => 'The sensor is portable and moves freely between cells, meaning one investment covers everything. Maximum coverage, minimum overhead.',
  ],
  [
    'title' => 'Proven in production',
    'text' => 'PaintIQ has been validated in collaboration with leading automotive manufacturers. SB50 accuracy of 90 to 95% and 3D film build prediction accuracy of 90% verified against physical measurement.',
  ],
  [
    'title' => 'Built for the paint cell, not the lab',
    'text' => 'PaintIQ is the first spray measurement system that goes beyond analysis. It generates and writes the optimised robot program automatically, so your team can act on the data immediately.',
  ],
];

$process_steps = [
  [
    'title' => 'SB50 Measurement & Daily QC',
    'text' => 'The robot makes one spray pass through the laser sensor for 5 seconds. SB50 derived at 90 to 95% accuracy. Full thickness profile captured. Replaces the 60-minute plate, bake, and measure method.',
    'image' => 'Measurement.webp',
    'tone' => 'blue',
  ],
  [
    'title' => 'Path analysis + 3D thickness prediction',
    'text' => 'The scanned SB50 enters the database. TCP and robot path are automatically derived from the CAD geometry of your part. Different overlap settings per surface zone are applied automatically.',
    'image' => null,
    'tone' => 'blue',
  ],
  [
    'title' => 'Brush & Applicator testing',
    'text' => 'Finds best brush settings virtually, no trial sprays. Tests brush sizes zone by zone for uneven film build. Validates new paints, colours, and applicators before production.',
    'image' => 'donut.webp',
    'tone' => 'blue',
  ],
  [
    'title' => 'Create robotic path from CAD',
    'text' => 'Generates full spray program from 3D CAD geometry only. Creates TCP trajectory and brushes for complex geometries. New model launch reduced from 12 weeks to 2 weeks. No manual path teaching required.',
    'image' => null,
    'tone' => 'green',
  ],
  [
    'title' => 'Coating & Overspray optimization',
    'text' => 'Optimizes path, returns updated program for manual apply. Minimises film build, reduces overcoating and overspray. Increases TE up to 20% by overspray reduction.',
    'image' => null,
    'tone' => 'green',
  ],
  [
    'title' => 'OLP Write-back',
    'text' => 'Optimized OLP program written back to robot controller. Engineer reviews and approves, or enables automatic write-back. Original program preserved, always reversible, no overwrite risk.',
    'image' => 'OLP Path.webp',
    'tone' => 'green',
  ],
];

$benchmark_rows = [
  [
    'values' => [
      [
        'value' => '90%',
        'description' => 'Less commissioning',
      ],
      [
        'value' => '2 weeks',
        'description' => 'New model launch',
      ],
      [
        'value' => 'Auto',
        'description' => 'OLP write-back',
      ],
    ],
  ],
  [
    'values' => [
      [
        'value' => '5 sec',
        'description' => 'Vs. 60 min. plate',
      ],
      [
        'value' => '90-95%',
        'description' => 'SB50 accuracy',
      ],
      [
        'value' => '>90%',
        'description' => 'Thickness accuracy',
      ],
    ],
  ],
];

$next_steps = [
  [
    'title' => 'POC - One shop',
    'text' => 'Use your existing profile data or we bring the SB50 sensor to your line or test lab. No production downtime. Completed within 1 month.',
  ],
  [
    'title' => 'ROI analysis',
    'text' => 'Your actual paint costs, film build data, and thickness profile — not generic estimates.',
  ],
  [
    'title' => 'Roll out to all shops',
    'text' => 'Service success becomes the foundation for a full production deployment.',
  ],
];

while (have_posts()) :
  the_post();
?>

  <?php
  /*
|--------------------------------------------------------------------------
| Hero
|--------------------------------------------------------------------------
*/
  ?>
  <section class="ess-product-hero product-landing product-hero product-hero--paintiq p-top-okta p-bot-okta">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-12 col-lg-7 p-vert-quad">
          <div class="product-hero-copy p-all-base">
            <div class="product-brand-row m-bot-base">
              <img class="product-logo product-logo--paintiq" src="<?php echo esc_url($template_uri . $paintiq_assets . 'ess-paint-iq-2.svg'); ?>" alt="ESS PaintIQ logo" />
            </div>

            <h1 class="product-hero-title m-zero">
              Measure. Optimize.<br>Spray.
            </h1>

            <p class="product-hero-text text-lg m-vert-base m-hor-zero p-hor-zero">
              Every prototype trial that could have been avoided is a cost that compounds.
            </p>

            <a class="wm-button spacy inverse lg m-top-base" href="<?php echo esc_url(home_url('/consult')); ?>">Book free consultation</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php
  /*
|--------------------------------------------------------------------------
| Intro
|--------------------------------------------------------------------------
*/
  ?>
  <section class="product-intro paintiq-intro p-top-okta">
    <div class="container">
      <div class="row p-bot-okta">
        <div class="col-xs-12">
          <p class="product-kicker has-gray-darken-2-color text-xs uppercase m-zero">Introducing PaintIQ</p>
          <h2 class="paintiq-section-title m-top-half">
            PaintIQ checks your spray process automatically. Measure in seconds, optimize without trials, and spray right from the first body.
          </h2>
        </div>
      </div>

      <div class="row p-top-quad">
        <?php foreach ($intro_cards as $card) : ?>
          <div class="col-xs-12 col-md-6">
            <div class="m-bot-double">
              <img class="paintiq-intro-logo" src="<?php echo esc_url($template_uri . $paintiq_assets . $card['logo']); ?>" alt="" loading="lazy" />
            </div>
            <h2 class="paintiq-subtitle m-zero"><?php echo esc_html($card['title']); ?></h2>
            <p class="m-top-base">
              <?php echo esc_html($card['text']); ?>
            </p>
            <div class="paintiq-intro-visual m-top-base">
              <img class="rounded-2" src="<?php echo esc_url($template_uri . $paintiq_assets . $card['image']); ?>" alt="<?php echo esc_attr($card['title']); ?>"<?php echo paintiq_image_dims($card['image']); ?> loading="lazy" />
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>



  <?php
  /*
|--------------------------------------------------------------------------
| Benchmark
|--------------------------------------------------------------------------
*/
  ?>
  <section class="paintiq-benchmark has-gray-lighten-4-background-color p-vert-double">
    <div class="container">
      <div class="paintiq-benchmark-table">
        <?php foreach ($benchmark_rows as $row) : ?>
          <div class="paintiq-benchmark-row">
            <?php foreach ($row['values'] as $metric) : ?>
              <div class="paintiq-benchmark-metric center text-center">
                <strong><?php echo esc_html($metric['value']); ?></strong>
                <span><?php echo esc_html($metric['description']); ?></span>
              </div>
            <?php endforeach; ?>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <?php
  /*
|--------------------------------------------------------------------------
| Challenges
|--------------------------------------------------------------------------
*/
  ?>
  <section class="product-problems paintiq-challenges has-gray-lighten-4-background-color p-vert-quad">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <p class="product-kicker has-gray-darken-2-color text-xs uppercase m-zero">Introducing PaintIQ</p>
          <h2 class="paintiq-section-title m-top-half">Are these challenges <br>slowing you down?</h2>
        </div>
      </div>

      <div class="row paintiq-challenge-grid p-top-double">
        <?php foreach ($challenges as $challenge) : ?>
          <div class="col-xs-12 col-md-6 p-vert-zero">
            <article class="paintiq-challenge p-bot-base">
              <img class="paintiq-alert-icon" src="<?php echo esc_url($template_uri . $paintiq_assets . 'pain-points/' . $challenge['icon']); ?>" alt="" loading="lazy" />
              <h3 class="m-zero"><?php echo esc_html($challenge['title']); ?></h3>
              <p class="m-top-half m-bot-zero text-sm"><?php echo esc_html($challenge['text']); ?></p>
            </article>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <?php
  /*
|--------------------------------------------------------------------------
| Solutions
|--------------------------------------------------------------------------
*/
  ?>
  <section class="paintiq-solutions p-vert-okta">
    <span class="opacity-light paintiq-cube-bg paintiq-cube-bg--left paintiq-parallax" data-parallax-speed="8" aria-hidden="true"></span>
    <span class="opacity-light paintiq-cube-bg paintiq-cube-bg--right paintiq-parallax" data-parallax-speed="5" aria-hidden="true"></span>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="paintiq-section-title m-zero">How PaintIQ solves it</h2>
        </div>
      </div>

      <div class="row paintiq-solution-list">
        <?php foreach ($solution_cards as $index => $card) : ?>
          <div class="col-xs-12 col-md-4 paintiq-solution-slot paintiq-solution-slot--<?php echo (int) $index + 1; ?>">
            <article class="paintiq-solution-card p-bot-zero">
              <img class="paintiq-solution-image rounded-2" src="<?php echo esc_url($template_uri . $paintiq_assets . $card['image']); ?>" alt="<?php echo esc_attr($card['title']); ?>"<?php echo paintiq_image_dims($card['image']); ?> loading="lazy" />
              <h3 class="m-top-base m-bot-half"><?php echo esc_html($card['title']); ?></h3>
              <p class="m-zero"><?php echo esc_html($card['text']); ?></p>
            </article>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <?php
  /*
|--------------------------------------------------------------------------
| Benefits
|--------------------------------------------------------------------------
*/
  ?>
  <section class="paintiq-benefits p-bot-sexta p-top-okta has-gray-lighten-4-background-color">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <h2 class="paintiq-section-title m-zero">Why choose PaintIQ over standard approaches?</h2>
        </div>
      </div>

      <div class="row paintiq-benefit-grid p-top-double">
        <?php foreach ($benefits as $benefit) : ?>
          <div class="col-xs-12 col-md-4">
            <article class="paintiq-benefit flex">
              <span class="paintiq-benefit-icon">i</span>
              <div>
                <h3 class="m-zero"><?php echo esc_html($benefit['title']); ?></h3>
                <p class="m-top-half m-bot-zero text-sm"><?php echo esc_html($benefit['text']); ?></p>
              </div>
            </article>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <?php
  /*
|--------------------------------------------------------------------------
| Process
|--------------------------------------------------------------------------
*/
  ?>
  <section class="paintiq-process p-vert-okta">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <div class="paintiq-timeline">
            <?php foreach ($process_steps as $index => $step) : ?>
              <?php if (0 === $index) : ?>
                <img class="paintiq-process-mobile-logo" src="<?php echo esc_url($template_uri . $paintiq_assets . 'ess-paint-iq-2.svg'); ?>" alt="ESS PaintIQ" loading="lazy" />
              <?php elseif (3 === $index) : ?>
                <img class="paintiq-process-mobile-logo paintiq-process-mobile-logo--plus" src="<?php echo esc_url($template_uri . $paintiq_assets . 'paint-iq-plus-white-text.svg'); ?>" alt="ESS PaintIQ+" loading="lazy" />
              <?php endif; ?>
              <article class="paintiq-timeline-step paintiq-timeline-step--<?php echo esc_attr($step['tone']); ?> <?php echo empty($step['image']) ? 'paintiq-timeline-step--no-image' : ''; ?>">
                <div class="paintiq-step-logo-cell">
                  <?php if (0 === $index) : ?>
                    <img class="paintiq-process-logo" src="<?php echo esc_url($template_uri . $paintiq_assets . 'ess-paint-iq-2.svg'); ?>" alt="ESS PaintIQ" loading="lazy" />
                  <?php elseif (3 === $index) : ?>
                    <img class="paintiq-process-logo paintiq-process-logo--plus" src="<?php echo esc_url($template_uri . $paintiq_assets . 'paint-iq-plus-white-text.svg'); ?>" alt="ESS PaintIQ+" loading="lazy" />
                  <?php endif; ?>
                </div>
                <div class="paintiq-step-media">
                  <?php if ($step['image']) : ?>
                    <img class="paintiq-step-image rounded-2" src="<?php echo esc_url($template_uri . $paintiq_assets . $step['image']); ?>" alt="<?php echo esc_attr($step['title']); ?>"<?php echo paintiq_image_dims($step['image']); ?> loading="lazy" />
                  <?php endif; ?>
                </div>
                <div class="paintiq-step-rail">
                  <div class="paintiq-step-marker"><?php echo (int) $index + 1; ?></div>
                </div>
                <div class="paintiq-step-copy">
                  <h3 class="m-zero"><?php echo esc_html($step['title']); ?></h3>
                  <p class="m-top-half m-bot-zero"><?php echo esc_html($step['text']); ?></p>
                </div>
              </article>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>
  </section>

  <?php
  /*
|--------------------------------------------------------------------------
| Testimonial
|--------------------------------------------------------------------------
*/
  ?>
  <section class="paintiq-testimonial p-vert-okta has-gray-lighten-4-background-color">
    <div class="container">
      <div class="row">
        <div class="col-xs-12 col-md-4">
          <p class="product-kicker has-gray-darken-2-color text-xs uppercase m-zero">PaintIQ feedback <br>from the pilot customer</p>
        </div>
        <div class="col-xs-12 col-md-8">
          <blockquote class="paintiq-quote m-zero left">
            <h2 class="m-zero">“The overall accuracy is approximately about 90%. The ESS software plays a very significant role in guiding the judgment of the trend and uniformity of the film thickness.”</h2>
            <?php /*<cite class="block m-top-base">Balaji Mohan, CTO</cite>*/ ?>
          </blockquote>
        </div>
      </div>
    </div>
  </section>



  <?php
  /*
|--------------------------------------------------------------------------
| CTA
|--------------------------------------------------------------------------
*/
  ?>
  <section id="product-cta" class="product-cta paintiq-cta p-vert-okta">
    <div class="container">
      <div class="row middle-xs">
        <div class="col-xs-12 col-md-7">
          <h2 class="paintiq-section-title m-zero">Ready to turn <br>overspray into profit?</h2>
          <div class="m-auto" style="float: left; margin-left: 60%">
            <a class="wm-button spacy inverse lg m-top-double m-left-double" href="<?php echo esc_url(home_url('/consult')); ?>">Book free consultation</a>
          </div>
        </div>
      </div>

      <div class="paintiq-cta-next">
        <p class="paintiq-cta-next-kicker">Next steps</p>
        <div class="paintiq-cta-next-row">
          <?php foreach ($next_steps as $index => $step) : ?>
            <div class="paintiq-cta-next-step">
              <span class="paintiq-cta-next-badge"><?php echo esc_html($index + 1); ?></span>
              <div class="paintiq-cta-next-copy">
                <h3 class="paintiq-cta-next-title m-zero"><?php echo esc_html($step['title']); ?></h3>
                <p class="paintiq-cta-next-text m-top-half m-bot-zero"><?php echo esc_html($step['text']); ?></p>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>
    </div>
  </section>

<?php
endwhile;
?>

</main>

<?php get_footer(); ?>