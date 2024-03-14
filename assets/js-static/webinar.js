

const buttons = document.querySelectorAll('.scroll-button');


buttons.forEach(el => {
  el.addEventListener('click', ()=>{
    gsap.to(window, {duration: .7, scrollTo:"#webinar-register"});
  })
})

/* ------ INPUT DATA ---------- */

const dateEmea = 1709024400;
const dateAmericas = 1709056800;


/* ------ TIME ZONE OF THE USER ---------- */

let timeZone = '';
const regExp = /\(([^)]+)\)/;
var matches = regExp.exec(new Date());
timeZone = matches[1];


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

function editLink(linkId, newVar) {
  link = document.getElementById(linkId);
  linkHref = link.getAttribute('href');
  linkSplit = linkHref.split('websiteDefault', 1);
  linkHref = linkSplit + newVar;
  link.setAttribute('href', linkHref);

  console.log('new link is:');
  console.log(linkSplit + newVar);
}

function getUTMMedium() {
  // Get the current page URL
  var url = window.location.href;

  // Use URLSearchParams to parse query parameters
  var searchParams = new URLSearchParams(url.split('?')[1]);

  console.log('searching Params')

  console.log(searchParams.get('utm_medium'))

  // Check if utm_medium parameter exists
  if (searchParams.has('utm_medium')) {
    var v = searchParams.get('utm_medium');

    editLink('webinar-link-emea', v);
    editLink('webinar-link-americas', v);

    return searchParams.get('utm_medium');

  } else {
    // Return undefined if utm_medium parameter is not found
    return undefined;
  }
}



// Example usage
var utmMediumValue = getUTMMedium();
console.log(utmMediumValue);