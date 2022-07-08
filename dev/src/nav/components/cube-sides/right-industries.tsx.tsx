
import React from 'react';

import { IconAutomotive, IconEnvironment, IconOilGas, IconProcessing } from '../../../components/icons';


const RightIndustries: React.FC = () => {


  return ( 
    <div id="csscube-right">
      <div className="css_block css-block-header w_xii h_iii x_o y_o">
        <div>
          <h1>INDUSTRIES</h1>
        </div>
      </div>
      <div className="cbl-industry css_block w_vi h_vi x_o y_iii css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/automotive`}>
          <div className="cc-icon-h">
            <IconAutomotive />
          </div>
          <h2>Automotive</h2>
        </a>
      </div>
      <div className="cbl-industry css_block w_vi h_vi x_vi y_iii css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/oil-gas`}>
          <div className="cc-icon-h">
            <IconOilGas />
          </div>
          <h2>Oil & Gas</h2>
        </a>
      </div>
      <div className="cbl-industry css_block w_vi h_vi x_o y_ix css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/processing`}>
          <div className="cc-icon-h">
            <IconProcessing />
          </div>
          <h2>Processing</h2>
        </a>
      </div>
      <div className="cbl-industry css_block w_vi h_vi x_vi y_ix css-gray-lighter">
        <a href={`${window.MindGlobal.homeUrl}/energy-environment`}>
          <div className="cc-icon-h">
            <IconEnvironment />
          </div>
          <h2>Environment & Energy</h2>
        </a>
      </div>
    </div>

  );
};

export default RightIndustries;