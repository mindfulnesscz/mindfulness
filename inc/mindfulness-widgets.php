
<?php

function ess_widgets()
{
  register_sidebar(array(
    'name' => __('Footer contact', 'footer_contact'),
    'id' => 'footer_contact',
    'before_widget' => '<div>',
    'after_widget' => '</div>',
    'before_title' => '<h1>',
    'after_title' => '</h1>',
  ));


  register_sidebar(array(
    'name' => __('Homepage Banner', 'home_banner'),
    'id' => 'home_banner',
    'before_widget' => '<div>',
    'after_widget' => '</div>',
    'before_title' => '<>',
    'after_title' => '</>',
    'show_in_rest' => true,
  ));
}
add_action('widgets_init', 'ess_widgets');

?>