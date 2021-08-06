<?php
/**
 * Displays top navigation
 *
 * @package WordPress
 * @subpackage Mindbootstrap
 * @since 1.0
 * @version 1.0
 */

?>
					<nav class="navbar navbar-expand-md navbar-light " aria-label="<?php esc_attr_e( 'Top Menu', 'twentyseventeen' ); ?>">
	      				
						
						<a class="navbar-brand" href="<?php echo esc_url( home_url( ));?>">
    						
  							<h2>
  							<img class="float-left" src="<?php echo get_theme_file_uri('assets/images/tubabu.png')?>" width="204" heigh="auto" alt="">
  							</h2>
  						</a>
  						
  						<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#freelandTopMenu" aria-controls="#freelandTopMenu" aria-expanded="false" aria-label="Toggle navigation">
							<span class="navbar-toggler-icon"></span>
						</button>
  						
	<?php wp_nav_menu( array(
		'theme_location' => 'top',
		'menu_id'        => 'top-menu',
		'depth'             => 2,
        'container'         => 'div',
        'container_class'   => 'collapse navbar-collapse',
        'container_id'      => 'freelandTopMenu',
        'menu_class'        => 'nav navbar-nav mr-auto',
        'fallback_cb'       => 'WP_Bootstrap_Navwalker::fallback',
        'walker'            => new Mindfulness_Navwalker())
	 ); ?>

					</nav><!-- #site-navigation -->
				

