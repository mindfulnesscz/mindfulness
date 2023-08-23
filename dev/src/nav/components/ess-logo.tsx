import * as React from 'react';

interface essLogoProps {
  homeUrl: string
  templateUrl:string
}


const EssLogo: React.FC<essLogoProps> = ( { homeUrl, templateUrl} ) => {
  return(
    <div id='wmnav-logo'>
      <a href={homeUrl}>
        <img width='120' height='40' alt='ESS' loading='lazy' src={templateUrl+'/assets/images/ess_logo.svg'} />
      </a>
    </div> );
};

export default EssLogo;