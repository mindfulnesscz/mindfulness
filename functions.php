<?php

/**
	    _______
	  /        /\
   /        /  \
  /_______ /    \
  \        \    /
   \        \  /
	  \ ______ \/

 * Sets up theme defaults and registers support for various WordPress features.
 * @since Mindfulness 1.0
 * 
 */

define("MINDFULNESS_VERSION", "2.0.2");
define("DEFAULT_IMAGE_ID", 155);


$inc = get_template_directory() . '/inc/mindfulness-';

$_path_ = get_template_directory();

require_once $inc . 'setup.php';

require_once $inc . 'breadcrumb.php'; // breadcrumbs

require_once $inc . 'navwalker.php';  // custom menu

require_once $inc . 'fn.php'; // useful functions


new Mindfulness_Setup();



// DD FILTER TO CUSTOM IMAGE SIZES BE VISIBLE VIA IMAGEUPLOAD COMPONENT GUTENBERG

add_filter('image_size_names_choose', 'my_custom_sizes');

function my_custom_sizes($sizes)
{
  return array_merge($sizes, array(
    'tiny'         => __('tiny'),
    'small_uncropped'  => __('small_uncropped'),
    'upper_large'     => __('upper_large'),
    'huge'        => __('huge'),
    'upper_huge'    => __('upper_huge')
  ));
}




function mindfulness_scripts()
{

  wp_enqueue_style('stylesheet', get_template_directory_uri() . '/assets/css/mindfulness.css', array(), mindfulness_version());

  //wp_register_script( 'TweenMax', 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/gsap.min.js' );
  //wp_register_script( 'ScrollTo', 'https://cdn.jsdelivr.net/npm/gsap@3.0.1/dist/ScrollToPlugin.min.js');

  wp_enqueue_script('TweenMax');
  wp_enqueue_script('ScrollTo');

  wp_register_script('ess', get_template_directory_uri() . '/assets/js/index.js', array(), mindfulness_version());
  wp_enqueue_script('ess');

  wp_register_script('subscribe', get_template_directory_uri() . '/assets/js/subscribe.js', array('jquery'), mindfulness_version());
  wp_enqueue_script('subscribe');

  //creates an object 'subscribe_ajax_obj in scope of the subscribe.js script with ajaxurl path to ajax function.. clever and overcomplicated I'd say 
  wp_localize_script(
    'subscribe',
    'subscribe_ajax_obj',
    array(
      'ajaxurl'   => admin_url('admin-ajax.php')
    )
  );






  // PAGE TEMPLATE CONDITIONAL SCRIPTS ----------------- >

  if (is_post_type_archive('case_solution')) :

    wp_register_script('filter-izotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js', array('jquery'));
    wp_enqueue_script('filter-izotope');

    wp_enqueue_script('ess-filter', get_template_directory_uri() . '/assets/js/ess-filter.js', array(), mindfulness_version());

  endif;

  if (is_page_template('page-bampaper.php')) :

    wp_register_script('bam-filter-paper', get_template_directory_uri() . '/assets/js/bamfilter.js', array('TweenMax', 'ess'), mindfulness_version());
    wp_enqueue_script('bam-filter-paper');

    wp_register_style('bam-filter-paper-style', get_template_directory_uri() . '/assets/css/bamfilter.css', array(), mindfulness_version());
    wp_enqueue_style('bam-filter-paper-style');

  endif;
}


add_action('wp_enqueue_scripts', 'mindfulness_scripts');



add_action('init', 'mind_type');

