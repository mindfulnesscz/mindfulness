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

export const WmnavForwardArrow: React.FC<Props> = ( { className } ) => {
  return(

    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 120 50">
      <style type="text/css">
      </style>
      <polyline className={className} points="98.9,8 116.7,25.8 98.9,43.5 "/>
      <line className={className} x1="116.7" y1="25.8" x2="0" y2="25.8"/>
    </svg>
  );
};


export const IconAutomotive: React.FC = ()=>{
  
  return (
    <svg className="ess-anim-icon" viewBox="0 0 250 250" version="1.1" x="0px" y="0px" width="250" height="250" xmlns="http://www.w3.org/2000/svg">
      <polygon id="auto_bkg" className="ess-anim-icon" points="211.5,215.9 48.1,215.9 28,174.1 231.6,174.1 "/>
      <path id="ipict_auto_body" className="ess-anim-icon" d="M200.4,126.2c-1-1.1-0.7-2.5-0.5-4.1c0.1-1.6,0.3-2.2,1.7-3.2c1.4-1.1,2.5-2.1,1.3-4
  c-0.7-1.1-3.2-5.9-28.2-14.5c-10.4-3.6-12.7-4.5-17.6-15c-2.6-5.7-6.7-15.3-20.8-19.9c-5.6-1.7-8.8-2.7-18.1-5.3s-14-4.1-23.9-3.4
  c-9.9,0.8-32.9,8.4-32.9,8.4c-3.2,1-0.6,3.1,0.1,4.2s0.5,0.7,0.2,2c-0.3,1.3-3.7,10-4.8,13c-1.1,3-0.7,3.4,0.8,5.3
  c1.5,1.9,5.3,4.3,9.1,5.6c3.9,1.3,4,0,5.8-2.9c1.8-3,8.1-10,15.8-7.5c9.5,3.1,9.1,11.5,9.5,15.2c0.6,6.2,3.8,6.5,6.4,7.4
  c2.7,0.9,47.1,15.2,50.7,16.4c3.7,1.2,3.6,0.8,5.4-2.3c1.8-3.1,7.2-10.6,17-7.5c9.8,3.2,9.3,10.9,9.7,16.6c0.4,5.7,3.7,5.3,8.2,6.5
  c4.5,1.2,6-3.3,6.8-5.7C202.9,128.9,201.3,127.3,200.4,126.2z M118.9,78.9c-12.7-4.1-25.1-8.2-37.5-12.2c7.8-4.6,27-4.1,41.1,1.3
  C121.2,71.8,120.1,75.1,118.9,78.9z M123.3,80.3l3.6-10.9c0,0,4.6,1.4,5.2,1.6c11.6,3.8,13.7,8.8,15.4,11.3c1.7,2.5,4.3,7.3,4.3,7.3
  L123.3,80.3z"/>
    </svg>
  );
};

export const IconEnvironment: React.FC = ()=>{
  
  return (
    <svg className="ess-anim-icon" viewBox="0 0 250 250" version="1.1" x="0px" y="0px" width="250" height="250" xmlns="http://www.w3.org/2000/svg">

      <g id="ipict_wind_bkg">
        <polygon className="ess-anim-icon" points="132,233.3 118,233.3 121.4,107.3 128.6,107.3 	"/>
        <polygon className="ess-anim-icon" points="138.4,244.1 111.6,244.1 111.6,233.3 138.4,233.3 	"/>
        <path className="ess-anim-icon" d="M132.8,107.3h-15.7c-1.6,0-2.8-1.3-2.8-2.8V88.7c0-1.6,1.3-2.8,2.8-2.8h15.7c1.6,0,2.8,1.3,2.8,2.8v15.7
    C135.7,106,134.4,107.3,132.8,107.3z"/>
        <circle className="ess-anim-icon" cx="125" cy="96.6" r="6.4"/>
        <circle className="ess-anim-icon" cx="125" cy="96.6" r="2.8"/>
      </g>
      <g id="ipict_wind_body">
        <g>
          <polyline className="ess-anim-icon" points="127.5,90.8 127.5,80.7 122.5,80.7 122.5,90.8 		"/>
          <path className="ess-anim-icon" d="M127.2,8.2h-4.4L120,79.5c0,0-0.3,2.2,5,2.2c5.3,0,5-2.2,5-2.2L127.2,8.2z"/>
        </g>
        <g>
          <polyline className="ess-anim-icon" points="128.8,101.7 137.5,106.7 140,102.4 131.3,97.3 		"/>
          <path className="ess-anim-icon" d="M200.5,142.8l2.2-3.8l-60.4-38.1c0,0-1.7-1.3-4.4,3.2s-0.7,5.5-0.7,5.5L200.5,142.8z"/>
        </g>
        <g>
          <polyline className="ess-anim-icon" points="118.6,97.4 110,102.4 112.5,106.8 121.2,101.7 		"/>
          <path className="ess-anim-icon" d="M47.3,138.9l2.2,3.8l63.2-33.3c0,0,2-0.8-0.6-5.4c-2.6-4.6-4.4-3.3-4.4-3.3L47.3,138.9z"/>
        </g>
      </g>
    </svg>
  );
};

