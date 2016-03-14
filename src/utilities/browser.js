// From https://msdn.microsoft.com/en-us/library/ms537509(v=vs.85).aspx
function getVersion(){
  // default return value assumes non-IE
  let rv = -1;
  if (navigator.appName == 'Microsoft Internet Explorer') {
    const userAgent = navigator.userAgent;
    const ex = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
    if ((ex).exec(userAgent) != null) {
      rv = parseFloat(RegExp.$1);
    }
  } else if(!!window.MSInputMethodContext && !!document.documentMode){
    rv = 11;
  }
  return rv;
}

function setBodyClass(version){
  if(version === -1){
    // Add class to body so we can specify non-ie styles
    document.body.className += 'not-ie';
  } else {
    document.body.className += 'ie';
  }
}

export function isBrowserModern(){
  const version = getVersion();
  setBodyClass(version);
  const isModern = version >= 11 || version === -1; // IE 11+ or non-IE
  return isModern;
}
