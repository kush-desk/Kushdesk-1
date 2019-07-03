(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["extras-extras-modules"],{

/***/ "./node_modules/desandro-matches-selector/matches-selector.js":
/*!********************************************************************!*\
  !*** ./node_modules/desandro-matches-selector/matches-selector.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * matchesSelector v2.0.2
 * matchesSelector( element, '.selector' )
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
  /*global define: false, module: false */
  'use strict';
  // universal module definition
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory() {
  'use strict';

  var matchesMethod = ( function() {
    var ElemProto = window.Element.prototype;
    // check for the standard method name first
    if ( ElemProto.matches ) {
      return 'matches';
    }
    // check un-prefixed
    if ( ElemProto.matchesSelector ) {
      return 'matchesSelector';
    }
    // check vendor prefixes
    var prefixes = [ 'webkit', 'moz', 'ms', 'o' ];

    for ( var i=0; i < prefixes.length; i++ ) {
      var prefix = prefixes[i];
      var method = prefix + 'MatchesSelector';
      if ( ElemProto[ method ] ) {
        return method;
      }
    }
  })();

  return function matchesSelector( elem, selector ) {
    return elem[ matchesMethod ]( selector );
  };

}));


/***/ }),

/***/ "./node_modules/ev-emitter/ev-emitter.js":
/*!***********************************************!*\
  !*** ./node_modules/ev-emitter/ev-emitter.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * EvEmitter v1.1.0
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, window */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( typeof window != 'undefined' ? window : this, function() {

"use strict";

function EvEmitter() {}

var proto = EvEmitter.prototype;

proto.on = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[ eventName ] = events[ eventName ] || [];
  // only add once
  if ( listeners.indexOf( listener ) == -1 ) {
    listeners.push( listener );
  }

  return this;
};

proto.once = function( eventName, listener ) {
  if ( !eventName || !listener ) {
    return;
  }
  // add event
  this.on( eventName, listener );
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
  // set flag
  onceListeners[ listener ] = true;

  return this;
};

proto.off = function( eventName, listener ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  var index = listeners.indexOf( listener );
  if ( index != -1 ) {
    listeners.splice( index, 1 );
  }

  return this;
};

proto.emitEvent = function( eventName, args ) {
  var listeners = this._events && this._events[ eventName ];
  if ( !listeners || !listeners.length ) {
    return;
  }
  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

  for ( var i=0; i < listeners.length; i++ ) {
    var listener = listeners[i]
    var isOnce = onceListeners && onceListeners[ listener ];
    if ( isOnce ) {
      // remove listener
      // remove before trigger to prevent recursion
      this.off( eventName, listener );
      // unset once flag
      delete onceListeners[ listener ];
    }
    // trigger listener
    listener.apply( this, args );
  }

  return this;
};

proto.allOff = function() {
  delete this._events;
  delete this._onceEvents;
};

return EvEmitter;

}));


/***/ }),

/***/ "./node_modules/fizzy-ui-utils/utils.js":
/*!**********************************************!*\
  !*** ./node_modules/fizzy-ui-utils/utils.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Fizzy UI utils v2.0.7
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
  // universal module definition
  /*jshint strict: false */ /*globals define, module, require */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! desandro-matches-selector/matches-selector */ "./node_modules/desandro-matches-selector/matches-selector.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( matchesSelector ) {
      return factory( window, matchesSelector );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, matchesSelector ) {

'use strict';

var utils = {};

// ----- extend ----- //

// extends objects
utils.extend = function( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
};

// ----- modulo ----- //

utils.modulo = function( num, div ) {
  return ( ( num % div ) + div ) % div;
};

// ----- makeArray ----- //

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
utils.makeArray = function( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }
  // return empty array if undefined or null. #6
  if ( obj === null || obj === undefined ) {
    return [];
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
};

// ----- removeFrom ----- //

utils.removeFrom = function( ary, obj ) {
  var index = ary.indexOf( obj );
  if ( index != -1 ) {
    ary.splice( index, 1 );
  }
};

// ----- getParent ----- //

utils.getParent = function( elem, selector ) {
  while ( elem.parentNode && elem != document.body ) {
    elem = elem.parentNode;
    if ( matchesSelector( elem, selector ) ) {
      return elem;
    }
  }
};

// ----- getQueryElement ----- //

// use element as selector string
utils.getQueryElement = function( elem ) {
  if ( typeof elem == 'string' ) {
    return document.querySelector( elem );
  }
  return elem;
};

// ----- handleEvent ----- //

// enable .ontype to trigger from .addEventListener( elem, 'type' )
utils.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

// ----- filterFindElements ----- //

utils.filterFindElements = function( elems, selector ) {
  // make array of elems
  elems = utils.makeArray( elems );
  var ffElems = [];

  elems.forEach( function( elem ) {
    // check that elem is an actual element
    if ( !( elem instanceof HTMLElement ) ) {
      return;
    }
    // add elem if no selector
    if ( !selector ) {
      ffElems.push( elem );
      return;
    }
    // filter & find items if we have a selector
    // filter
    if ( matchesSelector( elem, selector ) ) {
      ffElems.push( elem );
    }
    // find children
    var childElems = elem.querySelectorAll( selector );
    // concat childElems to filterFound array
    for ( var i=0; i < childElems.length; i++ ) {
      ffElems.push( childElems[i] );
    }
  });

  return ffElems;
};

// ----- debounceMethod ----- //

utils.debounceMethod = function( _class, methodName, threshold ) {
  threshold = threshold || 100;
  // original method
  var method = _class.prototype[ methodName ];
  var timeoutName = methodName + 'Timeout';

  _class.prototype[ methodName ] = function() {
    var timeout = this[ timeoutName ];
    clearTimeout( timeout );

    var args = arguments;
    var _this = this;
    this[ timeoutName ] = setTimeout( function() {
      method.apply( _this, args );
      delete _this[ timeoutName ];
    }, threshold );
  };
};

// ----- docReady ----- //

utils.docReady = function( callback ) {
  var readyState = document.readyState;
  if ( readyState == 'complete' || readyState == 'interactive' ) {
    // do async to allow for other scripts to run. metafizzy/flickity#441
    setTimeout( callback );
  } else {
    document.addEventListener( 'DOMContentLoaded', callback );
  }
};

// ----- htmlInit ----- //

// http://jamesroberts.name/blog/2010/02/22/string-functions-for-javascript-trim-to-camel-case-to-dashed-and-to-underscore/
utils.toDashed = function( str ) {
  return str.replace( /(.)([A-Z])/g, function( match, $1, $2 ) {
    return $1 + '-' + $2;
  }).toLowerCase();
};

var console = window.console;
/**
 * allow user to initialize classes via [data-namespace] or .js-namespace class
 * htmlInit( Widget, 'widgetName' )
 * options are parsed from data-namespace-options
 */
utils.htmlInit = function( WidgetClass, namespace ) {
  utils.docReady( function() {
    var dashedNamespace = utils.toDashed( namespace );
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll( '[' + dataAttr + ']' );
    var jsDashElems = document.querySelectorAll( '.js-' + dashedNamespace );
    var elems = utils.makeArray( dataAttrElems )
      .concat( utils.makeArray( jsDashElems ) );
    var dataOptionsAttr = dataAttr + '-options';
    var jQuery = window.jQuery;

    elems.forEach( function( elem ) {
      var attr = elem.getAttribute( dataAttr ) ||
        elem.getAttribute( dataOptionsAttr );
      var options;
      try {
        options = attr && JSON.parse( attr );
      } catch ( error ) {
        // log error, do not initialize
        if ( console ) {
          console.error( 'Error parsing ' + dataAttr + ' on ' + elem.className +
          ': ' + error );
        }
        return;
      }
      // initialize
      var instance = new WidgetClass( elem, options );
      // make available via $().data('namespace')
      if ( jQuery ) {
        jQuery.data( elem, namespace, instance );
      }
    });

  });
};

// -----  ----- //

return utils;

}));


/***/ }),

/***/ "./node_modules/get-size/get-size.js":
/*!*******************************************!*\
  !*** ./node_modules/get-size/get-size.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * getSize v2.0.3
 * measure size of elements
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */
/* globals console: false */

( function( window, factory ) {
  /* jshint strict: false */ /* globals define, module */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( window, function factory() {
'use strict';

// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
function getStyleSize( value ) {
  var num = parseFloat( value );
  // not a percent like '100%', and a number
  var isValid = value.indexOf('%') == -1 && !isNaN( num );
  return isValid && num;
}

function noop() {}

var logError = typeof console == 'undefined' ? noop :
  function( message ) {
    console.error( message );
  };

// -------------------------- measurements -------------------------- //

var measurements = [
  'paddingLeft',
  'paddingRight',
  'paddingTop',
  'paddingBottom',
  'marginLeft',
  'marginRight',
  'marginTop',
  'marginBottom',
  'borderLeftWidth',
  'borderRightWidth',
  'borderTopWidth',
  'borderBottomWidth'
];

var measurementsLength = measurements.length;

function getZeroSize() {
  var size = {
    width: 0,
    height: 0,
    innerWidth: 0,
    innerHeight: 0,
    outerWidth: 0,
    outerHeight: 0
  };
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    size[ measurement ] = 0;
  }
  return size;
}

// -------------------------- getStyle -------------------------- //

/**
 * getStyle, get style of element, check for Firefox bug
 * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
 */
function getStyle( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    logError( 'Style returned ' + style +
      '. Are you running this code in a hidden iframe on Firefox? ' +
      'See https://bit.ly/getsizebug1' );
  }
  return style;
}

// -------------------------- setup -------------------------- //

var isSetup = false;

var isBoxSizeOuter;

/**
 * setup
 * check isBoxSizerOuter
 * do on first getSize() rather than on page load for Firefox bug
 */
function setup() {
  // setup once
  if ( isSetup ) {
    return;
  }
  isSetup = true;

  // -------------------------- box sizing -------------------------- //

  /**
   * Chrome & Safari measure the outer-width on style.width on border-box elems
   * IE11 & Firefox<29 measures the inner-width
   */
  var div = document.createElement('div');
  div.style.width = '200px';
  div.style.padding = '1px 2px 3px 4px';
  div.style.borderStyle = 'solid';
  div.style.borderWidth = '1px 2px 3px 4px';
  div.style.boxSizing = 'border-box';

  var body = document.body || document.documentElement;
  body.appendChild( div );
  var style = getStyle( div );
  // round value for browser zoom. desandro/masonry#928
  isBoxSizeOuter = Math.round( getStyleSize( style.width ) ) == 200;
  getSize.isBoxSizeOuter = isBoxSizeOuter;

  body.removeChild( div );
}

// -------------------------- getSize -------------------------- //

function getSize( elem ) {
  setup();

  // use querySeletor if elem is string
  if ( typeof elem == 'string' ) {
    elem = document.querySelector( elem );
  }

  // do not proceed on non-objects
  if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
    return;
  }

  var style = getStyle( elem );

  // if hidden, everything is 0
  if ( style.display == 'none' ) {
    return getZeroSize();
  }

  var size = {};
  size.width = elem.offsetWidth;
  size.height = elem.offsetHeight;

  var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

  // get all measurements
  for ( var i=0; i < measurementsLength; i++ ) {
    var measurement = measurements[i];
    var value = style[ measurement ];
    var num = parseFloat( value );
    // any 'auto', 'medium' value will be 0
    size[ measurement ] = !isNaN( num ) ? num : 0;
  }

  var paddingWidth = size.paddingLeft + size.paddingRight;
  var paddingHeight = size.paddingTop + size.paddingBottom;
  var marginWidth = size.marginLeft + size.marginRight;
  var marginHeight = size.marginTop + size.marginBottom;
  var borderWidth = size.borderLeftWidth + size.borderRightWidth;
  var borderHeight = size.borderTopWidth + size.borderBottomWidth;

  var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

  // overwrite width and height if we can get it from style
  var styleWidth = getStyleSize( style.width );
  if ( styleWidth !== false ) {
    size.width = styleWidth +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
  }

  var styleHeight = getStyleSize( style.height );
  if ( styleHeight !== false ) {
    size.height = styleHeight +
      // add padding and border unless it's already including it
      ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
  }

  size.innerWidth = size.width - ( paddingWidth + borderWidth );
  size.innerHeight = size.height - ( paddingHeight + borderHeight );

  size.outerWidth = size.width + marginWidth;
  size.outerHeight = size.height + marginHeight;

  return size;
}

return getSize;

});


/***/ }),

