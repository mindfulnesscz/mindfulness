import React from 'react';
import { WmNavSubpage } from '../../../types/index';

const ServicesSlide: React.FC<WmNavSubpage> = ( { homeUrl, templateUrl} ) => {



  return(
    <div>
      <div className='row p-hor-double justify-center'>
      <div className='col-xs-12 text-center'>
        <a href={`${homeUrl}/consult`} className='block center'>
        <img title="ess PaintShop" alt='ess PaintShop' loading="lazy" className="" width="220" src={`${templateUrl}/assets/images/cube/logo-ess-services.svg`}/>
        <h4>Helping Paint Shops since 2015. You can rely on our expertise.</h4>
          <div className='wm-button rounded-full'>Consult for Free</div>
        </a>
      </div>
    </div>

    {/* -------------- Simulations ---------------- */}
    <a href={`${homeUrl}/consult`}>
      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>
        <div className='col-xs-4 p-left-half p-right-zero'>
          <img height="50" src={`${templateUrl}/assets/images/cube/illust-simulations.webp`} />
        </div>
        <div className='col-xs-8 p-left-half p-right-zero'>
          <h4>Simulations</h4>
          <p className='text-sm'>On demand CFD Simulations with supreme accuracy and blazing fast results.</p>
        </div>
      </div>
    </a>

    {/* -------------- Consultations ---------------- */}
    <a href={`${homeUrl}/consult`}>
      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>
        <div className='col-xs-4 p-left-half p-right-zero'>
          <img height="50" src={`${templateUrl}/assets/images/cube/illust-consultations.webp`} />
        </div>
        <div className='col-xs-8 p-left-half p-right-zero'>
          <h4>Consultations</h4>
          <p className='text-sm'>Dedicated group of experts with 10 years of experience on your side.</p>
        </div>
      </div>
    </a>

    {/* -------------- Trainings ---------------- */}
    <a href={`${homeUrl}/consult`}>
      <div className='row p-vert-base m-hor-base justify-center bt b-gray'>
        <div className='col-xs-4 p-left-half p-right-zero'>
          <img height="50" src={`${templateUrl}/assets/images/cube/illust-trainings.webp`} />
        </div>
        <div className='col-xs-8 p-left-half p-right-zero'>
          <h4>Trainings</h4>
          <p className='text-sm'>Get the most of digital twins for paint shops in our advanced training programs.</p>
        </div>
      </div>
    </a>




  </div>


  );

};

export default ServicesSlide;