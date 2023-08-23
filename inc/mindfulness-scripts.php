<?php

/**
 * HANDLES SCRIPTS AND STYLE
 * @since 2.0.3
 */

add_action('wp_enqueue_scripts', 'mindfulness_scripts');
add_action('admin_enqueue_scripts', 'mindfulness_backend_scripts');

if (!is_admin()) add_filter('script_loader_tag', 'mind_defer_scripts', 10, 3);



function mindfulness_backend_scripts()
{
  wp_register_style('mindfulness-backend', get_template_directory_uri() . '/assets/css/mindfulness-backend.css', array(), mindfulness_version());
  wp_enqueue_style('mindfulness-backend');
}

/**
 * Loops /assets/js folder for chunks and returns the source path and the name of the plugin in an array
 * CURRENTLY SET TO OFF SINCE NO CHUNKS ARE EMITTED. 
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

  // NO CHUNKS AT THE MOMENT
  /* $chunks = wm_grab_chunks();*/
  $chunks_deps = array('react', 'react-dom', 'Gsap', 'ScrollTrigger', 'ScrollTo');

  /* NO CHUNKS AT THE MOMENT
  foreach ($chunks as $chunk) {
    array_push($chunks_deps, $chunk['id']);
    wp_enqueue_script($chunk['id'], $chunk['src'], array(), mindfulness_version());
  }*/

  // get rid of inline wp styles
  wp_dequeue_style('global-styles');

  wp_enqueue_style('stylesheet', get_template_directory_uri() . '/assets/css/mindfulness.css', array(), mindfulness_version());

  wp_enqueue_style('wm-spacing', get_template_directory_uri() . '/assets/css/wm-spacing.css', array(), mindfulness_version());

  wp_enqueue_style('home-banner', get_template_directory_uri() . '/assets/css/home-banner.css', array(), mindfulness_version());



  // dependencies
  wp_register_script('cdn-react', 'https://unpkg.com/react@18/umd/react.production.min.js', array(), mindfulness_version(), true);
  wp_register_script('cdn-react-dom', 'https://unpkg.com/react-dom@18/umd/react-dom.production.min.js', array('cdn-react'), mindfulness_version(), true);
  wp_register_script('Gsap', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js', array(), mindfulness_version(), true);
  wp_register_script('ScrollTo', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollToPlugin.min.js', array('Gsap'), mindfulness_version(), true);
  wp_register_script('ScrollTrigger', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/ScrollTrigger.min.js', array('Gsap'), mindfulness_version(), true);
  wp_register_script('WmGsap', get_template_directory_uri() . '/assets/js/wm_gsap.js', array('ScrollTrigger'), mindfulness_version(), true);

  // main script
  wp_register_script('ess', get_template_directory_uri() . '/assets/js/index.js', $chunks_deps, mindfulness_version(), true);

  //wp_enqueue_script('cdn-react');
  //wp_enqueue_script('cdn-react-dom');
  wp_enqueue_script('Gsap');
  wp_enqueue_script('ScrollTo');
  wp_enqueue_script('ScrollTtrigger');

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
    'MindGlobal',
    array(
      'templateUrl'   => get_template_directory_uri(),
      'templateVersion'   => mindfulness_version(),
      'homeUrl'  => get_home_url(),
    )
  );

  // PAGE TEMPLATE CONDITIONAL SCRIPTS ----------------- >

  if (is_post_type_archive('case_solution')) :

    wp_register_script('filter-izotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', array('jquery'));
    wp_enqueue_script('filter-izotope');

    wp_enqueue_script('ess-filter', get_template_directory_uri() . '/assets/js/ess-filter.js', array(), mindfulness_version());

  endif;
}


/**
 * Sets defer to footer scripts by changing its string representation
 * passed to the function from Worpdress script_loader_tag filter.
 * @since 3.0
 * @param string <script>element as string from
 * @return void
 */
function mind_defer_scripts($tag, $handle, $url)
{
  global $wp_scripts;

  if (in_array($handle, $wp_scripts->in_footer)) {
    //wm_console($handle);
    $tag = "<script type=\"text/javascript\" defer src=\"" . esc_url($url) . "\" id=\"" . $handle . "\"></script>\r\n";
  }
  return $tag;
}
