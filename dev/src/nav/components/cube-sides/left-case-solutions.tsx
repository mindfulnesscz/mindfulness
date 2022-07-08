
import React, {useEffect, useState} from 'react';

import { wmFetch } from '../../../helpers/wm-fetch';


declare interface CsFeedObject {
  id      : string
  title   : string
  excerpt : string
  thumb   : string
  link    : string
}

const LeftCaseSolutions: React.FC = () => {

  const [csFeed, setCsFeed] = useState( [] as CsFeedObject[] );

  useEffect( ()=>{

    const csFeed:Promise<string> = wmFetch( window.MindGlobal.homeUrl + '/wp-json/mindfulness/v2/case-solutions?count=4' );

    csFeed.then( $json => {
      setCsFeed( JSON.parse( $json ) );
    } );  
  }, [] );


  return ( 
    <div id="csscube-left">
      <div className="css_block css-block-header w_xii h_iii x_o y_o">
        <div>
          <h1>Case Solutions</h1>
        </div>
      </div>
      <div className="css_block w_vi h_iv x_o y_iii css-gray">
        <a className="background-image-link" href={csFeed[0] && csFeed[0].link}>
          <img loading="lazy" className="csscube-bkg-image" src={csFeed[0] && csFeed[0].thumb} />
          <h3>{csFeed[0] && csFeed[0].title}</h3>
        </a>
      </div>
      <div className="css_block w_vi h_iv x_vi y_iii css-gray">
        <a className="background-image-link" href={csFeed[1] && csFeed[1].link}>
          <img loading="lazy" className="csscube-bkg-image" src={csFeed[1] && csFeed[1].thumb}/>
          <h3>{csFeed[1] && csFeed[1].title}</h3>
        </a>
      </div>
      <div className="css_block w_vi h_iv x_o y_vii css-gray">
        <a className="background-image-link" href={csFeed[2] && csFeed[2].link}>
          <img loading="lazy" className="csscube-bkg-image" src={csFeed[2] && csFeed[2].thumb}/>
          <h3>{csFeed[2] && csFeed[3].title}</h3>
        </a>
      </div>
      <div className="css_block w_vi h_iv x_vi y_vii css-gray">
        <a className="background-image-link" href={csFeed[3] && csFeed[3].link}>
          <img loading="lazy" className="csscube-bkg-image" src={csFeed[3] && csFeed[3].thumb}/>
          <h3>{csFeed[3] && csFeed[3].title}</h3>
        </a>
      </div>
      <div className="css_block w_xii h_iv x_o y_xi css-gray-lighter">
        <a href="<?php echo get_post_type_archive_link('case_solution'); ?>">
          <h2 className="has-text-align-right icon-headline medium-icon just-right color-secondary">
            <span className="color-primary ess-icon icon_circle_arrow_right"></span>
                  See More Case Solutions
          </h2>
        </a>
      </div>

    </div>
  );
};

export default LeftCaseSolutions;