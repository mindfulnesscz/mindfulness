<?php

/**
 * Reusable revamp CTA button using the existing ESS spacy button style.
 *
 * @package WordPress
 * @subpackage MindfulnESS
 */

$label = $args['label'] ?? '';
$url = $args['url'] ?? '';
$extra_classes = $args['class'] ?? '';

if (!$label || !$url) {
  return;
}

$classes = trim('wm-button spacy inverse ' . $extra_classes);
?>

<a class="<?php echo esc_attr($classes); ?>" href="<?php echo esc_url($url); ?>">
  <?php echo esc_html($label); ?>
</a>
