import React from 'react';
import { WmNavSlideChildren} from '../../../types';
import { IconAutomotive, IconEnvironment, IconOilGas, IconProcessing } from '../../../components/icons';



const IndustriesSlide: React.FC<WmNavSlideChildren> = ( { homeUrl} ) => {


  return(
    <div className='row p-hor-double'>
      <div className='col-xs-6 p-zero center'>
        <IconAutomotive />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/automotive`}>Automotive</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero center'>
        <IconEnvironment />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/energy-environment`}>Energy & Environment</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero center'>
        <IconOilGas />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/oil-gas`}>Oil & Gas</a>
        </h4>
      </div>
      <div className='col-xs-6 p-zero center'>
        <IconProcessing />
        <h4 className='center m-top-zero'>
          <a className='no-deco light' href={`${homeUrl}/processing`}>Processing</a>
        </h4>
      </div>
    </div>
  );

};

export default IndustriesSlide;