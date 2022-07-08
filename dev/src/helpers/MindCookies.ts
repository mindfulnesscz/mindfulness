/*jshint esversion: 6 */

interface MindCookiesArr {
  [key: string]: string;
}


export default class MindCookies {
  path: string;
  arr_cookies: MindCookiesArr;

  constructor ( path:string ) {
    this.path = path;
    //this.createCookiesArray();
  }

  static setCookie ( cname:string, cvalue:string, extime:number ) {

    const d = new Date();

    d.setTime( d.getTime() + ( extime ) );

    const expires = 'expires=' + d.toUTCString();

    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    
  }

  /**
   * Gets cookie based on string slug. If the cookie doesn't exist, returns null.
   * 
   * @param cname String slug of the cookie to be checked
   * @returns String | null Returns string value of the cookie or null if the cookie not exists
   * @since 1.0
   */
  static getCookie ( cname:string ):string | null {

    const name = cname + '=';
    const decodedCookie = decodeURIComponent( document.cookie );


    const ca = decodedCookie.split( ';' );

    for ( let i = 0; i < ca.length; i++ ) {

      let c = ca[i];

      while ( c.charAt( 0 ) == ' ' ) {

        c = c.substring( 1 );
        console.log( c );

      }

      if ( c.indexOf( name ) == 0 ) {

        return c.substring( name.length, c.length );

      }
    }
    
    return null;
  }



  /**
   * Deletes cookie based on slug name
   * 
   * @param name String - Slug name of the cookie to be deleted
   * @returns void
   * @since 1.0
   */
  static deleteCookie ( name:string ):void {
    document.cookie = name + '=; Max-Age=-99999999;';
  }

  createCookiesArray () {

    this.arr_cookies = {};

    if ( document.cookie && document.cookie != '' ) {

      const ca = document.cookie.split( ';' );

      for ( let i = 0; i < ca.length; i++ ) {

        let c = ca[i];
        while ( c.charAt( 0 ) == ' ' ) {
          c = c.substring( 1 );
        }

        const csa = c.split( '=' );

        this.arr_cookies[csa[0]] = csa[1];
      }
      console.log( this.arr_cookies );
    }
  }
}