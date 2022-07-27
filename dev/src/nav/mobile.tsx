/**
 * DEVICE NAVIGATION INITIALIZATION
 * @since 3.0
 */

import React from 'react';
import DevicesNav from './components/devices-nav';


// sets the device navigation as variable to be unloaded if needed
window.MindGlobal.mobileNav = <DevicesNav homeUrl={window.MindGlobal.homeUrl} templateUrl={window.MindGlobal.templateUrl} />;



