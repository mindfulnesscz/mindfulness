<?php

/**
	    _______
	  /        /\
   /        /  \
  /_______ /    \
  \        \    /
   \        \  /
	  \ ______ \/

 * Sets up theme defaults and registers support for various WordPress features.
 * 
 * @since Mindfulness 1.0
 */

define("MINDFULNESS_VERSION", "3.0.0");
define("DEFAULT_IMAGE_ID", 155);

/**
 * To store all print messages for print in debug/research console
 * @var Array
 * @since 1.1.6
 */
$MindationConsoleArray = array();


$inc = get_template_directory() . '/inc/mindfulness-';

$_path_ = get_template_directory();

require_once $inc . 'setup.php';

require_once $inc . 'breadcrumb.php'; // breadcrumbs

require_once $inc . 'navwalker.php';  // custom menu

require_once $inc . 'fn.php'; // useful functions

require_once $inc . 'scripts.php'; // registering and handling javascripts and css

require_once $inc . 'endpoints.php'; // register and callbacks for custom endpoints

require_once $inc . 'widgets.php'; // Registers custom widgets. Currently in footer only

require_once $inc . 'customizer.php'; // Color settings for Mindfulness

$WMMC = new Mindfulness_Customizer('mindfulness');

new Mindfulness_Setup();



// DD FILTER TO CUSTOM IMAGE SIZES BE VISIBLE VIA IMAGEUPLOAD COMPONENT GUTENBERG

add_filter('image_size_names_choose', 'my_custom_sizes');

function my_custom_sizes($sizes)
{
  return array_merge($sizes, array(
    'tiny'         => __('tiny'),
    'small_uncropped'  => __('small_uncropped'),
    'upper_large'     => __('upper_large'),
    'huge'        => __('huge'),
    'upper_huge'    => __('upper_huge')
  ));
}

add_action('init', 'mind_type');

function mind_type()
{
  register_post_type(
    'news',
    array(
      'labels' => array(
        'name' => __('News'),
        'singular_name' => __('News')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  => true,
      'show_in_rest' => true,
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );

  register_post_type(
    'case_solution',
    array(
      'labels' => array(
        'name' => __('Case Solutions'),
        'singular_name' => __('Case Solution')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  => array('slug' => 'case-solutions'),
      'show_in_rest' => true,
      'taxonomies'          => array('category'),
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );

  register_post_type(
    'paper',
    array(
      'labels' => array(
        'name' => __('Papers'),
        'singular_name' => __('Paper')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  =>  true,
      'show_in_rest' => true,
      'taxonomies'          => array('papers'),
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );
}


// lowers the length of the excerpt
add_filter('excerpt_length', function ($length) {
  return 20;
});

function add_categories_to_pages()
{
  register_taxonomy_for_object_type('category', 'page');
}
add_action('init', 'add_categories_to_pages');
