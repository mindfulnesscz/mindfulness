<?php
/**
 * The template for displaying About page
 *
 * Template Name: Contact Page
 *
 *
 * @package WordPress
 * @subpackage MindfulnESS
 * @since 1.0
 * @version 1.0
 */

get_header(); ?>



<?php 




 while ( have_posts() ) : the_post();
            // Include the page content template.
            get_template_part( 'template-parts/content/content', 'page' );
endwhile;

?>

<!-- ========================================== CONTACT FORM AND MAP ========================================== -->


<!--<section class="bg-grey-lightest" style="z-index: 2;">
    <div class="container">
        <div class="row justify-center alignitems-stretch">
            <div class="col-xs-12 col-sm-10 col-lg-6">
                <div class="ess-page-contact-form  p-all-base h-100">
                    <h2 class="aligncenter">Send us an Email:</h2>
                    
                    <?php echo do_shortcode( '[mind-contact-form user_id="1" type="normal"]' ); ?>
                    
                </div>


   

            </div>
            
        </div>
    </div>
</section>-->

<section class="has-grey-lighten-5-background-color" >
    <h2 class="center-align p-bot-base">Arrange a meeting:</h2>
    <div id="microsoft-booking-iframe-holder" style=" height: 1180px; overflow: hidden;">
    <iframe id="microsoft-booking-iframe" style="top: -440px; width: 100%; border:0; height: 2100px; position: relative;  z-index: 0;"
        src="https://outlook.office365.com/owa/calendar/ESSEngineeringSoftwareSteyrGmbH@essteyr.com/bookings/"
        framborder="0">
    </iframe>
    </div>
</section>

<!--<script type="text/javascript">

var ess_contact_microsoft_booking_iframe_holder = document.getElementById ( 'microsoft-booking-iframe-holder' );

var ess_contact_microsoft_booking_iframe = document.getElementById ( 'microsoft-booking-iframe' );

function ess_contact_microsoft_booking_update () {

    if( ess_contact_microsoft_booking_iframe ) {
         
        ess_contact_microsoft_booking_iframe_holder.style.height = ess_contact_microsoft_booking_iframe.contentWindow.document.body.scrollHeight + 'px';

        requestAnimationFrame(ess_contact_microsoft_booking_update);

    }
    else { console.log ( 'something went wrong with autoresize microsoft booking iframe' ); };
}
requestAnimationFrame ( ess_contact_microsoft_booking_update );
</script>
-->


<section class="no-padding bg-grey-lightest">

    <iframe id="ess-main-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d21341.305078203077!2d14.4066302!3d48.0395326!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4773c58d19fcd59b%3A0x5728351a7987830e!2sESS+Engineering+Software+Steyr+GmbH!5e0!3m2!1sen!2sat!4v1558684074566!5m2!1sen!2sat"
        style="border: 0px none; pointer-events: all;" allowfullscreen="" frameborder="0"></iframe>

</section>




<!-- ========================================== CONTACT STRIP ========================================== -->


<section class="dark-block">
    <div class="container">
        <div class="row">
            <div class="col-xs-12 p-top-quad p-bot-quad">
                <h2>We are thrilled to meet You at our office</h2>
                <div class="show-on-mid-and-higher">
                    <h4>Want to examine some more?<br>Just hit the cube:</h4>
                    <div class="ess-navcube-cube" id="bottom-cube">
                        <div class="navcube-scene">
                            <div class="navcube-rotator">
                                <div class="navcube">
                                    <div class="navcube-front"></div>
                                    <div class="navcube-back"></div>
                                    <div class="navcube-left"></div>
                                    <div class="navcube-right"></div>
                                    <div class="navcube-top"></div>
                                    <div class="navcube-bottom"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>





<?php get_footer();?>