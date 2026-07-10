<?php

/**
 * Revamp header.
 *
 * Duplicated from the default theme header so revamp templates can use a
 * custom navigation shell without changing legacy pages.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$template_url = get_template_directory_uri();
$ex = get_the_excerpt();
$pt = get_the_post_thumbnail_url();

if (!$ex || empty($ex)) {
  $ex = get_bloginfo('description');
}

if (!$pt || empty($pt)) {
  $pt = 'https://www.essteyr.com/ess-media/og_image_essteyr.jpg';
}
?>

<!DOCTYPE html>
<html id="mindfulness" <?php language_attributes(); ?>>

<head>
  <title>ESS - <?php the_title(); ?></title>
  <meta name="Description" content="<?php echo esc_attr($ex); ?>">
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:image" content="<?php echo esc_url($pt); ?>" />
  <meta property="og:title" content="<?php the_title(); ?>">
  <meta property="og:site_name" content="<?php echo esc_attr(get_bloginfo('name')); ?>">
  <meta property="og:url" content="<?php echo esc_url(get_permalink()); ?>">
  <meta property="og:description" content="<?php echo esc_attr($ex); ?>">
  <meta property="og:type" content="article">
  <meta property="og:locale" content="en_US">

  <meta name="twitter:card" value="summary">
  <meta name="twitter:site" content="<?php echo esc_url(get_permalink()); ?>">
  <meta name="twitter:title" content="<?php the_title(); ?>">
  <meta name="twitter:description" content="<?php echo esc_attr($ex); ?>">
  <meta name="twitter:image" content="<?php echo esc_url($pt); ?>">

  <meta name="theme-color" content="#2d2d2d">
  <meta name="msapplication-navbutton-color" content="#2d2d2d">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">

  <link href="https://fonts.googleapis.com/css?family=Exo:300,500,700&display=swap" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:100,400&display=swap" rel="preload" as="style" onload="this.onload=null;this.rel='stylesheet'">

  <meta name="robots" content="index, follow">

  <?php
  wp_head();

  $primary_color = get_theme_mod('primary_color');
  $primary_color_hover = Mindfulness_Customizer::adjust_brightness($primary_color, -30);
  $offset_background = get_theme_mod('offset_background');
  ?>

  <style>
    :root {
      --wm-primary-color: <?php echo esc_html($primary_color); ?>;
      --wm-primary-color-hover: <?php echo esc_html($primary_color_hover); ?>;
      --wm-offset-background: <?php echo esc_html($offset_background); ?>;
    }
  </style>
</head>

<body id="ess-body" class="ess-body-frontend ess-revamp-shell ess-nav-on-dark<?php echo (is_front_page() ? ' ess-homepage' : ''); ?>">
  <header id="wm-header" class="ess-revamp-header">
    <?php get_template_part('template-parts/revamp/site-nav'); ?>
  </header>

  <div id="ess-main-container">
