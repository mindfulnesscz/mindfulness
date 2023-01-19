	<?php
  /**
   * The template for Mege Demo Page
   *
   * Template Name: BAM Paper
   *
   *
   * @package WordPress
   * @subpackage Ess Merge Demo
   * @since 1.0.1
   * @version 1.0.1
   */

  get_header(); ?>

	<header id="ess-header" class="halfsize bamfilter-header">
	  <div class="ess-keypage-header">
	    <div class="ess-keypage-header-content-holder" id="bamfilter-header">

	      <h1 id="bamfilter-logo">
	        <?php echo (the_title()); ?>
	      </h1>

	    </div>
	  </div>
	</header>


	<div id="main" class="bamfiltermain">
	  <div id="page-cut-top">
	    <div class="bam-middle"></div>
	    <div class="bam-cut-corner left"></div>
	    <div class="bam-cut-corner right"></div>
	  </div>

	  <?php

    while (have_posts()) : the_post();

      // Include the page content template.

      get_template_part('template-parts/content/content', 'page');
    endwhile;

    $post_name = get_the_title();

    ?>

	  <div class="container">
	    <div class="row just-center">
	      <div class="col-xs-12 col-md-8 col-lg-6">
	        <div id="bamfilter-form-holder" class="p-top-double p-bot-quad">
	          <form id="bamfilter-form">
	            <h2 class="aligncenter has-primary-color p-top-double p-bot-double">In order to get access to the complete paper, please leave us Your Email address:</h2>

	            <div class="form-body">
	              <div class="form-babies">

	                <div class="input-field">
	                  <input id="bam-input-email" type="email" class="validate email-form-input">
	                  <label for="bam-input-email">Enter Your Email</label>
	                </div>
	                <div style="display: none;" id="bam-email-alert" class="alert alert-error email-alert" role="alert"></div>

	                <label>
	                  <input id="bam-input-privacy" type="checkbox" class="privacy-checkbox" />
	                  <span>I Agree with <a href="<?php echo (home_url()) . '/legal-notice#ess-privacy-policy'; ?>">ESS privacy policy</a></span>
	                </label>
	                <div style="display: none;" id="bam-privacy-alert" class="alert alert-error email-alert" role="alert"></div>
	                <div class="p-top-base"></div>
	                <button type="button" class="wm-button ess-submit">Submit</button>
	              </div>
	            </div>
	          </form>

	          <div id="bamfilter-preloader-holder" style="display: none;">

	            <div class="preloader-wrapper big active">
	              <div class="spinner-layer spinner-blue-only">
	                <div class="circle-clipper left">
	                  <div class="circle"></div>
	                </div>
	                <div class="gap-patch">
	                  <div class="circle"></div>
	                </div>
	                <div class="circle-clipper right">
	                  <div class="circle"></div>
	                </div>
	              </div>

	            </div>

	          </div>
	        </div>
	      </div>
	    </div>
	  </div>

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

	  window.template_url = "<?php echo (get_template_directory_uri()) ?>";
	</script>

	<?php get_footer();
