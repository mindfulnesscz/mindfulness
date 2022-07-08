import React from 'react';
import { WmMnavSlide } from '../../types';



const slideMain: React.FC<WmMnavSlide> = ( { className, callSlide, slideLinks} ) => {



  const click = ( e:React.MouseEvent<HTMLElement>, slide:HTMLDivElement | null )=>{
    e.preventDefault();
    if ( slide )
      callSlide( slide, false );
  };

  return(
    <div className={className}>
      {
        slideLinks.map( ( key, index ) => {
          return(
            <a 
              className='w-full m-zero p-zero'
              key={'mainMenuLink-' + index} 
              onClick={e=>{click( e, key.el );}}
            >
              <h2 className="text-center">{key.name}</h2>
            </a> 
          );
        } )
      }
    </div>
  );

};

export default slideMain;