import React from 'react';
import { WmNavSlideChildren} from '../../../types';


const AboutSlide: React.FC<WmNavSlideChildren> = ( { homeUrl} ) => {



  return(
    <div className={''}>
      <div className='row'>
        <div className='col-xs-12'>
          <p className="wmnav-label text-center m-zero">
            <a className='no-deco light' href={`${homeUrl}/about`}>Who We Are</a>
          </p>
          <p className="wmnav-label text-center m-zero">
            <a className='no-deco light' href={`${homeUrl}/news`}>News</a>
          </p>
          <p className="wmnav-label text-center m-zero">
            <a className='no-deco light' href={`${homeUrl}/career`}>Career</a>
          </p>
          <p className="wmnav-label text-center m-zero">
            <a className='no-deco light' href={`${homeUrl}/ess-events`}>Events</a>
          </p>
          <p className="wmnav-label text-center m-zero">
            <a className='no-deco light' href={`${homeUrl}/case-solutions`}>Case Solutions</a>
          </p>
        </div>

      </div>
    </div>
  );

};

export default AboutSlide;