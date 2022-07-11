import React from 'react';
import { WmNavSlideChildren} from '../../../types';
import { IconAutomotive, IconEnvironment, IconOilGas, IconProcessing } from '../../../components/icons';



const IndustriesSlide: React.FC<WmNavSlideChildren> = ( { homeUrl} ) => {



  return(
    <div className='row p-hor-double'>
      <div className='col-xs-6 p-zero text-center'>
        <IconAutomotive />
        <h4 className='text-center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/about`}>Who We Are</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero text-center'>
        <IconEnvironment />
        <h4 className='text-center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/news`}>News</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero text-center'>
        <IconOilGas />
        <h4 className='text-center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/career`}>Career</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero text-center'>
        <IconProcessing />
        <h4 className='text-center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/events`}>Events</a>
        </h4>
      </div>
    </div>
  );

};

export default IndustriesSlide;