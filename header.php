<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>


<!--	
	
						    _______
						  /        /\
					   /        /  \
					  /_______ /    \
					  \        \    /
					   \        \  /
						  \ ______ \/

-->

<head>
  <?php

  $template_url = get_template_directory_uri();
  $id = get_the_id();


  $ex = get_the_excerpt();
  $pt = get_the_post_thumbnail_url();

  if (!$ex || empty($ex))
    $ex =  get_bloginfo('description');

  if (!$pt || empty($pt))
    $pt = 'https://www.essteyr.com/ess-media/og_image_essteyr.jpg'
  ?>

  <title>ESS - <?php the_title() ?></title>
  <meta name="Description" content="<?php echo $ex; ?>">
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:image" content="<?php echo $pt; ?>" />
  <meta property="og:title" content="<?php the_title(); ?>">
  <meta property="og:site_name" content="<?php echo get_bloginfo('name'); ?>">
  <meta property="og:url" content="<?php echo (the_permalink()); ?>">
  <meta property="og:description" content="<?php echo $ex; ?>">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="en_US">

  <meta name="twitter:card" value="summary">
  <meta name="twitter:site" content="<?php echo (the_permalink()); ?>">
  <meta name="twitter:title" content="<?php the_title(); ?>">
  <meta name="twitter:description" content="<?php echo $ex; ?>">
  <meta name="twitter:image" content="<?php echo $pt; ?>">

  <meta name="theme-color" content="#eaeaea">
  <meta name="msapplication-navbutton-color" content="#eaeaea">

  <meta name="apple-mobile-web-app-status-bar-style" content="default">
  <link href="https://fonts.googleapis.com/css?family=Exo:100,300,700&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,400&display=swap" rel="stylesheet">

  <meta name=“robots“ content=“index, follow“>

  <?php wp_head(); ?>

</head>

