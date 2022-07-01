import React from 'react';

/**
 * Custom icons
 */

interface Props {
  className: string;
}

export const WmnavBackArrow: React.FC<Props> = ( { className } ) => {
  return (
    <svg className='wmnav-back-arrow-svg' version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 120 50">

      <line id="Line_13" className={className} x1="115.5" y1="25" x2="4.5" y2="25"/>
      <polyline className={className} points="23.9,44.4 4.5,25 23.9,5.6 "/>
    </svg>
  );
};


