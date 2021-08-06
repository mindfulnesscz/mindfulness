<?php 
    global $post;
    $cats = get_the_category(0);
?>

<section class="bg-secondary no-padding"> 
                <div class="container">
                    
                    <div class="row justify-center">
						<?php  
						
							if ( $cats[0]->slug != 'automotive'): 
						
						?>
                        <a href="<?php echo get_home_url();?>/automotive-industry" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">
                            <?php 
                                get_template_part( 'template-parts/content/industries/content', 'automotive' );
                            ?>
                            <!--<img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_automation.jpg" class="ess-industry-icon max-width-image">-->
                            <h2>AUTOMOTIVE</h2>

                            <span class="ess-icon icon_circle_arrow_right"></span>
                        </a>
						<?php 

                            endif;
							
                            if ($cats[0]->slug != 'oil-gas'):

						?>


                        <a href="<?php echo get_home_url();?>/oil-gas" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">
                            
                            <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_oil.jpg" class="ess-industry-icon max-width-image">-->
                            <?php 
                                get_template_part( 'template-parts/content/industries/content', 'oil-gas' );
                            ?>
                            
                            <h2>OIL AND GAS</h2>

                            <span class="ess-icon icon_circle_arrow_right"></span>
                        </a>

						<?php 

							endif;
                            
                            if ($cats[0]->slug != 'energy-environment'):

						?>


                        <a href="<?php echo get_home_url();?>/energy-environment" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">
                            <div class="industry-3d-holder" id="env-3d-holder">
                            </div>
                            <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_environment.jpg" class="ess-industry-icon max-width-image">-->
                            
                            <?php 
                                get_template_part( 'template-parts/content/industries/content', 'environment-energy' );
                            ?>
                            
                            <h2>ENERGY AND ENVIRONMENT</h2>

                            <span class="ess-icon icon_circle_arrow_right"></span>
                        </a>

						<?php 

                            endif;
							
                            if ($cats[0]->slug != 'Processing'):

						?>

                        <a href="<?php echo get_home_url(); ?>/processing" class="ess-industry-card col-xs-12 col-md-6 col-lg-3 align-center ">
                            
                            <!-- <img src="<?php echo get_template_directory_uri(); ?>/assets/images/ico_mineral.jpg" class="ess-industry-icon max-width-image">-->
                            
                            <?php 
                                get_template_part( 'template-parts/content/industries/content', 'processing' );
                            ?>
                            
                            <h2>PROCESSING</h2>

                            <span class="ess-icon icon_circle_arrow_right"></span>
                        </a>

						<?php 

							endif; 

						?>

                    </div>
                </div>
            </section>