<body id="ess-body" class="ess-body-frontend" <?php echo ((is_front_page() ? 'class="ess-homepage"' : '')); ?>>

  <?php $cs_args  = array(
    'numberposts'      => 4,
    'orderby'         => 'post_date',
    'order'           => 'ASC',
    'post_type'       => 'case_solution',
  );

  $case_solutions = get_posts($cs_args);

  ?>

  <div id='ess-cube-navigation-holder'>
    <div id="breadcrub-cont">
      <?php custom_breadcrumbs() ?>
    </div>
    <div id="csscube-nav">
      <ul>
        <li><a data-target="bottom" class="active">ESS</a></li>
        <li><a data-target="right">Industries</a></li>
        <li><a data-target="back">Solutions</a></li>
        <li><a data-target="left">Case Solutions</a></li>
        <li><a data-target="front">Contact</a></li>
      </ul>
    </div>
    <div id="right-part"></div>

    <div id="csscube-cont">

      <div id="csscube-scene">
        <button class="csscube-navbutton left-button">
          <span class="ess-icon color-primary big-icon icon_simple_arrow_left"></span>
          <!--<img src="<?php echo $template_url . '/assets/images/cube_arrow_left.png'; ?>">-->
        </button>
        <button class="csscube-navbutton right-button">
          <span class="ess-icon color-primary big-icon icon_simple_arrow_right"></span>
          <!--<img src="<?php echo $template_url . '/assets/images/cube_arrow_right.png'; ?>">-->
        </button>
        <div id="csscube-rotator">
          <div id="csscube">



            <!-- ................................... 6 - FRONT - CONTACT ................................... -->

            <div id="csscube-front">
              <div class="css_block css-block-header w_xii h_iii x_o y_o">
                <div>
                  <h1>Contact</h1>
                </div>
              </div>
              <div class="css_block w_viii h_viii x_o y_iii css-grey">
                <a href="<?php echo home_url() . '/contact'; ?>">
                  <h2>Contact Us</h2>
                </a>
              </div>
              <div class="css_block w_iv h_viii x_viii y_iii css-grey">
                <a id="cube_subscribe_button">
                  <h2>Subscribe</h2>
                </a>
              </div>
              <div class="css_block w_iv h_iv x_o y_xi css-grey-lighter">
                <a href="https://www.facebook.com/essteyr" target="_blank">
                  <h2><span class="ess-icon icon_facebook biggest-text"></span></h2>
                </a>
              </div>
              <div class="css_block w_iv h_iv x_iv y_xi css-grey-lighter">
                <a href="https://twitter.com/ESSteyr" target="_blank">
                  <h2><span class="ess-icon icon_twitter biggest-text"></span></h2>
                </a>
              </div>
              <div class="css_block w_iv h_iv x_viii y_xi css-grey-lighter">
                <a href="https://www.linkedin.com/company/ess-engineeringsoftwaresteyr" target="_blank">
                  <h2><span class="ess-icon icon_linkedin biggest-text"></span></h2>
                </a>
              </div>
            </div>



            <!-- ................................... 3 - BACK - PRODUCTS ................................... -->


            <div id="csscube-back">


              <div class="css_block css-block-header w_xii h_ii x_o y_o">
                <div>
                  <h1>OUR SOLUTIONS</h1>
                </div>
              </div>


              <div class="css_block w_iii h_v x_o y_ii css-white product-block main-product-block">
                <a href="<?php echo home_url(); ?>/alsim-cloud">
                  <img class="main-product-logo" src="<?php echo $template_url; ?>/assets/images/product-logos/logo_cloud.svg">
                  <h4>alsim</h4>
                  <h3>CLOUD</h3>
                </a>
              </div>
              <div class="css_block w_vi h_v x_iii y_ii css-white product-block main-product-block">
                <a href="<?php echo home_url(); ?>/alsim-platform">
                  <img class="main-product-logo" src="<?php echo $template_url; ?>/assets/images/product-logos/logo_platform.svg">
                  <h4>alsim</h4>
                  <h3>PLATFORM</h3>
                </a>
              </div>
              <div class="css_block w_iii h_v x_ix y_ii css-white product-block main-product-block">
                <a href="<?php echo home_url(); ?>/alsim-services">
                  <img class="main-product-logo" src="<?php echo $template_url; ?>/assets/images/product-logos/logo_services.svg">
                  <h4>alsim</h4>
                  <h3>SERVICES</h3>
                </a>
              </div>

              <!-- ROW II ................................... -->

              <div id="cube-side-paintshop" class="css_block w_iv h_iv x_o y_vii css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-paintshop">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Paint Shop</h3>
                </a>
              </div>
              <div id="cube-side-data-cleaning" class="css_block w_iv h_iv x_iv y_vii css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-data-cleaning">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Data Cleaning</h3>
                </a>
              </div>
              <div id="cube-side-processing" class="css_block w_iv h_iv x_viii y_vii css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-processing">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Processing</h3>
                </a>
              </div>

              <!-- ROW III ................................... -->

              <div id="cube-side-mobility" class="css_block w_iii h_iv x_o y_xi css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-mobility">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Mobility</h3>
                </a>
              </div>
              <div id="cube-side-environment" class="css_block w_iii h_iv x_iii y_xi css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-environment">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Environment</h3>
                </a>
              </div>
              <div id="cube-side-washing" class="css_block w_iii h_iv x_vi y_xi css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-washing">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Washing</h3>
                </a>
              </div>
              <div id="cube-side-oil-gas" class="css_block w_iii h_iv x_ix y_xi css-grey-lighter product-block">
                <a href="<?php echo home_url(); ?>/alsim-oil-gas">
                  <?php get_template_part('template-parts/content/content', 'svg-cube'); ?>
                  <h4>alsim</h4>
                  <h3>Oil & Gas</h3>
                </a>
              </div>
            </div>


            <!-- ................................... 4 - LEFT - CASE SOLUTIONS ................................... -->

            <div id="csscube-left">
              <div class="css_block css-block-header w_xii h_iii x_o y_o">
                <div>
                  <h1>Case Solutions</h1>
                </div>
              </div>
              <div class="css_block w_vi h_iv x_o y_iii css-grey">
                <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[0]->ID); ?>">
                  <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[0]->ID, 'thumbnail')); ?>">
                  <h3><?php echo $case_solutions[0]->post_title; ?></h3>
                </a>
              </div>
              <div class="css_block w_vi h_iv x_vi y_iii css-grey">
                <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[1]->ID); ?>">
                  <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[1]->ID, 'thumbnail')); ?>">
                  <h3><?php echo $case_solutions[1]->post_title; ?></h3>
                </a>
              </div>
              <div class="css_block w_vi h_iv x_o y_vii css-grey">
                <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[2]->ID); ?>">
                  <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[2]->ID, 'thumbnail')); ?>">
                  <h3><?php echo $case_solutions[2]->post_title; ?></h3>
                </a>
              </div>
              <div class="css_block w_vi h_iv x_vi y_vii css-grey">
                <a class="background-image-link" href="<?php echo get_post_permalink($case_solutions[3]->ID); ?>">
                  <img class="csscube-bkg-image" src="<?php print_r(get_the_post_thumbnail_url($case_solutions[3]->ID, 'thumbnail')); ?>">
                  <h3><?php echo $case_solutions[3]->post_title; ?></h3>
                </a>
              </div>
              <div class="css_block w_xii h_iv x_o y_xi css-grey-lighter">
                <a href="<?php echo get_post_type_archive_link('case_solution'); ?>">
                  <h2 class="has-text-align-right icon-headline medium-icon just-right color-secondary">
                    <span class="color-primary ess-icon icon_circle_arrow_right"></span>
                    See More Case Solutions
                  </h2>
                </a>
              </div>


              <!--<div class="css_block w_xii h_xii x_o y_iii css-grey">
								<div>
									<span class="ess-icon icon_circle_arrow_right huge-text color-secondary"><span>
								</div>
							</div>-->
            </div>


            <!-- ................................... 2 - RIGHT - INDUSTRIES  ................................... -->

            <div id="csscube-right">
              <div class="css_block css-block-header w_xii h_iii x_o y_o">
                <div>
                  <h1>INDUSTRIES</h1>
                </div>
              </div>
              <div class="cbl-industry css_block w_vi h_vi x_o y_iii css-grey-lighter">
                <a href="<?php echo home_url() . '/automotive'; ?>">
                  <div class="cc-icon-h">
                    <?php get_template_part('template-parts/content/industries/content', 'automotive'); ?>
                  </div>
                  <h2>Automotive</h2>
                </a>
              </div>
              <div class="cbl-industry css_block w_vi h_vi x_vi y_iii css-grey-lighter">
                <a href="<?php echo home_url() . '/oil-gas'; ?>">
                  <div class="cc-icon-h">
                    <?php get_template_part('template-parts/content/industries/content', 'oil-gas'); ?>
                  </div>
                  <h2>Oil & Gas</h2>
                </a>
              </div>
              <div class="cbl-industry css_block w_vi h_vi x_o y_ix css-grey-lighter">
                <a href="<?php echo home_url() . '/processing'; ?>">
                  <div class="cc-icon-h">
                    <?php get_template_part('template-parts/content/industries/content', 'processing'); ?>
                  </div>
                  <h2>Processing</h2>
                </a>
              </div>
              <div class="cbl-industry css_block w_vi h_vi x_vi y_ix css-grey-lighter">
                <a href="<?php echo home_url() . '/energy-environment'; ?>">
                  <div class="cc-icon-h">
                    <?php get_template_part('template-parts/content/industries/content', 'environment-energy'); ?>
                  </div>
                  <h2>Environment & Energy</h2>
                </a>
              </div>
            </div>
            <div id="csscube-top">
            </div>

            <!-- ................................... 1 - BOTTOM - ABOUT  ................................... -->


            <div id="csscube-bottom">
              <div class="css_block w_xii h_v x_o y_o css-grey-lighter">
                <a href="<?php echo home_url(); ?>">
                  <img alt="ESS" style="max-height: 80%; width: 100%;" src="<?php echo get_template_directory_uri() . '/assets/images/ess_logo.svg'; ?>">
                </a>
              </div>


              <div class="css_block w_vi h_iii x_o y_v css-grey-lighter">
                <a href="<?php echo home_url() . '/about-us' ?>">
                  <!--<img style="height: 60%; width: auto;" src="<?php echo get_template_directory_uri() . '/assets/images/logo_image_ess.svg' ?>">-->
                  <h2>About us</h2>
                </a>
              </div>
              <div class="css_block w_vi h_iii x_vi y_v css-grey-lighter">
                <a href="<?php echo get_post_permalink(ess_get_career_page_id()); ?>">
                  <h2>Career</h2>
                </a>
              </div>
              <!--<div class="css_block w_vi h_v x_vi y_v css-grey-lighter">
								<a href="<?php echo home_url() . '/about-us#our-team' ?>">
									<h2>Our Team</h2>
								</a>
							</div>-->
              <div class="css_block w_vi h_iii x_o y_viii css-grey-lighter">
                <a href="<?php echo  get_post_type_archive_link('news'); ?>">
                  <h2>News</h2>
                </a>
              </div>
              <div class="css_block w_vi h_iii x_vi y_viii css-grey-lighter">
                <a href="<?php echo  get_post_type_archive_link('events'); ?>">
                  <h2>Events</h2>
                </a>
              </div>
              <div class="css_block w_xii h_iv x_0 y_xi">
                <div class="mind-slider-holder no-padding">
                  <ul id="ess-home-banner" class="mind-slider">
                    <li id="ess-cube-banner-its" class="slide ess-cube-banner-item">
                      <a href="https://www.essteyr.com/aboutaerosols/">
                        <div class="banner-image-part">
                          <img src="<?php echo home_url() . '/ess-media/home-banner/210617_environment/environment_cube_banner.jpg'; ?>">
                        </div>
                        <div class="banner-text-part">
                          <h3 id="dynairix_countdown"></h3>

                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="csscube-shadow"></div>
      </div>


    </div>
  </div>
