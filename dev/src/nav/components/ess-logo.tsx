import * as React from 'react';

interface essLogoProps {
  homeUrl: string
  templateUrl:string
  inverted?: boolean
}


const EssLogo: React.FC<essLogoProps> = ( { homeUrl, templateUrl, inverted = false } ) => {
  return(
    <div id='wmnav-logo'>
      <a href={homeUrl}>
        <img width='120' height='40' alt='ESS' loading='lazy' src={templateUrl + (inverted ? '/assets/images/ess_logo_invert.svg' : '/assets/images/ess_logo_new.svg')} />
      </a>
    </div> );
};

export default EssLogo;
