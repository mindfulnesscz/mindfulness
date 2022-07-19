import React from 'react';
import { WmNavSubpage } from '../../../types/index';

const SolutionsSlide: React.FC<WmNavSubpage> = ( { homeUrl, templateUrl} ) => {



  return(
    <div className='row p-hor-double justify-center'>

      <div className='col-xs-12 text-center'>
        <a href={`${homeUrl}/alsim-cloud`}>
          <img title="Alsim Cloud" alt='Alsim Cloud' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/full_logo_cloud.svg`}/>
        </a>
      </div>



      <div className='w-full wm-divider has-gray-lighten-2-background-color'></div>


      {/* Alsim Data Cleaning & Paintshop */ }
      <a href={`${homeUrl}/alsim-data-cleaning`}>
        <img alt='Alsim Cloud' title="Alsim Cloud" loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_data-cleaning.svg`}/>
      </a>
      <a href={`${homeUrl}/alsim-paintshop`}>
        <img alt="Alsim Cloud" title="Alsim Cloud" loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_paintshop.svg`}/>
      </a>

      <div className='w-full wm-divider has-gray-lighten-2-background-color'></div>



      {/* Alsim Platform & Services */ }
      <div className='col-xs-6 text-center p-zero'>
        <a href={`${homeUrl}/alsim-platform`}>
          <img title="Alsim Platform" alt='Alsim Platform' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/full_logo_platform.svg`}/>
        </a>
      </div>
      <div className='col-xs-6 text-center p-zero'>
        <a href={`${homeUrl}/alsim-services`}>
          <img title="Alsim Services" alt='Alsim Services' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/full_logo_services.svg`}/>
        </a>
      </div>



      {/* Processing, Mobility, Env, Washing, Oil & Gas */}
      <div className='col-xs-6 text-center p-zero m-vert-minus-base'>
        <a href={`${homeUrl}/alsim-platform`}>
          <img title="Alsim Processing" alt='Alsim Processing' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_processing.svg`}/>
        </a>
      </div>
      <div className='col-xs-6 text-center p-zero m-vert-minus-base'>
        <a href={`${homeUrl}/alsim-services`}>
          <img title="Alsim Mobility" alt='Alsim Mobility' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_mobility.svg`}/>
        </a>
      </div>

      <div className='col-xs-6 text-center p-zero m-vert-minus-base'>
        <a href={`${homeUrl}/alsim-platform`}>
          <img title="Alsim Environment" alt='Alsim Environment' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_environment.svg`}/>
        </a>
      </div>
      <div className='col-xs-6 text-center p-zero m-vert-minus-base'>
        <a href={`${homeUrl}/alsim-services`}>
          <img title="Alsim Washing" alt='Alsim Washing' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_washing.svg`}/>
        </a>
      </div>
      <div className='col-xs-6 text-center p-zero m-vert-minus-base'>
        <a href={`${homeUrl}/alsim-services`}>
          <img title="Alsim Oil & Gas" alt='Alsim Oil & Gas' loading="lazy" width="300" height="100" className="main-product-logo" src={`${templateUrl}/assets/images/product-logos/logo_oil-gas.svg`}/>
        </a>
      </div>

    </div>
  );

};

export default SolutionsSlide;