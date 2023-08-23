<?php

add_action('rest_api_init', function () {
  register_rest_route('mindfulness', '/v2/case-solutions', array(
    'methods' => 'GET',
    'callback' => 'mind_get_case_solutions',
    'permission_callback' => '__return_true'
  ));
});


/**
 * Returns json encoded Array of N latest Case solutions thumbnail image and name.
 * N is the number specified in GET of the rest API call.
 *
 * @param object $args Options for the function.
 * @author Webmind <global@webmind.digital>
 * @since 3.0
 * @return string
 */
function mind_get_case_solutions(object $args)
{

  // get count in correct integer format. If no count available, 10 is provided
  if (!$args['count'])
    $c = 10;
  else
    $c = intval($args['count']);


  // Array to store custom data
  $ret = [];

  $cs_args  = array(
    'numberposts'      => $c,
    'orderby'         => 'post_date',
    'order'           => 'DESC',
    'post_type'       => 'case_solution',
  );

  $case_solutions = get_posts($cs_args);

  foreach ($case_solutions as $cs) {
    array_push($ret, [
      'id' => $cs->ID,
      'title' => $cs->post_title,
      'thumb' => get_the_post_thumbnail_url($cs->ID, 'small_uncropped'),
      'link' => get_post_permalink($cs->ID)
    ]);
  }
  return json_encode($ret);
}
