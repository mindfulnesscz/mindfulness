
/**
 * Checks the size of window as well as the user Agent to see whether the website
 * is viewed on mobile device or desktop.
 * 
 * @returns Boolean - true for device, false for desktop (Real mobile first, huh?)
 * @since 3.0
 */
export default function testDevice ():boolean {

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test( navigator.userAgent ) ) {
    return true;
  }
  else
    return false;
}