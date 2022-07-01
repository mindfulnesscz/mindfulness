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
      'init_wordpress',
    );

    $init_actions = array(
      'disable_emojis'
    );

    foreach ($actions as $action) {
      add_action('after_setup_theme', array($this, $action));
    }
    foreach ($init_actions as $action) {
      add_action('init', array($this, $action));
    }
  }

  /**
   * INIT_WORDPRESS - Initial edits to default Wordpress to better performance and security
   *  @since 2.1
   */
  public function init_wordpress()
  {
    // get rid of ugly meta tags
    remove_action('wp_head', 'wp_generator');
    remove_action('wp_head', 'wlwmanifest_link');
    remove_action('wp_head', 'rsd_link');

    // get rid of unnecessary RSS
    remove_action('wp_head', 'feed_links', 2);
    remove_action('wp_head', 'feed_links_extra', 3);

    // remove the admin bar
    add_filter('show_admin_bar', '__return_false');

    // remove emojis
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
  }



  /**
   * Disable the emoji's
   */
  function disable_emojis()
  {
    remove_action('wp_head', 'print_emoji_detection_script', 7);
    remove_action('admin_print_scripts', 'print_emoji_detection_script');
    remove_action('wp_print_styles', 'print_emoji_styles');
    remove_action('admin_print_styles', 'print_emoji_styles');
    remove_filter('the_content_feed', 'wp_staticize_emoji');
    remove_filter('comment_text_rss', 'wp_staticize_emoji');
    remove_filter('wp_mail', 'wp_staticize_emoji_for_email');

    // Remove from TinyMCE
    add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
  }
  /**
   * Filter out the tinymce emoji plugin.
   */
  function disable_emojis_tinymce($plugins)
  {
    if (is_array($plugins)) {
      return array_diff($plugins, array('wpemoji'));
    } else {
      return array();
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

    require_once('mindfulness_color_palette.php');

    // Disable Custom Colors
    add_theme_support('disable-custom-colors');

    // Editor Color Palette
    add_theme_support('editor-color-palette', $mindfulness_color_palette);
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
