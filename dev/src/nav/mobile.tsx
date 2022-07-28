/**
 * DEVICE NAVIGATION INITIALIZATION
 * @since 3.0
 */

import React from 'react';
import MobileNav from './components/mobile-nav';


// sets the device navigation as variable to be unloaded if needed
window.MindGlobal.mobileNav = <MobileNav homeUrl={window.MindGlobal.homeUrl} templateUrl={window.MindGlobal.templateUrl} />;



