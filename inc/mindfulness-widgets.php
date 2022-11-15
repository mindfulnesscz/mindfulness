
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
}
add_action('widgets_init', 'ess_widgets');

?>