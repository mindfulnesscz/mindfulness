
import testDevice from '../helpers/testDevice';
import React, {useEffect, useState } from 'react';
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
const NavMenu: React.FC<NavMenuProps> = ( { mindGlobal } ) => {

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
    if( !( mindGlobal as Indexable )[device + 'Nav'] )
      callScript( mindGlobal.templateUrl + '/assets/js/nav/' + device + '.js' );
    else
      setMenuComp( ( mindGlobal as Indexable )[device + 'Nav'] );    
  }, [device] );

  const callScript = ( url:string ) => {
    loadScript( url ).then( ()=>{
      setMenuComp( ( mindGlobal as Indexable )[device + 'Nav'] );
    } );
  };




  return (
    <div>
      { menuComp && menuComp }
    </div>
  );
};

export default NavMenu;