import React from 'react';
import { WmNavSlideChildren} from '../../../types';
import { IconAutomotive, IconEnvironment, IconOilGas, IconProcessing } from '../../../components/icons';



const IndustriesSlide: React.FC<WmNavSlideChildren> = ( { homeUrl} ) => {


  return(
    <div className='row p-hor-double'>
      <div className='col-xs-6 p-zero center'>
        <IconAutomotive />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/about`}>Automotive</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero center'>
        <IconEnvironment />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/news`}>Energy & Environment</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero center'>
        <IconOilGas />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/career`}>Oil & Gas</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero center'>
        <IconProcessing />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/events`}>Processing</a>
        </h4>
      </div>
    </div>
  );

};

export default IndustriesSlide;