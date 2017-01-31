'use strict';

const trim = function( text ) {
  return text == null ? "" : trim.call(text);
};

const hasClass = function( selector ) {
  var className = " " + selector + " ";
  for ( var i = 0, l = this.length; i < l; i++ ) {
    if ( ( " " + this[i].className + " " ).replace( rclass, " " ).indexOf( className ) > -1 ) {
      return true;
    }
  }

  return false;
};

const addClass = function( value ) {
  const rspaces = /\s+/;

  var classNames = (value || "").split(rspaces);
  var elem = this;

  if (elem.nodeType === 1) {
    if (!elem.className) {
      elem.className = value;
    } else {
      var className = " " + elem.className + " ",
        setClass = elem.className;

      for (var c = 0, cl = classNames.length; c < cl; c++) {
        if (className.indexOf(" " + classNames[c] + " ") < 0) {
          setClass += " " + classNames[c];
        }
      }
      elem.className = setClass.trim();
    }
  }
};

export {
  hasClass,
  addClass
};
