import React from 'react';

interface Props {
  className : string
}

export const ArrowLeft: React.FC<Props> = ( {className} ) => {

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 150 150">
      <polygon className="cbarr-0" points="130.7,54.6 74.2,18.4 67,16.8 122.7,52.7 "/>
      <polygon className="cbarr-1" points="122.7,52.7 67,112.9 77.7,112.9 85.1,104.7 130.7,54.6 "/>
      <path className="scbarr-2" d="M67,86.2v26.6l55.6-60.2L67,16.8v23.4c0,0-47,12.3-47,25.8s0,47.1,0,47.1S21.1,94.6,67,86.2z"/>
      <path className="cbarr-3" d="M32.3,114.6c0-0.2-0.1-0.4-0.1-0.6C32.2,114.2,32.2,114.4,32.3,114.6z"/>
      <path className="cbarr-1" d="M32.3,114.6c0-0.2-0.1-0.4-0.1-0.6c0-7.4,17.1-17.3,34.8-19.7c0,0,0-1.7,0-3.5c0-1.8,0-3.7,0-4.6
	c-41.7,7.6-46.5,23.6-47,26.5c0,0.4-0.1,0.9-0.1,1.3c0,11.2,31,19.9,65,19.9c0.1-1.3,0.5-6,0.5-6C67.9,128.2,33.6,124.6,32.3,114.6z
	"/>
      <path className="cbarr-4" d="M85.1,104.7l-7.4,8.1c0,0-4.8,0-10.7,0V94.3c-17.7,2.4-34.8,12.2-34.8,19.7c0,0.2,0,0.4,0.1,0.6
	c1.3,10,35.6,13.7,53.2,13.5L85.1,104.7z"/>
    </svg>
  );
};