/***/ "./node_modules/imagesloaded/imagesloaded.js":
/*!***************************************************!*\
  !*** ./node_modules/imagesloaded/imagesloaded.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

( function( window, factory ) { 'use strict';
  // universal module definition

  /*global define: false, module: false, require: false */

  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
      __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js")
    ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter ) {
      return factory( window, EvEmitter );
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

})( typeof window !== 'undefined' ? window : this,

// --------------------------  factory -------------------------- //

function factory( window, EvEmitter ) {

'use strict';

var $ = window.jQuery;
var console = window.console;

// -------------------------- helpers -------------------------- //

// extend objects
function extend( a, b ) {
  for ( var prop in b ) {
    a[ prop ] = b[ prop ];
  }
  return a;
}

var arraySlice = Array.prototype.slice;

// turn element or nodeList into an array
function makeArray( obj ) {
  if ( Array.isArray( obj ) ) {
    // use object if already an array
    return obj;
  }

  var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
  if ( isArrayLike ) {
    // convert nodeList to array
    return arraySlice.call( obj );
  }

  // array of single index
  return [ obj ];
}

// -------------------------- imagesLoaded -------------------------- //

/**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */
function ImagesLoaded( elem, options, onAlways ) {
  // coerce ImagesLoaded() without new, to be new ImagesLoaded()
  if ( !( this instanceof ImagesLoaded ) ) {
    return new ImagesLoaded( elem, options, onAlways );
  }
  // use elem as selector string
  var queryElem = elem;
  if ( typeof elem == 'string' ) {
    queryElem = document.querySelectorAll( elem );
  }
  // bail if bad element
  if ( !queryElem ) {
    console.error( 'Bad element for imagesLoaded ' + ( queryElem || elem ) );
    return;
  }

  this.elements = makeArray( queryElem );
  this.options = extend( {}, this.options );
  // shift arguments if no options set
  if ( typeof options == 'function' ) {
    onAlways = options;
  } else {
    extend( this.options, options );
  }

  if ( onAlways ) {
    this.on( 'always', onAlways );
  }

  this.getImages();

  if ( $ ) {
    // add jQuery Deferred object
    this.jqDeferred = new $.Deferred();
  }

  // HACK check async to allow time to bind listeners
  setTimeout( this.check.bind( this ) );
}

ImagesLoaded.prototype = Object.create( EvEmitter.prototype );

ImagesLoaded.prototype.options = {};

ImagesLoaded.prototype.getImages = function() {
  this.images = [];

  // filter & find items if we have an item selector
  this.elements.forEach( this.addElementImages, this );
};

/**
 * @param {Node} element
 */
ImagesLoaded.prototype.addElementImages = function( elem ) {
  // filter siblings
  if ( elem.nodeName == 'IMG' ) {
    this.addImage( elem );
  }
  // get background image on element
  if ( this.options.background === true ) {
    this.addElementBackgroundImages( elem );
  }

  // find children
  // no non-element nodes, #143
  var nodeType = elem.nodeType;
  if ( !nodeType || !elementNodeTypes[ nodeType ] ) {
    return;
  }
  var childImgs = elem.querySelectorAll('img');
  // concat childElems to filterFound array
  for ( var i=0; i < childImgs.length; i++ ) {
    var img = childImgs[i];
    this.addImage( img );
  }

  // get child background images
  if ( typeof this.options.background == 'string' ) {
    var children = elem.querySelectorAll( this.options.background );
    for ( i=0; i < children.length; i++ ) {
      var child = children[i];
      this.addElementBackgroundImages( child );
    }
  }
};

var elementNodeTypes = {
  1: true,
  9: true,
  11: true
};

ImagesLoaded.prototype.addElementBackgroundImages = function( elem ) {
  var style = getComputedStyle( elem );
  if ( !style ) {
    // Firefox returns null if in a hidden iframe https://bugzil.la/548397
    return;
  }
  // get url inside url("...")
  var reURL = /url\((['"])?(.*?)\1\)/gi;
  var matches = reURL.exec( style.backgroundImage );
  while ( matches !== null ) {
    var url = matches && matches[2];
    if ( url ) {
      this.addBackground( url, elem );
    }
    matches = reURL.exec( style.backgroundImage );
  }
};

/**
 * @param {Image} img
 */
ImagesLoaded.prototype.addImage = function( img ) {
  var loadingImage = new LoadingImage( img );
  this.images.push( loadingImage );
};

ImagesLoaded.prototype.addBackground = function( url, elem ) {
  var background = new Background( url, elem );
  this.images.push( background );
};

ImagesLoaded.prototype.check = function() {
  var _this = this;
  this.progressedCount = 0;
  this.hasAnyBroken = false;
  // complete if no images
  if ( !this.images.length ) {
    this.complete();
    return;
  }

  function onProgress( image, elem, message ) {
    // HACK - Chrome triggers event before object properties have changed. #83
    setTimeout( function() {
      _this.progress( image, elem, message );
    });
  }

  this.images.forEach( function( loadingImage ) {
    loadingImage.once( 'progress', onProgress );
    loadingImage.check();
  });
};

ImagesLoaded.prototype.progress = function( image, elem, message ) {
  this.progressedCount++;
  this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
  // progress event
  this.emitEvent( 'progress', [ this, image, elem ] );
  if ( this.jqDeferred && this.jqDeferred.notify ) {
    this.jqDeferred.notify( this, image );
  }
  // check if completed
  if ( this.progressedCount == this.images.length ) {
    this.complete();
  }

  if ( this.options.debug && console ) {
    console.log( 'progress: ' + message, image, elem );
  }
};

ImagesLoaded.prototype.complete = function() {
  var eventName = this.hasAnyBroken ? 'fail' : 'done';
  this.isComplete = true;
  this.emitEvent( eventName, [ this ] );
  this.emitEvent( 'always', [ this ] );
  if ( this.jqDeferred ) {
    var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
    this.jqDeferred[ jqMethod ]( this );
  }
};

// --------------------------  -------------------------- //

function LoadingImage( img ) {
  this.img = img;
}

LoadingImage.prototype = Object.create( EvEmitter.prototype );

LoadingImage.prototype.check = function() {
  // If complete is true and browser supports natural sizes,
  // try to check for image status manually.
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    // report based on naturalWidth
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    return;
  }

  // If none of the checks above matched, simulate loading on detached element.
  this.proxyImage = new Image();
  this.proxyImage.addEventListener( 'load', this );
  this.proxyImage.addEventListener( 'error', this );
  // bind to image as well for Firefox. #191
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.proxyImage.src = this.img.src;
};

LoadingImage.prototype.getIsImageComplete = function() {
  // check for non-zero, non-undefined naturalWidth
  // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
  return this.img.complete && this.img.naturalWidth;
};

LoadingImage.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.img, message ] );
};

// ----- events ----- //

// trigger specified handler for event type
LoadingImage.prototype.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

LoadingImage.prototype.onload = function() {
  this.confirm( true, 'onload' );
  this.unbindEvents();
};

LoadingImage.prototype.onerror = function() {
  this.confirm( false, 'onerror' );
  this.unbindEvents();
};

LoadingImage.prototype.unbindEvents = function() {
  this.proxyImage.removeEventListener( 'load', this );
  this.proxyImage.removeEventListener( 'error', this );
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

// -------------------------- Background -------------------------- //

function Background( url, element ) {
  this.url = url;
  this.element = element;
  this.img = new Image();
}

// inherit LoadingImage prototype
Background.prototype = Object.create( LoadingImage.prototype );

Background.prototype.check = function() {
  this.img.addEventListener( 'load', this );
  this.img.addEventListener( 'error', this );
  this.img.src = this.url;
  // check if image is already complete
  var isComplete = this.getIsImageComplete();
  if ( isComplete ) {
    this.confirm( this.img.naturalWidth !== 0, 'naturalWidth' );
    this.unbindEvents();
  }
};

Background.prototype.unbindEvents = function() {
  this.img.removeEventListener( 'load', this );
  this.img.removeEventListener( 'error', this );
};

Background.prototype.confirm = function( isLoaded, message ) {
  this.isLoaded = isLoaded;
  this.emitEvent( 'progress', [ this, this.element, message ] );
};

// -------------------------- jQuery -------------------------- //

ImagesLoaded.makeJQueryPlugin = function( jQuery ) {
  jQuery = jQuery || window.jQuery;
  if ( !jQuery ) {
    return;
  }
  // set local variable
  $ = jQuery;
  // $().imagesLoaded()
  $.fn.imagesLoaded = function( options, callback ) {
    var instance = new ImagesLoaded( this, options, callback );
    return instance.jqDeferred.promise( $(this) );
  };
};
// try making plugin
ImagesLoaded.makeJQueryPlugin();

// --------------------------  -------------------------- //

return ImagesLoaded;

});


/***/ }),

/***/ "./node_modules/masonry-layout/masonry.js":
/*!************************************************!*\
  !*** ./node_modules/masonry-layout/masonry.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Masonry v4.2.2
 * Cascading grid layout library
 * https://masonry.desandro.com
 * MIT License
 * by David DeSandro
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /*globals define, module, require */
  if ( true ) {
    // AMD
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! outlayer/outlayer */ "./node_modules/outlayer/outlayer.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( Outlayer, getSize ) {

'use strict';

// -------------------------- masonryDefinition -------------------------- //

  // create an Outlayer layout class
  var Masonry = Outlayer.create('masonry');
  // isFitWidth -> fitWidth
  Masonry.compatOptions.fitWidth = 'isFitWidth';

  var proto = Masonry.prototype;

  proto._resetLayout = function() {
    this.getSize();
    this._getMeasurement( 'columnWidth', 'outerWidth' );
    this._getMeasurement( 'gutter', 'outerWidth' );
    this.measureColumns();

    // reset column Y
    this.colYs = [];
    for ( var i=0; i < this.cols; i++ ) {
      this.colYs.push( 0 );
    }

    this.maxY = 0;
    this.horizontalColIndex = 0;
  };

  proto.measureColumns = function() {
    this.getContainerWidth();
    // if columnWidth is 0, default to outerWidth of first item
    if ( !this.columnWidth ) {
      var firstItem = this.items[0];
      var firstItemElem = firstItem && firstItem.element;
      // columnWidth fall back to item of first element
      this.columnWidth = firstItemElem && getSize( firstItemElem ).outerWidth ||
        // if first elem has no width, default to size of container
        this.containerWidth;
    }

    var columnWidth = this.columnWidth += this.gutter;

    // calculate columns
    var containerWidth = this.containerWidth + this.gutter;
    var cols = containerWidth / columnWidth;
    // fix rounding errors, typically with gutters
    var excess = columnWidth - containerWidth % columnWidth;
    // if overshoot is less than a pixel, round up, otherwise floor it
    var mathMethod = excess && excess < 1 ? 'round' : 'floor';
    cols = Math[ mathMethod ]( cols );
    this.cols = Math.max( cols, 1 );
  };

  proto.getContainerWidth = function() {
    // container is parent if fit width
    var isFitWidth = this._getOption('fitWidth');
    var container = isFitWidth ? this.element.parentNode : this.element;
    // check that this.size and size are there
    // IE8 triggers resize on body size change, so they might not be
    var size = getSize( container );
    this.containerWidth = size && size.innerWidth;
  };

  proto._getItemLayoutPosition = function( item ) {
    item.getSize();
    // how many columns does this brick span
    var remainder = item.size.outerWidth % this.columnWidth;
    var mathMethod = remainder && remainder < 1 ? 'round' : 'ceil';
    // round if off by 1 pixel, otherwise use ceil
    var colSpan = Math[ mathMethod ]( item.size.outerWidth / this.columnWidth );
    colSpan = Math.min( colSpan, this.cols );
    // use horizontal or top column position
    var colPosMethod = this.options.horizontalOrder ?
      '_getHorizontalColPosition' : '_getTopColPosition';
    var colPosition = this[ colPosMethod ]( colSpan, item );
    // position the brick
    var position = {
      x: this.columnWidth * colPosition.col,
      y: colPosition.y
    };
    // apply setHeight to necessary columns
    var setHeight = colPosition.y + item.size.outerHeight;
    var setMax = colSpan + colPosition.col;
    for ( var i = colPosition.col; i < setMax; i++ ) {
      this.colYs[i] = setHeight;
    }

    return position;
  };

  proto._getTopColPosition = function( colSpan ) {
    var colGroup = this._getTopColGroup( colSpan );
    // get the minimum Y value from the columns
    var minimumY = Math.min.apply( Math, colGroup );

    return {
      col: colGroup.indexOf( minimumY ),
      y: minimumY,
    };
  };

  /**
   * @param {Number} colSpan - number of columns the element spans
   * @returns {Array} colGroup
   */
  proto._getTopColGroup = function( colSpan ) {
    if ( colSpan < 2 ) {
      // if brick spans only one column, use all the column Ys
      return this.colYs;
    }

    var colGroup = [];
    // how many different places could this brick fit horizontally
    var groupCount = this.cols + 1 - colSpan;
    // for each group potential horizontal position
    for ( var i = 0; i < groupCount; i++ ) {
      colGroup[i] = this._getColGroupY( i, colSpan );
    }
    return colGroup;
  };

  proto._getColGroupY = function( col, colSpan ) {
    if ( colSpan < 2 ) {
      return this.colYs[ col ];
    }
    // make an array of colY values for that one group
    var groupColYs = this.colYs.slice( col, col + colSpan );
    // and get the max value of the array
    return Math.max.apply( Math, groupColYs );
  };

  // get column position based on horizontal index. #873
  proto._getHorizontalColPosition = function( colSpan, item ) {
    var col = this.horizontalColIndex % this.cols;
    var isOver = colSpan > 1 && col + colSpan > this.cols;
    // shift to next row if item can't fit on current row
    col = isOver ? 0 : col;
    // don't let zero-size items take up space
    var hasSize = item.size.outerWidth && item.size.outerHeight;
    this.horizontalColIndex = hasSize ? col + colSpan : this.horizontalColIndex;

    return {
      col: col,
      y: this._getColGroupY( col, colSpan ),
    };
  };

  proto._manageStamp = function( stamp ) {
    var stampSize = getSize( stamp );
    var offset = this._getElementOffset( stamp );
    // get the columns that this stamp affects
    var isOriginLeft = this._getOption('originLeft');
    var firstX = isOriginLeft ? offset.left : offset.right;
    var lastX = firstX + stampSize.outerWidth;
    var firstCol = Math.floor( firstX / this.columnWidth );
    firstCol = Math.max( 0, firstCol );
    var lastCol = Math.floor( lastX / this.columnWidth );
    // lastCol should not go over if multiple of columnWidth #425
    lastCol -= lastX % this.columnWidth ? 0 : 1;
    lastCol = Math.min( this.cols - 1, lastCol );
    // set colYs to bottom of the stamp

    var isOriginTop = this._getOption('originTop');
    var stampMaxY = ( isOriginTop ? offset.top : offset.bottom ) +
      stampSize.outerHeight;
    for ( var i = firstCol; i <= lastCol; i++ ) {
      this.colYs[i] = Math.max( stampMaxY, this.colYs[i] );
    }
  };

  proto._getContainerSize = function() {
    this.maxY = Math.max.apply( Math, this.colYs );
    var size = {
      height: this.maxY
    };

    if ( this._getOption('fitWidth') ) {
      size.width = this._getContainerFitWidth();
    }

    return size;
  };

  proto._getContainerFitWidth = function() {
    var unusedCols = 0;
    // count unused columns
    var i = this.cols;
    while ( --i ) {
      if ( this.colYs[i] !== 0 ) {
        break;
      }
      unusedCols++;
    }
    // fit container to columns that have been used
    return ( this.cols - unusedCols ) * this.columnWidth - this.gutter;
  };

  proto.needsResizeLayout = function() {
    var previousWidth = this.containerWidth;
    this.getContainerWidth();
    return previousWidth != this.containerWidth;
  };

  return Masonry;

}));


/***/ }),

/***/ "./node_modules/ng2-scroll-to/index.js":
/*!*********************************************!*\
  !*** ./node_modules/ng2-scroll-to/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var scrollTo_1 = __webpack_require__(/*! ./src/scrollTo */ "./node_modules/ng2-scroll-to/src/scrollTo.js");
exports.ScrollTo = scrollTo_1.ScrollTo;
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
// import { SampleComponent } from './src/sample.component';
// import { SampleDirective } from './src/sample.directive';
// import { SamplePipe } from './src/sample.pipe';
var scrollTo_2 = __webpack_require__(/*! ./src/scrollTo */ "./node_modules/ng2-scroll-to/src/scrollTo.js");
// export * from './src/sample.component';
// export * from './src/sample.directive';
// export * from './src/sample.pipe';
__export(__webpack_require__(/*! ./src/scrollTo */ "./node_modules/ng2-scroll-to/src/scrollTo.js"));
var ScrollToModule = ScrollToModule_1 = (function () {
    function ScrollToModule() {
    }
    ScrollToModule.forRoot = function () {
        return {
            ngModule: ScrollToModule_1
        };
    };
    return ScrollToModule;
}());
ScrollToModule = ScrollToModule_1 = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            scrollTo_2.ScrollTo,
        ],
        exports: [
            scrollTo_2.ScrollTo,
        ]
    })
], ScrollToModule);
exports.ScrollToModule = ScrollToModule;
var ScrollToModule_1;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/ng2-scroll-to/src/scrollTo.js":
/*!****************************************************!*\
  !*** ./node_modules/ng2-scroll-to/src/scrollTo.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var ScrollTo = (function () {
    function ScrollTo(el) {
        this.el = el;
    }
    ScrollTo.prototype.onClick = function (event) {
        event.preventDefault();
        var scrollEnd;
        if (this.scrollYTarget) {
            if (isNaN(Number(this.scrollYTarget))) {
                throw 'scrollYTarget must have numerical values';
            }
            scrollEnd = this.scrollYTarget;
        }
        var target;
        if (scrollEnd == null) {
            target = this.getTarget();
            if (!target) {
                console.warn('target element do not exist');
                return;
            }
            scrollEnd = target.offsetTop;
        }
        var scrollingElement = this.getScrollableElement(target);
        try {
            if (scrollingElement === document.body) {
                this.smoothScroll(document.documentElement, scrollEnd);
            }
        }
        catch (e) {
            console.warn(e);
        }
        this.smoothScroll(scrollingElement, scrollEnd);
    };
    ScrollTo.prototype.getScrollableElement = function (target) {
        var scrollableElement;
        if (this.scrollableElementSelector) {
            scrollableElement = document.querySelector(this.scrollableElementSelector);
        }
        else if (target != null) {
            scrollableElement = this.findScrollableParent(target);
        }
        else {
            scrollableElement = this.findMainScrollableElement();
        }
        return scrollableElement;
    };
    ScrollTo.prototype.getTarget = function () {
        var target;
        if (this.scrollTargetSelector) {
            target = document.querySelector(this.scrollTargetSelector);
        }
        else if (this.el.nativeElement.href) {
            var href = '#' + this.el.nativeElement.href.split('#')[1];
            target = document.querySelector(href);
        }
        return target;
    };
    ScrollTo.prototype.smoothScroll = function (element, end) {
        var _this = this;
        var duration = 500;
        var clock = Date.now();
        var requestAnimationFrame = window.requestAnimationFrame || function (fn) {
            window.setTimeout(fn, 15);
        };
        var start = element.scrollTop;
        var step = function () {
            var elapsed = Date.now() - clock;
            var position = _this.position(start, end, elapsed, duration);
            element.scrollTop = position;
            if (elapsed > duration) {
            }
            else {
                requestAnimationFrame(step);
            }
        };
        step();
    };
    // ease in out function thanks to:
    // http://blog.greweb.fr/2012/02/bezier-curve-based-easing-functions-from-concept-to-implementation/
    ScrollTo.prototype.easeInOutCubic = function (t) {
        return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    };
    /**
      * calculate the scroll position we should be in
      * given the start and end point of the scroll
      * the time elapsed from the beginning of the scroll
      * and the total duration of the scroll (default 500ms)
      */
    ScrollTo.prototype.position = function (start, end, elapsed, duration) {
        if (elapsed > duration) {
            return end;
        }
        ;
        return start + (end - start) * this.easeInOutCubic(elapsed / duration); // <-- you can change the easing funtion there
        // return start + (end - start) * (elapsed / duration); // <-- this would give a linear scroll
    };
    /**
      * finds scrollable parent of an element
      * @method findScrollableParent
      * @param {HTMLElement} element
      * @returns {HTMLElement} element
      */
    ScrollTo.prototype.findScrollableParent = function (element) {
        var isBody, hasScrollableSpace, hasVisibleOverflow;
        do {
            element = element.parentElement;
            // set condition variables
            isBody = element === document.body;
            hasScrollableSpace = element.clientHeight < element.scrollHeight;
            hasVisibleOverflow = getComputedStyle(element, null).overflow === 'visible';
        } while (!isBody && !(hasScrollableSpace && !hasVisibleOverflow));
        return element;
    };
    /**
      * finds scrollable parent of an element
      * @method findMainScrollableElement
      * @returns {HTMLElement} element
      */
    ScrollTo.prototype.findMainScrollableElement = function () {
        var element = this.findScrollableChild(document.body);
        if (element != null) {
            return element;
        }
        return document.body;
    };
    ScrollTo.prototype.isScrollable = function (element) {
        var hasScrollableSpace = element.clientHeight < element.scrollHeight;
        var hasVisibleOverflow = getComputedStyle(element, null).overflow === 'visible';
        return hasScrollableSpace && !hasVisibleOverflow;
    };
    ScrollTo.prototype.isScriptTag = function (element) {
        return element.nodeName === 'SCRIPT';
    };
    ScrollTo.prototype.findScrollableChild = function (inputElement) {
        var scrollableElement;
        var i = 0;
        if (this.isScriptTag(inputElement)) {
            return null;
        }
        while (scrollableElement == null && i < inputElement.childElementCount) {
            var element = inputElement.children[i];
            if (this.isScrollable(element)) {
                scrollableElement = element;
                return element;
            }
            scrollableElement = this.findScrollableChild(element);
            i++;
        }
        return scrollableElement;
    };
    return ScrollTo;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ScrollTo.prototype, "scrollableElementSelector", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ScrollTo.prototype, "scrollTargetSelector", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ScrollTo.prototype, "scrollYTarget", void 0);
