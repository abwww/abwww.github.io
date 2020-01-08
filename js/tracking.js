var gtagProperty = "UA-155462219-1";
var disableString = "ga-disable-" + gtagProperty;
var enableString = "ga-enable-" + gtagProperty;

// protect users from being tracked before accepting
window[disableString] = true;
var gtag = function(){
  console.log("Not tracking!");
};

// to check if user manually opted-out
var optedOut = false;

const hasOptedIn = function() {
  return (document.cookie.indexOf(enableString+  "=true") > -1)
}

const optIn = function() {
  document.cookie = enableString + "=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/";
  window[disableString] = false;
  track();
}

const optOut = function() {
  document.cookie = enableString + "=false; Max-Age=-99999999999; path=/";
  window[disableString] = true;
  gtag = function(){console.log("Tracking opted out")};
  optedOut = true;
}

const track = function() {
  window.dataLayer = window.dataLayer || [];
  gtag = function(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', gtagProperty,{ 'anonymize_ip': true });
}


if (hasOptedIn()) {
  track();
} 
