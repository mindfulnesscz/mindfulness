
import React, { useEffect, useState } from 'react';

import { wmFetch } from '../../../helpers/wm-fetch';


declare interface Widget {
  rendered: string
}
declare interface Sidebar {
  widgets: Array<string>
}


const BottomAbout: React.FC = () => {

  const [bannerFeed, setBannerFeed] = useState( '<h2>ahooooj</h2>' );

  useEffect( ()=>{

    const csFeed:Promise<Sidebar> = wmFetch( window.MindGlobal.homeUrl + '/wp-json/wp/v2/sidebars/home_banner' );
    csFeed.then( $json => {

      if($json.widgets[0]){
        console.log('wwwwwwiiiiiiiddddggggeeeeetttttsssss');
        const Banner:Promise<Widget> = wmFetch(window.MindGlobal.homeUrl + '/wp-json/wp/v2/widgets/' + $json.widgets[0] );
        Banner.then( $widget => {
          if (typeof $widget === 'object')
          setBannerFeed( $widget.rendered );
        } )
      }      
    } );  
  }, [] );


  return ( 
    <div id="csscube-bottom" className='wmcube-side'>
      <div className="css_block w_xii h_v x_o y_o css-gray-lighter">
        <a href={window.MindGlobal.homeUrl}>
          <img loading="lazy" id="cube-ess-logo" alt="ESS - Engineering Software Steyr" src={`${window.MindGlobal.templateUrl}/assets/images/ess_logo_new.svg`} />
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
          <div className="home-banner-cube" id="home-banner-cube">
                <div dangerouslySetInnerHTML={{__html: bannerFeed}} /> 
          </div>


        </div>
      </div>
    </div>

  );
};

export default BottomAbout;