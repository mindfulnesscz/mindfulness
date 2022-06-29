import React from 'react';
import ReactDOM from 'react-dom';
import DeviceNavComponent from './components/device-nav/device-nav-component';

declare const mindConstants:any;

ReactDOM.render(<DeviceNavComponent templateUrl={mindConstants.templateUrl} />, document.querySelector('#wm-device-nav') );


