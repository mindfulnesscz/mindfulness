
import { ModalObject } from '../types/index';

/**
 * 
 */

export default function Modal () {

  const ModalHolder = document.querySelector( '#ess-modal-holder' ) as HTMLDivElement;
  const ModalBackground = ModalHolder.querySelector( '#ess-modal-background' ) as HTMLDivElement;

  ModalBackground.addEventListener( 'click', ()=>{
    console.log( 'clicking' );
    ModalHolder.style.display = 'none';
  } );

  const show = ( el:HTMLDivElement )=> {

    ModalHolder.style.display = 'flex';

  };


  return {
    ModalBackground: ModalBackground,
    show: show
  };
}