__decorate([
    core_1.HostListener('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [MouseEvent]),
    __metadata("design:returntype", void 0)
], ScrollTo.prototype, "onClick", null);
ScrollTo = __decorate([
    core_1.Directive({
        selector: '[scrollTo]'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], ScrollTo);
exports.ScrollTo = ScrollTo;
//# sourceMappingURL=scrollTo.js.map

/***/ }),

/***/ "./node_modules/ng2-sticky-kit/ng2-sticky-kit.es5.js":
/*!***********************************************************!*\
  !*** ./node_modules/ng2-sticky-kit/ng2-sticky-kit.es5.js ***!
  \***********************************************************/
/*! exports provided: StickyComponent, StickyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyComponent", function() { return StickyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StickyModule", function() { return StickyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StickyComponent = (function () {
    /**
     * @param {?} element
     */
    function StickyComponent(element) {
        this.element = element;
        this.zIndex = 10;
        this.width = 'auto';
        this.offsetTop = 0;
        this.offsetBottom = 0;
        this.start = 0;
        this.stickClass = 'sticky';
        this.endStickClass = 'sticky-end';
        this.mediaQuery = '';
        this.parentMode = true;
        this.orientation = 'none';
        this.activated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deactivated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.reset = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.isStuck = false;
    }
    /**
     * @return {?}
     */
    StickyComponent.prototype.ngOnInit = function () {
        this.elem = this.element.nativeElement;
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.ngAfterViewInit = function () {
        // define scroll container as parent element
        this.container = this.elem.parentNode;
        this.defineOriginalDimensions();
        this.sticker();
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.onChange = function () {
        this.sticker();
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.defineOriginalDimensions = function () {
        this.originalCss = {
            zIndex: this.getCssValue(this.elem, 'zIndex'),
            position: this.getCssValue(this.elem, 'position'),
            top: this.getCssValue(this.elem, 'top'),
            right: this.getCssValue(this.elem, 'right'),
            left: this.getCssValue(this.elem, 'left'),
            bottom: this.getCssValue(this.elem, 'bottom'),
            width: this.getCssValue(this.elem, 'width'),
        };
        if (this.width == 'auto') {
            this.width = this.originalCss.width;
        }
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.defineDimensions = function () {
        var /** @type {?} */ containerTop = this.getBoundingClientRectValue(this.container, 'top');
        this.windowHeight = window.innerHeight;
        this.elemHeight = this.getCssNumber(this.elem, 'height');
        this.containerHeight = this.getCssNumber(this.container, 'height');
        this.containerStart = containerTop + this.scrollbarYPos() - this.offsetTop + this.start;
        if (this.parentMode) {
            this.scrollFinish = this.containerStart - this.start - this.offsetBottom + (this.containerHeight - this.elemHeight);
        }
        else {
            this.scrollFinish = document.body.offsetHeight;
        }
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.resetElement = function () {
        this.elem.classList.remove(this.stickClass);
        Object.assign(this.elem.style, this.originalCss);
        this.reset.next(this.elem);
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.stuckElement = function () {
        this.isStuck = true;
        this.elem.classList.remove(this.endStickClass);
        this.elem.classList.add(this.stickClass);
        Object.assign(this.elem.style, {
            zIndex: this.zIndex,
            position: 'fixed',
            top: this.offsetTop + 'px',
            right: 'auto',
            bottom: 'auto',
            left: this.getBoundingClientRectValue(this.elem, 'left') + 'px',
            width: this.width
        });
        this.activated.next(this.elem);
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.unstuckElement = function () {
        this.isStuck = false;
        this.elem.classList.add(this.endStickClass);
        this.container.style.position = 'relative';
        Object.assign(this.elem.style, {
            position: 'absolute',
            top: 'auto',
            left: 'auto',
            right: this.getCssValue(this.elem, 'float') === 'right' || this.orientation === 'right' ? 0 : 'auto',
            bottom: this.offsetBottom + 'px',
            width: this.width
        });
        this.deactivated.next(this.elem);
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.matchMediaQuery = function () {
        if (!this.mediaQuery)
            return true;
        return (window.matchMedia('(' + this.mediaQuery + ')').matches ||
            window.matchMedia(this.mediaQuery).matches);
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.sticker = function () {
        // check media query
        if (this.isStuck && !this.matchMediaQuery()) {
            this.resetElement();
            return;
        }
        // detecting when a container's height changes
        var /** @type {?} */ currentContainerHeight = this.getCssNumber(this.container, 'height');
        if (currentContainerHeight !== this.containerHeight) {
            this.defineDimensions();
        }
        // check if the sticky element is above the container
        if (this.elemHeight >= currentContainerHeight) {
            return;
        }
        var /** @type {?} */ position = this.scrollbarYPos();
        // unstick
        if (this.isStuck && (position < this.containerStart || position > this.scrollFinish) || position > this.scrollFinish) {
            this.resetElement();
            if (position > this.scrollFinish)
                this.unstuckElement();
            this.isStuck = false;
        }
        else if (this.isStuck === false && position > this.containerStart && position < this.scrollFinish) {
            this.stuckElement();
        }
    };
    /**
     * @return {?}
     */
    StickyComponent.prototype.scrollbarYPos = function () {
        return window.pageYOffset || document.documentElement.scrollTop;
    };
    /**
     * @param {?} element
     * @param {?} property
     * @return {?}
     */
    StickyComponent.prototype.getBoundingClientRectValue = function (element, property) {
        var /** @type {?} */ result = 0;
        if (element && element.getBoundingClientRect) {
            var /** @type {?} */ rect = element.getBoundingClientRect();
            result = (typeof rect[property] !== 'undefined') ? rect[property] : 0;
        }
        return result;
    };
    /**
     * @param {?} element
     * @param {?} property
     * @return {?}
     */
    StickyComponent.prototype.getCssValue = function (element, property) {
        var /** @type {?} */ result = '';
        if (typeof window.getComputedStyle !== 'undefined') {
            result = window.getComputedStyle(element, '').getPropertyValue(property);
        }
        else if (typeof element.currentStyle !== 'undefined') {
            result = element.currentStyle[property];
        }
        return result;
    };
    /**
     * @param {?} element
     * @param {?} property
     * @return {?}
     */
    StickyComponent.prototype.getCssNumber = function (element, property) {
        if (typeof element === 'undefined')
            return 0;
        return parseInt(this.getCssValue(element, property), 10) || 0;
    };
    return StickyComponent;
}());
StickyComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'sticky',
                template: '<ng-content></ng-content>'
            },] },
];
/**
 * @nocollapse
 */
StickyComponent.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
StickyComponent.propDecorators = {
    'zIndex': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-zIndex',] },],
    'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-width',] },],
    'offsetTop': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-offset-top',] },],
    'offsetBottom': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-offset-bottom',] },],
    'start': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-start',] },],
    'stickClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-class',] },],
    'endStickClass': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-end-class',] },],
    'mediaQuery': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-media-query',] },],
    'parentMode': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-parent',] },],
    'orientation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['sticky-orientation',] },],
    'activated': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'deactivated': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'reset': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    'onChange': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:scroll', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:orientationchange', ['$event'],] },],
};

var StickyModule = (function () {
    function StickyModule() {
    }
    return StickyModule;
}());
StickyModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [StickyComponent],
                exports: [StickyComponent]
            },] },
];
/**
 * @nocollapse
 */
StickyModule.ctorParameters = function () { return []; };

/**
 * Generated bundle index. Do not edit.
 */


//# sourceMappingURL=ng2-sticky-kit.es5.js.map


/***/ }),

/***/ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js":
/*!*******************************************************!*\
  !*** ./node_modules/ngx-masonry/fesm5/ngx-masonry.js ***!
  \*******************************************************/
