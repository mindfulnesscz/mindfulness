<?php

/**
 * Theme Gutenberg blocks.
 *
 * @package MindfulnESS
 */

add_action('init', 'mindfulness_register_blocks');

function mindfulness_register_blocks()
{
  $theme_dir = get_template_directory();
  $theme_uri = get_template_directory_uri();
  $block_script = '/assets/js/blocks/product-feature-card.js';
  $block_style = '/assets/css/product-feature-card-block.css';
  $block_script_version = WP_DEBUG === true ? filemtime($theme_dir . $block_script) : mindfulness_version();
  $block_style_version = WP_DEBUG === true ? filemtime($theme_dir . $block_style) : mindfulness_version();

  wp_register_script(
    'mindfulness-product-feature-card-block',
    $theme_uri . $block_script,
    array('wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n'),
    $block_script_version,
    true
  );

  wp_localize_script(
    'mindfulness-product-feature-card-block',
    'MindGlobal',
    array(
      'templateUrl' => $theme_uri,
      'homeUrl'     => get_home_url(),
    )
  );

  wp_register_style(
    'mindfulness-product-feature-card-block',
    $theme_uri . $block_style,
    array(),
    $block_style_version
  );

  register_block_type('mindfulness/product-feature-card', array(
    'editor_script' => 'mindfulness-product-feature-card-block',
    'editor_style'  => 'mindfulness-product-feature-card-block',
    'style'         => 'mindfulness-product-feature-card-block',
  ));
}
