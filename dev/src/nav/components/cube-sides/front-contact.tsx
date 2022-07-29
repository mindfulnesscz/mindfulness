
import React from 'react';

const FrontContact: React.FC = () => {
  
  return ( 
    <div id="csscube-front" className='wmcube-side'>
      <div className="css_block css-block-header w_xii h_iii x_o y_o">
        <div>
          <h1>Contact</h1>
        </div>
      </div>
      <div className="css_block w_viii h_viii x_o y_iii css-gray">
        <a href="<?php echo home_url() . '/contact'; ?>">
          <h2>Contact Us</h2>
        </a>
      </div>
      <div className="css_block w_iv h_viii x_viii y_iii css-gray">
        <a id="cube_subscribe_button">
          <h2>Subscribe</h2>
        </a>
      </div>
      <div className="css_block w_iv h_iv x_o y_xi css-gray-lighter">
        <a href="https://www.facebook.com/essteyr" target="_blank" rel="noreferrer">
          <h2><span className="ess-icon icon_facebook text-xxl"></span></h2>
        </a>
      </div>
      <div className="css_block w_iv h_iv x_iv y_xi css-gray-lighter">
        <a href="https://twitter.com/ESSteyr" target="_blank" rel="noreferrer">
          <h2><span className="ess-icon icon_twitter text-xxl"></span></h2>
        </a>
      </div>
      <div className="css_block w_iv h_iv x_viii y_xi css-gray-lighter">
        <a href="https://www.linkedin.com/company/ess-engineeringsoftwaresteyr" target="_blank" rel="noreferrer">
          <h2><span className="ess-icon icon_linkedin text-xxl"></span></h2>
        </a>
      </div>
    </div> 
  );
};

export default FrontContact;