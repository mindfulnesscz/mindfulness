

import React from 'react';
import '../../sass/device-nav-styles/device_nav';


declare type DeviceNavProps = {

  feed: any,

  settings: any

}



const DeviceNavComponent: React.FC<DeviceNavProps> = ( { feed, settings} ) => {
  console.log(feed);

  console.log(settings);
  
  return (
    <div>
      <div id='wm-device-nav-logo'></div>
    </div>
  );
};

export default DeviceNavComponent;