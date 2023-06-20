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

    <!--<div class="max-w-300 md-max-w-full max-h-300 md-max-h-full bkg-color-circle -right top"></div>
    <div class="max-w-300 md-max-w-full max-h-300 md-max-h-full bkg-color-circle right blue"></div>-->

    <div class="container">

      

      <div class="row row-container content-center">
       <!-- <div class="divider div-bot div-left"></div>
        <div class="divider div-bot div-right"></div>-->

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
            <h3 class="has-basic-white-color m-zero p-left-half p-vert-base o-60">Join the Webinar</h3>
          </div>


          <h1 class="center lg-left has-basic-white-color">
            How to get the best corrosion protection for E-Cars’ rocker panel
          </h1>
          
          <p class="has-basic-white-color o-60">Meet the CEO of ESS, Dr. Martin Schifko, and listen to him talking about the latest challenges in automotive paint shops and how to deal with them.</p>
        
          <button class="md wm-button rounded-full scroll-button">Register Now</div>

        </div>

      </div>
    </div>
  </div>
</header>

<main id="ess-main">




<?php /* ----------------- TOPICS SECTION ----------------------- */?>

  <section class="p-bot-okta">
    <div class="container">

      <div class="row">
        <div class="col col-xs-12 p-vert-quad">
          <p class="text-xl center">KEY TOPICS TO BE COVERED:</b>
          </p>
        </div>
      </div>

      <div class="row row-container max-w-1200 m-auto sm-p-hor-quad">

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div>
              <h3 class="p-bot-zero">The impact of e-cars</h3>
              <p class="center md-left">Understand how electric cars disrupt the existing stable processes and significantly affect painting quality.</p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div>
              <h3 class="p-bot-zero">The Challenges</h3>
              <p class="center md-left">Explore the two primary impacts on the quality of corrosion protection for electrophoretic deposition (E-coating) and the baking process.</p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div>
              <h3 class="p-bot-zero">Live Demo: The Power of Digital Twin</h3>
              <p class="center md-left">Understand how electric cars disrupt the existing stable processes and significantly affect painting quality.</p>
            </div>
          </div>
        </div>

        <div class="col col-xs-12 col-md-6 p-vert-base">
          <div class="flex">
            <div class="m-right-half"><img class="m-top-base" src="<?php echo get_template_directory_uri(); ?>/assets/icons/checked.svg" width="60" height="60" alt="checked"></div>
            <div>
              <h3 class="p-bot-zero">Real-World Examples</h3>
              <p class="center md-left">Gain insights into how premium car manufacturers are currently dealing with this problem. 100% of Top 10 Passenger Car OEMs benefits from ESS Technologies. Learn How and Why.</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  </section>

  <?php /* ----------------- INFO SECTION ----------------------- */?>
  <section class="relative has-gray-lighten-4-background-color p-bot-quad p-top-quad" >

    <div class="m-top-minus-okta center relative z-10">

    <img class="max-w-300 md-max-w-400"
            src="<?php echo get_template_directory_uri();?>/assets/images/webinar/geely.webp" 
            srcset=""
            sizes=""
          />
  
    </div>


    <!--<div class="divider div-top div-gray div-left"></div>
    <div class="divider div-top div-gray div-right"></div>
    <div class="divider div-bot div-inverse div-gray div-left"></div>
    <div class="divider div-bot div-inverse div-gray div-right"></div>-->

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
  </section>


  <?php /* ----------------- SPEAKERS SECTION ----------------------- */?>
  <section>
    <div class="container p-vert-quad">
      <div class="row p-double p-bot-quad sm-p-hor-quad">
        <div class="col-xs-12">
          <h2 class="center">Speakers</h2>
          <p class="center">Join Dr. Martin Schifko, a Domina expert in automotive manufacturing, along with Peter Koncz. Head of alsim Paint Shop for this exclusive webinar.</p>
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
              <p>Peter is a day 1 employee of ESS. His intricate knowledge of both CFD software and the automotive industry is invaluable to all processes and projects at ESS.</p>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>



  <?php /* ----------------- REGISTER SECTION ----------------------- */?>

  <section class="has-essblue-darken-5-background-color p-top-quad">

   <!-- <div class="divider div-top div-inverse div-white div-left"></div>
    <div class="divider div-top div-inverse div-whtie div-right"></div>-->


    <div class="max-w-300 md-max-w-full max-h-300 md-max-h-full bkg-color-circle top"></div>
    <div class="max-w-300 md-max-w-full max-h-300 md-max-h-full bkg-color-circle right blue"></div>


      <div class="container" id="webinar-register">
        <div class="row content-center center p-bot-quad">

        <div class="col-xs-12 has-basic-white-color p-vert-quad">
          <h2 class="has-basic-white-color">Choose Your date</h2>
          <p class="has-basic-white-color">Register now to secure your spot and be a part of this game-changing webinar. Make sure to reserve a spot for free consultation during the webinar.
