<?php

/**
 * Template Name: Consult Landing
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

get_header();

$consult_products = [
  'ESS general information',
  'alsim Data Cleaning',
  'alsim Paint Shop',
  'E-Coating',
  'Dip Paint',
  'Oven',
  'Sealing',
  'Anodizing',
  'Automated Reporting',
];

$consult_benefits = [
  [
    'title' => 'See inefficiencies faster',
    'text' => 'Turn hidden process losses into clear opportunities across your paint shop operations.',
  ],
  [
    'title' => 'Talk to real specialists',
    'text' => 'Connect directly with experts who understand simulation, reporting, and production reality.',
  ],
  [
    'title' => 'Move from guesswork to action',
    'text' => 'Leave the call with clearer next steps, stronger alignment, and a sharper improvement path.',
  ],
];

$consult_proof = [
  'Trusted by automotive paint shop teams',
  'Simulation-led process improvement',
  'Focused on measurable operational gains',
];

while (have_posts()) :
  the_post();
?>

  <section class="ess-consult-landing ess-consult-hero p-top-okta p-bot-double">
    <div class="container">
      <div class="row m-top-double">


        <div class="col-xs-12 col-md-6">
          <div class="ess-consult-hero-copy p-all-base">
            <div class="ess-consult-badge text-xs rounded-full">
              Free consultation for paint shop optimization
            </div>



            <h1 class="ess-consult-hero-title">
              Make your paint shop
              <span class="block">feel under control again.</span>
            </h1>

            <p class="text-lg ess-consult-hero-text p-zero">
              Discover where performance is leaking, what to fix first, and how ESS can help you improve throughput, transparency, and decision-making.
            </p>



            <div class="row p-top-base">
              <?php foreach ($consult_proof as $proof_item) : ?>
                <div class="col-xs-12 col-sm-4 m-vert-half">
                  <div class="ess-consult-proof rounded-3 o-70">
                    <p class="m-zero p-zero text-sm "><?php echo esc_html($proof_item); ?></p>
                  </div>
                </div>
              <?php endforeach; ?>
            </div>
          </div>
        </div>





        <div class="col-xs-12 col-md-6">
          <div id="consult-form" class="ess-consult-form-card rounded-3 shadow-anim p-vert-base p-hor-base">
            <div class="ess-consult-form-head p-quarter p-bot-zero">
              <div class="row">
                <div class="col-sm-6 p-zero">
                  <h2 class="m-zero p-vert-half">Tell us what you want to improve</h2>
                  <p class="text-sm m-vert-zero">
                    We will point you to the right expert and the most relevant ESS solution.
                  </p>

                </div>
                <div class="col-sm-6">
                  <img
                    class="ess-consult-hero-illustration"
                    src="<?php echo esc_url(get_template_directory_uri() . '/assets/images/chemeleon_coffee.webp'); ?>"
                    alt="Chameleon coffee illustration"
                    loading="lazy" />
                </div>
              </div>


            </div>

            <div class="ess-consult-form-content">
              <?php the_content(); ?>
            </div>

            <div class="ess-consult-form-footer text-sm">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>




<?php
endwhile;
?>

</main>

<?php get_footer(); ?>