<script type="text/javascript">
  var el_dynairix_countdown = document.querySelector('#dynairix_countdown');
  var countDownDate = new Date("Jan 21, 2022 12:00:00").getTime();
  var coundDown = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
    
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    var echo = days + ', '+hours+', '+minutes+', '+seconds;
    console.log(echo);
    console.log(el_dynairix_countdown);
    el_dynairix_countdown.innerHTML = days + ', '+hours+', '+minutes+', '+seconds;
}, 1000);

  
</script>
  <?php
  //endif;
  ?>

  <div id="ess-main-container">

    <nav id="ess-top-nav">


      <!--   MENU TOGGLE   ................................... -->

      <div id="ess-menu-toggle" class="ess-hidden">
        <div class="ess-transp-bg-80"></div>
        <span id="ess-navcube-hamburger" class="ess-icon icon_hamburger"></span>


        <div class="ess-navcube-cube">
          <div class="navcube-scene">
            <div class="navcube-rotator">
              <div class="navcube">
                <div class="navcube-front"></div>
                <div class="navcube-back"></div>
                <div class="navcube-left"></div>
                <div class="navcube-right"></div>
                <div class="navcube-top"></div>
                <div class="navcube-bottom"></div>
              </div>
            </div>
          </div>
        </div>


      </div>

      <ul id="ess-top-menu-features">
        <li id="ess-menu-type-toggle" class="item hide-on-small-and-down"><span>classic menu</span></li>
        <!--<li id="ess-client-zone-button" class="item ess-client-zone">
					<div class="ess-icon icon_user"></div><span class="hide-on-small-and-down">login/register</span>
				</li>-->
        <li class="item ess-search" id="ess-search">
          <div class="ess-icon icon_zoom"></div><span class="hide-on-small-and-down">search</span>
        </li>


        <div id="ess-searchbar-holder">
          <form role="search" method="get" id="searchform" action="<?php echo home_url('/'); ?>">
            <div class="ess-horizontal-reveal" trigger="ess-search">

              <div id="ess-searchbar" class="z-depth-2">
                <div class="input-holder">
                  <input type="text" class="ess-input" value="Enter Keyword" name="s" id="s" />
                </div>
                <div class="button-holder ">
                  <input class="ess-button ess-submit" type="submit" id="searchsubmit" value="Search" />
                </div>
              </div>

            </div>
          </form>
        </div>
      </ul>
    </nav>

    <ul id="ess-side-menu" class="sidenav">
      <li id="ess-side-logo">

        <a href="<?php echo home_url() ?>"><img src="<?php echo $template_url ?>/assets/images/side-logo.svg">
        </a>

      </li>


      <?php

      wp_nav_menu([
        'menu'            => 'primary',
        'theme_location'  => 'primary',
        'container'       => 'div',
        'container_id'    => 'nav-main',
        'container_class' => 'collapse navbar-toggleable-md ',
        'menu_id'         => 'nav-main',
        'menu_class'      => 'nav navbar-nav collapsible collapsible-accordion',
        'depth'           => 3,
        'fallback_cb'     => 'ESS_Collapse_Walker::fallback',
        'walker'          => new ESS_Collapse_Walker()
      ]);
      ?>




    </ul>