export const wmFetch = async ( url:string ) => {

  const rest = await fetch ( url, {
    method: 'GET',
    headers: {'Content-Type': 'application/json' }
  } );

  return rest.json(); 

};