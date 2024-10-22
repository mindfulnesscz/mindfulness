import React from 'react';
import { WmNavSubpage } from '../../../types/index';

const ProductsSlide: React.FC<WmNavSubpage> = ( { homeUrl, templateUrl} ) => {



  return(
    <div>
      <div className='row p-hor-double justify-center'>

        <div className='col-xs-12 text-center'>
          <a href={`${homeUrl}/alsim-paintshop`} className='block center'>
           <img title="ess PaintShop" alt='ess PaintShop' loading="lazy" className="" width="220" src={`${templateUrl}/assets/images/product-logos/logo_paintshop.svg`}/>
           <h4>Developed to resolve Pain Points in Automotive Paint Shops</h4>
            <div className='wm-button rounded-full color-paintshop'>discover more</div>
          </a>
        </div>
      </div>

      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>

      {/* -------------- MERGE ---------------- */}
        <div className='col-xs-6 br b-gray p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="50" src={`${templateUrl}/assets/images/product-logos/logo-ess-merge.svg`} />
          </a>
        </div>

      {/* -------------- CLOUD ---------------- */}

        <div className='col-xs-6 p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="70" src={`${templateUrl}/assets/images/product-logos/logo-ess-cloud.svg`} />
          </a>
        </div>
      
      </div>

      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>

      {/* -------------- DIP PAINT ---------------- */}
        <div className='col-xs-6 br b-gray p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="50" src={`${templateUrl}/assets/images/product-logos/logo-ess-dip-paint.svg`} />
          </a>
        </div>

        {/* -------------- E-COATING ---------------- */}

        <div className='col-xs-6 p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="70" src={`${templateUrl}/assets/images/product-logos/logo-ess-e-coating.svg`} />
          </a>
        </div>
      </div>

      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>
      {/* -------------- OVEN ---------------- */}
       <div className='col-xs-6 br b-gray p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="50" src={`${templateUrl}/assets/images/product-logos/logo-ess-oven.svg`} />
          </a>
        </div>

        {/* ------------ SEALING ---------------- */}

        <div className='col-xs-6 p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="70" src={`${templateUrl}/assets/images/product-logos/logo-ess-sealing.svg`} />
          </a>
        </div>
      </div>

      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>        
        {/* -------------- TOP-COATING ---------------- */}
        <div className='col-xs-6 br b-gray p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="50" src={`${templateUrl}/assets/images/product-logos/logo-ess-top-coating.svg`} />
          </a>
        </div>

        {/* ------------ POWDER COATING ---------------- */}
        <div className='col-xs-6 p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="70" src={`${templateUrl}/assets/images/product-logos/logo-ess-powder-coating.svg`} />
          </a>
        </div>
      </div>

      <div className='row p-vert-base m-hor-base justify-center bt bb b-gray'>        
        {/* -------------- RINSING ---------------- */}
        <div className='col-xs-6 br b-gray p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="50" src={`${templateUrl}/assets/images/product-logos/logo-ess-rinsing.svg`} />
          </a>
        </div>

        {/* ------------ ANODIZING ---------------- */}
        <div className='col-xs-6 p-left-half p-right-zero'>
          <a href={`${homeUrl}/alsim-paintshop`}>
            <img height="70" src={`${templateUrl}/assets/images/product-logos/logo-ess-anodizing.svg`} />
          </a>
        </div>
      </div>


      <div className='row p-vert-base m-hor-base justify-center'>
        <div className='col col-xs-12 center'>
          <a className='block m-auto p-hor-quad wm-button rounded-full color-paintshop-light' href={`${homeUrl}/alsim-paintshop`} >See all</a>
        </div>
      </div>
    
    </div>
  );

};

export default ProductsSlide;