/*! exports provided: NgxMasonryComponent, NgxMasonryDirective, NgxMasonryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMasonryComponent", function() { return NgxMasonryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMasonryDirective", function() { return NgxMasonryDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxMasonryModule", function() { return NgxMasonryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var /** @type {?} */ imagesLoaded;
var /** @type {?} */ masonryConstructor;
var NgxMasonryComponent = /** @class */ (function () {
    function NgxMasonryComponent(platformId, _element) {
        this.platformId = platformId;
        this._element = _element;
        this.useImagesLoaded = false;
        this.updateLayout = false;
        // Outputs
        this.layoutComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    NgxMasonryComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.useImagesLoaded && imagesLoaded === undefined) {
            imagesLoaded = __webpack_require__(/*! imagesloaded */ "./node_modules/imagesloaded/imagesloaded.js");
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId) && masonryConstructor === undefined) {
            masonryConstructor = __webpack_require__(/*! masonry-layout */ "./node_modules/masonry-layout/masonry.js");
        }
        // Create masonry options object
        if (!this.options) {
            this.options = {};
        }
        // Set default itemSelector
        if (!this.options.itemSelector) {
            this.options.itemSelector = '[ngxMasonryItem], ngxMasonryItem';
        }
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            // Initialize Masonry
            this._msnry = new masonryConstructor(this._element.nativeElement, this.options);
            // Bind to events
            this._msnry.on('layoutComplete', function (items) {
                _this.layoutComplete.emit(items);
            });
            this._msnry.on('removeComplete', function (items) {
                _this.removeComplete.emit(items);
            });
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgxMasonryComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        // only update layout if it's not the first change
        if (changes["updateLayout"]) {
            if (!changes["updateLayout"].firstChange) {
                this.layout();
            }
        }
    };
    /**
     * @return {?}
     */
    NgxMasonryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this._msnry) {
            this._msnry.destroy();
        }
    };
    /**
     * @return {?}
     */
    NgxMasonryComponent.prototype.layout = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.layout();
        });
    };
    /**
     * @return {?}
     */
    NgxMasonryComponent.prototype.reloadItems = /**
     * @return {?}
     */
    function () {
        var _this = this;
        setTimeout(function () {
            _this._msnry.reloadItems();
        });
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxMasonryComponent.prototype.add = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        var _this = this;
        var /** @type {?} */ isFirstItem = false;
        // Check if first item
        if (this._msnry.items.length === 0) {
            isFirstItem = true;
        }
        if (this.useImagesLoaded) {
            imagesLoaded(element, function (instance) {
                _this._element.nativeElement.appendChild(element);
                // Tell Masonry that a child element has been added
                // Tell Masonry that a child element has been added
                _this._msnry.appended(element);
                // layout if first item
                if (isFirstItem) {
                    _this.layout();
                }
            });
            this._element.nativeElement.removeChild(element);
        }
        else {
            // Tell Masonry that a child element has been added
            this._msnry.appended(element);
            // layout if first item
            if (isFirstItem) {
                this.layout();
            }
        }
    };
    /**
     * @param {?} element
     * @return {?}
     */
    NgxMasonryComponent.prototype.remove = /**
     * @param {?} element
     * @return {?}
     */
    function (element) {
        // Tell Masonry that a child element has been removed
        this._msnry.remove(element);
        // Layout items
        this.layout();
    };
    NgxMasonryComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: '[ngx-masonry], ngx-masonry',
                    template: '<ng-content></ng-content>',
                    styles: [
                        "\n\t\t:host {\n\t\t\tdisplay: block;\n\t\t}\n\t"
                    ]
                },] },
    ];
    /** @nocollapse */
    NgxMasonryComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    ]; };
    NgxMasonryComponent.propDecorators = {
        "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "useImagesLoaded": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "updateLayout": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
        "layoutComplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
        "removeComplete": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] },],
    };
    return NgxMasonryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxMasonryDirective = /** @class */ (function () {
    function NgxMasonryDirective(_element, _parent, platformId) {
        this._element = _element;
        this._parent = _parent;
        this.platformId = platformId;
    }
    /**
     * @return {?}
     */
    NgxMasonryDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this._parent.add(this._element.nativeElement);
            this.watchForHtmlChanges();
        }
    };
    /**
     * @return {?}
     */
    NgxMasonryDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["isPlatformBrowser"])(this.platformId)) {
            this._parent.remove(this._element.nativeElement);
        }
    };
    /**
     * When HTML in brick changes dinamically, observe that and change layout
     * @return {?}
     */
    NgxMasonryDirective.prototype.watchForHtmlChanges = /**
     * When HTML in brick changes dinamically, observe that and change layout
     * @return {?}
     */
    function () {
        MutationObserver = window.MutationObserver || window.WebKitMutationObserver;
        if (MutationObserver) {
            /**
             * Watch for any changes to subtree
             */
            var /** @type {?} */ self_1 = this;
            var /** @type {?} */ observer = new MutationObserver(function (mutations, observerFromElement) {
                self_1._parent.layout();
            });
            // define what element should be observed by the observer
            // and what types of mutations trigger the callback
            observer.observe(this._element.nativeElement, {
                subtree: true,
                childList: true
            });
        }
    };
    NgxMasonryDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    selector: '[ngxMasonryItem], ngxMasonryItem'
                },] },
    ];
    /** @nocollapse */
    NgxMasonryDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
        { type: NgxMasonryComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () { return NgxMasonryComponent; }),] },] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"],] },] },
    ]; };
    return NgxMasonryDirective;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgxMasonryModule = /** @class */ (function () {
    function NgxMasonryModule() {
    }
    NgxMasonryModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [],
                    declarations: [NgxMasonryComponent, NgxMasonryDirective],
                    exports: [NgxMasonryComponent, NgxMasonryDirective]
                },] },
    ];
    return NgxMasonryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LW1hc29ucnkuanMubWFwIiwic291cmNlcyI6WyJuZzovL25neC1tYXNvbnJ5L2xpYi9uZ3gtbWFzb25yeS5jb21wb25lbnQudHMiLCJuZzovL25neC1tYXNvbnJ5L2xpYi9uZ3gtbWFzb25yeS5kaXJlY3RpdmUudHMiLCJuZzovL25neC1tYXNvbnJ5L2xpYi9uZ3gtbWFzb25yeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBPbkluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBJbnB1dCxcbiAgT3V0cHV0LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIFBMQVRGT1JNX0lELFxuICBJbmplY3Rcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcbmxldCBpbWFnZXNMb2FkZWQ6IGFueTtcbmxldCBtYXNvbnJ5Q29uc3RydWN0b3I6IGFueTtcblxuaW1wb3J0IHsgTmd4TWFzb25yeU9wdGlvbnMgfSBmcm9tICcuL25neC1tYXNvbnJ5LW9wdGlvbnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdbbmd4LW1hc29ucnldLCBuZ3gtbWFzb25yeScsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIHN0eWxlczogW1xuICAgIGBcblx0XHQ6aG9zdCB7XG5cdFx0XHRkaXNwbGF5OiBibG9jaztcblx0XHR9XG5cdGBcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNvbnJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55LCBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmKSB7fVxuXG4gIHB1YmxpYyBfbXNucnk6IGFueTtcblxuICAvLyBJbnB1dHNcbiAgQElucHV0KCkgcHVibGljIG9wdGlvbnM6IE5neE1hc29ucnlPcHRpb25zO1xuICBASW5wdXQoKSBwdWJsaWMgdXNlSW1hZ2VzTG9hZGVkOiBCb29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIHVwZGF0ZUxheW91dDogQm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE91dHB1dHNcbiAgQE91dHB1dCgpIGxheW91dENvbXBsZXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcbiAgQE91dHB1dCgpIHJlbW92ZUNvbXBsZXRlOiBFdmVudEVtaXR0ZXI8YW55W10+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnlbXT4oKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy51c2VJbWFnZXNMb2FkZWQgJiYgaW1hZ2VzTG9hZGVkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGltYWdlc0xvYWRlZCA9IHJlcXVpcmUoJ2ltYWdlc2xvYWRlZCcpO1xuICAgIH1cblxuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpICYmIG1hc29ucnlDb25zdHJ1Y3RvciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBtYXNvbnJ5Q29uc3RydWN0b3IgPSByZXF1aXJlKCdtYXNvbnJ5LWxheW91dCcpO1xuICAgIH1cblxuICAgIC8vIENyZWF0ZSBtYXNvbnJ5IG9wdGlvbnMgb2JqZWN0XG4gICAgaWYgKCF0aGlzLm9wdGlvbnMpIHtcbiAgICAgIHRoaXMub3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIC8vIFNldCBkZWZhdWx0IGl0ZW1TZWxlY3RvclxuICAgIGlmICghdGhpcy5vcHRpb25zLml0ZW1TZWxlY3Rvcikge1xuICAgICAgdGhpcy5vcHRpb25zLml0ZW1TZWxlY3RvciA9ICdbbmd4TWFzb25yeUl0ZW1dLCBuZ3hNYXNvbnJ5SXRlbSc7XG4gICAgfVxuXG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIC8vIEluaXRpYWxpemUgTWFzb25yeVxuICAgICAgdGhpcy5fbXNucnkgPSBuZXcgbWFzb25yeUNvbnN0cnVjdG9yKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgdGhpcy5vcHRpb25zKTtcblxuICAgICAgLy8gQmluZCB0byBldmVudHNcbiAgICAgIHRoaXMuX21zbnJ5Lm9uKCdsYXlvdXRDb21wbGV0ZScsIChpdGVtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMubGF5b3V0Q29tcGxldGUuZW1pdChpdGVtcyk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX21zbnJ5Lm9uKCdyZW1vdmVDb21wbGV0ZScsIChpdGVtczogYW55KSA9PiB7XG4gICAgICAgIHRoaXMucmVtb3ZlQ29tcGxldGUuZW1pdChpdGVtcyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy8gb25seSB1cGRhdGUgbGF5b3V0IGlmIGl0J3Mgbm90IHRoZSBmaXJzdCBjaGFuZ2VcbiAgICBpZiAoY2hhbmdlcy51cGRhdGVMYXlvdXQpIHtcbiAgICAgIGlmICghY2hhbmdlcy51cGRhdGVMYXlvdXQuZmlyc3RDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5sYXlvdXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBpZiAodGhpcy5fbXNucnkpIHtcbiAgICAgIHRoaXMuX21zbnJ5LmRlc3Ryb3koKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbGF5b3V0KCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5fbXNucnkubGF5b3V0KCk7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgcmVsb2FkSXRlbXMoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLl9tc25yeS5yZWxvYWRJdGVtcygpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gcHVibGljIGFkZChlbGVtZW50OiBIVE1MRWxlbWVudCwgcHJlcGVuZDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIHB1YmxpYyBhZGQoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcbiAgICBsZXQgaXNGaXJzdEl0ZW0gPSBmYWxzZTtcblxuICAgIC8vIENoZWNrIGlmIGZpcnN0IGl0ZW1cbiAgICBpZiAodGhpcy5fbXNucnkuaXRlbXMubGVuZ3RoID09PSAwKSB7XG4gICAgICBpc0ZpcnN0SXRlbSA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudXNlSW1hZ2VzTG9hZGVkKSB7XG4gICAgICBpbWFnZXNMb2FkZWQoZWxlbWVudCwgKGluc3RhbmNlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXG4gICAgICAgIC8vIFRlbGwgTWFzb25yeSB0aGF0IGEgY2hpbGQgZWxlbWVudCBoYXMgYmVlbiBhZGRlZFxuICAgICAgICB0aGlzLl9tc25yeS5hcHBlbmRlZChlbGVtZW50KTtcblxuICAgICAgICAvLyBsYXlvdXQgaWYgZmlyc3QgaXRlbVxuICAgICAgICBpZiAoaXNGaXJzdEl0ZW0pIHtcbiAgICAgICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBUZWxsIE1hc29ucnkgdGhhdCBhIGNoaWxkIGVsZW1lbnQgaGFzIGJlZW4gYWRkZWRcbiAgICAgIHRoaXMuX21zbnJ5LmFwcGVuZGVkKGVsZW1lbnQpO1xuXG4gICAgICAvLyBsYXlvdXQgaWYgZmlyc3QgaXRlbVxuICAgICAgaWYgKGlzRmlyc3RJdGVtKSB7XG4gICAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHJlbW92ZShlbGVtZW50OiBIVE1MRWxlbWVudCkge1xuICAgIC8vIFRlbGwgTWFzb25yeSB0aGF0IGEgY2hpbGQgZWxlbWVudCBoYXMgYmVlbiByZW1vdmVkXG4gICAgdGhpcy5fbXNucnkucmVtb3ZlKGVsZW1lbnQpO1xuXG4gICAgLy8gTGF5b3V0IGl0ZW1zXG4gICAgdGhpcy5sYXlvdXQoKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRGlyZWN0aXZlLCBJbmplY3QsIEVsZW1lbnRSZWYsIGZvcndhcmRSZWYsIE9uRGVzdHJveSwgQWZ0ZXJWaWV3SW5pdCwgUExBVEZPUk1fSUQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmd4TWFzb25yeUNvbXBvbmVudCB9IGZyb20gJy4vbmd4LW1hc29ucnkuY29tcG9uZW50JztcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW50ZXJmYWNlIE11dGF0aW9uV2luZG93IGV4dGVuZHMgV2luZG93IHtcbiAgTXV0YXRpb25PYnNlcnZlcjogYW55O1xuICBXZWJLaXRNdXRhdGlvbk9ic2VydmVyOiBhbnk7XG59XG5cbmRlY2xhcmUgdmFyIHdpbmRvdzogTXV0YXRpb25XaW5kb3c7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hNYXNvbnJ5SXRlbV0sIG5neE1hc29ucnlJdGVtJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNvbnJ5RGlyZWN0aXZlIGltcGxlbWVudHMgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcbiAgICBASW5qZWN0KGZvcndhcmRSZWYoKCkgPT4gTmd4TWFzb25yeUNvbXBvbmVudCkpXG4gICAgcHJpdmF0ZSBfcGFyZW50OiBOZ3hNYXNvbnJ5Q29tcG9uZW50LFxuICAgIEBJbmplY3QoUExBVEZPUk1fSUQpIHByaXZhdGUgcGxhdGZvcm1JZDogYW55XG4gICkge31cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHRoaXMucGxhdGZvcm1JZCkpIHtcbiAgICAgIHRoaXMuX3BhcmVudC5hZGQodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICAgIHRoaXMud2F0Y2hGb3JIdG1sQ2hhbmdlcygpO1xuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmIChpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLnBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9wYXJlbnQucmVtb3ZlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIFdoZW4gSFRNTCBpbiBicmljayBjaGFuZ2VzIGRpbmFtaWNhbGx5LCBvYnNlcnZlIHRoYXQgYW5kIGNoYW5nZSBsYXlvdXQgKi9cbiAgcHJpdmF0ZSB3YXRjaEZvckh0bWxDaGFuZ2VzKCk6IHZvaWQge1xuICAgIE11dGF0aW9uT2JzZXJ2ZXIgPSB3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcblxuICAgIGlmIChNdXRhdGlvbk9ic2VydmVyKSB7XG4gICAgICAvKiogV2F0Y2ggZm9yIGFueSBjaGFuZ2VzIHRvIHN1YnRyZWUgKi9cbiAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihtdXRhdGlvbnMsIG9ic2VydmVyRnJvbUVsZW1lbnQpIHtcbiAgICAgICAgc2VsZi5fcGFyZW50LmxheW91dCgpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIGRlZmluZSB3aGF0IGVsZW1lbnQgc2hvdWxkIGJlIG9ic2VydmVkIGJ5IHRoZSBvYnNlcnZlclxuICAgICAgLy8gYW5kIHdoYXQgdHlwZXMgb2YgbXV0YXRpb25zIHRyaWdnZXIgdGhlIGNhbGxiYWNrXG4gICAgICBvYnNlcnZlci5vYnNlcnZlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwge1xuICAgICAgICBzdWJ0cmVlOiB0cnVlLFxuICAgICAgICBjaGlsZExpc3Q6IHRydWVcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neE1hc29ucnlDb21wb25lbnQgfSBmcm9tICcuL25neC1tYXNvbnJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOZ3hNYXNvbnJ5RGlyZWN0aXZlIH0gZnJvbSAnLi9uZ3gtbWFzb25yeS5kaXJlY3RpdmUnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXSxcbiAgZGVjbGFyYXRpb25zOiBbTmd4TWFzb25yeUNvbXBvbmVudCwgTmd4TWFzb25yeURpcmVjdGl2ZV0sXG4gIGV4cG9ydHM6IFtOZ3hNYXNvbnJ5Q29tcG9uZW50LCBOZ3hNYXNvbnJ5RGlyZWN0aXZlXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hNYXNvbnJ5TW9kdWxlIHt9XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBZ0JBLHFCQUFJLFlBQWlCLENBQUM7QUFDdEIscUJBQUksa0JBQXVCLENBQUM7O0lBZ0IxQiw2QkFBeUMsWUFBeUIsUUFBb0I7UUFBN0MsZUFBVSxHQUFWLFVBQVU7UUFBZSxhQUFRLEdBQVIsUUFBUSxDQUFZOytCQU0zQyxLQUFLOzRCQUNmLEtBQUs7OzhCQUdVLElBQUksWUFBWSxFQUFTOzhCQUN6QixJQUFJLFlBQVksRUFBUztLQVhpQjs7OztJQWExRixzQ0FBUTs7O0lBQVI7UUFBQSxpQkErQkM7UUE5QkMsSUFBSSxJQUFJLENBQUMsZUFBZSxJQUFJLFlBQVksS0FBSyxTQUFTLEVBQUU7WUFDdEQsWUFBWSxHQUFHLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztRQUVELElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUMxRSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUNoRDs7UUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztTQUNuQjs7UUFHRCxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7WUFDOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEdBQUcsa0NBQWtDLENBQUM7U0FDaEU7UUFFRCxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTs7WUFFdEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFHaEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsVUFBQyxLQUFVO2dCQUMxQyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNqQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsRUFBRSxVQUFDLEtBQVU7Z0JBQzFDLEtBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2pDLENBQUMsQ0FBQztTQUNKO0tBQ0Y7Ozs7O0lBRUQseUNBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCOztRQUVoQyxJQUFJLE9BQU8sa0JBQWU7WUFDeEIsSUFBSSxDQUFDLE9BQU8saUJBQWMsV0FBVyxFQUFFO2dCQUNyQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtTQUNGO0tBQ0Y7Ozs7SUFFRCx5Q0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQ3ZCO0tBQ0Y7Ozs7SUFFTSxvQ0FBTTs7Ozs7UUFDWCxVQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ3RCLENBQUMsQ0FBQzs7Ozs7SUFHRSx5Q0FBVzs7Ozs7UUFDaEIsVUFBVSxDQUFDO1lBQ1QsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUMzQixDQUFDLENBQUM7Ozs7OztJQUlFLGlDQUFHOzs7O2NBQUMsT0FBb0I7O1FBQzdCLHFCQUFJLFdBQVcsR0FBRyxLQUFLLENBQUM7O1FBR3hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNsQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBRUQsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLFlBQVksQ0FBQyxPQUFPLEVBQUUsVUFBQyxRQUFhO2dCQUNsQyxLQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7OztnQkFHakQsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7O2dCQUc5QixJQUFJLFdBQVcsRUFBRTtvQkFDZixLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7aUJBQ2Y7YUFDRixDQUFDLENBQUM7WUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDbEQ7YUFBTTs7WUFFTCxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzs7WUFHOUIsSUFBSSxXQUFXLEVBQUU7Z0JBQ2YsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7U0FDRjs7Ozs7O0lBR0ksb0NBQU07Ozs7Y0FBQyxPQUFvQjs7UUFFaEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7O1FBRzVCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQzs7O2dCQTVIakIsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLE1BQU0sRUFBRTt3QkFDTixpREFJRjtxQkFDQztpQkFDRjs7OztnREFFYyxNQUFNLFNBQUMsV0FBVztnQkF6Qi9CLFVBQVU7Ozs0QkE4QlQsS0FBSztvQ0FDTCxLQUFLO2lDQUNMLEtBQUs7bUNBR0wsTUFBTTttQ0FDTixNQUFNOzs4QkE1Q1Q7Ozs7Ozs7QUNBQTtJQWdCRSw2QkFDVSxVQUVBLFNBQ3FCO1FBSHJCLGFBQVEsR0FBUixRQUFRO1FBRVIsWUFBTyxHQUFQLE9BQU87UUFDYyxlQUFVLEdBQVYsVUFBVTtLQUNyQzs7OztJQUVKLDZDQUFlOzs7SUFBZjtRQUNFLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDOUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7U0FDNUI7S0FDRjs7OztJQUVELHlDQUFXOzs7SUFBWDtRQUNFLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7U0FDbEQ7S0FDRjs7Ozs7SUFHTyxpREFBbUI7Ozs7O1FBQ3pCLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsSUFBSSxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFFNUUsSUFBSSxnQkFBZ0IsRUFBRTs7OztZQUVwQixxQkFBTSxNQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLHFCQUFNLFFBQVEsR0FBRyxJQUFJLGdCQUFnQixDQUFDLFVBQVMsU0FBUyxFQUFFLG1CQUFtQjtnQkFDM0UsTUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN2QixDQUFDLENBQUM7OztZQUlILFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUU7Z0JBQzVDLE9BQU8sRUFBRSxJQUFJO2dCQUNiLFNBQVMsRUFBRSxJQUFJO2FBQ2hCLENBQUMsQ0FBQztTQUNKOzs7Z0JBekNKLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsa0NBQWtDO2lCQUM3Qzs7OztnQkFkMkIsVUFBVTtnQkFFN0IsbUJBQW1CLHVCQWdCdkIsTUFBTSxTQUFDLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQW1CLEdBQUEsQ0FBQztnREFFNUMsTUFBTSxTQUFDLFdBQVc7OzhCQXBCdkI7Ozs7Ozs7QUNBQTs7OztnQkFJQyxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFLEVBQUU7b0JBQ1gsWUFBWSxFQUFFLENBQUMsbUJBQW1CLEVBQUUsbUJBQW1CLENBQUM7b0JBQ3hELE9BQU8sRUFBRSxDQUFDLG1CQUFtQixFQUFFLG1CQUFtQixDQUFDO2lCQUNwRDs7MkJBUkQ7Ozs7Ozs7Ozs7Ozs7OzsifQ==

/***/ }),

/***/ "./node_modules/outlayer/item.js":
/*!***************************************!*\
  !*** ./node_modules/outlayer/item.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Outlayer Item
 */

