
import testDevice from '../helpers/testDevice';
import React, { ReactElement, useEffect, useState } from 'react';
import { MindGlobalObject } from '../types';
import loadScript from '../helpers/loadScript';

declare interface NavMenuProps {
  mindGlobal: MindGlobalObject
}

declare interface Indexable {
  [key: string]: ReactElement | null
}

/**
 * Handles mobile/device navbar with menu switching.
 * Checks if Components are present when needed and loads and inits them
 */
const NavMenu: React.FC<NavMenuProps> = ( { mindGlobal } ) => {

  /** 
   * return true if user is logged in
   * by checking wordpress cookie called wp-settings-time-6
   * @return boolean true if logged
   */


  const deviceCheck = ():string=>{
    const isMobile:boolean = testDevice() || window.innerWidth < mindGlobal.settings.navBreakpoint;
    return( isMobile ? 'mobile' : 'desktop' );

  };
  const sizeSet = ():void => {   
    setDevice( deviceCheck() );
  };

  const [device, setDevice] = useState<string>( deviceCheck() );
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>( setTimeout( sizeSet, 0 ) );
  const [menuComp, setMenuComp] = useState<React.ReactElement | null>( null );

  useEffect( ()=>{
    console.log( 'now do the navigation type check init' );

    window.onresize = () => {
      clearTimeout( timer );
      setTimer( setTimeout( sizeSet, 100 ) );
    };

  }, [] );


  useEffect( ()=>{
    if( !( mindGlobal as unknown as Indexable )[device + 'Nav'] )
      callScript( mindGlobal.templateUrl + '/assets/js/nav/' + device + '.js?ver='+mindGlobal.templateVersion );
    else
      setMenuComp( ( mindGlobal as unknown as Indexable )[device + 'Nav'] );    
  }, [device] );

  const callScript = ( url:string ) => {
    loadScript( url ).then( ()=>{
      setMenuComp( ( mindGlobal as unknown as Indexable )[device + 'Nav'] );
    } );
  };




  return (
    <div>
      { menuComp && menuComp }
    </div>
  );
};

export default NavMenu;