<?php

/**
 * 
 * Customizer Functions for Mindfulness Theme.
 *
 *
 * @since      1.0
 * @author     Jakub Runda <info@webmajstr.cz>
 * @copyright  Copyright (c) 2021 Webmajstr
 * @license    GPL2+
 *
 */

class Mindfulness_Customizer
{

  /**
   * Mindfolio_Customizer constructor.
   *
   * @access public
   * @since  1.0
   * @return void
   * 
   */

  private $textdomain;

  public function __construct($textdomain)
  {


    $this->textdomain = $textdomain;
    add_action('customize_register', array($this, 'register_customize_sections'));

    add_action('admin_head', array($this, 'css_admin_vars'));
  }

  /**
   * Prints the css vars from customizer to the admin head for the editor to read
   * 
   * @access public
   * @since  1.1.4
   * @return void
   */
  public function css_admin_vars()
  {
    $primary_color = get_theme_mod('primary_color');
    $offset_background = get_theme_mod('offset_background');

    echo ('<style>
    :root {
			--wm-primary-color: ' . $primary_color . ';
			--wm-offset-background: ' . $offset_background . ';
		} 
  </style>');
  }

  /**
   * All sections and panels to the Customizer
   *
   * @param WP_Customize_Manager $wp_customize
   *
   * @access public
   * @since  1.0
   * @return void
   */
  public function register_customize_sections($wp_customize)
  {

    // New section for "Layout".

    $wp_customize->add_section('blog_layout', array(
      'title'    => __('Mindfulness Colors', $this->textdomain),
      'priority' => 101
    ));

    $wp_customize->add_section('template_images', array(
      'title'   => __('Mindfulness Images', $this->textdomain),
      'priority' => 102
    ));

    $this->blog_layout_section($wp_customize);
  }

  /**
   * Section: Blog Layout
   *
   * @param WP_Customize_Manager $wp_customize
   *
   * @access private
   * @since  1.0
   * @return void
   *
   */
  private function blog_layout_section($wp_customize)
  {

    /* PRIMARY COLOR */
    $wp_customize->add_setting('primary_color', array(
      'default'           => '#0032FF',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'primary_color', array(
      'label' => 'Theme Primary Color',
      'section' => 'blog_layout',
      'settings' => 'primary_color'
    )));

    /* PRIMARY COLOR HOVER */
    $wp_customize->add_setting('offset_background', array(
      'default'           => '#efefef',
    ));

    $wp_customize->add_control(new WP_Customize_Color_Control($wp_customize, 'offset_background', array(
      'label' => 'Offset Background',
      'section' => 'blog_layout',
      'settings' => 'offset_background'
    )));

    // IMAGES

    $wp_customize->add_setting('wm_nope_image', array(
      'default' => get_template_directory_uri('assets/images/m-default-nope-image.webp'), // Add Default Image URL 
      'sanitize_callback' => 'esc_url_raw'
    ));

    $wp_customize->add_control(new WP_Customize_Image_Control($wp_customize, 'wm_nope_image_control', array(
      'label' => 'Empty content Illustration',
      'priority' => 20,
      'section' => 'template_images',
      'settings' => 'wm_nope_image',
      'button_labels' => array( // All These labels are optional
        'select' => __('Select nope image', $this->textdomain),
        'remove' => __('Remove nope image', $this->textdomain),
        'change' => __('Change nope image', $this->textdomain),
      )
    )));
  }


  /**
   * Sanitize Checkbox
   * 
   * Accepts only "true" or "false" as possible values.
   *
   * @param $input
   *
   * @access public
   * @since  1.0
   * @return bool
   *
   */
  public function sanitize_checkbox($input)
  {
    return ($input === true) ? true : false;
  }

  /**
   * Sanitize Checkbox
   * 
   * Accepts only "true" or "false" as possible values.
   *
   * @param $input
   *
   * @access public
   * @since  1.0
   * @return bool
   *
   */

  public function sanitize_select($input, $setting)
  {

    // Ensure input is a slug.
    $input = sanitize_key($input);

    // Get list of choices from the control associated with the setting.
    $choices = $setting->manager->get_control($setting->id)->choices;

    // If the input is a valid key, return it; otherwise, return the default.
    return (array_key_exists($input, $choices) ? $input : $setting->default);
  }


  /**
   * adjust_brightness
   * shifts color for theme color options.
   * @param string 	$hex	color value
   * @param integer 	$steps	between -255 and 255
   *
   * @access public
   * @return string 	shifted hex
   * @since  1.0
   */

  public static function adjust_brightness($hex, $steps)
  {

    // Steps should be between -255 and 255. Negative = darker, positive = lighter
    $steps = max(-255, min(255, $steps));

    // Normalize into a six character long hex string
    $hex = str_replace('#', '', $hex);
    if (strlen($hex) == 3) {
      $hex = str_repeat(substr($hex, 0, 1), 2) . str_repeat(substr($hex, 1, 1), 2) . str_repeat(substr($hex, 2, 1), 2);
    }

    // Split into three parts: R, G and B
    $color_parts = str_split($hex, 2);
    $return = '#';

    foreach ($color_parts as $color) {
      $color   = hexdec($color); // Convert to decimal
      $color   = max(0, min(255, $color + $steps)); // Adjust color
      $return .= str_pad(dechex($color), 2, '0', STR_PAD_LEFT); // Make two char hex code
    }

    return $return;
  }
}
