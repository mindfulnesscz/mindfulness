import React from 'react';
import { WmNavSlideChildren} from '../../../types';


const AboutSlide: React.FC<WmNavSlideChildren> = ( { homeUrl} ) => {



  return(
    <div className={''}>
      <div className='row'>
        <div className='col-xs-12'>
          <h3 className='text-center'>
            <a className='no-deco light' href={`${homeUrl}/about`}>Who We Are</a>
          </h3>
          <h3 className='text-center'>
            <a className='no-deco light' href={`${homeUrl}/news`}>News</a>
          </h3>
          <h3 className='text-center'>
            <a className='no-deco light' href={`${homeUrl}/career`}>Career</a>
          </h3>
          <h3 className='text-center'>
            <a className='no-deco light' href={`${homeUrl}/ess-events`}>Events</a>
          </h3>
          <h3 className='text-center'>
            <a className='no-deco light' href={`${homeUrl}/case-solutions`}>Case Solutions</a>
          </h3>
        </div>

      </div>
    </div>
  );

};

export default AboutSlide;