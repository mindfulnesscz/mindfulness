<?php

global $post;
$cats = get_the_category(0);

?>

<section class="has-gray-lighten-4-background-color">
  <div class="container">

    <div class="row justify-center">
      <?php

      if (empty($cats) || $cats[0]->slug != 'automotive') :

      ?>
        <a href="<?php echo get_home_url(); ?>/automotive" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">
          <?php
          get_template_part('template-parts/content/industries/content', 'automotive');
          ?>
          <!--<img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_automation.jpg" class="ess-industry-icon max-width-image">-->
          <h4>AUTOMOTIVE</h4>

          <span class="ess-icon icon_circle_arrow_right"></span>
        </a>
      <?php

      endif;

      if (empty($cats) || $cats[0]->slug != 'oil-gas') :

      ?>


        <a href="<?php echo get_home_url(); ?>/oil-gas" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">

          <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_oil.jpg" class="ess-industry-icon max-width-image">-->
          <?php
          get_template_part('template-parts/content/industries/content', 'oil-gas');
          ?>

          <h4>OIL AND GAS</h4>

          <span class="ess-icon icon_circle_arrow_right"></span>
        </a>

      <?php

      endif;

      if (empty($cats) || $cats[0]->slug != 'energy-environment') :

      ?>


        <a href="<?php echo get_home_url(); ?>/energy-environment" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">
          <div class="industry-3d-holder" id="env-3d-holder">
          </div>
          <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_environment.jpg" class="ess-industry-icon max-width-image">-->

          <?php
          get_template_part('template-parts/content/industries/content', 'environment-energy');
          ?>

          <h4>ENERGY AND ENVIRONMENT</h4>

          <span class="ess-icon icon_circle_arrow_right"></span>
        </a>

      <?php

      endif;

      if (empty($cats) || $cats[0]->slug != 'Processing') :

      ?>

        <a href="<?php echo get_home_url(); ?>/processing" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">

          <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_mineral.jpg" class="ess-industry-icon max-width-image">-->

          <?php
          get_template_part('template-parts/content/industries/content', 'processing');
          ?>

          <h4>PROCESSING</h4>

          <span class="ess-icon icon_circle_arrow_right"></span>
        </a>

      <?php

      endif;

      ?>

    </div>
  </div>
</section>