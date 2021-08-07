$(document).ready(function(){

	$('.subscribe-form').each(function(){
		subscribe_form_handler($(this));
	});

});

function subscribe_form_handler($form){
    $button = $form.find('.ess-submit');
    console.log('the button');
    console.log($button);
	
	
	$button.click(function(e){
		e.preventDefault();
		
		
		// odstraní chybové hlášky pokud se vyskytují
		$($form.find('.email-form-alert')).remove();
		$($form.find('.privacy-form-alert')).remove();
 
		var hasError=false;
		var emailReg=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		

		var $email_input		= $($form.find('.email-form-input')[0]);
		var $privacy_checkbox	= $($form.find('.privacy-checkbox')[0]);
		
		var email_input_val		= $email_input.val();
		var privacy_checked 	= $privacy_checkbox.is(":checked") ? true : false;
		
		if(email_input_val == ''){
			$email_input.after('<div class="alert alert-error email-form-alert" role="alert">Please fill your contact email</div>');
			hasError = true;
		}
		else if(!emailReg.test(email_input_val)){
			$email_input.after('<div class="alert alert-error email-form-alert" role="alert">Please check the format of Your email address.</div>');
			hasError = true;
		}
		if(!privacy_checked){
			$($privacy_checkbox.parent()).after('<div class="alert alert-error privacy-form-alert" role="alert">You must agree to our privacy policy.</div>');
			hasError=true;
		}
		
		if(hasError==false){
			$(this).hide();

			$.post(
					subscribe_ajax_obj.ajaxurl, {    				// objekt vytvořený pomocí localize_script
					action			:"subscribe_action",			// název fce, volané v url a přidané hookem
					email		    :email_input_val,			// hodnoty zadané v kontaktním formuláři
				},
				function(data){
					console.log('success');
					var $print 			= data;
					var $form_babies 	= $($form.find('.form-babies')[0]);
					var $form_body 		= $($form_babies.parent());
					
					$form_babies.slideUp("normal", function(){ $form_body.append($print) });
			})
			.done(function() { console.log('Request done!'); })
        	.fail(function(jqxhr, settings, ex) { 
				console.log('failed, ' + ex); 
					var $print 			= '<div class="alert alert-error" role="alert">There has been an issue with sending Your message.<br>'+ ex+'</div>';
					var $form_babies 	= $($form.find('.ess-subscribe-footer')[0]);
					var $form_body 		= $($form_babies[0].parent());
					
					$form_babies.slideUp("normal", function(){ $form_body.append($print) });
			
			});
		}
		return false;
	});
}