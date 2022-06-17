<?php

/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

?>

<!DOCTYPE html>
<html id="mindfulness" <?php language_attributes(); ?>>


<!--
       ____
     /     /\
    /_____/  \
    \     \  /
     \_____\/  v 3.0

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
  <link href="https://fonts.googleapis.com/css?family=Exo:300,500&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,400&display=swap" rel="stylesheet">

  <meta name=“robots“ content=“index, follow“>

  <?php wp_head(); ?>

</head>

<body id="ess-body" class="ess-body-frontend<?php echo ((is_front_page() ? ' ess-homepage' : '')); ?>">



  <?php
  get_template_part('template-parts/navigation/navigation', 'cube');
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



    </nav>

    <?php get_template_part('template-parts/navigation/navigation', 'classic');
