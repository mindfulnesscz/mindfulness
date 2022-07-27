
import testDevice from '../helpers/testDevice';
import React, {useEffect, useState} from 'react';
import { MindGlobalObject } from '../types';
import loadScript from '../helpers/loadScript';

declare interface NavMenuProps {
  mindGlobal: MindGlobalObject
}


export interface Indexable {
  [key: string]: any
}

/**
 * Handles mobile/device navbar with menu switching.
 * Checks if Components are present when needed and loads and inits them
 */
const NavMenu: React.FC<NavMenuProps> = ( { mindGlobal} ) => {

  const sizeCheck = () => {
  
    const isMobile:boolean = testDevice() || window.innerWidth < mindGlobal.settings.navBreakpoint;

    console.log( 'ismobile izzz '+isMobile );
    setDevice( isMobile ? 'mobile' : 'desktop' );
  };

  const [device, setDevice] = useState<string>( 'mobile' );
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>( setTimeout( sizeCheck, 0 ) );
  const [menuComp, setMenuComp] = useState<React.ReactElement | null>( null );

  useEffect( ()=>{
    console.log( 'now do the navigation type check init' );

    window.onresize = () => {
      clearTimeout( timer );
      setTimer( setTimeout( sizeCheck, 100 ) );
    };

  }, [] );


  useEffect( ()=>{
    if( !( mindGlobal as Indexable )[device + 'Nav'] )
      callScript( mindGlobal.templateUrl + '/assets/js/nav/' + device + '.js' );
  }, [device] );

  const callScript = ( url:string ) => {
    loadScript( url ).then( ()=>{
      setMenuComp( ( mindGlobal as Indexable )[device + 'Nav'] );
    } );
  };



  return (
    <div>
      {menuComp && menuComp}
    </div> );
};

export default NavMenu;