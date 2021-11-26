// Detects Internet Explorer versions up to IE11.
// Use case does not require MS Edge detection or specific version number.

function isMSIE() {
    const userAgent = window.navigator.userAgent;
    const msie = userAgent.indexOf("MSIE ");
  
    if (msie > -1 || !!navigator.userAgent.match(/Trident.*rv:11./)) {
      return true;
    }
    return false;
  }
  
  export default isMSIE;  