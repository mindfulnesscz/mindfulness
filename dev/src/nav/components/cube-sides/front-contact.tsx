
import React from 'react';

const FrontContact: React.FC = () => {

  const showSubscribe = () => {
    console.log( 'showing subscribe from cube' );
    const subscribeModal = document.querySelector( '#ess-subscribe-modal' ) as HTMLDivElement;
    if( subscribeModal ) {
      window.MindGlobal.Modal.show( subscribeModal );
    }
  };

  
  return ( 
    <div id="csscube-front" className='wmcube-side'>
      <div className="css_block css-block-header w_xii h_iii x_o y_o">
        <div>
          <span className="csscube-nav-label">Contact</span>
        </div>
      </div>
      <div className="css_block w_viii h_viii x_o y_iii css-gray">
        <a href={`${window.MindGlobal.homeUrl}/contact`}>
          <span className="csscube-panel-label">Contact Us</span>
        </a>
      </div>
      <div className="css_block w_iv h_viii x_viii y_iii css-gray">
        <a id="cube_subscribe_button" className="wmwp-subscribe-trigger" onClick={()=>{showSubscribe();}}>
          <span className="csscube-panel-label">Subscribe</span>
        </a>
      </div>
      <div className="css_block w_iv h_iv x_o y_xi css-gray-lighter">
        <a href="https://www.facebook.com/essteyr" target="_blank" rel="noreferrer">
          <span className="csscube-panel-label"><span className="ess-icon icon_facebook text-xxl"></span></span>
        </a>
      </div>
      <div className="css_block w_iv h_iv x_iv y_xi css-gray-lighter">
        <a href="https://twitter.com/ESSteyr" target="_blank" rel="noreferrer">
          <span className="csscube-panel-label"><span className="ess-icon icon_twitter text-xxl"></span></span>
        </a>
      </div>
      <div className="css_block w_iv h_iv x_viii y_xi css-gray-lighter">
        <a href="https://www.linkedin.com/company/ess-engineeringsoftwaresteyr" target="_blank" rel="noreferrer">
          <span className="csscube-panel-label"><span className="ess-icon icon_linkedin text-xxl"></span></span>
        </a>
      </div>
    </div> 
  );
};

export default FrontContact;