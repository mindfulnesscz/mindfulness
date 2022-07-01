import React from 'react';
import {WmMnavSlide} from '../../../types/device-nav-component';
import {WmnavBackArrow} from '../icons';


const slideSub: React.FC<WmMnavSlide> = ( { title, className, callSlide, slideLinks, children} ) => {



  const click = ( e:React.MouseEvent<HTMLElement>, slide:HTMLDivElement )=>{
    e.preventDefault();
    callSlide( slide, true );
  };

  return(
    <div className={`${className} container p-top-sexta`}>
      <div className='row'>

        <a className='col-3 wmnav-back-button' onClick={e=>{click( e, slideLinks[0].el );}}>
          <WmnavBackArrow className='wmnav-back-arrow' />
        </a>

        <h3 className="col-3 light text-center has-gray-darken-1-color uppercase">{title}</h3>
        
        
        <div className="col-3"></div>


      </div>
      
      <div>
        { children }
      </div>
    </div>
  );

};

export default slideSub;