/*jshint esversion: 6 */
export function extend(){
    for(var i=1; i<arguments.length; i++)
        for(var key in arguments[i])
            if(arguments[i].hasOwnProperty(key)) { 
                if (typeof arguments[0][key] === 'object' && typeof arguments[i][key] === 'object')
             		extend(arguments[0][key], arguments[i][key]);
                else
                   arguments[0][key] = arguments[i][key];
             }
    return arguments[0];
}

export function mind_global(){
    window.el_header = document.getElementById('ess-header');
    window.vw = window.innerWidth;
    window.vh = window.innerHeight;
    window.sc =window.scrollY;
    window.addEventListener('resize', function(event){
        window.vw = window.innerWidth;
        window.vh = window.innerHeight;
    });
    window.addEventListener('scroll', function(event){
        window.sc = window.scrollY;
    });
}
export default {extend, mind_global};


