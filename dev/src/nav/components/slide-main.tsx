import React from 'react';
import { WmMnavSlide } from '../../types';
import { WmnavForwardArrow} from '../../components/icons';

const slideMain: React.FC<WmMnavSlide> = ( { className, callSlide, slideLinks} ) => {

  const click = ( e:React.MouseEvent<HTMLElement>, slide:HTMLDivElement | null )=>{
    e.preventDefault();
    if ( slide )
      callSlide( slide, false );
  };

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
                    <h2 className="text-center">{key.name}</h2>
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
          <h2 className='text-center'>Contact</h2></a>
      </div>
    </div>
  );
};

export default slideMain;