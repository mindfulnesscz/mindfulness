import React from 'react';
import ReactDOM from 'react-dom';
import DeviceNavComponent from './components/device-nav/device-nav-component';

ReactDOM.render(<DeviceNavComponent feed={true} settings={true} />, document.querySelector('#wm-device-nav') );


