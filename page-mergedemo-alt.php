	<?php
/**
 * The template for Mege Demo Page
 *
 * Template Name: MergeDemoAlternative
 *
 *
 * @package WordPress
 * @subpackage Ess Merge Demo
 * @since 1.0.1
 * @version 1.0.1
 */

get_header(); ?>



<div id="main" class="emds-page bg-grey-lighter">

<?php 

 while ( have_posts() ) : the_post();
 
            // Include the page content template.
			
			get_template_part( 'template-parts/content/content', 'page' );
endwhile;

echo( do_shortcode('[ess_mergedemo singlepage="true" alternative="true"]'));




$post_name = get_the_title();

?>

</div>

<script type="text/javascript">
		<?php $home = home_url(); ?>
		  var url_array = [];

    url_array.automotive = '<?php echo $home ?>/automotive';
    url_array.environment = '<?php echo $home ?>/environment';
    url_array.mineral = '<?php echo $home ?>/mineral';
    url_array.oil = '<?php echo $home ?>/oil';
    url_array.whoweare = '<?php echo $home ?>/about-us';
    url_array.careeropportunities = '<?php echo $home ?>/career';
    url_array.ourteam = '<?php echo $home ?>/about-us/#our-team';
    url_array.news = '<?php echo $home ?>/news';
    url_array.contactus = '<?php echo $home ?>/contact';
    url_array.signinregister = '<?php echo $home ?>/login';;
    url_array.onlinetrial = 'http://alsim.petrmucha.cz';
    url_array.paintshop = '<?php echo $home ?>/alsim-paintshop';
    url_array.merge = '<?php echo $home ?>/alsim-merge';
    url_array.services = '<?php echo $home ?>/services';
    url_array.sense = '<?php echo $home ?>/alsim-sense';
    url_array.press = '<?php echo $home ?>/press';
    url_array.usecases = '<?php echo $home ?>/case_solution';
    url_array.linkedin = 'https://linked.in';
    url_array.subscribe = 'action_abc';
    url_array.twitter = 'https://twitter.com';
    url_array.facebook = 'https://facebook.com';
    url_array.events = '<?php echo $home ?>/events';

		window.ess_url_array = url_array;
		url_array = '';

		window.template_url = "<?php echo(get_template_directory_uri()) ?>";
		

</script>

<?php wp_footer(); ?>