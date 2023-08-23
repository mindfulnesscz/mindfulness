/**
 * Function that grabs url of a script and returns promise with onload function
 * @since 3.0 
 * 
 **/
const loadScript = ( url:string ):Promise<unknown> =>{

  const script = document.createElement( 'script' );
  const att = document.createAttribute( 'type' );
  
  att.value = 'text/javascript';
  script.setAttributeNode( att );

  const ret = new Promise( ( resolve, reject ) =>{
    script.onload = ()=>{
      resolve( 'script' + url + ' loaded' );
    };
    script.onerror = ()=>{
      reject( 'script ' + url + ' has encountered an error.' );
    };
  } );

  script.src = url;

  document.head.appendChild( script );

  return ret;

};
export default loadScript;