function mind_type()
{
  register_post_type(
    'news',
    array(
      'labels' => array(
        'name' => __('News'),
        'singular_name' => __('News')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  => true,
      'show_in_rest' => true,
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );

  register_post_type(
    'case_solution',
    array(
      'labels' => array(
        'name' => __('Case Solutions'),
        'singular_name' => __('Case Solution')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  => array('slug' => 'case-solutions'),
      'show_in_rest' => true,
      'taxonomies'          => array('category'),
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );

  register_post_type(
    'paper',
    array(
      'labels' => array(
        'name' => __('Papers'),
        'singular_name' => __('Paper')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  =>  true,
      'show_in_rest' => true,
      'taxonomies'          => array('papers'),
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );

  register_post_type(
    'opened_position',
    array(
      'labels' => array(
        'name' => __('Career Opportunities'),
        'singular_name' => __('Career Opportunity')
      ),
      'public' => true,
      'has_archive' => true,
      'capability_type'  =>  'post',
      'hierarchical'  =>  false,
      'rewrite'  => array('slug' => 'career-opportunities'),
      'show_in_rest' => true,
      'supports'  =>  array('title', 'editor', 'page-attributes', 'thumbnail', 'excerpt')
    )
  );
}



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


// lowers the length of the excerpt
add_filter('excerpt_length', function ($length) {
  return 20;
});

function add_categories_to_pages()
{
  register_taxonomy_for_object_type('category', 'page');
}
add_action('init', 'add_categories_to_pages');

// --------- actions for the subscribe of the BAM mask filter paper... 

add_action('wp_ajax_bamfilter_action', 'ajax_bamfilter_mail');
add_action('wp_ajax_nopriv_bamfilter_action', 'ajax_bamfilter_mail');


function set_html_content_type()
{
  return 'text/html';
}
function ajax_bamfilter_mail()
{

  $email = $_POST['email'];

  $to =     "covid19@essteyr.com";
  //$to = 		"covid19@essteyr.com";
  $subject =   "Visitor applied for BAM paper";
  $txt =     "There has been an successful file request made on page https://www.essteyr.com/bam-filter from the email " . $email . ".";
  $headers =   "From: " . $email;

  wp_mail($to, $subject, $txt, $headers);

  add_filter('wp_mail_content_type', 'set_html_content_type');

  $GLOBALS['smtp_user'] = 'covid19@essteyr.com';
  $GLOBALS['smtp_pass'] = 'mzVMpass1';
  $GLOBALS['smtp_from'] = 'covid19@essteyr.com';
  $GLOBALS['smtp_name'] = 'ESS BAM Filter Team';

  $subject_link = "ESS Bam filter research paper ";

  $text_link = '<!DOCTYPE html
	PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html lang="EN" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:v="urn:schemas-microsoft-com:vml">
  
  <head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
	<!--[if !mso]><!-->
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<!--<![endif]-->
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  
  
	<style type="text/css">
	  * {
		font-family: Arial, Helvetica, sans-serif;
		-webkit-margin-before: 0;
		-webkit-margin-after: 0;
		margin: 0;
		padding: 0;
	  }
  
	  a {
		color: inherit;
	  }
  
	  body {
		-webkit-font-smoothing: antialiased;
		-webkit-text-size-adjust: none;
		width: 100%;
		height: 100%;
		background-color: #EAEAEA;
	  }
  
	  body,
	  tr,
	  td,
	  span,
	  div,
	  p,
	  a,
	  li {
		-moz-text-size-adjust: none;
		-webkit-text-size-adjust: none;
		-ms-text-size-adjust: none;
		white-space: wrap;
		margin: 0;
	  }
  
	  .ExternalClass {
		width: 100%;
	  }
  
	  table,
	  td {
		border-collapse: collapse;
		direction: ltr;
	  }
  
	  @media only screen and (max-width: 599px) {
		table.sFeatListTblClass {
		  width: 100% !important;
		  display: table !important;
		}
  
		td.sFeatListTextCellClass {
		  width: 100% !important;
		}
  
		table.featureBlockTable {
		  width: 100% !important;
		  max-width: inherit !important;
		  display: table !important;
		}
	  }
  
	  @media only screen and (max-width: 450px) {
		td.spacer10 {
		  width: 1.5% !important;
		}
  
		td.spacer20 {
		  width: 3% !important;
		}
  
		td.spacer25 {
		  width: 3.75% !important;
		}
  
		td.spacer30 {
		  width: 4.5% !important;
		}
  
		td.spacer50 {
		  width: 7.5% !important;
		}
  
		td.spacer60 {
		  width: 9% !important;
		}
  
		td.spacer75 {
		  width: 11.3% !important;
		}
  
		td.spacer100 {
		  width: 15% !important;
		}
  
		td.spacer150 {
		  width: 22.5% !important;
		}
  
		td.featBlockHeaderPads {
		  width: 25% !important;
		}
	  }
  
	  @media only screen and (max-width: 400px) {
  
		table#footerBlockL,
		table#footerBlockR {
		  float: none;
		  width: 100% !important;
		  text-align: center !important;
		  margin-left: auto !important;
		  margin-right: auto !important;
		}
  
		.footerBlock .FooterLinks {
		  text-align: center !important;
		  margin-left: auto !important;
		  margin-right: auto !important;
		}
	  }
  
	  @media only screen and (max-width: 320px) {
		td.spacer10 {
		  width: 1.4% !important;
		}
  
		td.spacer20 {
		  width: 2.8% !important;
		}
  
		td.spacer25 {
		  width: 3.4% !important;
		}
  
		td.spacer30 {
		  width: 4.2% !important;
		}
  
		td.spacer50 {
		  width: 6.9% !important;
		}
  
		td.spacer60 {
		  width: 8.3% !important;
		}
  
		td.spacer75 {
		  width: 10.4% !important;
		}
  
		td.spacer100 {
		  width: 13.8% !important;
		}
  
		td.spacer150 {
		  width: 20.8% !important;
		}
  
		td.featBlockHeaderPads {
		  width: 20% !important;
		}
	  }
	</style>
  
	<!--[if gte mso 9]>  <style type="text/css">   table{border-collapse: collapse !important;mso-table-lspace: 0pt; mso-table-rspace: 0pt;}    table td.columnfeatures table.feature-ico,table td.columnfeatures table.feature-txt {width:100% !important;}  </style>  <xml>   <o:OfficeDocumentSettings>    <o:AllowPNG/>    <o:PixelsPerInch>96</o:PixelsPerInch>   </o:OfficeDocumentSettings>  </xml> <![endif]-->
  
	<meta name="subject" content="ESS BAM Filter Research Download Link">
	<meta name="targetlanguage" content="en-US">
	<meta name="emailname" content="ESS2020_BamFilter_Download-link">
  
	<title>ESS BAM Filter Research Paper</title>
  </head>
  
  <body style="margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;">
	<style type="text/css">
	  div.preheader {
		display: none !important;
	  }
	</style>
	<div class="preheader" style="font-size: 1px; display: none !important;">Get the download link</div>
	<table bgcolor="#EAEAEA" width="100%" border="0" cellpadding="0" cellspacing="0" style="direction:ltr;">
	  <tr>
		<td align="center">
		  <table align="center" border="0" cellpadding="0" cellspacing="0"
			style="max-width:600px;margin-left:auto;margin-right:auto;">
			<tr>
			  <td width="600" align="center">
				<table width="100%" border="0" cellpadding="0" cellspacing="0">
				  <tr>
					<td align="center" style="text-align:center;">
  
					  <table width="100%" cellspacing="0" cellpadding="0" style="direction:ltr;">
  
						<tr>
						  <td style="padding:0; font-size:0;" colspan="5" height="39">&nbsp;</td>
						</tr>
  
  
						<tr>
						  <td id="headerSnippetSpacerL" style="padding:0; font-size:0;" width="10">&nbsp;</td>
  
  
						  <td style="padding:0; font-size:0;" width="125" align="left" valign="top">
							<a
							  style="text-decoration: none;"
							  href="https://www.essteyr.com"
							  target="_blank">
							  <img title="Engineering Software Steyr"
								style="border: 0px; height:auto; font-family:Arial, Helvetica, sans-serif;font-size:15px; font-weight:400; mso-line-height-rule:exactly; line-height:24px; color:#00aeef;"
								alt="Engineering Software Steyr"
								src="https://www.essteyr.com/ess-media/email/ess-logo-email.png"
								width="125" border="0" align="left" />
							  </a></td>
						  <td style="padding:0; font-size:0;" width="20">&nbsp;</td>
						  <td style="padding:0; font-size:0;" align="right">
							<!--[If gte mso 9]><style type="text/css">td#BrowserView a, td#BrowserView a:link, td#BrowserView a:visited { color:#8050FF !important; }</style><![Endif]-->
							<table width="100%" border="0" cellpadding="0" cellspacing="0" style="direction:ltr;">
							  <tr>
								<td id="BrowserView"
								  style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef;"
								  align="right"><a
									href="https://www.essteyr.com/ess-media/email/bam-email-web.html"
									style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef; text-decoration: underline;">Show
									in&nbsp;browser</a></td>
							  </tr>
  
							</table>
						  </td>
  
						  <td id="headerSnippetSpacerR" style="padding:0; font-size:0;" width="10">&nbsp;</td>
  
						</tr>
  
						<tr>
						  <td style="padding:0; font-size:0;" colspan="5" height="30">&nbsp;</td>
						</tr>
  
					  </table>
					  <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#ffffff"
						style="max-width:600px;border-radius:3px;">
						<tr>
						  <td valign="top">
							<table border="0" cellpadding="0" cellspacing="0" width="100%">
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
							  <tr>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
								<td
								  style="font-family:Arial, Helvetica, sans-serif;font-size: 26px;font-weight: 400;mso-line-height-rule:exactly; line-height:31px;text-align:left; color:#00aeef;"
								  align="left">BAM Filter Paper</td>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
							  </tr>
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
							</table>
						  </td>
						</tr>
						<!-- Button -->
						<tr>
						  <td valign="top" bgcolor="#ebf7f7">
							<table border="0" cellpadding="0" cellspacing="0" width="100%" style="direction:ltr;">
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
							  <tr>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
								<td
								  style="color:#636466; font-family:Arial, Helvetica, sans-serif;font-size:15px; font-weight:400; mso-line-height-rule:exactly; line-height:24px;"
								  align="left">Thank You for Your interest in the ESS BAM Filter Research Paper. You can download the file by clicking on the link bellow: 
								  </td>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
							  </tr>
							  <tr>
								<td height="25" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
  
  
  
  
  
							  <tr>
								<td style="padding:0; font-size:0;">&nbsp;</td>
								<td valign="top">
  
  
								  <!--[if gte mso 9]> <style type="text/css">  .td-cta-tbl a, .td-cta-tbl a:link,.td-cta-tbl a:visited { color:#ffffff !important; text-decoration:none;} </style> <![endif]-->
  
								  <div style="margin-left:auto;margin-right:auto;" align="left">
									<div class="cta-div" style="width:auto;" align="left">
									  <table style="margin-left:auto; margin-right:auto; direction:ltr;" width="480"
										height="40" cellspacing="0" cellpadding="0" align="left" class="cta-tbl">
										<tr>
										  <td
											style="text-transform:uppercase; font-size:14px; line-height:14px; color:#ffffff;display:block;background-color:#00aeef;box-shadow:0px 0px 0px 0px;border:2px;border-radius:2px;vertical-align:middle;text-align:center;direction:ltr;"
											class="td-cta-tbl" width="480" height="40" align="left">
											  <a class="cta"
											  href="https://www.essteyr.com/ess-media/bam/bio_active_medical_filter_able_to_coat_corona_viruses.pdf"
											  style="text-transform:uppercase;text-align:center;font-size:14px;line-height:14px;color:#ffffff;margin:0 auto;-webkit-text-size-adjust:none;text-decoration:none !important;display:inline-block;padding:0;padding-top:13px;padding-bottom:13px;width:480px;outline: none;"
											  target="_blank">
											  <!--      -->
											  <font
												style="font-size:14px;line-height:14px;color:#ffffff;text-decoration:none !important;"
												size="2" color="#ffffff" face="Arial, Helvetica, sans-serif">
												<!--      -->
												<span
												  style="text-transform:uppercase;font-size:14px;line-height:14px;color:#ffffff;font-weight:700;text-decoration:none !important;">ESS BAM Filter Research Paper Download Link</span><!--      -->
											  </font>
											</a><!--      -->
										  </td>
										</tr>
									  </table>
									</div>
								  </div>
  
  
  
  
  
								</td>
								<td style="padding:0; font-size:0;">&nbsp;</td>
							  </tr>
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
							</table>
						  </td>
						</tr>
						<!-- Support -->
						<tr>
						  <td valign="top">
							<table border="0" cellpadding="0" cellspacing="0" width="100%">
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
							  <tr>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
								<td
								  style="color:#767683; font-family:Arial, Helvetica, sans-serif;font-size:15px; font-weight:400; mso-line-height-rule:exactly; line-height:24px;"
								  align="left">Please don"t hesitate to leave us Your questions, thoughts or impressions at <a
									href="mailto: covid19@essteyr.com"
									style="color:#00aeef; font-family:Arial, Helvetica, sans-serif;font-size:15px; font-weight:400; mso-line-height-rule:exactly; line-height:24px; text-decoration: underline;"
									target="_blank">covid19@essteyr.com</a>.</td>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
							  </tr>
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
  
							  <tr>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
								<td
								  style="color:#767683; font-family:Arial, Helvetica, sans-serif;font-size:15px; font-weight:400; mso-line-height-rule:exactly; line-height:24px;"
								  align="left">Best Regards,<br />the ESS Team</td>
								<td style="padding:0; font-size:0;" width="8.3%" class="spacer50">&nbsp;</td>
							  </tr>
							  <tr>
								<td height="45" style="font-size:0;padding:0;" colspan="3">&nbsp;</td>
							  </tr>
							</table>
						  </td>
						</tr>
					  </table>
  
					  <!--[if gte mso 9]>
  <style type="text/css">
   td.FooterLinks a, td.FooterLinks a:link, td.FooterLinks a:visited { color:#8050FF !important; }
   td#FooterSupport a, td#FooterSupport a:link, td#FooterSupport a:visited { color:#AAABB6 !important; }
  </style>
  <![endif]-->
  
					  <table cellspacing="0" cellpadding="0" style="margin-left:auto; margin-right:0;" width="100%">
						<tr>
						  <td height="28" style="font-size:0; padding:0;" colspan="3">&nbsp;</td>
						</tr>
						<tr>
						  <td width="10" style="font-size:0;">&nbsp;</td>
						  <td valign="top">
							<table cellpadding="0" cellspacing="0" width="100%" style="direction:ltr;">
							  <tr>
								<td class="footerBlock" style="width:50%; vertical-align: middle;" valign="middle">
  
								  <!-- Essteyr Address -->
  
								  <table id="footerBlockL" cellspacing="0" cellpadding="0" align="left"
									style="margin-left:0; margin-right:auto; border:0; direction:ltr;">
									<tr>
									  <td class="FooterLinks"
										style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#767683; padding-bottom:28px;"
										align="left"><b>Engineering Software Steyr</b><br /><a
										  href="https://www.essteyr.com"
										  style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef; text-decoration:underline;"
										  title="ESS" target="_blank">www.essteyr.com</a></td>
									</tr>
								  </table>
  
  
								  <!-- Social Icons -->
  
								  <table align="right" id="footerBlockR" cellspacing="0" cellpadding="0"
									style="width:180px;border:0;" width="180">
									<tr>
									  <td width="12" style="font-size:0; padding:0;">&nbsp;</td>
									  <td valign="top"><a
										  href="https://facebook.com/essteyr"
										  target="_blank"><img width="36"
											src="https://www.essteyr.com/ess-media/email/mail-icon-facebook.png"
											alt="Facebook"
											style="outline:0;border:0;font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef;" /></a>
									  </td>
									  <td width="12" style="font-size:0; padding:0;">&nbsp;</td>
									  <td valign="top"><a
										href="https://twitter.com/essteyr"
										target="_blank"><img width="36"
										  src="https://www.essteyr.com/ess-media/email/mail-icon-twitter.png"
										  alt="Facebook"
										  style="outline:0;border:0;font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef;" /></a>
									  </td>
									  <td width="12" style="font-size:0; padding:0;">&nbsp;</td>
									  <td valign="top"><a
										href="https://www.linkedin.com/company/ess-engineeringsoftwaresteyr"
										target="_blank"><img width="36"
										  src="https://www.essteyr.com/ess-media/email/mail-icon-linkedin.png"
										  alt="Facebook"
										  style="outline:0;border:0;font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef;" /></a>
									  </td>
  
									</tr>
								  </table>
  
								</td>
							  </tr>
							</table>
						  </td>
						  <td width="10" style="font-size:0;">&nbsp;</td>
						</tr>
					  </table>
  
					  <table cellpadding="0" cellspacing="0" width="100%">
  
  
						<tr>
						  <td width="10" style="font-size:0;" rowspan="5">&nbsp;</td>
						  <td height="25" style="font-size:0; padding:0; border-top:1px solid #EAEAEA;">&nbsp;</td>
						  <td width="10" style="font-size:0;" rowspan="5">&nbsp;</td>
						</tr>
  
  
						<!-- Links -->
						<tr>
						  <td id="FooterLinks"
							style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#767683;"
							align="center">
							<a href="https://www.essteyr.com/legal-notice#ess-privacy-policy"
							  style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#00aeef; text-decoration:underline;"
							  title="Zásady ochrany osobních údajů">See our privacy policy</a>
						  </td>
						</tr>
						<tr>
						  <td height="5" style="font-size:0;">&nbsp;</td>
						</tr>
  
  
  
						<!-- Support -->
						<tr>
						  <td id="FooterSupport"
							style="font-family:Arial, Helvetica, sans-serif;font-size:13px; font-weight:400; mso-line-height-rule:exactly; line-height:20px; color:#767683;"
							align="center">Please ignore this Email if You got it by an accident.</td>
						</tr>
  
  
  
						<tr>
						  <td height="40" style="font-size:0; padding:0;">&nbsp;</td>
						</tr>
  
  
					  </table>
  
					</td>
				  </tr>
				</table>
			  </td>
			</tr>
		  </table>
		</td>
	  </tr>
	</table>
  
  </body>
  
  </html>
  
 nosig

  ';

  $headers_link = 'From: covid19@essteyr.com';

  $res_arr = array();

  $res = wp_mail($email, $subject_link, $text_link, $headers_link);

  remove_filter('wp_mail_content_type', 'set_html_content_type');

  if ($res == 1) {
    $res_arr['status'] = 'success';
    $res_arr['response'] = 'Thank You,<br> the download link has successfully been sent to email address: ' . $email;
  } else {
    $res_arr['status'] = 'error';
    $res_arr['response'] = 'We are facing issues trying to send You the link. Please reach us by email at <a href="mailto:covid19@essteyr.com" >covid19@essteyr.com</a>';
  }
  echo (json_encode($res_arr));
}

add_action('wp_ajax_subscribe_action', 'ajax_subscribe_mail');
add_action('wp_ajax_nopriv_subscribe_action', 'ajax_subscribe_mail');

function ajax_subscribe_mail()
{
  $email = $_POST['email'];
  $api_key = 'c659a93451194539318d8a335463b1e5-us7';
  $server_key = 'us7';
  $list_key = 'eb291157ad';

  $url = 'https://' . $server_key . '.api.mailchimp.com/3.0/lists/' . $list_key . '/members';

  $json = json_encode([
    'email_address' => $email,
    'status'        => 'pending', //pass 'subscribed' or 'pending'
  ]);

  $ch = curl_init($url);
  curl_setopt($ch, CURLOPT_USERPWD, 'user:' . $api_key);
  curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
  curl_setopt($ch, CURLOPT_TIMEOUT, 10);
  curl_setopt($ch, CURLOPT_POST, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
  curl_setopt($ch, CURLOPT_POSTFIELDS, $json);
  $result = curl_exec($ch);
  $status_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  curl_close($ch);

  switch ($status_code):
    case 200:
      echo '<div class="alert alert-success">All good, Thanks for subscribing. You\'ll receive an email shortly to confirm Your subscription</div>';
      break;
    case 400:
      echo '<div class="alert alert-error">There has been an issue probably with the email provided, please try to refresh the page for another go. If the problem persists, <a href="' . get_home_url() . '/contact">please contact us</a> the other way to solve the issue. Thanks for Your help.</div>';
      break;
    case 401:
      echo '<div class="alert alert-error">Problem with authentication with our newsletter system provider. <a href="' . get_home_url() . '/contact">Please contact us</a> the other way to solve the issue. Thanks for Your help.</div>';
      break;
    default:
      echo '<div class="alert alert-error">There has been an unknow and unexpected issue in our subsciption system. <a href="' . get_home_url() . '/contact">Please contact us</a> the other way to solve the issue. Thanks for Your help.</div>';
  endswitch;

  wp_die(); // All ajax handlers die when finished

}

add_action('phpmailer_init', 'send_smtp_email');
function send_smtp_email($phpmailer)
{
  $phpmailer->isSMTP();
  $phpmailer->Host       = SMTP_HOST;
  $phpmailer->SMTPAuth   = SMTP_AUTH;
  $phpmailer->Port       = SMTP_PORT;
  $phpmailer->SMTPSecure = SMTP_SECURE;
  $phpmailer->Username   = $GLOBALS['smtp_user'];
  $phpmailer->Password   = $GLOBALS['smtp_pass'];
  $phpmailer->From       = $GLOBALS['smtp_from'];
  $phpmailer->FromName   = $GLOBALS['smtp_name'];
}

// define the wp_mail_failed callback 
function action_wp_mail_failed($wp_error)
{
  return error_log(print_r($wp_error, true));
}

// add the action 
add_action('wp_mail_failed', 'action_wp_mail_failed', 10, 1);