( function( window, factory ) {
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js")
      ], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( EvEmitter, getSize ) {
'use strict';

// ----- helpers ----- //

function isEmptyObj( obj ) {
  for ( var prop in obj ) {
    return false;
  }
  prop = null;
  return true;
}

// -------------------------- CSS3 support -------------------------- //


var docElemStyle = document.documentElement.style;

var transitionProperty = typeof docElemStyle.transition == 'string' ?
  'transition' : 'WebkitTransition';
var transformProperty = typeof docElemStyle.transform == 'string' ?
  'transform' : 'WebkitTransform';

var transitionEndEvent = {
  WebkitTransition: 'webkitTransitionEnd',
  transition: 'transitionend'
}[ transitionProperty ];

// cache all vendor properties that could have vendor prefix
var vendorProperties = {
  transform: transformProperty,
  transition: transitionProperty,
  transitionDuration: transitionProperty + 'Duration',
  transitionProperty: transitionProperty + 'Property',
  transitionDelay: transitionProperty + 'Delay'
};

// -------------------------- Item -------------------------- //

function Item( element, layout ) {
  if ( !element ) {
    return;
  }

  this.element = element;
  // parent layout class, i.e. Masonry, Isotope, or Packery
  this.layout = layout;
  this.position = {
    x: 0,
    y: 0
  };

  this._create();
}

// inherit EvEmitter
var proto = Item.prototype = Object.create( EvEmitter.prototype );
proto.constructor = Item;

proto._create = function() {
  // transition objects
  this._transn = {
    ingProperties: {},
    clean: {},
    onEnd: {}
  };

  this.css({
    position: 'absolute'
  });
};

// trigger specified handler for event type
proto.handleEvent = function( event ) {
  var method = 'on' + event.type;
  if ( this[ method ] ) {
    this[ method ]( event );
  }
};

proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * apply CSS styles to element
 * @param {Object} style
 */
proto.css = function( style ) {
  var elemStyle = this.element.style;

  for ( var prop in style ) {
    // use vendor property if available
    var supportedProp = vendorProperties[ prop ] || prop;
    elemStyle[ supportedProp ] = style[ prop ];
  }
};

 // measure position, and sets it
proto.getPosition = function() {
  var style = getComputedStyle( this.element );
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  var xValue = style[ isOriginLeft ? 'left' : 'right' ];
  var yValue = style[ isOriginTop ? 'top' : 'bottom' ];
  var x = parseFloat( xValue );
  var y = parseFloat( yValue );
  // convert percent to pixels
  var layoutSize = this.layout.size;
  if ( xValue.indexOf('%') != -1 ) {
    x = ( x / 100 ) * layoutSize.width;
  }
  if ( yValue.indexOf('%') != -1 ) {
    y = ( y / 100 ) * layoutSize.height;
  }
  // clean up 'auto' or other non-integer values
  x = isNaN( x ) ? 0 : x;
  y = isNaN( y ) ? 0 : y;
  // remove padding from measurement
  x -= isOriginLeft ? layoutSize.paddingLeft : layoutSize.paddingRight;
  y -= isOriginTop ? layoutSize.paddingTop : layoutSize.paddingBottom;

  this.position.x = x;
  this.position.y = y;
};

// set settled position, apply padding
proto.layoutPosition = function() {
  var layoutSize = this.layout.size;
  var style = {};
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');

  // x
  var xPadding = isOriginLeft ? 'paddingLeft' : 'paddingRight';
  var xProperty = isOriginLeft ? 'left' : 'right';
  var xResetProperty = isOriginLeft ? 'right' : 'left';

  var x = this.position.x + layoutSize[ xPadding ];
  // set in percentage or pixels
  style[ xProperty ] = this.getXValue( x );
  // reset other property
  style[ xResetProperty ] = '';

  // y
  var yPadding = isOriginTop ? 'paddingTop' : 'paddingBottom';
  var yProperty = isOriginTop ? 'top' : 'bottom';
  var yResetProperty = isOriginTop ? 'bottom' : 'top';

  var y = this.position.y + layoutSize[ yPadding ];
  // set in percentage or pixels
  style[ yProperty ] = this.getYValue( y );
  // reset other property
  style[ yResetProperty ] = '';

  this.css( style );
  this.emitEvent( 'layout', [ this ] );
};

proto.getXValue = function( x ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && !isHorizontal ?
    ( ( x / this.layout.size.width ) * 100 ) + '%' : x + 'px';
};

proto.getYValue = function( y ) {
  var isHorizontal = this.layout._getOption('horizontal');
  return this.layout.options.percentPosition && isHorizontal ?
    ( ( y / this.layout.size.height ) * 100 ) + '%' : y + 'px';
};

proto._transitionTo = function( x, y ) {
  this.getPosition();
  // get current x & y from top/left
  var curX = this.position.x;
  var curY = this.position.y;

  var didNotMove = x == this.position.x && y == this.position.y;

  // save end position
  this.setPosition( x, y );

  // if did not move and not transitioning, just go to layout
  if ( didNotMove && !this.isTransitioning ) {
    this.layoutPosition();
    return;
  }

  var transX = x - curX;
  var transY = y - curY;
  var transitionStyle = {};
  transitionStyle.transform = this.getTranslate( transX, transY );

  this.transition({
    to: transitionStyle,
    onTransitionEnd: {
      transform: this.layoutPosition
    },
    isCleaning: true
  });
};

proto.getTranslate = function( x, y ) {
  // flip cooridinates if origin on right or bottom
  var isOriginLeft = this.layout._getOption('originLeft');
  var isOriginTop = this.layout._getOption('originTop');
  x = isOriginLeft ? x : -x;
  y = isOriginTop ? y : -y;
  return 'translate3d(' + x + 'px, ' + y + 'px, 0)';
};

// non transition + transform support
proto.goTo = function( x, y ) {
  this.setPosition( x, y );
  this.layoutPosition();
};

proto.moveTo = proto._transitionTo;

proto.setPosition = function( x, y ) {
  this.position.x = parseFloat( x );
  this.position.y = parseFloat( y );
};

// ----- transition ----- //

/**
 * @param {Object} style - CSS
 * @param {Function} onTransitionEnd
 */

// non transition, just trigger callback
proto._nonTransition = function( args ) {
  this.css( args.to );
  if ( args.isCleaning ) {
    this._removeStyles( args.to );
  }
  for ( var prop in args.onTransitionEnd ) {
    args.onTransitionEnd[ prop ].call( this );
  }
};

/**
 * proper transition
 * @param {Object} args - arguments
 *   @param {Object} to - style to transition to
 *   @param {Object} from - style to start transition from
 *   @param {Boolean} isCleaning - removes transition styles after transition
 *   @param {Function} onTransitionEnd - callback
 */
proto.transition = function( args ) {
  // redirect to nonTransition if no transition duration
  if ( !parseFloat( this.layout.options.transitionDuration ) ) {
    this._nonTransition( args );
    return;
  }

  var _transition = this._transn;
  // keep track of onTransitionEnd callback by css property
  for ( var prop in args.onTransitionEnd ) {
    _transition.onEnd[ prop ] = args.onTransitionEnd[ prop ];
  }
  // keep track of properties that are transitioning
  for ( prop in args.to ) {
    _transition.ingProperties[ prop ] = true;
    // keep track of properties to clean up when transition is done
    if ( args.isCleaning ) {
      _transition.clean[ prop ] = true;
    }
  }

  // set from styles
  if ( args.from ) {
    this.css( args.from );
    // force redraw. http://blog.alexmaccaw.com/css-transitions
    var h = this.element.offsetHeight;
    // hack for JSHint to hush about unused var
    h = null;
  }
  // enable transition
  this.enableTransition( args.to );
  // set styles that are transitioning
  this.css( args.to );

  this.isTransitioning = true;

};

// dash before all cap letters, including first for
// WebkitTransform => -webkit-transform
function toDashedAll( str ) {
  return str.replace( /([A-Z])/g, function( $1 ) {
    return '-' + $1.toLowerCase();
  });
}

var transitionProps = 'opacity,' + toDashedAll( transformProperty );

proto.enableTransition = function(/* style */) {
  // HACK changing transitionProperty during a transition
  // will cause transition to jump
  if ( this.isTransitioning ) {
    return;
  }

  // make `transition: foo, bar, baz` from style object
  // HACK un-comment this when enableTransition can work
  // while a transition is happening
  // var transitionValues = [];
  // for ( var prop in style ) {
  //   // dash-ify camelCased properties like WebkitTransition
  //   prop = vendorProperties[ prop ] || prop;
  //   transitionValues.push( toDashedAll( prop ) );
  // }
  // munge number to millisecond, to match stagger
  var duration = this.layout.options.transitionDuration;
  duration = typeof duration == 'number' ? duration + 'ms' : duration;
  // enable transition styles
  this.css({
    transitionProperty: transitionProps,
    transitionDuration: duration,
    transitionDelay: this.staggerDelay || 0
  });
  // listen for transition end event
  this.element.addEventListener( transitionEndEvent, this, false );
};

// ----- events ----- //

proto.onwebkitTransitionEnd = function( event ) {
  this.ontransitionend( event );
};

proto.onotransitionend = function( event ) {
  this.ontransitionend( event );
};

// properties that I munge to make my life easier
var dashedVendorProperties = {
  '-webkit-transform': 'transform'
};

proto.ontransitionend = function( event ) {
  // disregard bubbled events from children
  if ( event.target !== this.element ) {
    return;
  }
  var _transition = this._transn;
  // get property name of transitioned property, convert to prefix-free
  var propertyName = dashedVendorProperties[ event.propertyName ] || event.propertyName;

  // remove property that has completed transitioning
  delete _transition.ingProperties[ propertyName ];
  // check if any properties are still transitioning
  if ( isEmptyObj( _transition.ingProperties ) ) {
    // all properties have completed transitioning
    this.disableTransition();
  }
  // clean style
  if ( propertyName in _transition.clean ) {
    // clean up style
    this.element.style[ event.propertyName ] = '';
    delete _transition.clean[ propertyName ];
  }
  // trigger onTransitionEnd callback
  if ( propertyName in _transition.onEnd ) {
    var onTransitionEnd = _transition.onEnd[ propertyName ];
    onTransitionEnd.call( this );
    delete _transition.onEnd[ propertyName ];
  }

  this.emitEvent( 'transitionEnd', [ this ] );
};

proto.disableTransition = function() {
  this.removeTransitionStyles();
  this.element.removeEventListener( transitionEndEvent, this, false );
  this.isTransitioning = false;
};

/**
 * removes style property from element
 * @param {Object} style
**/
proto._removeStyles = function( style ) {
  // clean up transition styles
  var cleanStyle = {};
  for ( var prop in style ) {
    cleanStyle[ prop ] = '';
  }
  this.css( cleanStyle );
};

var cleanTransitionStyle = {
  transitionProperty: '',
  transitionDuration: '',
  transitionDelay: ''
};

proto.removeTransitionStyles = function() {
  // remove transition
  this.css( cleanTransitionStyle );
};

// ----- stagger ----- //

proto.stagger = function( delay ) {
  delay = isNaN( delay ) ? 0 : delay;
  this.staggerDelay = delay + 'ms';
};

// ----- show/hide/remove ----- //

// remove element from DOM
proto.removeElem = function() {
  this.element.parentNode.removeChild( this.element );
  // remove display: none
  this.css({ display: '' });
  this.emitEvent( 'remove', [ this ] );
};

proto.remove = function() {
  // just remove element if no transition support or no transition
  if ( !transitionProperty || !parseFloat( this.layout.options.transitionDuration ) ) {
    this.removeElem();
    return;
  }

  // start transition
  this.once( 'transitionEnd', function() {
    this.removeElem();
  });
  this.hide();
};

proto.reveal = function() {
  delete this.isHidden;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('visibleStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onRevealTransitionEnd;

  this.transition({
    from: options.hiddenStyle,
    to: options.visibleStyle,
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onRevealTransitionEnd = function() {
  // check if still visible
  // during transition, item may have been hidden
  if ( !this.isHidden ) {
    this.emitEvent('reveal');
  }
};

/**
 * get style property use for hide/reveal transition end
 * @param {String} styleProperty - hiddenStyle/visibleStyle
 * @returns {String}
 */
proto.getHideRevealTransitionEndProperty = function( styleProperty ) {
  var optionStyle = this.layout.options[ styleProperty ];
  // use opacity
  if ( optionStyle.opacity ) {
    return 'opacity';
  }
  // get first property
  for ( var prop in optionStyle ) {
    return prop;
  }
};

proto.hide = function() {
  // set flag
  this.isHidden = true;
  // remove display: none
  this.css({ display: '' });

  var options = this.layout.options;

  var onTransitionEnd = {};
  var transitionEndProperty = this.getHideRevealTransitionEndProperty('hiddenStyle');
  onTransitionEnd[ transitionEndProperty ] = this.onHideTransitionEnd;

  this.transition({
    from: options.visibleStyle,
    to: options.hiddenStyle,
    // keep hidden stuff hidden
    isCleaning: true,
    onTransitionEnd: onTransitionEnd
  });
};

proto.onHideTransitionEnd = function() {
  // check if still hidden
  // during transition, item may have been un-hidden
  if ( this.isHidden ) {
    this.css({ display: 'none' });
    this.emitEvent('hide');
  }
};

proto.destroy = function() {
  this.css({
    position: '',
    left: '',
    right: '',
    top: '',
    bottom: '',
    transition: '',
    transform: ''
  });
};

return Item;

}));


/***/ }),

/***/ "./node_modules/outlayer/outlayer.js":
/*!*******************************************!*\
  !*** ./node_modules/outlayer/outlayer.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * Outlayer v2.1.1
 * the brains and guts of a layout library
 * MIT license
 */

( function( window, factory ) {
  'use strict';
  // universal module definition
  /* jshint strict: false */ /* globals define, module, require */
  if ( true ) {
    // AMD - RequireJS
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [
        __webpack_require__(/*! ev-emitter/ev-emitter */ "./node_modules/ev-emitter/ev-emitter.js"),
        __webpack_require__(/*! get-size/get-size */ "./node_modules/get-size/get-size.js"),
        __webpack_require__(/*! fizzy-ui-utils/utils */ "./node_modules/fizzy-ui-utils/utils.js"),
        __webpack_require__(/*! ./item */ "./node_modules/outlayer/item.js")
      ], __WEBPACK_AMD_DEFINE_RESULT__ = (function( EvEmitter, getSize, utils, Item ) {
        return factory( window, EvEmitter, getSize, utils, Item);
      }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}

}( window, function factory( window, EvEmitter, getSize, utils, Item ) {
'use strict';

// ----- vars ----- //

var console = window.console;
var jQuery = window.jQuery;
var noop = function() {};

// -------------------------- Outlayer -------------------------- //

// globally unique identifiers
var GUID = 0;
// internal store of all Outlayer intances
var instances = {};


/**
 * @param {Element, String} element
 * @param {Object} options
 * @constructor
 */
function Outlayer( element, options ) {
  var queryElement = utils.getQueryElement( element );
  if ( !queryElement ) {
    if ( console ) {
      console.error( 'Bad element for ' + this.constructor.namespace +
        ': ' + ( queryElement || element ) );
    }
    return;
  }
  this.element = queryElement;
  // add jQuery
  if ( jQuery ) {
    this.$element = jQuery( this.element );
  }

  // options
  this.options = utils.extend( {}, this.constructor.defaults );
  this.option( options );

  // add id for Outlayer.getFromElement
  var id = ++GUID;
  this.element.outlayerGUID = id; // expando
  instances[ id ] = this; // associate via id

  // kick it off
  this._create();

  var isInitLayout = this._getOption('initLayout');
  if ( isInitLayout ) {
    this.layout();
  }
}

// settings are for internal use only
Outlayer.namespace = 'outlayer';
Outlayer.Item = Item;

// default options
Outlayer.defaults = {
  containerStyle: {
    position: 'relative'
  },
  initLayout: true,
  originLeft: true,
  originTop: true,
  resize: true,
  resizeContainer: true,
  // item options
  transitionDuration: '0.4s',
  hiddenStyle: {
    opacity: 0,
    transform: 'scale(0.001)'
  },
  visibleStyle: {
    opacity: 1,
    transform: 'scale(1)'
  }
};

var proto = Outlayer.prototype;
// inherit EvEmitter
utils.extend( proto, EvEmitter.prototype );

/**
 * set options
 * @param {Object} opts
 */
proto.option = function( opts ) {
  utils.extend( this.options, opts );
};

/**
 * get backwards compatible option value, check old name
 */
proto._getOption = function( option ) {
  var oldOption = this.constructor.compatOptions[ option ];
  return oldOption && this.options[ oldOption ] !== undefined ?
    this.options[ oldOption ] : this.options[ option ];
};

Outlayer.compatOptions = {
  // currentName: oldName
  initLayout: 'isInitLayout',
  horizontal: 'isHorizontal',
  layoutInstant: 'isLayoutInstant',
  originLeft: 'isOriginLeft',
  originTop: 'isOriginTop',
  resize: 'isResizeBound',
  resizeContainer: 'isResizingContainer'
};

proto._create = function() {
  // get items from children
  this.reloadItems();
  // elements that affect layout, but are not laid out
  this.stamps = [];
  this.stamp( this.options.stamp );
  // set container style
  utils.extend( this.element.style, this.options.containerStyle );

  // bind resize method
  var canBindResize = this._getOption('resize');
  if ( canBindResize ) {
    this.bindResize();
  }
};

// goes through all children again and gets bricks in proper order
proto.reloadItems = function() {
  // collection of item elements
  this.items = this._itemize( this.element.children );
};


/**
 * turn elements into Outlayer.Items to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - collection of new Outlayer Items
 */
proto._itemize = function( elems ) {

  var itemElems = this._filterFindItemElements( elems );
  var Item = this.constructor.Item;

  // create new Outlayer Items for collection
  var items = [];
  for ( var i=0; i < itemElems.length; i++ ) {
    var elem = itemElems[i];
    var item = new Item( elem, this );
    items.push( item );
  }

  return items;
};

/**
 * get item elements to be used in layout
 * @param {Array or NodeList or HTMLElement} elems
 * @returns {Array} items - item elements
 */
proto._filterFindItemElements = function( elems ) {
  return utils.filterFindElements( elems, this.options.itemSelector );
};

/**
 * getter method for getting item elements
 * @returns {Array} elems - collection of item elements
 */
proto.getItemElements = function() {
  return this.items.map( function( item ) {
    return item.element;
  });
};

// ----- init & layout ----- //

/**
 * lays out all items
 */
proto.layout = function() {
  this._resetLayout();
  this._manageStamps();

  // don't animate first layout
  var layoutInstant = this._getOption('layoutInstant');
  var isInstant = layoutInstant !== undefined ?
    layoutInstant : !this._isLayoutInited;
  this.layoutItems( this.items, isInstant );

  // flag for initalized
  this._isLayoutInited = true;
};

// _init is alias for layout
proto._init = proto.layout;

/**
 * logic before any new layout
 */
proto._resetLayout = function() {
  this.getSize();
};


proto.getSize = function() {
  this.size = getSize( this.element );
};

/**
 * get measurement from option, for columnWidth, rowHeight, gutter
 * if option is String -> get element from selector string, & get size of element
 * if option is Element -> get size of element
 * else use option as a number
 *
 * @param {String} measurement
 * @param {String} size - width or height
 * @private
 */
proto._getMeasurement = function( measurement, size ) {
  var option = this.options[ measurement ];
  var elem;
  if ( !option ) {
    // default to 0
    this[ measurement ] = 0;
  } else {
    // use option as an element
    if ( typeof option == 'string' ) {
      elem = this.element.querySelector( option );
    } else if ( option instanceof HTMLElement ) {
      elem = option;
    }
    // use size of element, if element
    this[ measurement ] = elem ? getSize( elem )[ size ] : option;
  }
};

/**
 * layout a collection of item elements
 * @api public
 */
proto.layoutItems = function( items, isInstant ) {
  items = this._getItemsForLayout( items );

  this._layoutItems( items, isInstant );

  this._postLayout();
};

/**
 * get the items to be laid out
 * you may want to skip over some items
 * @param {Array} items
 * @returns {Array} items
 */
proto._getItemsForLayout = function( items ) {
  return items.filter( function( item ) {
    return !item.isIgnored;
  });
};

/**
 * layout items
 * @param {Array} items
 * @param {Boolean} isInstant
 */
proto._layoutItems = function( items, isInstant ) {
  this._emitCompleteOnItems( 'layout', items );

  if ( !items || !items.length ) {
    // no items, emit event with empty array
    return;
  }

  var queue = [];

  items.forEach( function( item ) {
    // get x/y object from method
    var position = this._getItemLayoutPosition( item );
    // enqueue
    position.item = item;
    position.isInstant = isInstant || item.isLayoutInstant;
    queue.push( position );
  }, this );

  this._processLayoutQueue( queue );
};

/**
 * get item layout position
 * @param {Outlayer.Item} item
 * @returns {Object} x and y position
 */
proto._getItemLayoutPosition = function( /* item */ ) {
  return {
    x: 0,
    y: 0
  };
};

/**
 * iterate over array and position each item
 * Reason being - separating this logic prevents 'layout invalidation'
 * thx @paul_irish
 * @param {Array} queue
 */
proto._processLayoutQueue = function( queue ) {
  this.updateStagger();
  queue.forEach( function( obj, i ) {
    this._positionItem( obj.item, obj.x, obj.y, obj.isInstant, i );
  }, this );
};

// set stagger from option in milliseconds number
proto.updateStagger = function() {
  var stagger = this.options.stagger;
  if ( stagger === null || stagger === undefined ) {
    this.stagger = 0;
    return;
  }
  this.stagger = getMilliseconds( stagger );
  return this.stagger;
};

/**
 * Sets position of item in DOM
 * @param {Outlayer.Item} item
 * @param {Number} x - horizontal position
 * @param {Number} y - vertical position
 * @param {Boolean} isInstant - disables transitions
 */
proto._positionItem = function( item, x, y, isInstant, i ) {
  if ( isInstant ) {
    // if not transition, just set CSS
    item.goTo( x, y );
  } else {
    item.stagger( i * this.stagger );
    item.moveTo( x, y );
  }
};

/**
 * Any logic you want to do after each layout,
 * i.e. size the container
 */
proto._postLayout = function() {
  this.resizeContainer();
};

proto.resizeContainer = function() {
  var isResizingContainer = this._getOption('resizeContainer');
  if ( !isResizingContainer ) {
    return;
  }
  var size = this._getContainerSize();
  if ( size ) {
    this._setContainerMeasure( size.width, true );
    this._setContainerMeasure( size.height, false );
  }
};

/**
 * Sets width or height of container if returned
 * @returns {Object} size
 *   @param {Number} width
 *   @param {Number} height
 */
proto._getContainerSize = noop;

/**
 * @param {Number} measure - size of width or height
 * @param {Boolean} isWidth
 */
proto._setContainerMeasure = function( measure, isWidth ) {
  if ( measure === undefined ) {
    return;
  }

  var elemSize = this.size;
  // add padding and border width if border box
  if ( elemSize.isBorderBox ) {
    measure += isWidth ? elemSize.paddingLeft + elemSize.paddingRight +
      elemSize.borderLeftWidth + elemSize.borderRightWidth :
      elemSize.paddingBottom + elemSize.paddingTop +
      elemSize.borderTopWidth + elemSize.borderBottomWidth;
  }

  measure = Math.max( measure, 0 );
  this.element.style[ isWidth ? 'width' : 'height' ] = measure + 'px';
};

/**
 * emit eventComplete on a collection of items events
 * @param {String} eventName
 * @param {Array} items - Outlayer.Items
 */
proto._emitCompleteOnItems = function( eventName, items ) {
  var _this = this;
  function onComplete() {
    _this.dispatchEvent( eventName + 'Complete', null, [ items ] );
  }

  var count = items.length;
  if ( !items || !count ) {
    onComplete();
    return;
  }

  var doneCount = 0;
  function tick() {
    doneCount++;
    if ( doneCount == count ) {
      onComplete();
    }
  }

  // bind callback
  items.forEach( function( item ) {
    item.once( eventName, tick );
  });
};

/**
 * emits events via EvEmitter and jQuery events
 * @param {String} type - name of event
 * @param {Event} event - original event
 * @param {Array} args - extra arguments
 */
proto.dispatchEvent = function( type, event, args ) {
  // add original event to arguments
  var emitArgs = event ? [ event ].concat( args ) : args;
  this.emitEvent( type, emitArgs );

  if ( jQuery ) {
    // set this.$element
    this.$element = this.$element || jQuery( this.element );
    if ( event ) {
      // create jQuery event
      var $event = jQuery.Event( event );
      $event.type = type;
      this.$element.trigger( $event, args );
    } else {
      // just trigger with type if no event available
      this.$element.trigger( type, args );
    }
  }
};

// -------------------------- ignore & stamps -------------------------- //


/**
 * keep item in collection, but do not lay it out
 * ignored items do not get skipped in layout
 * @param {Element} elem
 */
proto.ignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    item.isIgnored = true;
  }
};

/**
 * return item to layout collection
 * @param {Element} elem
 */
proto.unignore = function( elem ) {
  var item = this.getItem( elem );
  if ( item ) {
    delete item.isIgnored;
  }
};

/**
 * adds elements to stamps
 * @param {NodeList, Array, Element, or String} elems
 */
proto.stamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ) {
    return;
  }

  this.stamps = this.stamps.concat( elems );
  // ignore
  elems.forEach( this.ignore, this );
};

/**
 * removes elements to stamps
 * @param {NodeList, Array, or Element} elems
 */
proto.unstamp = function( elems ) {
  elems = this._find( elems );
  if ( !elems ){
    return;
  }

  elems.forEach( function( elem ) {
    // filter out removed stamp elements
    utils.removeFrom( this.stamps, elem );
    this.unignore( elem );
  }, this );
};

/**
 * finds child elements
 * @param {NodeList, Array, Element, or String} elems
 * @returns {Array} elems
 */
proto._find = function( elems ) {
  if ( !elems ) {
    return;
  }
  // if string, use argument as selector string
  if ( typeof elems == 'string' ) {
    elems = this.element.querySelectorAll( elems );
  }
  elems = utils.makeArray( elems );
  return elems;
};

proto._manageStamps = function() {
  if ( !this.stamps || !this.stamps.length ) {
    return;
  }

  this._getBoundingRect();

  this.stamps.forEach( this._manageStamp, this );
};

// update boundingLeft / Top
proto._getBoundingRect = function() {
  // get bounding rect for container element
  var boundingRect = this.element.getBoundingClientRect();
  var size = this.size;
  this._boundingRect = {
    left: boundingRect.left + size.paddingLeft + size.borderLeftWidth,
    top: boundingRect.top + size.paddingTop + size.borderTopWidth,
    right: boundingRect.right - ( size.paddingRight + size.borderRightWidth ),
    bottom: boundingRect.bottom - ( size.paddingBottom + size.borderBottomWidth )
  };
};

/**
 * @param {Element} stamp
**/
proto._manageStamp = noop;

/**
 * get x/y position of element relative to container element
 * @param {Element} elem
 * @returns {Object} offset - has left, top, right, bottom
 */
proto._getElementOffset = function( elem ) {
  var boundingRect = elem.getBoundingClientRect();
  var thisRect = this._boundingRect;
  var size = getSize( elem );
  var offset = {
    left: boundingRect.left - thisRect.left - size.marginLeft,
    top: boundingRect.top - thisRect.top - size.marginTop,
    right: thisRect.right - boundingRect.right - size.marginRight,
    bottom: thisRect.bottom - boundingRect.bottom - size.marginBottom
  };
  return offset;
};

// -------------------------- resize -------------------------- //

// enable event handlers for listeners
// i.e. resize -> onresize
proto.handleEvent = utils.handleEvent;

/**
 * Bind layout to window resizing
 */
proto.bindResize = function() {
  window.addEventListener( 'resize', this );
  this.isResizeBound = true;
};

/**
 * Unbind layout to window resizing
 */
proto.unbindResize = function() {
  window.removeEventListener( 'resize', this );
  this.isResizeBound = false;
};

proto.onresize = function() {
  this.resize();
};

utils.debounceMethod( Outlayer, 'onresize', 100 );

proto.resize = function() {
  // don't trigger if size did not change
  // or if resize was unbound. See #9
  if ( !this.isResizeBound || !this.needsResizeLayout() ) {
    return;
  }

  this.layout();
};

/**
 * check if layout is needed post layout
 * @returns Boolean
 */
proto.needsResizeLayout = function() {
  var size = getSize( this.element );
  // check that this.size and size are there
  // IE8 triggers resize on body size change, so they might not be
  var hasSizes = this.size && size;
  return hasSizes && size.innerWidth !== this.size.innerWidth;
};

// -------------------------- methods -------------------------- //

/**
 * add items to Outlayer instance
 * @param {Array or NodeList or Element} elems
 * @returns {Array} items - Outlayer.Items
**/
proto.addItems = function( elems ) {
  var items = this._itemize( elems );
  // add items to collection
  if ( items.length ) {
    this.items = this.items.concat( items );
  }
  return items;
};

/**
 * Layout newly-appended item elements
 * @param {Array or NodeList or Element} elems
 */
proto.appended = function( elems ) {
  var items = this.addItems( elems );
  if ( !items.length ) {
    return;
  }
  // layout and reveal just the new items
  this.layoutItems( items, true );
  this.reveal( items );
};

/**
 * Layout prepended elements
 * @param {Array or NodeList or Element} elems
 */
proto.prepended = function( elems ) {
  var items = this._itemize( elems );
  if ( !items.length ) {
    return;
  }
  // add items to beginning of collection
  var previousItems = this.items.slice(0);
  this.items = items.concat( previousItems );
  // start new layout
  this._resetLayout();
  this._manageStamps();
  // layout new stuff without transition
  this.layoutItems( items, true );
  this.reveal( items );
  // layout previous items
  this.layoutItems( previousItems );
};

/**
 * reveal a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.reveal = function( items ) {
  this._emitCompleteOnItems( 'reveal', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.reveal();
  });
};

/**
 * hide a collection of items
 * @param {Array of Outlayer.Items} items
 */
proto.hide = function( items ) {
  this._emitCompleteOnItems( 'hide', items );
  if ( !items || !items.length ) {
    return;
  }
  var stagger = this.updateStagger();
  items.forEach( function( item, i ) {
    item.stagger( i * stagger );
    item.hide();
  });
};

/**
 * reveal item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.revealItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.reveal( items );
};

/**
 * hide item elements
 * @param {Array}, {Element}, {NodeList} items
 */
proto.hideItemElements = function( elems ) {
  var items = this.getItems( elems );
  this.hide( items );
};

/**
 * get Outlayer.Item, given an Element
 * @param {Element} elem
 * @param {Function} callback
 * @returns {Outlayer.Item} item
 */
proto.getItem = function( elem ) {
  // loop through items to get the one that matches
  for ( var i=0; i < this.items.length; i++ ) {
    var item = this.items[i];
    if ( item.element == elem ) {
      // return item
      return item;
    }
  }
};

/**
 * get collection of Outlayer.Items, given Elements
 * @param {Array} elems
 * @returns {Array} items - Outlayer.Items
 */
proto.getItems = function( elems ) {
  elems = utils.makeArray( elems );
  var items = [];
  elems.forEach( function( elem ) {
    var item = this.getItem( elem );
    if ( item ) {
      items.push( item );
    }
  }, this );

  return items;
};

/**
 * remove element(s) from instance and DOM
 * @param {Array or NodeList or Element} elems
 */
proto.remove = function( elems ) {
  var removeItems = this.getItems( elems );

  this._emitCompleteOnItems( 'remove', removeItems );

  // bail if no items to remove
  if ( !removeItems || !removeItems.length ) {
    return;
  }

  removeItems.forEach( function( item ) {
    item.remove();
    // remove item from collection
    utils.removeFrom( this.items, item );
  }, this );
};

// ----- destroy ----- //

// remove and disable Outlayer instance
proto.destroy = function() {
  // clean up dynamic styles
  var style = this.element.style;
  style.height = '';
  style.position = '';
  style.width = '';
  // destroy items
  this.items.forEach( function( item ) {
    item.destroy();
  });

  this.unbindResize();

  var id = this.element.outlayerGUID;
  delete instances[ id ]; // remove reference to instance by id
  delete this.element.outlayerGUID;
  // remove data for jQuery
  if ( jQuery ) {
    jQuery.removeData( this.element, this.constructor.namespace );
  }

};

// -------------------------- data -------------------------- //

/**
 * get Outlayer instance from element
 * @param {Element} elem
 * @returns {Outlayer}
 */
Outlayer.data = function( elem ) {
  elem = utils.getQueryElement( elem );
  var id = elem && elem.outlayerGUID;
  return id && instances[ id ];
};


// -------------------------- create Outlayer class -------------------------- //

/**
 * create a layout class
 * @param {String} namespace
 */
Outlayer.create = function( namespace, options ) {
  // sub-class Outlayer
  var Layout = subclass( Outlayer );
  // apply new options and compatOptions
  Layout.defaults = utils.extend( {}, Outlayer.defaults );
  utils.extend( Layout.defaults, options );
  Layout.compatOptions = utils.extend( {}, Outlayer.compatOptions  );

  Layout.namespace = namespace;

  Layout.data = Outlayer.data;

  // sub-class Item
  Layout.Item = subclass( Item );

  // -------------------------- declarative -------------------------- //

  utils.htmlInit( Layout, namespace );

  // -------------------------- jQuery bridge -------------------------- //

  // make into jQuery plugin
  if ( jQuery && jQuery.bridget ) {
    jQuery.bridget( namespace, Layout );
  }

  return Layout;
};

function subclass( Parent ) {
  function SubClass() {
    Parent.apply( this, arguments );
  }

  SubClass.prototype = Object.create( Parent.prototype );
  SubClass.prototype.constructor = SubClass;

  return SubClass;
}

// ----- helpers ----- //

// how many milliseconds are in each unit
var msUnits = {
  ms: 1,
  s: 1000
};

// munge time-like parameter into millisecond number
// '0.4s' -> 40
function getMilliseconds( time ) {
  if ( typeof time == 'number' ) {
    return time;
  }
  var matches = time.match( /(^\d*\.?\d*)(\w*)/ );
  var num = matches && matches[1];
  var unit = matches && matches[2];
  if ( !num.length ) {
    return 0;
  }
  num = parseFloat( num );
  var mult = msUnits[ unit ] || 1;
  return num * mult;
}

// ----- fin ----- //

// back in global
Outlayer.Item = Item;

return Outlayer;

}));


