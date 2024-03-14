<?php

/**
 * The template for Webinar
 *
 * Template Name: Webinar Full
 * The shortened version of the templated. Full featured template is called industry-full
 * and can be loaded from page-industry-full.php
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */


//  ------------------------- HEADER


get_header();

wp_enqueue_script('webinar-script', get_template_directory_uri() . '/assets/js-static/webinar.js', 'Gsap', 1.0, true);

?>
<header id="ess-header-webinar" class="fullsize has-gray-lighten-2-background-color p-bot-zero">
  <div class="ess-keypage-header autosize">
    <div class="divider div-bot div-left d-left"></div>
    <div class="divider div-bot div-right"></div>

    <div class="container max-w-1200">



      <div class="row row-container content-center max-w-1200">

        <div class="last-lg col-xs-12 col-md-8 col-lg-6 center align-center p-vert-double lg-p-vert-zero">

          <img class="w-full max-w-400 lg-max-w-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/sealing.webp" srcset="" sizes="" />

        </div>


        <div class="col-xs-12 col-md-10 col-lg-6 p-vert-double lg-p-top-quad lg-p-bot-double p-hor-base md-p-hor-quad lg-p-hor-base center lg-left">
          <div class="flex items-center content-center lg-content-start">
            <div><img src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/webinar-icon.svg"></div>
            <h3 class="text-light text-md m-zero p-left-half p-vert-base o-60">Webinar: Digitalize the Future</h3>
          </div>
          <h1 class="center lg-left">
            <span class="has-essblue-darken-1-color">Robotic</span> Simulation in <span class="has-essblue-darken-1-color">Sealing and Beyond</span>
          </h1>
          <p class="text-lg p-left-zero ">The capacity of the Webinar is full. You can leave us you E-mail in order to receive the webinar recording.</p>

          <div class="sm wm-button wmwp-modal-trigger wmwp-subscribe-trigger rounded-full">
            Leave us your E-mail
          </div>
        </div>

      </div>

    </div>
  </div>
  </div>
</header>

<main id="ess-main">

  <p class="p-top-quad center">Join us for a webinar as we explore innovative robotic simulation strategies that promise to revamp efficiency and quality in automotive paint shops. Look no further if cost-saving sustainable practice is your thing!</p>

  <?php /* ----------------- TOPICS SECTION ----------------------- */ ?>

  <section class="p-bot-double">
    <div class="container">

      <div class="row">
        <div class="col col-xs-12 p-top-double p-bot-double">
          <h2 class="center has-gray-color">In the webinar we focus on:</h2>
        </div>
      </div>

      <div class="row row-container max-w-1400 m-auto sm-p-hor-quad">

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">Improving Paint Shop Automation</h3>
              <p class="center md-left">Discover the role of digital twins for robotics in transforming your operations.</b></p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">Introducing new features</h3>
              <p class="center md-left">With the example of Sealing process, learn to streamline robotic operations with cutting-edge design and simulation tools.</b></p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">Driving Efficiency</h3>
              <p class="center md-left">Learn optimization and space-saving techniques to boost productivity and reduce overhead.</p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">Enhancing Quality:</h3>
              <p class="center md-left">See how precise robotics and simulation can elevate the quality of your paint jobs.</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  </section>


  <?php /* ----------------- SPEAKERS SECTION ----------------------- */ ?>
  <section class="has-gray-lighten-4-background-color">
    <div class="container p-top-double p-bot-quad">
      <div class="row p-double p-bot-base sm-p-hor-quad">
        <div class="col-xs-12">
          <h2 class="center has-gray-color">Meet our best</h2>
        </div>
      </div>
      <div class="row sm-p-hor-quad">
        <div class="col-xs-12 col-lg-6 center md-left p-vert-double">
          <div class="flex items-center f-col md-f-row">
            <div class="grow min-w-100 max-w-200 lg-min-w-200"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/portrait_akhilesh_400x400.webp" width="240" height="270" alt="Dr. Martin Schifko - portrait"></div>
            <div class="m-left-zero md-m-left-base">
              <h3>Akhilesh Kotian</h3>
              <p>With over seven years of expertise in CFD engineering, the Product owner of Sealing process - Akhilesh excels in fluid flow, thermal analyses, and multiphase flow making him a pivotal figure in advancing automotive paint shop processes through simulation.</p>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-lg-6 center md-left p-vert-double">
          <div class="flex items-center f-col md-f-row">
            <div class="grow min-w-100 max-w-200 lg-min-w-200"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/portrait_ravi_400x400.webp" width="240" height="270" alt="Dr. Martin Schifko - portrait"></div>
            <div class="m-left-zero md-m-left-base">
              <h3>Ravi Borra</h3>
              <p>Ravi has spent nearly six years encompassesing global strategy, strategic partnerships, and spearheading innovations in simulation technology. His role in evolving ESS’s CFD solutions positions him as a key influencer in the industry.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>



  <?php /* ----------------- CAPACITY FULL ----------------------- */ ?>

  <section class="has-essblue-darken-5-background-color p-top-quad p-bot-okta" style="overflow: hidden; ">

    <div class="divider div-top div-inverse div-white div-left"></div>
    <div class="divider div-top div-inverse div-whtie div-right"></div>


    <div class="max-w-450 max-h-450 md-max-w-1000 md-max-h-1000 bkg-color-circle top right"></div>
    <div class="max-w-450 max-h-450 md-max-w-1000 md-max-h-1000 bkg-color-circle bottom blue"></div>


    <div class="container" id="webinar-register">
      <div class="row content-center center p-bot-quad">

        <div class="col-xs-12 has-basic-white-color p-vert-quad">
          <h2 class="has-basic-white-color">Our Capacity is full</h2>
          <p class="has-gray-color text-lg">The capacity of <span class="has-basic-white-color">100 registrants</span> for this exclusive webinar is reached. You can leave us you E-mail in order to receive the webinar recording.
          </p>

          <div class="MD wm-button wmwp-modal-trigger wmwp-subscribe-trigger rounded-full">
            Leave us your E-mail
          </div>

        </div>










      </div>
    </div>
  </section>






  <main>



    <?php


    //  ------------------------- DISPLAY CONTENT


    $page_id = null;

    while (have_posts()) : the_post();

      get_template_part('template-parts/content/content', 'page');

    endwhile;











    //  ------------------------- DISPLAY FOOTER

    get_footer();