export const IconOilGas: React.FC = ()=>{
  
  return (
    <svg className="ess-anim-icon" viewBox="0 0 250 250" version="1.1" x="0px" y="0px" width="250"
      height="250" xmlns="http://www.w3.org/2000/svg">

      <g id="ipict_oil_bkg">
        <g>
          <polyline className="ess-anim-icon" points="127.9,102.6 166,202.2 158.5,202.2 122.5,105 		"/>
        </g>
        <g>
          <path className="ess-anim-icon" d="M83.3,202.2l-8.8-32.8c0,0-2.8-11.5-12.8-11.5c-12.6,0-12.6,11.5-12.6,11.5v32.8v13.7H87h87.3v-13.7H83.3z"/>
          <g>
            <polyline className="ess-anim-icon" points="122.3,105 80.4,191.2 77.9,181.8 116.6,102.4 			"/>
          </g>
          <circle className="ess-anim-icon" cx="122.5" cy="97.7" r="7.3"/>
          <line className="ess-anim-icon" x1="83.3" y1="202.2" x2="49.2" y2="202.2"/>
        </g>
      </g>

      <g id="ipict_oil_body_1">
        <polyline className="ess-anim-icon" points="173.3,49.9 52.6,113.7 53.9,124.9 179.3,58.7 	"/>
        <path className="ess-anim-icon" d="M169.9,21.4l-7.9,4.2c0,0,7,13.9,11.2,24.4l26.2,37.7c0,0,1.2-0.3,6.3,0.6C205.3,45.4,169.9,21.4,169.9,21.4z"
        />
      </g>

      <g id="ipict_oil_body_2">
        <path className="ess-anim-icon" d="M58.6,170.1c0,0,0-2.7,2.6-2.7s2.6,2.7,2.6,2.7v32.4h-5.1V170.1z"/>
        <path className="ess-anim-icon" d="M45.7,202.5h30.9c0,0,0,2.3,0,4.5c-4.2,3-9.6,4.8-15.5,4.8c-5.8,0-11.2-1.8-15.4-4.7
    C45.7,204.7,45.7,202.5,45.7,202.5z"/>
      </g>
    </svg>
  );
};

