/*jshint esversion: 6 */

document.addEventListener("DOMContentLoaded", () => {
    
    let $bamFormHolder =  document.querySelector('#bamfilter-form-holder');
    let $bamFilter = $bamFormHolder.querySelector('#bamfilter-form');
    let $submitButton = $bamFilter.querySelector('.ess-submit');
    let $inputEmail = $bamFilter.querySelector('#bam-input-email');
    let $alertEmail = $bamFilter.querySelector('#bam-email-alert');
    let $inputPrivacy = $bamFilter.querySelector('#bam-input-privacy');
    let $alertPrivacy = $bamFilter.querySelector('#bam-privacy-alert');

    let $preloader = $bamFormHolder.querySelector('#bamfilter-preloader-holder');

    $submitButton.addEventListener('click', ()=>{
        // I. clear alerts if any
        $alertEmail.style.display = "none";
        $alertEmail.innerHTML = "";
         $alertPrivacy.style.display = "none";
         $alertPrivacy.innerHTML = "";

        let hasError = false;
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

        let emailInputVal = $inputEmail.value;
        let privacyChecked = $inputPrivacy.checked;

        if(emailInputVal == ''){
            $alertEmail.style.display = 'block';
            $alertEmail.innerHTML = 'Please fill your contact email';
			hasError = true;
        }
        else if(!emailReg.test(emailInputVal)){
            $alertEmail.style.display = 'block';
			$alertEmail.innerHTML = 'Please check the format of Your email address';
			hasError = true;
        }
        if(!privacyChecked){
            $alertPrivacy.style.display = 'block';
            $alertPrivacy.innerHTML = 'You must agree to our privacy policy.';
			hasError=true;
        }
        

        if(hasError==false){
            
            // HIDE THE FORM



            let h  = $bamFilter.clientHeight;
                    
            $bamFilter.style.display = 'none';

            $preloader.style.display = "flex";
            $preloader.style.height = h+'px';




			$.post(
					subscribe_ajax_obj.ajaxurl, {    				// objekt vytvořený pomocí localize_script
					action			:"bamfilter_action",			// název fce, volané v url a přidané hookem
					email		    :emailInputVal,			// hodnoty zadané v kontaktním formuláři
				},
				function ( data ) {

                    data = data.substr(0, data.length-1);
                    console.log(data);
                    data = JSON.parse(data);

                    $preloader.style.display = 'none';

                    let header = document.createElement( "h2" );
                    header.classList.add('aligncenter');
                    header.classList.add('has-primary-color');
                    header.innerHTML = data.response;

                    let illust = document.createElement( "div" );
                    if(data.status == 'success')
                        illust.classList.add( 'bam-link-illust' );
                    else
                        illust.classList.add( 'bam-error-illust' );

                    /*let link = document.createElement( "a" );
                    link.style.margin = "0 auto";
                    link.setAttribute("target", "_blank"); 
                    link.innerHTML = 'Download'
                    link.classList.add( 'ess-lg-button' );
                    link.href = data;*/

                    
                    $bamFormHolder.appendChild( header );

                    $bamFormHolder.appendChild( illust );

                    //$bamFormHolder.appendChild( link );



					console.log( 'success' );
                    
                    console.log( data );
			})
			.done ( function () { console.log('Request done!'); })
        	.fail( function ( jqxhr, settings, ex ) { 
				console.log( 'failed, ' + ex ); 			
			});
		}
    });
});