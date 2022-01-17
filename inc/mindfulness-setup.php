<?php

/**
 * 
 * Mindfulness_Setup.
 *
 * @since      1.1.0
 * @package    Mindfulness
 * @author     Webmajstr <ino@webmajstr.cz>
 * @copyright  Copyright (c) 2021 Webmajstr
 * @license    GPL2+
 *
 */

class Mindfulness_Setup
{

  /**
   *  @return void
      _______
    /        /\
   /        /  \
  /_______ /    \
  \        \    /
   \        \  /
    \ ______ \/
   */
  public function __construct()
  {

    $actions = array(
      'image_sizes',
      'color_palette',
      'wp_supports',
      'nav_menus',
      'mindfulness_i18n',
    );

    foreach ($actions as $action) {
      add_action('after_setup_theme', array($this, $action));
    }
  }



  /**
   * IMAGE_SIZES - Registers custom image sizes
   *  @since 1.9.2
   */
  public function image_sizes()
  {

    add_theme_support('tiny');
    add_theme_support('small_uncropped');
    add_theme_support('upper_large');
    add_theme_support('huge');
    add_theme_support('upper_huge');

    add_image_size('small_square', 150, 150, true);
    add_image_size('tiny', 150, 93, true);
    add_image_size('small_uncropped', 400, 400);
    add_image_size('upper_large', 1200, 1200);
    add_image_size('huge', 1600, 1600);
    add_image_size('upper_huge', 2400, 2400);
  }

  public function color_palette()
  {


    // Disable Custom Colors
    add_theme_support('disable-custom-colors');

    // Editor Color Palette
    add_theme_support(
      'editor-color-palette',
      array(
        array(
          'name'  => __('ESS Blue', 'mindfulness'),
          'slug'  => 'essblue',
          'color'  => '#3cb4ff',
        ),
        array(
          'name'  => __('Paintshop', 'mindfulness'),
          'slug'  => 'paintshop',
          'color'  => '#9b64aa',
        ),
        array(
          'name'  => __('Data Cleaning', 'mindfulness'),
          'slug'  => 'data-cleaning',
          'color'  => '#0ea285',
        ),
        array(
          'name'  => __('Processing', 'mindfulness'),
          'slug'  => 'processing',
          'color'  => '#d4cba4',
        ),
        array(
          'name'  => __('Mobility', 'mindfulness'),
          'slug'  => 'mobility',
          'color'  => '#eeaa32',
        ),
        array(
          'name'  => __('Washing', 'mindfulness'),
          'slug'  => 'washing',
          'color'  => '#9ad9eb',
        ),
        array(
          'name'  => __('Environment', 'mindfulness'),
          'slug'  => 'environment',
          'color'  => '#a4d06e',
        ),
        array(
          'name'  => __('Oil & Gas', 'mindfulness'),
          'slug'  => 'oil-gas',
          'color'  => '#52656e',
        ),
        array(
          'name'  => __('Grey - Base', 'mindfulness'),
          'slug'  => 'grey-base',
          'color'  => '#504d50',
        ),
        array(
          'name'  => __('Grey - Lighten 1', 'mindfulness'),
          'slug'  => 'grey-lighten-1',
          'color'  => '#787a7a',
        ),
        array(
          'name'  => __('Grey - Lighten 2', 'mindfulness'),
          'slug'  => 'grey-lighten-2',
          'color'  => '#bfbfc0',
        ),
        array(
          'name'  => __('Grey - Lighten 3', 'mindfulness'),
          'slug'  => 'grey-lighten-3',
          'color'  => '#d3d4d5',
        ),
        array(
          'name'  => __('Grey - Lighten 4', 'mindfulness'),
          'slug'  => 'grey-lighten-4',
          'color'  => '#e6e7e8',
        ),
        array(
          'name'  => __('Grey - Lighten 5', 'mindfulness'),
          'slug'  => 'grey-lighten-5',
          'color'  => '#eeeeee',
        ),
        array(
          'name'  => __('Grey - Darken 1', 'mindfulness'),
          'slug'  => 'grey-darken-1',
          'color'  => '#30383b',
        )
      )
    );
  }




  /**_WP_SUPPORTS - Enables support for:
   * 			Title tag
   * 			page excerpt
   * 			post thumbnails
   * 			different post formats like video or portfolio item TODO - probably dismiss
   *  @since 1.9.2
   */
  public function wp_supports()
  {


    add_theme_support('title-tag');

    add_post_type_support('page', 'excerpt');

    add_theme_support('post-thumbnails');

    set_post_thumbnail_size(1600, 1600);

    add_theme_support('html5', array(
      'search-form',
      'comment-form',
      'comment-list',
      'gallery',
      'caption',
    ));

    add_theme_support('post-formats', array(
      'video',
    ));
  }

  /**
   *  NAV MENUS - Registers Primary nave menu 
   *  @TODO - research on how this could be changed to have something less general in name
   *  @since 1.1.0
   */
  public function nav_menus()
  {

    register_nav_menus(array(
      'primary' => __('Primary Menu', 'mindfulness')
    ));
  }

  /**
   *  MINDFULNESS_I18N - Localization
   *  @since 1.9.2
   */

  public function mindfulness_i18n()
  {

    $path = get_template_directory() . '/languages';

    $result = load_theme_textdomain('mindfulness', $path);

    $locale = apply_filters('theme_locale', get_locale(), 'mindfulness');

    $desc = __('Mindfulness is a unique theme developed for purposes of ESS - Engineering Software Steyr - It is based on materialized CSS/JS Framework ');
  }
}