/***/ }),

/***/ "./src/app/extras/account-setting/account-setting.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/extras/account-setting/account-setting.component.ts ***!
  \*********************************************************************/
/*! exports provided: AccountSettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountSettingComponent", function() { return AccountSettingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountSettingComponent = /** @class */ (function () {
    function AccountSettingComponent() {
    }
    AccountSettingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./account-setting.html */ "./src/app/extras/account-setting/account-setting.html")
        }),
        __metadata("design:paramtypes", [])
    ], AccountSettingComponent);
    return AccountSettingComponent;
}());



/***/ }),

/***/ "./src/app/extras/account-setting/account-setting.html":
/*!*************************************************************!*\
  !*** ./src/app/extras/account-setting/account-setting.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"page-title\">\r\n\t\t<h4>Account Setting</h4>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t<div class=\"widget-profile-1 card\">\r\n\t\t\t\t\t\t<div class=\"profile border bottom\">\r\n\t\t\t\t\t\t\t<img class=\"mrg-top-30\" src=\"assets/images/others/img-10.jpg\" alt=\"\">\r\n\t\t\t\t\t\t\t<h4 class=\"mrg-top-20 no-mrg-btm text-semibold\">Victoria Clayton</h4>\r\n\t\t\t\t\t\t\t<p>UI/UX Designer</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"pdd-horizon-30 pdd-vertical-20\">\r\n\t\t\t\t\t\t\t<h5 class=\"text-semibold mrg-btm-5\">About</h5>\r\n\t\t\t\t\t\t\t<p>It looks like Sandpeople did this, all right. Look, here are Gaffi sticks, Bantha tracks. It's just...I never heard of them.</p>\r\n\t\t\t\t\t\t\t<div class=\"mrg-top-30 text-center\">\r\n\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-inline\">\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-facebook btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-twitter btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t<li class=\"list-inline-item no-pdd-horizon\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-google-plus btn-icon btn-rounded\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-md-8\">\t\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">General Info</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10 text-dark\"> <b>Name</b></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" value=\"Victoria Clayton\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10 text-dark\"> <b>Email</b></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">victoria93@gmail.com</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10 text-dark\"> <b>Avatar</b></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t\t\t<label for=\"img-upload\" class=\"pointer\">\r\n\t\t\t\t\t\t\t\t            <img src=\"assets/images/others/img-10.jpg\" width=\"117\" alt=\"\">\r\n\t\t\t\t\t\t\t\t            <span class=\"btn btn-default display-block no-mrg-btm\">Choose file</span>\r\n\t\t\t\t\t\t\t\t            <input class=\"d-none\" type=\"file\" name=\"uploadedimages0\" multiple=\"\" id=\"img-upload\">\r\n\t\t\t\t\t\t\t            </label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10 text-dark\"> <b>Location</b></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">New York, United State</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-3\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10 text-dark\"> <b>Status</b></p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"status online mrg-top-10\"></span>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"mrg-left-10\">Available</span>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Conneted Social Network</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn-facebook border-radius-4 inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10 lh-2-5 display-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-facebook\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"font-size-16 mrg-left-10 text-dark text-bold\">Facebook</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 text-right\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t<span>https://www.facebook.com/profile</span>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-xs no-mrg-btm mrg-left-10 border-radius-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn-google-plus border-radius-4 inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10 lh-2-5 display-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-google\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"font-size-16 mrg-left-10 text-dark text-bold\">Google+</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 text-right\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t<span>https://www.plus.google.com/profile</span>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-xs no-mrg-btm mrg-left-10 border-radius-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn-twitter border-radius-4 inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10 lh-2-5 display-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-twitter\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"font-size-16 mrg-left-10 text-dark text-bold\">Twitter</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 text-right\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t<span>https://www.twitter.com/profile</span>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-xs no-mrg-btm mrg-left-10 border-radius-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn-dribbble border-radius-4 inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10 lh-2-5 display-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-dribbble\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"font-size-16 mrg-left-10 text-dark text-bold\">Dribbble</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 text-right\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t<span>https://www.dribbble.com/profile</span>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-xs no-mrg-btm mrg-left-10 border-radius-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-4\">\r\n\t\t\t\t\t\t\t\t\t<span class=\"btn-linkedin border-radius-4 inline-block\">\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"pdd-horizon-10 lh-2-5 display-block\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-linkedin\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"font-size-16 mrg-left-10 text-dark text-bold\">Linkedin</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-8 text-right\">\r\n\t\t\t\t\t\t\t\t\t<p class=\"mrg-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t<span>https://www.linkedin.com/profile</span>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-danger btn-inverse btn-xs no-mrg-btm mrg-left-10 border-radius-4\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-ban\"></i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-footer border top\">\r\n\t\t\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn btn-primary\">Add</a>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"card\">\r\n\t\t\t\t\t\t<div class=\"card-heading border bottom\">\r\n\t\t\t\t\t\t\t<h4 class=\"card-title\">Authentication</h4>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-block\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-info\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"thumb-img pdd-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-user font-size-30\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"text-dark font-size-16\">Everyone can look me up</b>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>A Jedi can feel the Force flowing through him. You mean it controls your actions</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 text-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-checkbox toggle-success checkbox-inline toggle-sm mrg-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"toggle1\" id=\"toggle1\" checked>\r\n\t\t\t\t\t\t\t\t\t    <label for=\"toggle1\"></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-info\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"thumb-img pdd-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-mobile font-size-30\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"text-dark font-size-16\">Everyone can contact me</b>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>When we heard about Alderaan, we were afraid that you were</p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 text-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-checkbox toggle-success checkbox-inline toggle-sm mrg-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"toggle2\" id=\"toggle2\">\r\n\t\t\t\t\t\t\t\t\t    <label for=\"toggle2\"></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<hr>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-10\">\r\n\t\t\t\t\t\t\t\t\t<ul class=\"list-unstyled list-info\">\r\n\t\t\t\t\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"thumb-img pdd-top-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"ti-location-pin font-size-30\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"info\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<b class=\"text-dark font-size-16\">Show my location</b>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p> I said, all systems have been alerted to your presence, sir. </p>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-2 text-right\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"toggle-checkbox toggle-success checkbox-inline toggle-sm mrg-top-15\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"checkbox\" name=\"toggle3\" id=\"toggle3\" checked>\r\n\t\t\t\t\t\t\t\t\t    <label for=\"toggle3\"></label>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\t\t\t\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\t\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/extras/extras.modules.ts":
/*!******************************************!*\
  !*** ./src/app/extras/extras.modules.ts ***!
  \******************************************/
