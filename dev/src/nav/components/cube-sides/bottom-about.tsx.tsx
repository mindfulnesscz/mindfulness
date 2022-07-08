
import React from 'react';


const BottomAbout: React.FC = () => {


  return ( 
    <div id="csscube-bottom">
      <div className="css_block w_xii h_v x_o y_o css-gray-lighter">
        <a href={window.MindGlobal.homeUrl}>
          <img loading="lazy" id="cube-ess-logo" alt="ESS - Engineering Software Steyr" src={`${window.MindGlobal.templateUrl}/assets/images/ess_logo.svg`} />
        </a>
      </div>


      <div className="css_block w_vi h_iii x_o y_v css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/about-us`}>
          <h2>About us</h2>
        </a>
      </div>
      <div className="css_block w_vi h_iii x_vi y_v css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/career`}>
          <h2>Career</h2>
        </a>
      </div>
      <div className="css_block w_vi h_iii x_o y_viii css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/news`}>
          <h2>News</h2>
        </a>
      </div>
      <div className="css_block w_vi h_iii x_vi y_viii css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/ess-events`}>
          <h2>Events</h2>
        </a>
      </div>
      <div className="css_block w_xii h_iv x_0 y_xi">
        <div className="mind-slider-holder no-padding">



          <div className="home-banner-cube" id="hbc-dynairix">

            <a href=" https://alsimcloud.com" target="_blank">


              <div className="hbc-banner-overlay"></div>
              <img className="hbc-banner-image" width="3004" height="815" src="https://www.essteyr.com/ess-media/home-banner/220312_repair/hbc-repair-banner.webp" />
            </a>
          </div>


        </div>
      </div>
    </div>

  );
};

export default BottomAbout;