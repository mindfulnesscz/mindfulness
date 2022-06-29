<?php

/**
 * HANDLES SCRIPTS AND STYLE
 * @since 2.0.3
 */

add_action('wp_enqueue_scripts', 'mindfulness_scripts');
add_action('admin_enqueue_scripts', 'mindfulness_backend_scripts');



function mindfulness_backend_scripts()
{
  wp_register_style('mindfulness-backend', get_template_directory_uri() . '/assets/css/mindfulness-backend.css', array(), mindfulness_version());
  wp_enqueue_style('mindfulness-backend');
}

/**
 * Loops /assets/js folder for chunks and returns the source path and the name of the plugin in an array
 * 
 * @since 3.0
 * @return Array {'id, src]} Array of associative arrays with keys id and src for script registering
 */
function wm_grab_chunks()
{
  $chunks_folder = get_template_directory() . '/assets/js/chunks';
  $chunks_folder_uri = get_template_directory_uri() . '/assets/js/chunks';
  $ret = array();
  $d = scandir($chunks_folder);
  $test  = '/.+\.js$/';

  foreach ($d as $key => $file) {
    if (preg_match($test, $file))
      array_push($ret, array(
        'id' => 'chunk-' . $key,
        'src' => $chunks_folder_uri . '/' . $file
      ));
  }
  return $ret;
}

function mindfulness_scripts()
{

  //wm_console(json_encode(wm_grab_chunks()));

  $chunks = wm_grab_chunks();
  $chunks_deps = array('cdn-react', 'cdn-react-dom');

  foreach ($chunks as $chunk) {
    array_push($chunks_deps, $chunk['id']);
    wp_enqueue_script($chunk['id'], $chunk['src'], array(), mindfulness_version());
  }

  wp_enqueue_style('stylesheet', get_template_directory_uri() . '/assets/css/mindfulness.css', array(), mindfulness_version());
  wp_enqueue_style('home-banner', get_template_directory_uri() . '/assets/css/home-banner.css', array(), mindfulness_version());

  wp_register_script('cdn-react', 'https://unpkg.com/react@18/umd/react.production.min.js');
  wp_register_script('cdn-react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js');
  wp_register_script('TweenMax', 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js');
  wp_register_script('ScrollTo', 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/ScrollToPlugin.min.js');

  wp_enqueue_script('cdn-react');
  wp_enqueue_script('cdn-react-dom');
  wp_enqueue_script('TweenMax');
  wp_enqueue_script('ScrollTo');

  wp_register_script('ess', get_template_directory_uri() . '/assets/js/index.js', $chunks_deps, mindfulness_version());
  wp_enqueue_script('ess');


  //creates an object 'subscribe_ajax_obj in scope of the subscribe.js script with ajaxurl path to ajax function.. clever and overcomplicated I'd say 
  wp_localize_script(
    'subscribe',
    'subscribe_ajax_obj',
    array(
      'ajaxurl'   => admin_url('admin-ajax.php')
    )
  );

  wp_localize_script(
    'ess',
    'mindConstants',
    array(
      'template_url'   => get_template_directory_uri(),
      'template_version'   => MINDFULNESS_VERSION
    )
  );

  // PAGE TEMPLATE CONDITIONAL SCRIPTS ----------------- >

  if (is_post_type_archive('case_solution')) :

    wp_register_script('filter-izotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', array('jquery'));
    wp_enqueue_script('filter-izotope');

    wp_enqueue_script('ess-filter', get_template_directory_uri() . '/assets/js/ess-filter.js', array(), mindfulness_version());

  endif;
}
