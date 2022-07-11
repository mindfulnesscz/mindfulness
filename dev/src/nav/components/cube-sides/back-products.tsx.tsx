
import React from 'react';
import {IconCube} from '../../../components/icons';

const FrontContact: React.FC = () => {
  
  return ( 
    <div id="csscube-back" className='wmcube-side'>


      <div className="css_block css-block-header w_xii h_ii x_o y_o">
        <div>
          <h1>OUR SOLUTIONS</h1>
        </div>
      </div>


      <div className="css_block w_iii h_v x_o y_ii css-white product-block main-product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-cloud`}>
          <img loading="lazy" className="main-product-logo" src={`${window.MindGlobal.templateUrl}/assets/images/product-logos/logo_cloud.svg`}/>
          <h4>alsim</h4>
          <h3>CLOUD</h3>
        </a>
      </div>
      <div className="css_block w_vi h_v x_iii y_ii css-white product-block main-product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-platform`}>
          <img loading="lazy" className="main-product-logo" src={`${window.MindGlobal.templateUrl}/assets/images/product-logos/logo_platform.svg`} />
          <h4>alsim</h4>
          <h3>PLATFORM</h3>
        </a>
      </div>
      <div className="css_block w_iii h_v x_ix y_ii css-white product-block main-product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-services`}>
          <img loading="lazy" className="main-product-logo" src={`${window.MindGlobal.templateUrl}/assets/images/product-logos/logo_services.svg`} />
          <h4>alsim</h4>
          <h3>SERVICES</h3>
        </a>
      </div>

      {/* ------------ ROW II  ------------ */}

      <div id="cube-side-paintshop" className="css_block w_iv h_iv x_o y_vii css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-paintshop`}>
          <IconCube topColor="#9b64aa" leftColor='#895aa4' rightColor='#5b266c' />
          <h4>alsim</h4>
          <h3>Paint Shop</h3>
        </a>
      </div>
      <div id="cube-side-data-cleaning" className="css_block w_iv h_iv x_iv y_vii css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-data-cleaning`}>
          <IconCube topColor="#0ea285" leftColor='#108673' rightColor='#006654' />
          <h4>alsim</h4>
          <h3>Data Cleaning</h3>
        </a>
      </div>
      <div id="cube-side-processing" className="css_block w_iv h_iv x_viii y_vii css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-processing`}>
          <IconCube topColor="#d4cba4" leftColor='#c2b98e' rightColor='#9d906f' />
          <h4>alsim</h4>
          <h3>Processing</h3>
        </a>
      </div>

      {/* ------------ ROW III ------------ */}

      <div id="cube-side-mobility" className="css_block w_iii h_iv x_o y_xi css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-mobility`}>
          <IconCube topColor="#eeaa32" leftColor='#be8b37' rightColor='#ae7d36' />
          <h4>alsim</h4>
          <h3>Mobility</h3>
        </a>
      </div>
      <div id="cube-side-environment" className="css_block w_iii h_iv x_iii y_xi css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-environment`}>
          <IconCube topColor="#a4d06e" leftColor='#78a94e' rightColor='#577d40' />
          <h4>alsim</h4>
          <h3>Environment</h3>
        </a>
      </div>
      <div id="cube-side-washing" className="css_block w_iii h_iv x_vi y_xi css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-washing`}>
          <IconCube topColor="#9ad9eb" leftColor='#68b2c6' rightColor='#43888d' />
          <h4>alsim</h4>
          <h3>Washing</h3>
        </a>
      </div>
      <div id="cube-side-oil-gas" className="css_block w_iii h_iv x_ix y_xi css-gray-lighter product-block">
        <a href={`${window.MindGlobal.homeUrl}/alsim-oil-gas`}>
          <IconCube topColor="#52656e" leftColor='#294146' rightColor='#001d27' />
          <h4>alsim</h4>
          <h3>Oil & Gas</h3>
        </a>
      </div>
    </div>
  );
};

export default FrontContact;