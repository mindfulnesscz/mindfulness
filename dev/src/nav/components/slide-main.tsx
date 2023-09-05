import React, {useState, useEffect} from 'react';
import { WmMnavSlide } from '../../types';
import { WmnavForwardArrow} from '../../components/icons';

const slideMain: React.FC<WmMnavSlide> = ( { className, callSlide, slideLinks} ) => {

  const [loggedIn, setLoggedIn] = useState(false);

  const click = ( e:React.MouseEvent<HTMLElement>, slide:HTMLDivElement | null )=>{
    e.preventDefault();
    if ( slide )
      callSlide( slide, false );
  };


  useEffect( ()=>{
    setLoggedIn(document.cookie.includes('wp-settings-time'));
  },[] );


  return(
    <div className={className}>
      <div className="row">
        {
          slideLinks.map( ( key, index ) => {
            return(
              <>
                <div className="col-xs-3"></div>
                <div className='col-xs-6'>
                  <a 
                    className='w-full m-zero p-zero'
                    key={'mainMenuLink-' + index} 
                    onClick={e=>{click( e, key.el );}}
                  >
                    <h2 className="center">{key.name}</h2>
                  </a>
                </div>
                <div className='col-xs-3 flex p-right-double'>
                  <WmnavForwardArrow className='wmnav-back-arrow' />
                </div>
              </>
            );
          } )
        }

        {/* Contat is not slide but a common link. Maybe this will be changed later. */}

        <a className='no-deco w-full m-zero p-zero' href={`${window.MindGlobal.homeUrl}/contact`}>
          <h2 className='center'>Contact</h2>
        </a>
      
        <div className='w-full center m-vert-base'>
          <a className='wm-button has-white-color rounded-full center m-auto' href={`${window.MindGlobal.homeUrl}/consult`}>Get Free Consultation</a>
        </div>

        <div className='w-full'></div>
        {
        /*
        <div className='center m-auto p-top-double'>
            <a 
            href={`${window.MindGlobal.homeUrl}/${loggedIn ? 'account' : 'login'}`} 
            className='center'>
              {loggedIn ? 'account' : 'login'}
            </a>
            {
              loggedIn && 
              <>
                <span className='inline-block'>/</span>
                <a 
                  className='center' 
                  href={`${window.MindGlobal.homeUrl}/logout`}
                >
                  logout
                </a>
              </>
            }
        </div>
          */
          }

      </div>
    </div>
  );
};

export default slideMain;