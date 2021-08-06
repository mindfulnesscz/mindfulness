/*jshint esversion: 6 */

/*
*
* function that loops the sizes object from WP media object and returns arrat with image details (src, srcse, image w/h ratio)
* 
* @PARAMS
* sizes - object with all WP Media sizes applied on the current image
*
* @RETURNS 
* array (String: src of full image, String: srcset string, Int: width/height ratio for sizes calculations)
*
*/

export function ess_get_image_srcset(sizes) {

    let srcset = '';
    console.log(sizes);

    for (let size in sizes) {
        // skip loop if the property is from prototype
        if (!sizes.hasOwnProperty(size)) continue;
        console.log(size == 'thumbnail');
        console.log(size);
        if(size != 'thumbnail') // get rid of the cropped image use thumbnail_uncropped instead - little imparative flaw
            srcset += sizes[size].url + ' ' + sizes[size].width +'w, '; 
    }
    console.log(sizes.full.url);
    let src = sizes.full.url;
    let image_ratio = (Math.round((sizes.full.width/sizes.full.height)*10))/10;

    let ret = {
        url         : src,
        srcset      : srcset,
        image_ratio : image_ratio
    };
    console.log(ret);

    return [src, srcset, image_ratio];
}

export default {ess_get_image_srcset};