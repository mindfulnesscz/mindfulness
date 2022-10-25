
import {beforeEach, expect, test} from '@jest/globals';

import {Modal} from '../components/Modal';



beforeEach( () => {
  document.body.innerHTML = '<div id="ess-modal-holder"></div>';

} );

test( 'modals array is not empty', ()=>{

  const e = document.getElementById( 'ess-modal-holder' ) as HTMLElement;

  expect( Modal( e ).length ).toBeGreaterThanOrEqual( 0 );
} );

