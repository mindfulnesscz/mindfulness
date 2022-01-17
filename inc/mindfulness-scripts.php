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




function mindfulness_scripts()
{

  wp_enqueue_style('stylesheet', get_template_directory_uri() . '/assets/css/mindfulness.css', array(), mindfulness_version());

  //wp_register_script( 'TweenMax', 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js' );
  //wp_register_script( 'ScrollTo', 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/ScrollToPlugin.min.js');

  wp_enqueue_script('TweenMax');
  wp_enqueue_script('ScrollTo');

  wp_register_script('ess', get_template_directory_uri() . '/assets/js/index.js', array(), mindfulness_version());
  wp_enqueue_script('ess');

  wp_register_script('subscribe', get_template_directory_uri() . '/assets/js/subscribe.js', array('jquery'), mindfulness_version());
  wp_enqueue_script('subscribe');

  //creates an object 'subscribe_ajax_obj in scope of the subscribe.js script with ajaxurl path to ajax function.. clever and overcomplicated I'd say 
  wp_localize_script(
    'subscribe',
    'subscribe_ajax_obj',
    array(
      'ajaxurl'   => admin_url('admin-ajax.php')
    )
  );

  // PAGE TEMPLATE CONDITIONAL SCRIPTS ----------------- >

  if (is_post_type_archive('case_solution')) :

    wp_register_script('filter-izotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', array('jquery'));
    wp_enqueue_script('filter-izotope');

    wp_enqueue_script('ess-filter', get_template_directory_uri() . '/assets/js/ess-filter.js', array(), mindfulness_version());

  endif;

  if (is_page_template('page-bampaper.php')) :

    wp_register_script('bam-filter-paper', get_template_directory_uri() . '/assets/js/bamfilter.js', array('TweenMax', 'ess'), mindfulness_version());
    wp_enqueue_script('bam-filter-paper');

    wp_register_style('bam-filter-paper-style', get_template_directory_uri() . '/assets/css/bamfilter.css', array(), mindfulness_version());
    wp_enqueue_style('bam-filter-paper-style');

  endif;
}
