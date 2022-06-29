

import React from 'react';
import EssLogo from '../../assets/images/ess_logo.svg';


declare type DeviceNavProps = {
  templateUrl: string
}



const DeviceNavComponent: React.FC<DeviceNavProps> = ( { templateUrl} ) => {

  console.log(templateUrl);
  return (
    <div>
      <img width="150" height="50" src={EssLogo} />
      <div id='wm-device-nav-logo'></div>
    </div>
  );
};

export default DeviceNavComponent;