<?php

/**
 * Template part for displaying posts
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package WordPress
 * @subpackage Mindbootstrap
 * @since 1.0
 * @version 1.0
 */

?>



<!-- Note :    - You can modify the font style and form style to suit your website.    - Code lines with comments Do not remove this code are required for the form to work properly, make sure that you do not remove these lines of code.    - The Mandatory check script can modified as to suit your business needs.    - It is important that you test the modified form before going live.-->
<div id='crmWebToEntityForm' class='zcwf_lblLeft crmWebToEntityForm' style='background-color: white;color: black;max-width: 600px;'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <META HTTP-EQUIV='content-type' CONTENT='text/html;charset=UTF-8'>
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js'> </script>
  <style>
    .wf_customMessageBox {
      font-family: Arial, Helvetica, sans-serif;
      color: #132C14;
      background: #F5FAF5;
      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.25);
      max-width: 90%;
      width: max-content;
      word-break: break-word;
      z-index: 11000;
      border-radius: 6px;
      border: 1px solid #A9D3AB;
      min-width: 100px;
      padding: 10px 15px;
      display: flex;
      align-items: center;
      position: fixed;
      top: 20px;
      left: 50%;
      transform: translate(-50%, 0);
    }

    .wf_customCircle {
      position: relative;
      background-color: #12AA67;
      border-radius: 100%;
      width: 20px;
      height: 20px;
      flex: none;
      margin-right: 7px;
    }

    .wf_customCheckMark {
      box-sizing: unset !important;
      position: absolute;
      transform: rotate(45deg)translate(-50%, -50%);
      left: 6px;
      top: 9px;
      height: 8px;
      width: 3px;
      border-bottom: 2px solid #fff;
      border-right: 2px solid #fff;
    }

    .wf_customClose {
      box-sizing: border-box;
      position: relative;
      width: 18px;
      height: 18px;
    }

    .wf_customClose::after,
    .wf_customClose::before {
      content: '';
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 12px;
      height: 1.5px;
      background: #616E88;
      transform: rotate(45deg);
      border-radius: 5px;
      top: 8px;
      left
    }

    .wf_customClose::after {
      transform: rotate(-45deg)
    }
  </style>



  <div class='wf_customMessageBox' id='wf_splash' style='display:none'>
    <div class='wf_customCircle'>
      <div class='wf_customCheckMark'></div>
    </div>
    <span id='wf_splash_info'></span>
  </div>



  <form id='webform793535000010187041' name=WebToLeads793535000010187041 accept-charset='UTF-8'> <input type='text' style='display:none;' name='xnQsjsdp' value='9fc929587fa0147f98f9f1e1a88bb7ee656987681ae26eb7c30ae5b8275c52cf'> </input> <input type='hidden' name='zc_gad' id='zc_gad' value=''> </input> <input type='text' style='display:none;' name='xmIwtLD' value='4301b493e9ef6b37433f8c2e939eeffdd296ee8967d112b879186eafef3b93573358016ceb940d3f0acfa9272a8dd9dc'> </input> <input type='text' style='display:none;' name='actionType' value='TGVhZHM='> </input> <input type='text' style='display:none;' name='returnURL' value='null'> </input> <!-- Do not remove this code. -->
    <style>
      html,
      body {
        margin: 0px;
      }

      .formsubmit.zcwf_button {
        color: white !important;
        background: transparent linear-gradient(0deg, #0279FF 0%, #00A3F3 100%);
      }

      #crmWebToEntityForm.zcwf_lblLeft {
        width: 100%;
        padding: 25px;
        margin: 0 auto;
        box-sizing: border-box;
      }

      #crmWebToEntityForm.zcwf_lblLeft * {
        box-sizing: border-box;
      }

      #crmWebToEntityForm {
        text-align: left;
      }

      #crmWebToEntityForm * {
        direction: ltr;
      }

      .zcwf_lblLeft .zcwf_title {
        word-wrap: break-word;
        padding: 0px 6px 10px;
        font-weight: bold
      }

      .zcwf_lblLeft.cpT_primaryBtn:hover {
        background: linear-gradient(#02acff 0, #006be4 100%)no-repeat padding-box !important;
        box-shadow: 0 -2px 0 0 #0159b9 inset !important;
        border: 0 !important;
        color: #fff !important;
        outline: 0 !important;
      }

      .zcwf_lblLeft .zcwf_col_fld input[ type=text],
      input[ type=password],
      .zcwf_lblLeft .zcwf_col_fld textarea {
        width: 60%;
        border: 1px solid #c0c6cc !important;
        resize: vertical;
        border-radius: 2px;
        float: left;
      }

      .zcwf_lblLeft .zcwf_col_lab {
        width: 30%;
        word-break: break-word;
        padding: 0px 6px 0px;
        margin-right: 10px;
        margin-top: 5px;
        float: left;
        min-height: 1px;
      }

      .zcwf_lblLeft .zcwf_col_fld {
        float: left;
        width: 68%;
        padding: 0px 6px 0px;
        position: relative;
        margin-top: 5px;
      }

      .zcwf_lblLeft .zcwf_privacy {
        padding: 6px;
      }

      .zcwf_lblLeft .wfrm_fld_dpNn {
        display: none;
      }

      .dIB {
        display: inline-block;
      }

      .zcwf_lblLeft .zcwf_col_fld_slt {
        width: 60%;
        border: 1px solid #ccc;
        background: #fff;
        border-radius: 4px;
        font-size: 12px;
        float: left;
        resize: vertical;
        padding: 2px 5px;
      }

      .zcwf_lblLeft .zcwf_row:after,
      .zcwf_lblLeft .zcwf_col_fld:after {
        content: '';
        display: table;
        clear: both;
      }

      .zcwf_lblLeft .zcwf_col_help {
        float: left;
        margin-left: 7px;
        font-size: 12px;
        max-width: 35%;
        word-break: break-word;
      }

      .zcwf_lblLeft .zcwf_help_icon {
        cursor: pointer;
        width: 16px;
        height: 16px;
        display: inline-block;
        background: #fff;
        border: 1px solid #c0c6cc;
        color: #c1c1c1;
        text-align: center;
        font-size: 11px;
        line-height: 16px;
        font-weight: bold;
        border-radius: 50%;
      }

      .zcwf_lblLeft .zcwf_row {
        margin: 15px 0px;
      }

      .zcwf_lblLeft .formsubmit {
        margin-right: 5px;
        cursor: pointer;
        color: #313949;
        font-size: 12px;
      }

      .zcwf_lblLeft .zcwf_privacy_txt {
        width: 90%;
        color: rgb(0, 0, 0);
        font-size: 12px;
        font-family: Arial;
        display: inline-block;
        vertical-align: top;
        color: #313949;
        padding-top: 2px;
        margin-left: 6px;
      }

      .zcwf_lblLeft .zcwf_button {
        font-size: 12px;
        color: #313949;
        border: 1px solid #c0c6cc;
        padding: 3px 9px;
        border-radius: 4px;
        cursor: pointer;
        max-width: 120px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .zcwf_lblLeft .zcwf_tooltip_over {
        position: relative;
      }

      .zcwf_lblLeft .zcwf_tooltip_ctn {
        position: absolute;
        background: #dedede;
        padding: 3px 6px;
        top: 3px;
        border-radius: 4px;
        word-break: break-word;
        min-width: 100px;
        max-width: 150px;
        color: #313949;
        z-index: 100;
      }

      .zcwf_lblLeft .zcwf_ckbox {
        float: left;
      }

      .zcwf_lblLeft .zcwf_file {
        width: 55%;
        box-sizing: border-box;
        float: left;
      }

      .cBoth:after {
        content: '';
        display: block;
        clear: both;
      }

      @media all and (max-width: 600px) {

        .zcwf_lblLeft .zcwf_col_lab,
        .zcwf_lblLeft .zcwf_col_fld {
          width: auto;
          float: none !important;
        }

        .zcwf_lblLeft .zcwf_col_help {
          width: 40%;
        }
      }
    </style>



    <div class='zcwf_title' style='max-width: 600px;color: black; font-family:Arial;'>ESS Webform</div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='Last_Name'>Last Name <span style='color:red;'>*</span> </label> </div>
      <div class='zcwf_col_fld'> <input type='text' id='Last_Name' aria-required='true' aria-label='Last Name' name='Last Name' aria-valuemax='80' maxlength='80'> </input>
        <div class='zcwf_col_help'> </div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='First_Name'>First Name <span style='color:red;'>*</span> </label> </div>
      <div class='zcwf_col_fld'> <input type='text' id='First_Name' aria-required='true' aria-label='First Name' name='First Name' aria-valuemax='40' maxlength='40'> </input>
        <div class='zcwf_col_help'> </div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='Email'>Email <span style='color:red;'>*</span> </label> </div>
      <div class='zcwf_col_fld'> <input type='text' ftype='email' autocomplete='false' id='Email' aria-required='true' aria-label='Email' name='Email' aria-valuemax='100' crmlabel='' maxlength='100'> </input>
        <div class='zcwf_col_help'> </div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='Phone'>Phone</label> </div>
      <div class='zcwf_col_fld'> <input type='text' id='Phone' aria-required='false' aria-label='Phone' name='Phone' aria-valuemax='30' maxlength='30'> </input>
        <div class='zcwf_col_help'> </div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='Company'>Company or School <span style='color:red;'>*</span> </label> </div>
      <div class='zcwf_col_fld'> <input type='text' id='Company' aria-required='true' aria-label='Company' name='Company' aria-valuemax='200' maxlength='200'> </input>
        <div class='zcwf_col_help'> </div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='LEADCF14'>Country <span style='color:red;'>*</span> </label> </div>
      <div class='zcwf_col_fld'> <select class='zcwf_col_fld_slt' role='combobox' aria-expanded='false' aria-haspopup='listbox' id='LEADCF14' onChange='addAriaSelected793535000010187041()' aria-required='true' aria-label='LEADCF14' name='LEADCF14'>
          <option value='-None-'>-None-</option>
          <option value='Albania'>Albania</option>
          <option value='Algeria'>Algeria</option>
          <option value='Argentina'>Argentina</option>
          <option value='Australia'>Australia</option>
          <option value='Austria'>Austria</option>
          <option value='Belgium'>Belgium</option>
          <option value='Brazil'>Brazil</option>
          <option value='Bulgaria'>Bulgaria</option>
          <option value='Canada'>Canada</option>
          <option value='China'>China</option>
          <option value='Croatia'>Croatia</option>
          <option value='Cyprus'>Cyprus</option>
          <option value='Czech&#x20;Republic'>Czech Republic</option>
          <option value='Denmark'>Denmark</option>
          <option value='Egypt'>Egypt</option>
          <option value='Finland'>Finland</option>
          <option value='France'>France</option>
          <option value='Georgia'>Georgia</option>
          <option value='Germany'>Germany</option>
          <option value='Greece'>Greece</option>
          <option value='Hong&#x20;kong'>Hong kong</option>
          <option value='Hungary'>Hungary</option>
          <option value='Iceland'>Iceland</option>
          <option value='India'>India</option>
          <option value='Indonesia'>Indonesia</option>
          <option value='Ireland'>Ireland</option>
          <option value='Italy'>Italy</option>
          <option value='Japan'>Japan</option>
          <option value='Korea'>Korea</option>
          <option value='Luxemborg'>Luxemborg</option>
          <option value='Malaysia'>Malaysia</option>
          <option value='Mexico'>Mexico</option>
          <option value='Monaco'>Monaco</option>
          <option value='Morocco'>Morocco</option>
          <option value='Netherlands'>Netherlands</option>
          <option value='New&#x20;Zealand'>New Zealand</option>
          <option value='Nigeria'>Nigeria</option>
          <option value='Norway'>Norway</option>
          <option value='Oman'>Oman</option>
          <option value='Poland'>Poland</option>
          <option value='Portugal'>Portugal</option>
          <option value='Qatar'>Qatar</option>
          <option value='Romania'>Romania</option>
          <option value='Russia'>Russia</option>
          <option value='Saudi&#x20;Arabia'>Saudi Arabia</option>
          <option value='Singapore'>Singapore</option>
          <option value='Slovakia'>Slovakia</option>
          <option value='Slovenia'>Slovenia</option>
          <option value='South&#x20;Africa'>South Africa</option>
          <option value='Spain'>Spain</option>
          <option value='Sri&#x20;Lanka'>Sri Lanka</option>
          <option value='Sweden'>Sweden</option>
          <option value='Switzerland'>Switzerland</option>
          <option value='Taiwan'>Taiwan</option>
          <option value='Thailand'>Thailand</option>
          <option value='Turkey'>Turkey</option>
          <option value='UAE'>UAE</option>
          <option value='UK'>UK</option>
          <option value='Ukraine'>Ukraine</option>
          <option value='USA'>USA</option>
          <option value='Vietnam'>Vietnam</option>
        </select>
        <div class='zcwf_col_help'> </div>
      </div>
    </div>
    <div class='zcwf_row'>
      <div class='zcwf_col_lab' style='font-size:12px; font-family: Arial;'> <label for='LEADCF15'>Problem Description &#x2f; Your Message</label> </div>
      <div class='zcwf_col_fld'> <textarea style='font-family: Arial, sans-serif;' aria-multiline='true' id='LEADCF15' aria-required='false' aria-label='LEADCF15' name='LEADCF15'></textarea>
        <div class='zcwf_col_help'> </div>
      </div>
    </div> <input type='text' type='hidden' style='display: none;' name='aG9uZXlwb3Q' value='' />
    <div class='zcwf_row'>
      <div class='zcwf_col_lab'> </div>
      <div class='zcwf_col_fld'> <input type='submit' id='formsubmit' role='button' class='formsubmit zcwf_button' value='Submit' aria-label='Submit' title='Submit'> <input type='reset' class='zcwf_button' role='button' name='reset' value='Reset' aria-label='Reset' title='Reset'> </div>
    </div>
    <script>
      function addAriaSelected793535000010187041() {
        var optionElem = event.target;
        var previousSelectedOption = optionElem.querySelector('[aria-selected=true]');
        if (previousSelectedOption) {
          previousSelectedOption.removeAttribute('aria-selected');
        }
        optionElem.querySelectorAll('option')[optionElem.selectedIndex].ariaSelected = 'true';
      }

      function validateEmail793535000010187041() {
        var form = document.forms['WebToLeads793535000010187041'];
        var emailFld = form.querySelectorAll('[ftype=email]');
        var i;
        for (i = 0; i < emailFld.length; i++) {
          var emailVal = emailFld[i].value;
          if ((emailVal.replace(/^\s+|\s+$/g, '')).length != 0) {
            var atpos = emailVal.indexOf('@');
            var dotpos = emailVal.lastIndexOf('.');
            if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailVal.length) {
              alert('Please enter a valid email address. ');
              emailFld[i].focus();
              return false;
            }
          }
        }
        return true;
      }

      function checkMandatory793535000010187041() {
        var mndFileds = new Array('Company', 'First Name', 'Last Name', 'Email', 'LEADCF14');
        var fldLangVal = new Array('Company\x20or\x20School', 'First\x20Name', 'Last\x20Name', 'Email', 'Country');
        for (i = 0; i < mndFileds.length; i++) {
          var fieldObj = document.forms['WebToLeads793535000010187041'][mndFileds[i]];
          if (fieldObj) {
            if (((fieldObj.value).replace(/^\s+|\s+$/g, '')).length == 0) {
              if (fieldObj.type == 'file') {
                alert('Please select a file to upload.');
                fieldObj.focus();
                return false;
              }
              alert(fldLangVal[i] + ' cannot be empty.');
              fieldObj.focus();
              return false;
            } else if (fieldObj.nodeName == 'SELECT') {
              if (fieldObj.options[fieldObj.selectedIndex].value == '-None-') {
                alert(fldLangVal[i] + ' cannot be none.');
                fieldObj.focus();
                return false;
              }
            } else if (fieldObj.type == 'checkbox') {
              if (fieldObj.checked == false) {
                alert('Please accept  ' + fldLangVal[i]);
                fieldObj.focus();
                return false;
              }
            }
            try {
              if (fieldObj.name == 'Last Name') {
                name = fieldObj.value;
              }
            } catch (e) {}
          }
        }
        if (!validateEmail793535000010187041()) {
          return false;
        }
        var urlparams = new URLSearchParams(window.location.search);
        if (urlparams.has('service') && (urlparams.get('service') === 'smarturl')) {
          var webform = document.getElementById('webform793535000010187041');
          var service = urlparams.get('service');
          var smarturlfield = document.createElement('input');
          smarturlfield.setAttribute('type', 'hidden');
          smarturlfield.setAttribute('value', service);
          smarturlfield.setAttribute('name', 'service');
          webform.appendChild(smarturlfield);
        }
        document.querySelector('.crmWebToEntityForm .formsubmit').setAttribute('disabled', true);
        return true;
      }
      $(document).ready(function() {
        $('#webform793535000010187041').submit(function(e) {
          var ismandatory = checkMandatory793535000010187041();
          e.preventDefault();
          if (ismandatory) {
            if (typeof _wfa_track != 'undefined' && _wfa_track.wfa_submit) {
              _wfa_track.wfa_submit(e);
            }
            var formData = new FormData(this);
            console.log(formData.entries());
            $.ajax({
              url: 'https://crm.zoho.eu/crm/WebToLeadForm',
              type: 'POST',
              data: formData,
              cache: false,
              contentType: false,
              processData: false,
              success: function(data) {
                var splashinfodom = document.getElementById('wf_splash_info');
                splashinfodom.innerText = data.actionvalue;
                var splashdom = document.getElementById('wf_splash');
                document.getElementById('webform793535000010187041').reset.click();
                splashdom.style.display = '';
                setTimeout(function() {
                  splashdom.style.display = 'none';
                }, 5000);
                document.querySelector('.crmWebToEntityForm .formsubmit').removeAttribute('disabled');
              },
              error: function(data) {
                alert('an error occurred');
              }
            });
          }
        });
      });

      function tooltipShow793535000010187041(el) {
        var tooltip = el.nextElementSibling;
        var tooltipDisplay = tooltip.style.display;
        if (tooltipDisplay == 'none') {
          var allTooltip = document.getElementsByClassName('zcwf_tooltip_over');
          for (i = 0; i < allTooltip.length; i++) {
            allTooltip[i].style.display = 'none';
          }
          tooltip.style.display = 'block';
        } else {
          tooltip.style.display = 'none';
        }
      }
    </script> <!-- Do not remove this --- Analytics Tracking code starts -->
    <script id='wf_anal' src='https://crm.zohopublic.eu/crm/WebFormAnalyticsServeServlet?rid=0f4f54f3621731e15526dc6d787d62e2b9fbf2c1e8480d4bb88fe5b508d86c56e4102bf5df8f10a10826c3ca8f99fc08gid5b2b4595f76d561e0d4203650c5dac0eca1bf3f1a562e1f4410f3c92a15a746fgid9f968d19c70c9aaff9e3b8dad232036edc63c24747f7036453d5c5736a34fda4gid5967264a171477cfc1441685cd819696e778a0ba1daf59a28e60a8870f1a0685&tw=3578b2d2af505144d2590970028ec7df8fe90310e6b005ba0f86bbc082c492e9'> </script> <!-- Do not remove this --- Analytics Tracking code ends. -->

  </form>
</div>