/*! exports provided: ExtrasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasModule", function() { return ExtrasModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _extras_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extras.routing */ "./src/app/extras/extras.routing.ts");
/* harmony import */ var ng2_sticky_kit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-sticky-kit */ "./node_modules/ng2-sticky-kit/ng2-sticky-kit.es5.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-scroll-to */ "./node_modules/ng2-scroll-to/index.js");
/* harmony import */ var ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-masonry */ "./node_modules/ngx-masonry/fesm5/ngx-masonry.js");
/* harmony import */ var _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./account-setting/account-setting.component */ "./src/app/extras/account-setting/account-setting.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/extras/invoice/invoice.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/extras/faq/faq.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/extras/gallery/gallery.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// Extras Component




var ExtrasModule = /** @class */ (function () {
    function ExtrasModule() {
    }
    ExtrasModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(_extras_routing__WEBPACK_IMPORTED_MODULE_3__["ExtrasRoutes"]),
                ng2_sticky_kit__WEBPACK_IMPORTED_MODULE_4__["StickyModule"],
                ngx_masonry__WEBPACK_IMPORTED_MODULE_6__["NgxMasonryModule"],
                ng2_scroll_to__WEBPACK_IMPORTED_MODULE_5__["ScrollToModule"].forRoot()
            ],
            declarations: [
                _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_7__["AccountSettingComponent"],
                _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_8__["InvoiceComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_9__["FAQComponent"],
                _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_10__["GalleryComponent"]
            ]
        })
    ], ExtrasModule);
    return ExtrasModule;
}());



/***/ }),

/***/ "./src/app/extras/extras.routing.ts":
/*!******************************************!*\
  !*** ./src/app/extras/extras.routing.ts ***!
  \******************************************/
/*! exports provided: ExtrasRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExtrasRoutes", function() { return ExtrasRoutes; });
/* harmony import */ var _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-setting/account-setting.component */ "./src/app/extras/account-setting/account-setting.component.ts");
/* harmony import */ var _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice/invoice.component */ "./src/app/extras/invoice/invoice.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/extras/faq/faq.component.ts");
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ "./src/app/extras/gallery/gallery.component.ts");
//Extras Common Components




