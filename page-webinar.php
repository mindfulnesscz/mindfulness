<?php

/**
 * The template for Webinar
 *
 * Template Name: Webinar
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

wp_enqueue_script('webinar-script', get_template_directory_uri() . '/assets/js/webinar.js', 'Gsap', 1.0, true );

?>


<header id="ess-header" class="fullsize">
  <div class="ess-keypage-header has-essblue-darken-5-background-color">
        <div class="divider div-bot div-left d-left"></div>
        <div class="divider div-bot div-right"></div>

    <div class="max-w-300 md-max-w-600 max-h-300 md-max-h-full bkg-color-circle -right top"></div>
    <div class="max-w-300 md-max-w-600 max-h-300 md-max-h-full bkg-color-circle right blue"></div>

    <div class="container">

      

      <div class="row row-container content-center">

        <div class="last-lg col-xs-12 col-md-8 col-lg-6 center align-center p-vert-double lg-p-vert-zero">

          <img class="w-full max-w-400 lg-max-w-full"
            src="<?php echo get_template_directory_uri();?>/assets/images/webinar/geely.webp" 
            srcset=""
            sizes=""
          />

        </div>


        <div class="col-xs-12 col-md-10 col-lg-6 p-vert-double lg-p-vert-okta p-hor-base md-p-hor-quad lg-p-hor-base center lg-left">
          <div class="flex items-center content-center md-content-start">
            <div><img src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/webinar-icon.svg"></div>
            <h3 class="has-basic-white-color m-zero p-left-half p-vert-base o-60">Join the Paint Shop Webinar</h3>
          </div>


          <h1 class="center lg-left has-basic-white-color">
            How to get the best corrosion protection for E-Cars’ rocker panel
          </h1>
          
          <p class="has-basic-white-color text-lg">Meet the CEO of ESS Dr. Martin Schifko exploring <span class="has-basic-white-color ">the most burning challenges that automotive OEMs are facing today. </span></p>
        
          <button class="lg wm-button rounded-full scroll-button">Register Now</div>

        </div>

      </div>
    </div>
  </div>
</header>

<main id="ess-main">




<?php /* ----------------- TOPICS SECTION ----------------------- */?>

  <section class="p-bot-double">
    <div class="container">

      <div class="row">
        <div class="col col-xs-12 p-top-okta p-bot-double">
          <h2 class="center has-gray-color">In the webinar we focus on:</h2>
        </div>
      </div>

      <div class="row row-container max-w-1400 m-auto sm-p-hor-quad">

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">the impact of e-cars on paint quality</h3>
              <p class="center md-left">Understand how electric cars disrupt the existing stable processes and <b>significantly affect painting quality.</b></p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">the Challenges of corrosion protection of rocker panels</h3>
              <p class="center md-left">Explore the two primary impacts on the quality of corrosion protection for <b>electrophoretic deposition (E-coating) and the baking process.</b></p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">the true power of Digital Twin</h3>
              <p class="center md-left">Discover <a class="bold" href="https://www.essteyr.com/alsim-paintshop">alsim Paint Shop</a> digital twin solution, enabling quick feedback and optimization propositions for Rocker Panel Design and Paint Shop Settings.</p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div class="p-hor-base">
              <h3 class="p-bot-zero">how the big car manufacturers proceed</h3>
              <p class="center md-left">Gain insights into how premium car manufacturers currently deal with this problem. <b>100% of Top 10 Passenger Car OEMs benefits from ESS Technologies</b>. Learn How and Why.</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  </section>

  <?php /* ----------------- INFO SECTION ----------------------- */?>


  <!--<section class="relative has-gray-lighten-4-background-color p-bot-quad p-top-quad" >

    <div class="m-top-minus-okta center relative z-10">

    <img class="max-w-300 md-max-w-400"
            src="<?php echo get_template_directory_uri();?>/assets/images/webinar/geely.webp" 
            srcset=""
            sizes=""
          />
  
    </div>


    <div class="divider div-top div-gray div-left"></div>
    <div class="divider div-top div-gray div-right"></div>
    <div class="divider div-bot div-inverse div-gray div-left"></div>
    <div class="divider div-bot div-inverse div-gray div-right"></div>

    <div class="container max-w-800">
      <div class="row sm-p-hor-quad">
        <div class="col-xs-12 col-md-8 col-lg-6 p-top-double">
          <h2 class="center">The challenge of electric mobility</h2>
        </div>
      </div>
      <div class="row max-w-1000 m-auto p-vert-quad sm-p-hor-quad">
        <div class="col-xs-12 col-md-6">
          <p class="">As the industry moves towards electric mobility, traditional manufacturing processes face significant hurdles, with costs and long-term impacts on quality being compromised.</p>
          <p>Car OEMs hesitate to make drastic changes, fearing unforeseen problems that may arise.</p>
        </div>
        <div class="col-xs-12 col-md-6">
          <h5>CFD Simulation for your automotive paint shop</h5>
          <p class="">This webinar offers a groundbreaking approach to address this issue head-on. We will introduce you to our cutting-edge CFD solutions, designed specifically to tackle corrosion quality concerns in electric vehicles.</p>
          
        </div>
      </div>
    </div>
  </section>-->


  <?php /* ----------------- SPEAKERS SECTION ----------------------- */?>
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
            <div class="grow min-w-100 max-w-200 lg-min-w-200"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/portrait-martin.webp" width="240" height="270" alt="Dr. Martin Schifko - portrait"></div>
            <div class="m-left-zero md-m-left-base">
              <h3>Dr. Martin Schifko</h3>
              <p>Since he founded ESS in 2015, one of his major goals is to revolutionize simulation software in innovative ways to make it accessible and easy to use for everybody.</p>
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-lg-6 center md-left p-vert-double">
          <div class="flex items-center f-col md-f-row">
            <div class="grow min-w-100 max-w-200 lg-min-w-200"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/portrait-peter.webp" width="240" height="270" alt="Dr. Martin Schifko - portrait"></div>
            <div class="m-left-zero md-m-left-base">
              <h3>Peter Koncz</h3>
              <p>Peter is a day 1 Hero of ESS. His intricate knowledge of both CFD software and the automotive industry is invaluable to all processes and projects at ESS.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>



  <?php /* ----------------- REGISTER SECTION ----------------------- */?>

  <section class="has-essblue-darken-5-background-color p-top-quad p-bot-okta" style="overflow: hidden; ">

   <div class="divider div-top div-inverse div-white div-left"></div>
    <div class="divider div-top div-inverse div-whtie div-right"></div>


    <div class="max-w-450 max-h-450 md-max-w-1000 md-max-h-1000 bkg-color-circle top right"></div>
    <div class="max-w-450 max-h-450 md-max-w-1000 md-max-h-1000 bkg-color-circle bottom blue"></div>


      <div class="container" id="webinar-register">
        <div class="row content-center center p-bot-quad">

        <div class="col-xs-12 has-basic-white-color p-vert-quad">
          <h2 class="has-basic-white-color">Join now</h2>
          <p class="has-gray-color text-lg">and get <span class="has-basic-white-color"> free consultation</span> with the most relevant experts from within the industry.
