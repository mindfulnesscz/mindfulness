/*jshint esversion: 6 */

import gsap from 'gsap';


export default class EssReveals {

    static activate() {
        let horiveals = document.querySelectorAll('.ess-horizontal-reveal');
        document.EssActiveObject = null;
        document.addEventListener('click', this.hideReveal);

        for (let i = 0; i < horiveals.length; i++) {

            let rev = horiveals[i];
            let trigger = rev.getAttribute('trigger');
            let h = rev.firstElementChild.offsetHeight;

            let trigerdiv = document.getElementById(trigger);
            let TO = {
                totrigger: trigerdiv,
                todiv: rev,
                todir: 'height',
                toval: h
            };
            trigerdiv.addEventListener('click', () => {
                if (trigerdiv.classList.contains("ess-active") == true) {
                    this.deatcivateReveal(TO);

                } else
                    this.activateReveal(TO);
            });
        }
    }
    static activateReveal(reveal_obj) {
        console.log('activating');
        document.EssActiveObject = reveal_obj;
		console.log(reveal_obj);
        gsap.to(reveal_obj.todiv, { duration: 0.2,
            [reveal_obj.todir]: reveal_obj.toval,
            opacity: 1,
        });
        reveal_obj.totrigger.classList.toggle("ess-active");
    }
    static deatcivateReveal(reveal_obj) {
        console.log('deactivating');
        document.EssActiveObject = null;
        if (reveal_obj) {
            gsap.to(reveal_obj.todiv, { 
				duration: 0.2,
                [reveal_obj.todir]: 0,
                opacity: 0,
            });
            reveal_obj.totrigger.classList.toggle("ess-active");
        }

    }
    static hideReveal(e) {
        if (document.EssActiveObject && e.target && e.target != document.EssActiveObject.todiv && e.target != document.EssActiveObject.totrigger) {
            let target = e.target;
            do {
                if (target == document.EssActiveObject.totrigger || target == document.EssActiveObject.todiv ) {
                    // This is a click inside. Do nothing, just return.
                    return;
                }
                target = target.parentNode;
            } while (target);
            console.log(e.target);
            EssReveals.deatcivateReveal(document.EssActiveObject);
        }
    }

}