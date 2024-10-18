
import React from 'react';

import { IconAutomotive, IconEnvironment, IconOilGas, IconProcessing } from '../../../components/icons';
import { WmNavSubpage } from '../../../types/index';


const RightProducts: React.FC<WmNavSubpage> = ({homeUrl, templateUrl} ) => {


  return ( 
    <div id="csscube-right" className='wmcube-side'>
      <div className="css_block css-block-header w_xii h_ii x_o y_o">
        <div>
          <h1>ess Products</h1>
        </div>
      </div>


      <div className="css_block w_xii h_v x_o y_ii css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`} id="cube-paintshop">
          <div className='flex nowrap items-center'>
            <div className=''>
              <img loading="lazy" className="main-product-logo" width={200} height={120} style={{objectFit: 'contain'}} src={`${templateUrl}/assets/images/product-logos/logo_paintshop.svg`}/>
            </div>
            <div className={'max-w-300'}>
              <h3 className={'claim m-right-quad'}>Developed to resolve Pain Points in Automotive Paint Shops</h3>
            </div>
          </div>
        </a>
      </div>


      {/* ---------- Merge --------------- */}

      <div className="css_block w_iv h_ii x_o y_vii css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-merge.svg`}/>
        </a>
      </div>

      {/* ---------- Dip Paint --------------- */}

      <div className="css_block w_iv h_ii x_iv y_vii css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-dip-paint.svg`}/>
        </a>
      </div>

      {/* ---------- E-Coating --------------- */}

      <div className="css_block w_iv h_ii x_viii y_vii css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-e-coating.svg`}/>
        </a>
      </div>

      {/* ---------- Oven --------------- */}

      <div className="css_block w_iv h_ii x_o y_ix css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-oven.svg`}/>
        </a>
      </div>

      {/* ---------- Sealing --------------- */}

      <div className="css_block w_iv h_ii x_iv y_ix css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-sealing.svg`}/>
        </a>
      </div>

      {/* ---------- Top Coating --------------- */}

      <div className="css_block w_iv h_ii x_viii y_ix css-white product-block main-product-block ">
        <a /*className='has-paintshop-lighten-2-background-color'*/ href={`${homeUrl}/alsim-paintshop`}>    
        <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-top-coating.svg`}/>
        </a>
      </div>


      {/* ---------- Powder Coating --------------- */}

      <div className="css_block w_iv h_ii x_o y_xi css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-powder-coating.svg`}/>
        </a>
      </div>

      {/* ---------- Rinsing --------------- */}

      <div className="css_block w_iv h_ii x_iv y_xi css-white product-block main-product-block">
        <a href={`${homeUrl}/alsim-paintshop`}>    
          <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-rinsing.svg`}/>
        </a>
      </div>

      {/* ---------- Anodizing --------------- */}

      <div className="css_block w_iv h_ii x_viii y_xi css-white product-block main-product-block ">
        <a /*className='has-paintshop-lighten-2-background-color'*/ href={`${homeUrl}/alsim-paintshop`}>    
        <img loading="lazy" src={`${templateUrl}/assets/images/product-logos/logo-ess-anodizing.svg`}/>
        </a>
      </div>

      {/* ---------- See all --------------- */}

      <div className="css_block w_xii h_ii x_o y_xiii  product-block main-product-block ">
        <a className='has-paintshop-lighten-2-background-color' href={`${homeUrl}/alsim-paintshop`}>    
        <h3> View All</h3>
        </a>
      </div>


    </div>

  );
};

export default RightProducts;