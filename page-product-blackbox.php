<?php

/**
 * Template Name: Product Blackbox
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

get_header();

$workflow_array = ['➀', '➁', '➂',];

$template_uri = get_template_directory_uri();

$workflow_steps = [
  [
    'title' => 'Load BIW Geometry',
    'text' => 'Import the body-in-white or subassembly CAD and start the automated assessment.',
    'image' => '/assets/images/BlackBoxImages/bb_illust_load.webp',
  ],
  [
    'title' => 'Run the Automatic Check',
    'text' => 'Black Box evaluates geometry-driven coating risks without requiring paint shop expertise.',
    'image' => '/assets/images/BlackBoxImages/bb_illust_run.webp',
  ],
  [
    'title' => 'Act on the Report',
    'text' => 'Receive problem-region feedback and refine the design before late-stage changes become costly.',
    'image' => '/assets/images/BlackBoxImages/bb_illust_act.webp',
  ],
];

$problem_cards = [
  [
    'title' => 'BIW designs are often finalized before the paint shop is fully defined',
    'image' => '/assets/images/BlackBoxImages/ProblemIllustRootCause.png',
  ],
  [
    'title' => 'Paint shop failures lead to delays, rework, and quality risks',
    'image' => '/assets/images/BlackBoxImages/ProblemIllustPaintshopFailures.png',
  ],
  [
    'title' => 'Root cause is difficult to identify and time-consuming',
    'image' => '/assets/images/BlackBoxImages/ProblemIllustRootCause.png',
  ],
  [
    'title' => 'Costs can be exponential',
    'image' => '/assets/images/BlackBoxImages/ProblemIllustCosts.png',
  ],
];

$issue_rows = [
  [
    'title' => 'Air Entrapment',
    'text' => 'Detect trapped air volumes early and review each part with highlighted problem regions before production decisions are locked in.',
    'image_problem' => '/assets/images/BlackBoxImages/feature_illust_air_problem.webp',
    'image_detail' => '/assets/images/BlackBoxImages/feature_illust_air_detail.webp',
    'image_main' => '/assets/images/BlackBoxImages/AirEntrapDetailIllust.png',
    'image_icon' => '/assets/images/BlackBoxImages/iconAirEntrap.png',
  ],
  [
    'title' => 'Paint Carry Over',
    'text' => 'Reveal liquid carryover risk areas and review geometry-sensitive regions that could trigger drainage and process issues later on.',
    'image_problem' => '/assets/images/BlackBoxImages/feature_illust_puddles_problem.webp',
    'image_detail' => '/assets/images/BlackBoxImages/feature_illust_puddles_detail.webp',
    'image_main' => '/assets/images/BlackBoxImages/PaintCarryProblemRegions.png',
    'image_icon' => '/assets/images/BlackBoxImages/IconPaintCarry.png',
  ],
  [
    'title' => 'Paint Coverage',
    'text' => 'Inspect coverage-sensitive geometry and focus attention on surfaces that may become difficult to coat reliably.',
    'image_problem' => '/assets/images/BlackBoxImages/feature_illust_coverage_problem.webp',
    'image_detail' => '/assets/images/BlackBoxImages/feature_illust_coverage_detail.webp',
    'image_main' => '/assets/images/BlackBoxImages/PaintCarryProblemRegions.png',
    'image_icon' => '/assets/images/BlackBoxImages/IconPaintCoverage.png',
  ],
];

$hex_nodes = [
  [
    'text' => 'BIW design plays a critical role in paint shop success',
    'tone' => 'light',
    'col' => 1,
    'row' => 1,
  ],
  [
    'text' => 'Paint failures are not always process-related',
    'tone' => 'dark',
    'col' => 2,
    'row' => 2,
  ],
  [
    'text' => 'Black Box provides early, geometry-focused insights',
    'tone' => 'dark',
    'col' => 3,
    'row' => 1,
  ],
  [
    'text' => 'Robust BIW designs for any paint shop environment',
    'tone' => 'light',
    'col' => 3,
    'row' => 3,
  ],
];

while (have_posts()) :
  the_post();
?>

  <!-- ========================================== HERO SECTION ========================================== -->

  <section class="ess-product-hero product-landing product-hero p-top-okta p-bot-double">
    <div class="container">
      <div class="row middle-xs middle-md">
        <div class="col-xs-12 col-md-6 p-vert-quad">
          <div class="product-hero-copy p-all-base">
            <div class="product-brand-row m-bot-base">
              <img class="product-logo" src="<?php echo esc_url($template_uri . '/assets/images/BlackBoxImages/BlackBoxLogoWhite.svg'); ?>" alt="Black Box logo" loading="lazy" />
            </div>

            <h1 class="product-hero-title m-zero">
              Know your coating risks before production.
            </h1>

            <p class="product-hero-text text-lg m-vert-base m-hor-zero p-hor-zero">
              An automated geometry check for CAD designs that reveals coating risks early, without requiring detailed paint shop models or specialist process knowledge.
            </p>

            <div class="product-hero-actions flex wrap items-center m-top-double">
              <a class="wm-button spacy inverse" href="#product-cta">Get Free Consultation Now</a>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-md-6">
          <div class="product-hero-visual p-all-base">
            <img class="product-hero-illustration" src="<?php echo esc_url($template_uri . '/assets/images/BlackBoxImages/BlackBoxHeroIllust.png'); ?>" alt="Black Box coating risk illustration" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- ========================================== CLAIM SECTION ========================================== -->

  <section class="product-intro p-vert-quad bb">
    <div class="container">
      <div class="row center-xs">
        <div class="col-xs-12 col-md-9 col-lg-8">
          <div class="product-intro-panel rounded-3 p-all-double center-xs">
            <h2 class="product-intro-question m-zero m-auto">
              Is your<br>
              <span class="product-rotating-term" aria-label="Animated part types">
                <span>Hang on Part</span>
                <span>Rocker Panel</span>
                <span>Body in White</span>
              </span><br>
              producible in a typical
              <span class="block">Paint Shop?</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="has-gray-lighten-4-background-color p-vert-quad">
    <div class="container">
      <div class="row center-xs">
        <div class="col-xs-12 col-md-9 col-lg-8">
          <div class="product-intro-panel center-xs">
            <h2 class="text-base">
              Black Box is the “Automatic Check” without any paint shop knowledge.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </section>


  <!-- ========================================== WORKFLOW SECTION ========================================== -->

  <section class="product-workflow p-zero">
    <div class="product-section-head has-gray-lighten-4-background-color has-border-gray bl-0 br-0 center-xs m-bot-double">
      <p class="product-kicker left has-gray-darken-4-color text-xs uppercase m-zero">The Black Box Workflow</p>
    </div>
    <div class="container p-top-double p-bot-quad">
      <div class="row">

        <?php foreach ($workflow_steps as $index => $step) : ?>

          <div class="col-xs-12 col-md-4 m-vert-base">
            <article class="ess-workflow-step product-workflow-step rounded-3 white p-vert-base">

              <h2 class="text-xl center md-left m-vert-zero"><?php echo $workflow_array[$index]; ?></h2>
              <h3 class="m-zero center md-left"><?php echo esc_html($step['title']); ?></h3>
              <p class="m-top-half m-bot-double center md-left"><?php echo esc_html($step['text']); ?></p>
              <img class="product-step-image m-auto block m-top-double" src="<?php echo esc_url($template_uri . $step['image']); ?>" alt="<?php echo esc_attr($step['title']); ?>" loading="lazy" />

            </article>
          </div>
        <?php

        endforeach; ?>
      </div>
    </div>
  </section>


  <!-- ========================================== PROBLEMS SECTION ========================================== -->

  <section class="product-problems p-vert-double md-p-vert-okta has-gray-lighten-4-background-color">
    <div class="container">
      <div class="row middle-md">

        <div class="col-xs-12 col-md-7">
          <div class="row">
            <?php foreach ($problem_cards as $card) : ?>
              <div class="col-12">
                <article class="flex items-center p-vert-half">
                  <img class="block product-problem-image" src="<?php echo esc_url($template_uri . $card['image']); ?>" alt="<?php echo esc_attr($card['title']); ?>" loading="lazy" />
                  <h5 class="m-zero text-base"><?php echo esc_html($card['title']); ?></h5>
                </article>
              </div>
            <?php endforeach; ?>
          </div>
        </div>


        <div class="col-xs-12 col-md-5 p-vert-quad">
          <div class="p-all-base">
            <img class="max-w-200" src="<?php echo esc_url($template_uri . '/assets/images/BlackBoxImages/blackbox-logo-basic.svg'); ?>"></img>
            <h2 class="m-top-half">Get the most accurate simulation insights to avoid problems from the beginning of your project.</h2>
            <p class="m-zero">Use simulation results to speed up development, improve quality, and reduce late-stage coating risk surprises.</p>
          </div>
        </div>
      </div>
    </div>
  </section>



  <!-- ========================================== FEATURES SECTION ========================================== -->



  <section class="product-issues p-vert-double has-gray-lighten-4-background-color">
    <div class="product-section-head has-gray-lighten-4-background-color bt center-xs m-bot-zero">
      <p class="product-kicker left has-gray-darken-4-color text-xs uppercase m-zero">Features:</p>
    </div>


    <?php foreach ($issue_rows as $issue) : ?>
      <div class="bt">
        <div class="container m-vert-double">
          <div class="row middle-md product-issue-row m-bot-double">
            <div class="col-xs-12 col-md-6">
              <div class="flex align-center items-center">
                <img class="product-issue-icon m-right-half" src="<?php echo esc_url($template_uri . $issue['image_icon']); ?>" alt="" loading="lazy" />
                <h3 class="left m-zero p-zero"><?php echo esc_html($issue['title']); ?></h3>
              </div>
              <!--<p class="m-bot-base"><?php echo esc_html($issue['text']); ?></p>-->
            </div>
          </div>

          <div class="row">
            <div class="col-xs-6 p-hor-zero md-p-hor-base br">
              <img src="<?php echo esc_url($template_uri . $issue['image_problem']); ?>" alt="<?php echo esc_attr($issue['title']); ?> Problem Regions" loading="lazy" />
              <p class="m-zero text-sm center italic">Problem Regions Highlighted.</p>
            </div>

            <div class="col-xs-6 p-hor-zero md-p-hor-base">

              <img src="<?php echo esc_url($template_uri . $issue['image_detail']); ?>" alt="<?php echo esc_attr($issue['title']); ?> Problem Regions" loading="lazy" />
              <p class="m-zero text-sm center italic">Detail Overview of Each Part with Problem Region.</p>

            </div>

          </div>

        </div>
      </div>


    <?php endforeach; ?>



  </section>

  <section class="product-specs p-bot-double b-top-zero has-gray-lighten-4-background-color">
    <div class="product-section-head has-gray-lighten-4-background-color bb bt center-xs m-bot-double">
      <p class="product-kicker left has-gray-darken-4-color text-xs uppercase m-zero">Hardware requirements:</p>
    </div>
    <div class="container">
      <div class="row middle-md items-center content-center">

        <div class="col-xs-12 col-md-7 p-vert-double">
          <table class="mind-table">
            <thead>
              <tr>
                <th>Geometry Type</th>
                <th>CPU RAM</th>
                <th>GPU RAM</th>
                <th>Typical Use</th>
                <th>Supported OS</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Sub-Assemblies</th>
                <td>32 - 64 GB</td>
                <td>NVIDIA Graphics Card with 2-4 GB</td>
                <td>Component-level analysis</td>
                <td>Windows / Ubuntu / RHEL / OpenSUSE</td>
              </tr>
              <tr>
                <th scope="row">Full BIW</th>
                <td>64 - 128 GB</td>
                <td>NVIDIA Graphics Card with 4-8 GB</td>
                <td>Full vehicle simulations</td>
                <td>Windows / Ubuntu / RHEL / OpenSUSE</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>


  <section class="p-top-zero p-bot-double gui-background has-essblue-darken-4-background-color">
    <div class="container">
      <div class="row middle-md">
        <div class="col-xs-12">
          <div class="ess-gui-panel product-gui-panel rounded-3 p-all-base shadow-anim">
            <img class="w-full max-w-800 block m-auto relative t-100 rounded-2 z-10" src="<?php echo esc_url($template_uri . '/assets/images/BlackBoxImages/Black Box GUI.png'); ?>" alt="Black Box GUI interface" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </section>






  <section id="product-cta" class="product-cta p-top-okta p-bot-double">
    <div class="container">
      <div class="row middle-md">
        <div class="col-xs-12 col-lg-6">
          <div class="p-all-base">
            <img class="product-footer-logo m-bot-base" src="<?php echo esc_url($template_uri . '/assets/images/BlackBoxImages/ESSLogoWhite.svg'); ?>" alt="ESS logo" loading="lazy" />
            <h2 class="m-zero">Move from geometry uncertainty to design confidence.</h2>
            <p class="m-top-base">Black Box helps engineering teams surface coating risks earlier, act faster, and make better production-facing decisions.</p>
          </div>
        </div>

        <div class="col-xs-12 col-lg-6">
          <div class="mind-honeycomb-wrap">
            <div class="mind-honeycomb mind-honeycomb--slots-3 mind-honeycomb--rows-3">
              <?php foreach ($hex_nodes as $node) : ?>
                <div class="mind-honeycomb__node <?php echo $node['tone'] === 'dark' ? 'mind-honeycomb__node--dark' : ''; ?>" style="--hc-col: <?php echo (int) $node['col']; ?>; --hc-row: <?php echo (int) $node['row']; ?>;">
                  <span class="mind-honeycomb__content"><?php echo esc_html($node['text']); ?></span>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="has-border-gray bb-0 bl-0 br-0 m-top-quad p-vert-quad">
      <div class="container">
        <div class="row">
          <a class="wm-button spacy m-auto inverse lg" href="#">Book Free Demo Now</a>
        </div>
      </div>
    </div>
  </section>

<?php
endwhile;
?>

</main>

<?php get_footer(); ?>