</p>
        </div>



        <?php /* ----------------- EUROPE - GERMANY  ----------------------- */?>
        <div id="webinar-card-germany" class="col-xs-12 col-lg-4 center max-w-300 lg-max-w-400 p-hor-double sm-p-hor-base m-vert-base">
            <a href="" class="block m-auto card c-invert register-card no-deco">
              <div class="c-content">

                <div class="c-header p-hor-double p-top-base center has-basic-white-color">
                  <span class="block text-lg font-headline bold o-50">Monday</span>
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

                

                  <div class="flex items-center content-center">
                    <div class="min-w-50">
                      <div class="rounded-full overflow-hidden shadow border has-basic-white-border-color">
                        <img class="rounded-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/flag-germany.png" width="30" height="30" />
                      </div>
                    </div>
                    <div class="has-basic-white-color">Deutsch</div>
                  </div>

                  <div class="m-top-double wm-button button rounded-full md">
                    Register Now
                  </div>
                </div>
              </div>
            </a>
          </div>

        <?php /* ----------------- EMEA and ASIA PACIFIC  ----------------------- */?>
        
        <div id="webinar-card-emea" class="col-xs-12 col-lg-4 center max-w-300 lg-max-w-400 p-hor-double sm-p-hor-base m-vert-base">
            <a href="" class="block m-auto card c-invert register-card no-deco">
              <div class="c-content">

                <div class="c-header p-hor-double p-top-base center has-basic-white-color">
                  <span class="block text-lg font-headline bold o-50">Monday</span>
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

                

                  <div class="flex items-center content-center">
                    <div class="min-w-50">
                      <div class="rounded-full overflow-hidden shadow border has-basic-white-border-color">
                        <img class="rounded-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/flag-britain.png" width="30" height="30" />
                      </div>
                    </div>
                    <div class="has-basic-white-color">English</div>
                  </div>

                  <div class="m-top-double wm-button button rounded-full md">
                    Register Now
                  </div>
                </div>
              </div>
            </a>
          </div>

        <?php /* ----------------- AMERICAS  ----------------------- */?>

        <div id="webinar-card-americas" class="col-xs-12 col-lg-4 center max-w-300 lg-max-w-400 p-hor-double sm-p-hor-base m-vert-base">
            <a href="" class="block m-auto card c-invert register-card no-deco">
              <div class="c-content">

                <div class="c-header p-hor-double p-top-base center has-basic-white-color">
                  <span class="block text-lg font-headline bold o-50">Monday</span>
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

                

                  <div class="flex items-center content-center">
                    <div class="min-w-50">
                      <div class="rounded-full overflow-hidden shadow border has-basic-white-border-color">
                        <img class="rounded-full" src="<?php echo get_template_directory_uri(); ?>/assets/images/webinar/flag-britain.png" width="30" height="30" />
                      </div>
                    </div>
                    <div class="has-basic-white-color">English</div>
                  </div>

                  <div class="m-top-double wm-button button rounded-full md">
                    Register Now
                  </div>
                </div>
              </div>
            </a>
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