</p>
        </div>



        <?php /* ----------------- EUROPE - GERMANY  ----------------------- */?>
        <div id="webinar-card-germany" class="col-xs-12 col-lg-4 center max-w-300 lg-max-w-400 p-hor-double sm-p-hor-base m-vert-base">
            <a href="https://app.livestorm.co/ess-engineering-software-steyr-gmbh/optimaler-korrosionsschutz-fuer-die-schwellerverkleidung-von-e-autos?s=c94185d1-d991-4bf7-abf6-7038e907886d" class="block m-auto card c-invert register-card no-deco">
              <div class="c-content">

                <div class="c-header p-hor-double p-top-base center has-basic-white-color">
                  <span class="block text-lg font-headline bold o-50">Tuesday</span>
                  <div class="relative m-top-minus-half"><span class="c-hover-scale inline-block text-xxl relative font-headline bold">11</span><span class="relative" style="vertical-align: top; top: 15px; right: -10px">th</span></div>
                  <span class="block text-lg font-headline bold m-top-minus-half o-50">of July</span>
                  <span class="block text-sm light o-50">2023</span>
                </div>

                <div class="relative c-body center p-hor-double p-bot-zero m-hor-base">
                 <div class="relative inline-block">
                    <span class="card-time c-hover-scale relative inline-block text-xxl font-headline bold has-basic-white-color">
                      4:30
                    </span>
                    <span class="card-day-part block left absolute t-0 r-minus-50 w-50 p-left-quarter has-basic-white-color" style="top: 15px" >pm</span>
                  </div>
                  <div class="m-top-minus-half m-bot-half"><span class="card-timezone text-sm has-gray-lighten-2-color">Central European Summer Time</span></div>

                

                  <div class="items-center content-center m-top-base">
                    <div class="min-w-50">
                      <div class="rounded-full overflow-hidden shadow border has-basic-white-border-color">
                        <img class="rounded-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/flag-germany.png" width="40" height="40" />
                      </div>
                    </div>
                    <div class="has-gray-lighten-2-color text-sm">in Deutsch</div>
                  </div>

                  <div class="m-top-double wm-button button rounded-full md">
                    Select this date
                  </div>
                </div>
              </div>
            </a>
          </div>

        <?php /* ----------------- EMEA and ASIA PACIFIC  ----------------------- */?>
        
        <div id="webinar-card-emea" class="col-xs-12 col-lg-4 center max-w-300 lg-max-w-400 p-hor-double sm-p-hor-base m-vert-base">
            <a href="https://app.livestorm.co/ess-engineering-software-steyr-gmbh/how-to-get-the-best-corrosion-protection-for-e-cars-rocker-panel?s=2d4260a2-81d2-4158-bd26-f0368a132e28" class="block m-auto card c-invert register-card no-deco">
              <div class="c-content">

                <div class="c-header p-hor-double p-top-base center has-basic-white-color">
                  <span class="block text-lg font-headline bold o-50">Wednesday</span>
                  <div class="relative m-top-minus-half"><span class="c-hover-scale inline-block text-xxl relative font-headline bold">12</span><span class="relative" style="vertical-align: top; top: 15px; right: -10px">th</span></div>
                  <span class="block text-lg font-headline bold m-top-minus-half o-50">of July</span>
                  <span class="block text-sm light o-50">2023</span>
                </div>

                <div class="relative c-body center p-hor-double p-bot-zero m-hor-base">
                 <div class="relative inline-block">
                    <span class="card-time c-hover-scale relative inline-block text-xxl font-headline bold has-basic-white-color">
                      10:00
                    </span>
                    <span class="card-day-part block left absolute t-0 r-minus-50 w-50 p-left-quarter has-basic-white-color" style="top: 15px" >AM<br></span>
                  </div>
                  <div class="m-top-minus-half m-bot-half"><span class="card-timezone text-sm has-gray-lighten-2-color">Central European Summer Time</span></div>

                

                  <div class="items-center content-center m-top-base">
                    <div class="min-w-50">
                      <div class="rounded-full overflow-hidden shadow border has-basic-white-border-color">
                        <img class="rounded-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/flag-britain.png" width="40" height="40" />
                      </div>
                    </div>
                    <div class="has-gray-lighten-2-color text-sm">in English</div>
                  </div>

                  <div class="m-top-double wm-button button rounded-full md">
                    Select this date
                  </div>
                </div>
              </div>
            </a>
          </div>

        <?php /* ----------------- AMERICAS  ----------------------- */?>

        <div id="webinar-card-americas" class="col-xs-12 col-lg-4 center max-w-300 lg-max-w-400 p-hor-double sm-p-hor-base m-vert-base">
            <a href="https://app.livestorm.co/ess-engineering-software-steyr-gmbh/how-to-get-the-best-corrosion-protection-for-e-cars-rocker-panel-or-ii?s=db5498c9-b998-483d-b8c6-d13c6dd84e12" class="block m-auto card c-invert register-card no-deco">
              <div class="c-content">

                <div class="c-header p-hor-double p-top-base p-bot-half center has-basic-white-color">
                  <span class="block text-lg font-headline bold o-50">Thursday</span>
                  <div class="relative m-top-minus-half"><span class="c-hover-scale inline-block text-xxl relative font-headline bold">13</span><span class="relative" style="vertical-align: top; top: 15px; right: -10px">th</span></div>
                  <span class="block text-lg font-headline bold m-top-minus-half o-50">of July</span>
                  <span class="block text-sm light o-50">2023</span>
                </div>

                <div class="relative c-body center p-hor-double p-bot-zero m-hor-base">
                 <div class="relative inline-block">
                    <span class="card-time c-hover-scale relative inline-block text-xxl font-headline bold has-basic-white-color">
                      7:00
                    </span>
                    <span class="card-day-part block left absolute t-0 r-minus-50 w-50 p-left-quarter has-basic-white-color" style="top: 15px" >pm<br></span>
                  </div>
                  <div class="m-top-minus-half m-bot-half"><span class="card-timezone text-sm has-gray-lighten-2-color">Central European Summer Time</span></div>

                

                  <div class="items-center content-center m-top-base">
                    <div class="min-w-50">
                      <div class="rounded-full overflow-hidden shadow border has-basic-white-border-color">
                        <img class="rounded-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/flag-britain.png" width="40" height="40" />
                      </div>
                    </div>
                    <div class="has-gray-lighten-2-color text-sm">in English</div>
                  </div>

                  <div class="m-top-double wm-button button rounded-full md">
                    Select this date
                  </div>
                </div>
              </div>
            </a>
          </div>




      </div>
      <p class="center has-basic-white-color">Seats are limited to 50. Be sure to register NOW.</p>
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
