const buttons = document.querySelectorAll('.scroll-button');


buttons.forEach(el => {
  el.addEventListener('click', ()=>{
    gsap.to(window, {duration: .7, scrollTo:"#webinar-register"});
  })
})

/* ------ INPUT DATA ---------- */

const dateGermany = 1689080400;
const dateEmea = 1689148800;
const dateAmericas = 1689267600;


/* ------ TIME ZONE OF THE USER ---------- */

let timeZone = '';
const regExp = /\(([^)]+)\)/;
var matches = regExp.exec(new Date());
timeZone = matches[1];


setTimes ('#webinar-card-germany', dateGermany, timeZone );
setTimes ('#webinar-card-emea', dateEmea, timeZone);
setTimes ('#webinar-card-americas', dateAmericas, timeZone);


/**
 * Converts timestamp to needed parameters 
 * and enters them inside the webinar card provided
 * 
 * @param {*} cardId - HTML id attribute of the parent card
 * @param {*} timestamp - timestamp in Unix 
 * @param {*} timezonestring - timezone string (previously obtained from code)
 */

function setTimes (cardId, timestamp, timezonestring) {

  console.log(cardId);
  console.log(timestamp);
  console.log(timezonestring);


  const card = document.querySelector(cardId);
  const timeEl = card.querySelector('.card-time');
  const dayPartEl = card.querySelector('.card-day-part');
  const timeZoneEl = card.querySelector('.card-timezone');

  const date = new Date(timestamp * 1000); // unix to javascript thus * 1000
  const time = date.toLocaleTimeString("en-US");

  const dayPart = time.substring(time.length-2, time.length);
  const pureTime = time.substring(0, time.length - 6);


  timeEl.innerHTML = pureTime;
  dayPartEl.innerHTML = dayPart;
  timeZoneEl.innerHTML = timezonestring;

}

