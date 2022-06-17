/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', () => {
    
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
    $alertEmail.style.display = 'none';
    $alertEmail.innerHTML = '';
    $alertPrivacy.style.display = 'none';
    $alertPrivacy.innerHTML = '';

    let hasError = false;
    let emailReg = /^([\w-.]+@([\w-]+\.)+[\w-]{2,4})?$/;

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

      $preloader.style.display = 'flex';
      $preloader.style.height = h+'px';




    }
  });
});