/*jshint esversion: 6 */


export default function ess_forms () {
  let inputs = document.querySelectorAll( '.ess-input' );
  console.log( inputs );
  for ( let i = 0; i < inputs.length; i++ ) {
    let inp = inputs[i];
    let def = inp.value;
    inp.addEventListener( 'focus', ()=>{
      if( inp.value == def )
        inputs[i].value = '';
    } );
    inputs[i].addEventListener( 'blur', ()=>{
      if( inp.value == '' )
        inp.value = def;
    } );
  }
}