export const IconProcessing: React.FC = ()=>{
  
  return (
    <svg className="ess-anim-icon" viewBox="0 0 250 250" id="mill_new" version="1.1" x="0px" y="0px" width="250" height="250" xmlns="http://www.w3.org/2000/svg" >
      <g id="ipict_mill_bkg">
        <path className="ess-anim-icon" d="M156.7,170.4l16.9,33.2H76.4l16.9-33.2 M105.7,176.6l-6.7,14.1h51.8l-6.7-14.1"/>
        <polygon className="ess-anim-icon" points="77.2,203.6 77.1,216.9 172.9,216.9 172.8,203.6 "/>
      </g>

      <g id="ipict_mill_body_2">

        <path className="ess-anim-icon" d="M90.6,71.1l4.1,7.1l7.1-4.1L97.7,67L90.6,71.1z M90.6,173.9l7.1,4.1l4.1-7.1l-7.1-4.1L90.6,173.9z M69.5,149.8
    l4.1,7.1l7.1-4.1l-4.1-7.1L69.5,149.8z M180.5,95.2l-4.1-7.1l-7.1,4.1l4.1,7.1L180.5,95.2z M71.5,119h-8.2v8.2h8.2V119z M69.5,95.2
    l7.1,4.1l4.1-7.1l-7.1-4.1L69.5,95.2z M169.3,152.8l7.1,4.1l4.1-7.1l-7.1-4.1L169.3,152.8z M178.5,119v8.2h8.2V119H178.5z
     M148.2,74.1l7.1,4.1l4.1-7.1l-7.1-4.1L148.2,74.1z M148.2,170.9l4.1,7.1l7.1-4.1l-4.1-7.1L148.2,170.9z M120.9,184.2h8.2v-8.2
    h-8.2V184.2z M120.9,69h8.2v-8.2h-8.2V69z"/>
  
        <ellipse transform="matrix(0.2298 -0.9732 0.9732 0.2298 -22.9745 216.037)" className="st4" cx="125" cy="122.5" rx="48.9" ry="48.9"/>
        <path className="ess-anim-icon" d="M178.5,119h3.4c-0.5-7.6-2.4-14.9-5.6-21.4l-3,1.7l-4.1-7.1l3-1.7c-4.1-6-9.3-11.2-15.3-15.3l-1.7,3l-7.1-4.1
    l1.7-3c-6.4-3.1-13.4-5-20.9-5.6V69h-8.2v-3.4c-7.4,0.5-14.5,2.5-20.9,5.6l1.7,3l-7.1,4.1l-1.7-3c-6,4.1-11.2,9.3-15.3,15.3l3,1.7
    l-4.1,7.1l-3-1.7c-3.2,6.5-5.1,13.8-5.6,21.4h3.4v8.2h-3.4c0.6,7.2,2.5,14.1,5.5,20.3l3-1.7l4.1,7.1l-3,1.7
    c4.1,6,9.3,11.2,15.3,15.3l1.7-3l7.1,4.1l-1.7,3c6.4,3.1,13.4,5,20.9,5.6v-3.4h8.2v3.4c7.4-0.5,14.5-2.5,20.9-5.6l-1.7-3l7.1-4.1
    l1.7,3c6-4.1,11.2-9.3,15.3-15.3l-3-1.7l4.1-7.1l3,1.7c3-6.2,4.9-13.1,5.5-20.3h-3.4V119z M125,171.4c-27,0-48.9-21.9-48.9-48.9
    c0-27,21.9-48.9,48.9-48.9c27,0,48.9,21.9,48.9,48.9C173.9,149.5,152,171.4,125,171.4z"/>

      </g>

      <g id="ipict_mill_body_1">
        <path className="ess-anim-icon" d="M125,73.7c-27,0-48.9,21.9-48.9,48.9c0,27,21.9,48.9,48.9,48.9s48.9-21.9,48.9-48.9
    C173.9,95.6,152,73.7,125,73.7z M159.9,98.4c1.6-0.9,3.7-0.4,4.7,1.3c0.9,1.6,0.4,3.7-1.3,4.7c-1.6,0.9-3.7,0.4-4.7-1.3
    C157.6,101.5,158.2,99.4,159.9,98.4z M79.3,123.1c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4c0,1.9-1.5,3.4-3.4,3.4
    C80.9,126.5,79.3,125,79.3,123.1z M90.1,146.6c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3
    C92.4,143.6,91.8,145.7,90.1,146.6z M91.4,103.1c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3
    C91.8,99.4,92.4,101.5,91.4,103.1z M106.9,160.8c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3
    C107.2,157.1,107.8,159.2,106.9,160.8z M105.6,88.9c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3
    C107.8,85.9,107.2,88,105.6,88.9z M125,168.2c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4
    C128.4,166.7,126.9,168.2,125,168.2z M125,83.7c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4s3.4,1.5,3.4,3.4
    C128.4,82.2,126.9,83.7,125,83.7z M147.8,162.1c-1.6,0.9-3.7,0.4-4.7-1.3c-0.9-1.6-0.4-3.7,1.3-4.7c1.6-0.9,3.7-0.4,4.7,1.3
    C150,159,149.5,161.1,147.8,162.1z M149.1,87.7c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3
    C149.5,83.9,150,86,149.1,87.7z M164.5,145.4c-0.9,1.6-3,2.2-4.7,1.3c-1.6-0.9-2.2-3-1.3-4.7c0.9-1.6,3-2.2,4.7-1.3
    C164.9,141.6,165.5,143.7,164.5,145.4z M167.2,126.5c-1.9,0-3.4-1.5-3.4-3.4c0-1.9,1.5-3.4,3.4-3.4c1.9,0,3.4,1.5,3.4,3.4
    C170.7,125,169.1,126.5,167.2,126.5z"/>
        <circle className="ess-anim-icon" cx="125" cy="122.5" r="25.9"/>
      </g>


    </svg>
  );
};
  
declare interface IconCubeProps {
  topColor: string
  leftColor: string
  rightColor: string
}
export const IconCube: React.FC<IconCubeProps> = ( {topColor, leftColor, rightColor} )=>{
  
  return (
    <svg version="1.1" className="svg-ess-cube" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 500 500" xmlSpace="preserve">
      <g>	
        <polygon style={{fill: topColor}} points="489.7,223.1 381.5,35.6 165.1,35.6 273.3,223.1 	"/>
        <polygon style={{fill: leftColor}} points="225.4,247.7 118.5,62.6 10.3,250 118.5,437.4 226.7,250 	"/>
        <polygon style={{fill: rightColor}} points="165.1,464.4 381.5,464.4 489.7,276.9 273.3,276.9 	"/>
      </g>
    </svg>
  );
};

