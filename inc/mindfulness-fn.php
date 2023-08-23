<?php

require_once(get_template_directory() . '/inc/utils/wm_console.php');

/**
 * ESS_IMAGE_SRC
 * function that takes an image id and gets array of contents or false. 
 * 	- String - url of the image thumbnail
 *  - String - whole srcset declaration
 *  - Int	 - thumbnail width
 *  - Int    - thumbnial height
 *
 * @param $id		id of an image
 * @return array/false	
 * @since  1.0.0
 * 
 */

function ess_image_src($id, $sizes = array())
{

  if (!$sizes || empty($sizes))
    $sizes = array('tiny', 'thumbnail', 'medium', 'large', 'upper_large', 'huge', 'upper_huge');

  $output = "";
  for ($i = 0; $i < sizeof($sizes); $i++) {
    $img = wp_get_attachment_image_src($id, $sizes[$i]);
    if ($img && !empty($img)) :
      if ($i != 0)
        $output .= ",";
      $output .= "\r					" . $img[0] . " " . $img[1] . "w";
    endif;
  }

  $small = wp_get_attachment_image_src($id, 'small_uncropped');

  if ($small) {
    return (array(
      $small[0],
      $output,
      $small[1] / $small[2] && $small[2] !=  0 ? $small[2] : 1
    ));
  } else return false;
};


/**
 * DEFAULT_IMAGE_ID
 * Returns the id of the default placeholder image set in functions.php 
 *
 * @return Integer	
 * @since  1.0.0
 * 
 */

function default_image_id()
{

  return $GLOBALS['DEFAULT_IMAGE_ID'];
}

/**
 * returns the version number defined in functions.php as global variable
 * or random number if is development mode in wp-config.php
 * 
 * @return string Current version defined in template functions.php	
 * @since  1.2.0 
 */
function mindfulness_version()
{
  return WP_DEBUG === true ? strval(rand(1, 99999999999999999)) : constant("MINDFULNESS_VERSION");
}


function ess_get_career_page_id()
{

  $career_page_arr = get_pages(array(
    'meta_key'     => '_wp_page_template',
    'meta_value'   => 'page-career.php',
    'number'    => 1
  ));

  $career_page_id = $career_page_arr[0]->post_id;

  return $career_page_id;
}

/**
 * Get user info for navigation
 * @return string current user First name of _false_ if the user is not logged in
 */
