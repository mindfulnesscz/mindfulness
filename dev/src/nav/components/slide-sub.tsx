import React from 'react';
import { WmMnavSlide } from '../../types';
import {WmnavBackArrow} from '../../components/icons';


const slideSub: React.FC<WmMnavSlide> = ( { title, className, callSlide, slideLinks, children} ) => {



  const click = ( e:React.MouseEvent<HTMLElement>, slide:HTMLDivElement | null )=>{
    e.preventDefault();
    if ( slide )
      callSlide( slide, true );
  };

  return(
    <div className={`${className} container`}>
      <div className='row wmnav-subslide-head'>

        <a className='col-xs-3 wmnav-back-button' onClick={e=>{click( e, slideLinks[0].el );}}>
          <WmnavBackArrow className='wmnav-back-arrow' />
        </a>

        <h3 className="col-xs-6 light text-center has-gray-darken-1-color uppercase">{title}</h3>
        
        
        <div className="col-xs-3"></div>


      </div>
      
      <div className='wmnav-subslide-body'>
        { children }
      </div>
    </div>
  );

};

export default slideSub;