var ExtrasRoutes = [
    {
        path: '',
        children: [
            {
                path: 'account-setting',
                component: _account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_0__["AccountSettingComponent"],
                data: {
                    title: 'Account Setting'
                }
            },
            {
                path: 'invoice',
                component: _invoice_invoice_component__WEBPACK_IMPORTED_MODULE_1__["InvoiceComponent"],
                data: {
                    title: 'Invoice'
                }
            },
            {
                path: 'faq',
                component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_2__["FAQComponent"],
                data: {
                    title: 'FAQ'
                }
            },
            {
                path: 'gallery',
                component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__["GalleryComponent"],
                data: {
                    title: 'Gallery'
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/extras/faq/faq.component.ts":
/*!*********************************************!*\
  !*** ./src/app/extras/faq/faq.component.ts ***!
  \*********************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FAQComponent = /** @class */ (function () {
    function FAQComponent() {
    }
    FAQComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./faq.html */ "./src/app/extras/faq/faq.html")
        }),
        __metadata("design:paramtypes", [])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/extras/faq/faq.html":
/*!*************************************!*\
  !*** ./src/app/extras/faq/faq.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"page-title\">\r\n        <h4>FAQ</h4>\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <sticky [sticky-offset-top]=\"80\">\r\n                    <a href=\"#ask-1\" scrollTo class=\"card mrg-btm-15 scroll-to\">\r\n                        <div class=\"card-block padding-25\">\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <span class=\"thumb-img pdd-top-10\">\r\n                                            <i class=\"ti-help-alt text-primary font-size-30\"></i>\r\n                                        </span>\r\n                                    <div class=\"info\">\r\n                                        <b class=\"text-dark font-size-18\">General Question</b>\r\n                                        <p class=\"no-mrg-btm \">New Comer? Start with the basic</p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#ask-2\" scrollTo class=\"card mrg-btm-15 scroll-to\">\r\n                        <div class=\"card-block padding-25\">\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <span class=\"thumb-img pdd-top-10\">\r\n                                            <i class=\"ti-money text-success font-size-30\"></i>\r\n                                        </span>\r\n                                    <div class=\"info\">\r\n                                        <b class=\"text-dark font-size-18\">Buy & Sell</b>\r\n                                        <p class=\"no-mrg-btm\">Know more about Buy & Sell</p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#ask-3\" scrollTo class=\"card mrg-btm-15 scroll-to\">\r\n                        <div class=\"card-block padding-25\">\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <span class=\"thumb-img pdd-top-10\">\r\n                                            <i class=\"ti-comments-smiley text-info font-size-30\"></i>\r\n                                        </span>\r\n                                    <div class=\"info\">\r\n                                        <b class=\"text-dark font-size-18\">About Services</b>\r\n                                        <p class=\"no-mrg-btm\">Know more about our features</p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#ask-4\" scrollTo class=\"card mrg-btm-15 scroll-to\">\r\n                        <div class=\"card-block padding-25\">\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <span class=\"thumb-img pdd-top-10\">\r\n                                            <i class=\"ti-shield text-warning font-size-30\"></i>\r\n                                        </span>\r\n                                    <div class=\"info\">\r\n                                        <b class=\"text-dark font-size-18\">Privacy & Policy</b>\r\n                                        <p class=\"no-mrg-btm\">We take our security strict</p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </a>\r\n                    <a href=\"#ask-5\" scrollTo class=\"card mrg-btm-15 scroll-to\">\r\n                        <div class=\"card-block padding-25\">\r\n                            <ul class=\"list-unstyled list-info\">\r\n                                <li>\r\n                                    <span class=\"thumb-img pdd-top-10\">\r\n                                            <i class=\"ti-truck text-danger font-size-30\"></i>\r\n                                        </span>\r\n                                    <div class=\"info\">\r\n                                        <b class=\"text-dark font-size-18\">Shipping</b>\r\n                                        <p class=\"no-mrg-btm\">Know more about shipping</p>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </a>\r\n                </sticky>\r\n            </div>\r\n            <div class=\"col-md-8\">\r\n                <div class=\"card\" id=\"ask-1\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-unstyled list-info\">\r\n                            <li>\r\n                                <span class=\"thumb-img pdd-top-10\">\r\n                                        <i class=\"ti-help-alt text-primary font-size-30\"></i>\r\n                                    </span>\r\n                                <div class=\"info\">\r\n                                    <b class=\"text-dark font-size-22\">General Question</b>\r\n                                    <p class=\"no-mrg-btm \">New Comer? Start with the basic</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"mrg-top-30\">\r\n                            <div id=\"accordion-ask-1\" class=\"accordion border-less\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-ask-1\" href=\"#collapse-ask-1\">\r\n                                                    <span>Lando Calrissian</span>\r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-1\" class=\"collapse panel-collapse show\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-1\" href=\"#collapse-ask-2\">\r\n                                                    <span>Grand Moff Tarkin</span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-2\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-1\" href=\"#collapse-ask-3\">\r\n                                                    <span>Mon Calamari </span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-3\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" id=\"ask-2\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-unstyled list-info\">\r\n                            <li>\r\n                                <span class=\"thumb-img pdd-top-10\">\r\n                                        <i class=\"ti-money text-success font-size-30\"></i>\r\n                                    </span>\r\n                                <div class=\"info\">\r\n                                    <b class=\"text-dark font-size-22\">Buy & Sell</b>\r\n                                    <p class=\"no-mrg-btm\">Know more about Buy & Sell</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"mrg-top-30\">\r\n                            <div id=\"accordion-ask-2\" class=\"accordion border-less\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-ask-2\" href=\"#collapse-ask-4\">\r\n                                                    <span>Lando Calrissian</span>\r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-4\" class=\"collapse panel-collapse show\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-2\" href=\"#collapse-ask-5\">\r\n                                                    <span>Grand Moff Tarkin</span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-5\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-2\" href=\"#collapse-ask-6\">\r\n                                                    <span>Mon Calamari </span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-6\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" id=\"ask-3\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-unstyled list-info\">\r\n                            <li>\r\n                                <span class=\"thumb-img pdd-top-10\">\r\n                                        <i class=\"ti-comments-smiley text-info font-size-30\"></i>\r\n                                    </span>\r\n                                <div class=\"info\">\r\n                                    <b class=\"text-dark font-size-22\">About Services</b>\r\n                                    <p class=\"no-mrg-btm\">Know more about our features</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"mrg-top-30\">\r\n                            <div id=\"accordion-ask-3\" class=\"accordion border-less\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-ask-3\" href=\"#collapse-ask-7\">\r\n                                                    <span>Lando Calrissian</span>\r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-7\" class=\"collapse panel-collapse show\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-3\" href=\"#collapse-ask-8\">\r\n                                                    <span>Grand Moff Tarkin</span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-8\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-3\" href=\"#collapse-ask-9\">\r\n                                                    <span>Mon Calamari </span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-9\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" id=\"ask-4\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-unstyled list-info\">\r\n                            <li>\r\n                                <span class=\"thumb-img pdd-top-10\">\r\n                                        <i class=\"ti-shield text-warning font-size-30\"></i>\r\n                                    </span>\r\n                                <div class=\"info\">\r\n                                    <b class=\"text-dark font-size-22\">Privacy & Policy</b>\r\n                                    <p class=\"no-mrg-btm\">We take our security strict</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"mrg-top-30\">\r\n                            <div id=\"accordion-ask-4\" class=\"accordion border-less\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-ask-4\" href=\"#collapse-ask-10\">\r\n                                                    <span>Lando Calrissian</span>\r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-10\" class=\"collapse panel-collapse show\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-4\" href=\"#collapse-ask-11\">\r\n                                                    <span>Grand Moff Tarkin</span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-11\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-4\" href=\"#collapse-ask-12\">\r\n                                                    <span>Mon Calamari </span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-12\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" id=\"ask-5\">\r\n                    <div class=\"card-block\">\r\n                        <ul class=\"list-unstyled list-info\">\r\n                            <li>\r\n                                <span class=\"thumb-img pdd-top-10\">\r\n                                        <i class=\"ti-truck text-danger font-size-30\"></i>\r\n                                    </span>\r\n                                <div class=\"info\">\r\n                                    <b class=\"text-dark font-size-22\">Shipping</b>\r\n                                    <p class=\"no-mrg-btm\">Know more about shipping</p>\r\n                                </div>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"mrg-top-30\">\r\n                            <div id=\"accordion-ask-5\" class=\"accordion border-less\" role=\"tablist\" aria-multiselectable=\"true\">\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a class=\"collapsed\" data-toggle=\"collapse\" data-parent=\"#accordion-ask-5\" href=\"#collapse-ask-13\">\r\n                                                    <span>Lando Calrissian</span>\r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-13\" class=\"collapse panel-collapse show\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Holding her is dangerous. If word of this gets out, it could generate sympathy for the Rebellion in the senate. I have traced the Rebel spies to her. Now she is my only link to find their secret base! She'll die before she tells you anything. Leave that to me. Send a distress signal and then inform the senate that all aboard were killed! Lord Vader, the battle station plans are not aboard this ship! And no transmissions were made.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-5\" href=\"#collapse-ask-14\">\r\n                                                    <span>Grand Moff Tarkin</span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-14\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                How did I get into this mess? I really don't know how. We seem to be made to suffer. It's our lot in life. I've got to rest before I fall apart. My joints are almost frozen. What a desolate place this is. Where are you going? Well, I'm not going that way. It's much too rocky. This way is much easier. What makes you think there are settlements over there? Don't get technical with me. What mission? What are you talking about?\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"panel panel-default\">\r\n                                    <div class=\"panel-heading\" role=\"tab\">\r\n                                        <h4 class=\"panel-title\">\r\n                                                <a data-toggle=\"collapse\" data-parent=\"#accordion-ask-5\" href=\"#collapse-ask-15\">\r\n                                                    <span>Mon Calamari </span> \r\n                                                    <i class=\"icon ti-arrow-circle-down\"></i> \r\n                                                </a>\r\n                                            </h4>\r\n                                    </div>\r\n                                    <div id=\"collapse-ask-15\" class=\"collapse panel-collapse\">\r\n                                        <div class=\"panel-body\">\r\n                                            <p>\r\n                                                Help me, Obi-Wan Kenobi. You're my only hope. What's this? What is what?!? He asked you a question... What is that? Help me, Obi-Wan Kenobi. You're my only hope. Help me, Obi-Wan Kenobi. You're my only hope. Oh, he says it's nothing, sir. Merely a malfunction. Old data. Pay it no mind. Who is she? She's beautiful. I'm afraid I'm not quite sure, sir. Help me, Obi-Wan Kenobi... I think she was a passenger on our last voyage.\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/extras/gallery/gallery.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/extras/gallery/gallery.component.ts ***!
  \*****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
        this.masonryItems = [
            {
                src: 'assets/images/others/img-13.jpg',
                w: 700, h: 500,
                'title': 'New Seat',
                'date': '27/6/2017'
            },
            {
                src: 'assets/images/others/img-14.jpg',
                w: 700, h: 1000,
                'title': 'Time For Sweet',
                'date': '25/6/2017'
            },
            {
                src: 'assets/images/others/img-15.jpg',
                w: 700, h: 500,
                'title': 'The Higlight',
                'date': '17/6/2017'
            },
            {
                src: 'assets/images/others/img-16.jpg',
                w: 700, h: 1000,
                'title': 'Corner Art',
                'date': '1/6/2017'
            },
            {
                src: 'assets/images/others/img-17.jpg',
                w: 700, h: 500,
                'title': 'Stay tall',
                'date': '29/5/2017'
            },
            {
                src: 'assets/images/others/img-18.jpg',
                w: 700, h: 500,
                'title': 'Rooftop alone',
                'date': '23/5/2017'
            },
            {
                src: 'assets/images/others/img-19.jpg',
                w: 700, h: 500,
                'title': 'Macarons',
                'date': '21/5/2017'
            },
            {
                src: 'assets/images/others/img-20.jpg',
                w: 700, h: 500,
                'title': 'Take a break',
                'date': '20/5/2017'
            },
            {
                src: 'assets/images/others/img-21.jpg',
                w: 700, h: 1000,
                'title': 'Stay Slim',
                'date': '18/5/2017'
            },
            {
                src: 'assets/images/others/img-22.jpg',
                w: 700, h: 500,
                'title': 'Summer 2016',
                'date': '17/5/2017'
            },
            {
                src: 'assets/images/others/img-23.jpg',
                w: 700, h: 1000,
                'title': 'Yummy',
                'date': '16/5/2017'
            },
            {
                src: 'assets/images/others/img-24.jpg',
                w: 700, h: 500,
                'title': 'My sliky hair',
                'date': '15/5/2017'
            },
            {
                src: 'assets/images/others/img-25.jpg',
                w: 700, h: 500,
                'title': 'High Tea',
                'date': '11/5/2017'
            },
            {
                src: 'assets/images/others/img-26.jpg',
                w: 700, h: 500,
                'title': 'Amazing hand',
                'date': '10/5/2017'
            },
            {
                src: 'assets/images/others/img-27.jpg',
                w: 700, h: 500,
                'title': 'Lonely breakfast',
                'date': '9/5/2017'
            },
            {
                src: 'assets/images/others/img-28.jpg',
                w: 700, h: 500,
                'title': 'So nature',
                'date': '8/5/2017'
            }
        ];
    }
    GalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./gallery.html */ "./src/app/extras/gallery/gallery.html")
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/extras/gallery/gallery.html":
/*!*********************************************!*\
  !*** ./src/app/extras/gallery/gallery.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<div class=\"card\">\r\n\t\t\t\t<div class=\"card-heading\">\r\n\t\t\t\t\t<h4 class=\"card-title inline-block\">18 Images</h4>\r\n\t\t\t\t\t<div class=\"pull-right mrg-top-10\">\r\n\t\t\t\t\t\t<span class=\"pdd-right-10\">Sort by : </span>\r\n\t\t\t\t\t\t<ul class=\"list-unstyled list-inline inline-block\">\r\n\t\t\t\t\t\t\t<li class=\"list-inline-item pdd-right-10\">\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"text-gray text-semibold active\">Name</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"list-inline-item pdd-right-10\">\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"text-gray text-semibold\">Date</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li class=\"list-inline-item pdd-right-10\">\r\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"text-gray text-semibold\">Most Viewed</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"card-body\">\r\n\r\n\t\t\t\t\t<ngx-masonry class=\"row\" [useImagesLoaded]=\"true\">\r\n\t\t\t\t\t\t<ngxMasonryItem class=\"col-md-3 masonry-brick masonry-item mrg-btm-30\" *ngFor=\"let item of masonryItems\">\r\n\t\t\t\t\t\t\t<div class=\"gallery-item\">\r\n                                <img class=\"img-fluid\" [src]=\"item.src\" alt=\"\">\r\n                                <div class=\"overlay\">\r\n                                    <div class=\"overlay-content\">\r\n                                        <div class=\"inline-block\">\r\n                                            <h4 class=\"caption-title\">{{ item.title }}</h4>\r\n                                            <span class=\"caption-date\">{{ item.date }}</span>\r\n                                        </div>\r\n                                        <div class=\"inline-block pull-right pdd-top-20 font-size-16\">\r\n                                            <i class=\"ti-heart text-white\"></i>\r\n                                            <span class=\"text-white\">18</span>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\t\t\t\t\t\t</ngxMasonryItem>\r\n\t\t\t\t\t</ngx-masonry>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\t\t\t\r\n</div>"

/***/ }),

/***/ "./src/app/extras/invoice/invoice.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/extras/invoice/invoice.component.ts ***!
  \*****************************************************/
/*! exports provided: InvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoiceComponent", function() { return InvoiceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvoiceComponent = /** @class */ (function () {
    function InvoiceComponent() {
    }
    InvoiceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./invoice.html */ "./src/app/extras/invoice/invoice.html")
        }),
        __metadata("design:paramtypes", [])
    ], InvoiceComponent);
    return InvoiceComponent;
}());



/***/ }),

/***/ "./src/app/extras/invoice/invoice.html":
/*!*********************************************!*\
  !*** ./src/app/extras/invoice/invoice.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"card\">\r\n\t\t\t<div class=\"pdd-vertical-5 pdd-horizon-10 border bottom print-invisible\">\r\n\t\t\t\t<ul class=\"list-unstyle list-inline text-right\">\r\n\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"btn text-gray text-hover display-block padding-10 no-mrg-btm\" onclick=\"window.print();\">\r\n\t\t\t\t\t\t\t<i class=\"ti-printer text-info pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<b>Print</b>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"list-inline-item\">\r\n\t\t\t\t\t\t<a href=\"\" class=\"text-gray text-hover display-block padding-10 no-mrg-btm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-file-pdf-o text-danger pdd-right-5\"></i>\r\n\t\t\t\t\t\t\t<b>Export PDF</b>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"pdd-horizon-30\">\r\n\t\t\t\t\t<div class=\"mrg-top-15\">\t\r\n\t\t\t\t\t\t<div class=\"inline-block\">\r\n\t\t\t\t\t\t\t<img class=\"img-responsive\" src=\"assets/images/logo/logo.png\" alt=\"\">\r\n\t\t\t\t\t\t\t<address class=\"pdd-left-10 mrg-top-20\">\r\n\t\t\t\t\t\t\t\t<b class=\"text-dark\">Espire, Inc.</b><br>\r\n\t\t\t\t\t\t\t\t<span>9498 Harvard Street</span><br>\r\n\t\t\t\t\t\t\t\t<span>Fairfield, Chicago Town 06824</span><br>\r\n\t\t\t\t\t\t\t\t<abbr class=\"text-dark\" title=\"Phone\">Phone:</abbr>\r\n\t\t\t\t\t\t\t\t<span>(123) 456-7890</span>\r\n\t\t\t\t\t\t\t</address>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"pull-right\">\r\n\t\t\t\t\t\t\t<h2>INVOICE</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-20\">\r\n\t\t\t\t\t\t<div class=\"col-md-9 col-sm-9\">\r\n\t\t\t\t\t\t\t<h3 class=\"pdd-left-10 mrg-top-10\">Invoice To:</h3>\r\n\t\t\t\t\t\t\t<address class=\"pdd-left-10 mrg-top-10\">\r\n\t\t\t\t\t\t\t\t<b class=\"text-dark\">Eastern Holdings.</b><br>\r\n\t\t\t\t\t\t\t\t<span>8626 Maiden Dr. </span><br>\r\n\t\t\t\t\t\t\t\t<span>Niagara Falls, New York 14304</span>\r\n\t\t\t\t\t\t\t</address>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-3 col-sm-3\">\r\n\t\t\t\t\t\t\t<div class=\"mrg-top-80\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-dark text-uppercase inline-block\"><b>Invoice No :</b></div>\r\n\t\t\t\t\t\t\t\t<div class=\"pull-right\">#1668</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t<div class=\"text-dark text-uppercase inline-block\"><b>Date :</b></div>\r\n\t\t\t\t\t\t\t\t<div class=\"pull-right\">25/6/2017</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row mrg-top-20\">\r\n\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t<div class=\"table-overflow\">\r\n\t\t\t\t\t\t\t\t<table class=\"table table-hover\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t\t<th></th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Items</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Quantity</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th>Price</th>\r\n\t\t\t\t\t\t\t\t\t\t\t<th class=\"text-right\">Total</th>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Asus Zenfone 3 Zoom ZE553KL Dual Sim (4GB, 64GB)</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>$450.00</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">$900.00</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td>2</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>HP Pavilion 15-au103TX 15.6˝ Laptop Red</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>$550.00</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">$550.00</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\t\r\n\t\t\t\t\t\t\t\t\t\t\t<td>3</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>Canon EOS 77D</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>1</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>$875.00</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td class=\"text-right\">$875.00</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row mrg-top-30\">\r\n\t\t                        <div class=\"col-md-12\">\r\n\t\t                        \t<div class=\"pull-right text-right\">\r\n                                    \t<p>Sub - Total amount: $2,325</p>\r\n                                    \t<p>vat (10%) : $232 </p>\r\n                                    \t<hr>\r\n                                    \t<h3><b>Total :</b> $2,557</h3>\r\n                                \t</div>\r\n\t\t                        </div>\r\n\t\t                    </div>\r\n\t\t                    <div class=\"row mrg-top-30\">\r\n\t\t                        <div class=\"col-md-12\">\r\n\t\t                        \t<div class=\"border top bottom pdd-vertical-20\">\r\n\t\t                        \t\t<p class=\"text-opacity\"><small>In exceptional circumstances, Financial Services can provide an urgent manually processed special cheque. Note, however, that urgent special cheques should be requested only on an emergency basis as manually produced cheques involve duplication of effort and considerable staff resources. Requests need to be supported by a letter explaining the circumstances to justify the special cheque payment.</small></p>\r\n\t\t                        \t</div>\t\r\n\t\t                        </div>\r\n\t\t                    </div>  \r\n\t\t                    <div class=\"row mrg-vertical-20\">\r\n\t\t                    \t<div class=\"col-md-6\">\r\n\t\t                    \t\t<img class=\"img-responsive text-opacity mrg-top-5\" width=\"100\" src=\"assets/images/logo/logo.png\" alt=\"\">\r\n\t\t                    \t</div>\r\n\t\t                    \t<div class=\"col-md-6 text-right\">\r\n\t\t                    \t\t<small><b>Phone:</b> (123) 456-7890</small>\r\n\t\t                    \t\t<br>\r\n\t\t                    \t\t<small>support@themenate.com</small>\r\n\t\t                    \t</div>\r\n\t\t                    </div>  \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\t\t\t\r\n</div>"

/***/ })

}]);
//# sourceMappingURL=extras-extras-modules.js.map