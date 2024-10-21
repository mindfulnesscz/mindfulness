
import React from 'react';
import {IconCube} from '../../../components/icons';
import { WmNavSubpage } from '../../../types/index';



const BackServices: React.FC<WmNavSubpage> = ( {homeUrl, templateUrl} ) => {
  
  return ( 
    <div id="csscube-back" className='wmcube-side'>

      <div className="css_block css-block-header w_xii h_ii x_o y_o">
        <div>
          <h1>ess Services</h1>
        </div>
      </div>

      <div className="css_block w_xii h_v x_o y_ii css-white product-block main-product-block">
        <div>
        <div className='flex nowrap items-center'>
          <div className=''>
            <a href={`${homeUrl}/consult`}>
              <img className="main-product-logo" width={200} height={120} style={{objectFit: 'contain'}} src={`${templateUrl}/assets/images/cube/logo-ess-services.svg`}/>
            </a>
          </div>
          <div className={'max-w-300'}>
            <h3 className={'claim'}>Helping Paint Shops since 2015 You can rely on our expertise
              <br></br>
            <a className='m-bot-zero wm-button rounded-full sm' href={`${homeUrl}/consult`}>Free Consultation</a>
            </h3>
          </div>
        </div>
        </div>
      </div>




      {/* ------------ SIMULATIONS ------------ */}

      <div className="css_block w_iv h_viii x_o y_vii css-white">
        <a href={`${homeUrl}/consult`} className='ess-service'>
          <img style={{objectFit: 'contain'}} src={`${templateUrl}/assets/images/cube/illust-simulations.webp`}/>
          <div>
          <h3 className='p-hor-zero m-hor-zero'>Simulations</h3>
          <h4 className='p-hor-zero m-hor-zero'>On demand CFD Simulations with supreme accuracy and blazing fast results</h4>
          </div>
        </a>
      </div>


      {/* ------------ CONSULTATIONS ------------ */}

      <div className="css_block w_iv h_viii x_iv y_vii css-white">
        <a href={`${homeUrl}/consult`} className='ess-service'>
          <img style={{objectFit: 'contain'}} src={`${templateUrl}/assets/images/cube/illust-consultations.webp`}/>
          <div>
          <h3 className='p-hor-zero m-hor-zero'>Consultations</h3>
          <h4 className='p-hor-zero m-hor-zero'>Dedicated group of experts with 10 years of experience on your side.</h4>
          </div>
        </a>
      </div>

      {/* ------------ TRAININGS ------------ */}

      <div className="css_block w_iv h_viii x_viii y_vii css-white">
        <a href={`${homeUrl}/consult`} className='ess-service'>
          <img style={{objectFit: 'contain'}} src={`${templateUrl}/assets/images/cube/illust-trainings.webp`}/>
          <div>
          <h3 className='p-hor-zero m-hor-zero'>Trainings</h3>
          <h4 className='p-hor-zero m-hor-zero'>Get the most of digital twins for paint shops in our advanced training programs.</h4>
          </div>
        </a>
      </div>
      

    </div>
  );
};

export default BackServices;