/*jshint esversion: 6 */

export default class MindCookies {
  constructor(path) {
    this.path = path;
    //this.createCookiesArray();
  }

  static setCookie(cname, cvalue, extime) {
    var d = new Date();
    d.setTime(d.getTime() + (extime));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  

  static getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



  static deleteCookie(name) {   
    document.cookie = name+'=; Max-Age=-99999999;';  
}

  createCookiesArray() {
    this.arr_cookies = [];
    if (document.cookie && document.cookie != '') {
      let ca = document.cookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        let csa = c.split('=');
        this.arr_cookies[csa[0]] = csa[1];
      }
      console.log(this.arr_cookies);
    }
  }

  make_cookie_from_array() {
    if (Object.keys(this.arr_cookies).length != 0) { // mozna budu moct zakomentovat
      let updated_cookie = '';
      for (let key in this.arr_cookies) {
        let value = arr[key];
        updated_cookie = updated_cookie + key + "=" + value;
      }

    } // a tim padem i toto
  }
}