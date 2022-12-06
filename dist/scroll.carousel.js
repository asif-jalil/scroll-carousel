/*!
 * 
 * scroll-carousel - 1.2.0
 * Responsive scroll slider
 *
 * https://asif-jalil.github.io/scroll-carousel-website
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("ScrollCarousel", [], factory);
	else if(typeof exports === 'object')
		exports["ScrollCarousel"] = factory();
	else
		root["ScrollCarousel"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/EvEmitter.js":
/*!*****************************!*\
  !*** ./src/js/EvEmitter.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EvEmitter; }
/* harmony export */ });
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function EvEmitter() {}
var proto = EvEmitter.prototype;
proto.on = function (eventName, listener) {
  if (!eventName || !listener) return this;

  // set events hash
  var events = this._events = this._events || {};
  // set listeners array
  var listeners = events[eventName] = events[eventName] || [];
  // only add once
  if (!listeners.includes(listener)) {
    listeners.push(listener);
  }
  return this;
};
proto.once = function (eventName, listener) {
  if (!eventName || !listener) return this;

  // add event
  this.on(eventName, listener);
  // set once flag
  // set onceEvents hash
  var onceEvents = this._onceEvents = this._onceEvents || {};
  // set onceListeners object
  var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {};
  // set flag
  onceListeners[listener] = true;
  return this;
};
proto.off = function (eventName, listener) {
  var listeners = this._events && this._events[eventName];
  if (!listeners || !listeners.length) return this;
  var index = listeners.indexOf(listener);
  if (index != -1) {
    listeners.splice(index, 1);
  }
  return this;
};
proto.emitEvent = function (eventName, args) {
  var listeners = this._events && this._events[eventName];
  if (!listeners || !listeners.length) return this;

  // copy over to avoid interference if .off() in listener
  listeners = listeners.slice(0);
  args = args || [];
  // once stuff
  var onceListeners = this._onceEvents && this._onceEvents[eventName];
  var _iterator = _createForOfIteratorHelper(listeners),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var listener = _step.value;
      var isOnce = onceListeners && onceListeners[listener];
      if (isOnce) {
        // remove listener
        // remove before trigger to prevent recursion
        this.off(eventName, listener);
        // unset once flag
        delete onceListeners[listener];
      }
      // trigger listener
      listener.apply(this, args);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return this;
};
proto.allOff = function () {
  delete this._events;
  delete this._onceEvents;
  return this;
};

/***/ }),

/***/ "./src/js/scroll.carousel.const.js":
/*!*****************************************!*\
  !*** ./src/js/scroll.carousel.const.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LTR": function() { return /* binding */ LTR; },
/* harmony export */   "RTL": function() { return /* binding */ RTL; }
/* harmony export */ });
var RTL = 'rtl';
var LTR = 'ltr';

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "docReady": function() { return /* binding */ docReady; },
/* harmony export */   "duplicateElems": function() { return /* binding */ duplicateElems; },
/* harmony export */   "filterFindElements": function() { return /* binding */ filterFindElements; },
/* harmony export */   "getQueryElement": function() { return /* binding */ getQueryElement; },
/* harmony export */   "htmlInit": function() { return /* binding */ htmlInit; },
/* harmony export */   "isScrolledIntoView": function() { return /* binding */ isScrolledIntoView; },
/* harmony export */   "makeArray": function() { return /* binding */ makeArray; },
/* harmony export */   "sanitizer": function() { return /* binding */ sanitizer; },
/* harmony export */   "toDashed": function() { return /* binding */ toDashed; }
/* harmony export */ });
/* harmony import */ var _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll.carousel.const */ "./src/js/scroll.carousel.const.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


/**
 * check an element, node, array, object is into view or not
 *
 * @param {[Node, Element]} el
 * - single element, selected node, an array or a object
 *
 * @return {Boolean} - Boolean
 */
function isScrolledIntoView(el) {
  if (!el) {
    return false;
  }
  var rect = el.getBoundingClientRect();
  var windowHeight = window.innerHeight || document.documentElement.clientHeight;
  var windowWidth = window.innerWidth || document.documentElement.clientWidth;
  var vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  var horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}

// ----- getQueryElement ----- //

// use element as selector string
function getQueryElement(elem) {
  if (typeof elem == 'string') {
    return document.querySelector(elem);
  }
  return elem;
}

// ----- filterFindElements ----- //
function filterFindElements(elems, selector) {
  // make array of elems
  elems = makeArray(elems);
  return elems
  // check that elem is an actual element
  .filter(function (elem) {
    return elem instanceof HTMLElement;
  }).reduce(function (scElems, elem) {
    var _scElems;
    // add elem of no selector
    if (!selector) {
      scElems.push(elem);
      return scElems;
    }
    // filter & find items if we have a selector
    // filter
    if (elem.matches(selector)) {
      scElems.push(elem);
    }
    // find children
    var childElems = elem.querySelectorAll(selector);
    // concat childElems to filterFound array
    scElems = (_scElems = scElems).concat.apply(_scElems, _toConsumableArray(childElems));
    return scElems;
  }, []);
}

// ----- makeArray ----- //

// turn element or NodeList into an array
function makeArray(obj) {
  // use object if already an array
  if (Array.isArray(obj)) return obj;

  // return empty array if undefined or null
  if (obj === null || obj === undefined) return [];
  var isArrayLike = _typeof(obj) == 'object' && typeof obj.length == 'number';
  // convert nodeList to array
  if (isArrayLike) return _toConsumableArray(obj);

  // array of single index
  return [obj];
}

// ----- docReady ----- //

function docReady(onDocReady) {
  var readyState = document.readyState;
  if (readyState == 'complete' || readyState == 'interactive') {
    // do async to allow for other scripts to run.
    setTimeout(onDocReady);
  } else {
    document.addEventListener('DOMContentLoaded', onDocReady);
  }
}

// ----- htmlInit ----- //

// source: http://bit.ly/3oYLusc
function toDashed(str) {
  return str.replace(/(.)([A-Z])/g, function (match, $1, $2) {
    return $1 + '-' + $2;
  }).toLowerCase();
}

// allow user to initialize classes via [data-namespace] or .js-namespace class
// htmlInit( Widget, 'widgetName' )
// options are parsed from data-namespace-options
function htmlInit(WidgetClass, namespace) {
  docReady(function () {
    var dashedNamespace = toDashed(namespace);
    var dataAttr = 'data-' + dashedNamespace;
    var dataAttrElems = document.querySelectorAll("[".concat(dataAttr, "]"));
    _toConsumableArray(dataAttrElems).forEach(function (elem) {
      var attr = elem.getAttribute(dataAttr);
      var options;
      try {
        options = attr && JSON.parse(attr);
      } catch (error) {
        // log error, do not initialize
        if (console) {
          console.error("Error parsing ".concat(dataAttr, " on ").concat(elem.className, ": ").concat(error));
        }
        return;
      }
      // initialize
      new WidgetClass(elem, options);
    });
  });
}

/**
 * Duplicate a node
 *
 * @param {Array} elems
 * @return {Array} array of element
 *
 */
function duplicateElems(elems) {
  return elems.map(function (node) {
    return node.cloneNode(true);
  });
}

// option validation
/**
 *
 * @param {Object} options
 * @returns {Object} Same object of param with sanitization
 */
function sanitizer(options) {
  if (Object.keys(options).includes('speed') && !Number(options.speed)) options.speed = 7;
  if (Number(options.speed) <= 0) options.speed = 1;
  if (Object.keys(options).includes('margin') && !Number(options.margin) && Number(options.margin) !== 0) options.margin = 10;
  if (Object.keys(options).includes('direction')) options.direction = options.direction.toLowerCase();
  if (Object.keys(options).includes('direction') && options.direction !== _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_0__.RTL && options.direction !== _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_0__.LTR) options.direction = _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_0__.RTL;
  if (Object.keys(options).includes('autoplaySpeed') && !Number(options.autoplaySpeed)) options.autoplaySpeed = 5;
  if (Number(options.autoplaySpeed) <= 0) options.autoplaySpeed = 1;
  return options;
}

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!***********************************!*\
  !*** ./src/js/scroll.carousel.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll.carousel.const */ "./src/js/scroll.carousel.const.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
/* harmony import */ var _EvEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EvEmitter */ "./src/js/EvEmitter.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





// globally unique identifiers
var GUID = 0;
// internal store of all ScrollCarousel instances
var instances = {};

/**
 * Representing the Scroll Carousel
 * @constructor
 * @param {[Node, Element, string]} element - Target element where
 * @param {ScrollCarousel.defaults} options - Configuration options of the carousel
 */
function ScrollCarousel(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var queryElement = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getQueryElement)(element);
  if (!queryElement) {
    if (console) console.error("Bad element for Scroll Carousel: ".concat(queryElement || element));
    return;
  }
  this.element = queryElement;

  // do not initialize twice on same element
  if (this.element.scrollCarouselGUID) {
    var instance = instances[this.element.scrollCarouselGUID];
    if (instance) instance.option(options);
    return instance;
  }

  // baseOption will be used for destroy method and reinit method
  this.baseOption = options;
  // options
  this.options = _objectSpread({}, this.constructor.defaults);
  // validated options
  var sanitizedOptions = (0,_util__WEBPACK_IMPORTED_MODULE_2__.sanitizer)(options);
  // merge options with prototype
  this.option(sanitizedOptions);

  // kick things off
  this._create();
}

// default options
ScrollCarousel.defaults = {
  // movement speed of the carousel
  speed: 7,
  // handle the speed according to acceleration
  smartSpeed: false,
  // margin between two slides
  margin: 10,
  // slide will play auto
  autoplay: false,
  // speed control for autoplay
  autoplaySpeed: 5,
  // select slide with class name which you want to select for carousel.
  // other element will behave as simple
  slideSelector: null,
  // moving direction of the slides
  direction: _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.RTL
};
var proto = ScrollCarousel.prototype;
// inherit EventEmitter
Object.assign(proto, _EvEmitter__WEBPACK_IMPORTED_MODULE_3__["default"].prototype);

// start creating the carousel
proto._create = function () {
  // add id for ScrollCarousel.data
  var id = this.guid = ++GUID;
  this.element.scrollCarouselGUID = id; // expando
  instances[id] = this; // associate via id

  // create viewport
  this._createViewport();

  // create slider
  this._createSlider();

  // add listeners from on option
  for (var eventName in this.options.on) {
    var listener = this.options.on[eventName];
    this.on(eventName, listener);
  }

  // add listeners from on option
  this.activate();
};

// assign default option with user input option
proto.option = function (opts) {
  Object.assign(this.options, opts);
};

// main mechanism of Scroll Carousel
proto.activate = function () {
  var _this$slider,
    _this = this;
  if (this.isActive) return;
  this.isActive = true;
  this.translate = 0;
  this.displacement = 0;
  this.isScrolling = true;
  this.prevPosition = document.body.scrollTop || document.documentElement.scrollTop;

  // baseElems will be used for destroy method
  this.baseElems = (0,_util__WEBPACK_IMPORTED_MODULE_2__.makeArray)(this.element.children);

  // move initial slide elements so they can be loaded as slides
  var slideElems = this._filterFindSlideElements(this.element.children);
  this.slideElems = this._makeSlides(slideElems);

  // for ltr direction reverse the elements like rtl mode
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.LTR) {
    this.slideElems = this.slideElems.reverse();
  }

  // duplicate the slide array
  var duplicateSlideElems = (0,_util__WEBPACK_IMPORTED_MODULE_2__.duplicateElems)(this.slideElems);
  (_this$slider = this.slider).append.apply(_this$slider, _toConsumableArray(this.slideElems).concat(_toConsumableArray(duplicateSlideElems)));
  this.viewport.append(this.slider);
  this.element.append(this.viewport);

  // kick for ltr support
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.LTR) {
    this._supportLtr();
  }
  if (this.options.autoplay) {
    this._autoplay();
  }
  this.emitEvent('ready');

  // transform function call on scroll
  window.addEventListener('scroll', function () {
    return _this._transform();
  });
};

// run interval for autoplay
proto._autoplay = function () {
  var _this2 = this;
  // autoplay will set an interval. in every interval,
  // we transform the slider. the interval
  // will be removed when destroy method fired
  this.interval = setInterval(function () {
    _this2._transform();
  }, 10);
};

// transform the slider
proto._transform = function () {
  if (!(0,_util__WEBPACK_IMPORTED_MODULE_2__.isScrolledIntoView)(this.element)) return;
  if (this.options.autoplay) {
    this._setIsScrolling();
  }
  if (!this.options.smartSpeed) {
    this._calcRegularSpeed();
  } else {
    this._calcSmartSpeed();
  }
  this.emitEvent('move', [this.progress]);
};

// calculate speed without smart speed
proto._calcRegularSpeed = function () {
  var rect = this.slider.getBoundingClientRect();
  this.slider.style.transform = "translateX(".concat(this.translate, "px)");
  var speed = this.isScrolling ? this.options.speed : 1.2;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.RTL) this.translate -= speed;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.LTR) this.translate += speed;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.RTL && this.translate <= -rect.width / 2) this.translate = 0;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.LTR && this.translate >= 0) this.translate = -rect.width / 2;

  // progress is in percent. used to scroll event emit
  this.progress = 100 * -this.translate / rect.width * 2;
};

// calculate smart speed
proto._calcSmartSpeed = function () {
  var documentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  this.displacement -= this.isScrolling ? Math.abs(this.prevPosition - documentScrollTop) : 1.2;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.LTR && this.displacement < 0) {
    this.displacement = 50 / (this.options.speed * 10 / 5.5e3 % 50);
  }
  var translateBasic = this.displacement / 5.5e3 * (this.options.speed * 10) % 50;
  // progress is in percent. used to scroll event emit
  this.progress = -translateBasic * 2;
  var translate;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.RTL) translate = translateBasic;
  if (this.options.direction === _scroll_carousel_const__WEBPACK_IMPORTED_MODULE_1__.LTR) translate = -translateBasic;
  this.slider.style.transform = "translateX(".concat(translate, "%)");
  this.prevPosition = documentScrollTop;
};

// initial kick for ltr direction
proto._supportLtr = function () {
  var rect = this.slider.getBoundingClientRect();

  // calculate initial translate for regular speed
  this.translate = -rect.width + Math.min(document.documentElement.clientWidth, window.innerWidth);

  // calculate initial displacement for smartSpeed
  var translateInPercent = 100 * this.translate / rect.width;
  this.displacement = -translateInPercent / (this.options.speed * 10 / 5.5e3 % 50);
  if (this.options.smartSpeed) {
    this.slider.style.transform = "translateX(".concat(translateInPercent, "%)");
  } else {
    this.slider.style.transform = "translateX(".concat(this.translate, "px)");
  }
};

// check if the document is scrolling or not
proto._setIsScrolling = function () {
  var top = document.body.scrollTop || document.documentElement.scrollTop;
  this.isScrolling = true;
  if (this.prevPosition === top) {
    this.isScrolling = false;
    return;
  }

  // for smartSpeed the prevPosition will be set from _calcSmartSpeed function
  if (!this.options.smartSpeed) this.prevPosition = top;
};

// every node will be in sc-slide
proto._makeSlide = function (elem) {
  var slideElem = document.createElement('div');
  slideElem.style.marginRight = this.options.margin + 'px';
  slideElem.className = 'sc-slide';
  this.slideElem = slideElem;
  this.slideElem.append(elem);
  return this.slideElem;
};

// full array of node
proto._makeSlides = function (elems) {
  var _this3 = this;
  return elems.map(function (elem) {
    return _this3._makeSlide(elem);
  });
};

// slider positions the slide
proto._createSlider = function () {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'scroll-carousel-slider';
  this.slider = slider;
};

// slider will be in a viewport and it will transform
proto._createViewport = function () {
  this.viewport = document.createElement('div');
  this.viewport.className = 'scroll-carousel-viewport';
};

// filtering elements if the element child structure is too much complex (specially for slideSelector option)
proto._filterFindSlideElements = function (elems) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_2__.filterFindElements)(elems, this.options.slideSelector);
};

// ============================== METHOD ==============================

proto.destroy = function () {
  var _this$element;
  if (!this.isActive) return;
  this.viewport.remove();
  (_this$element = this.element).append.apply(_this$element, _toConsumableArray(this.baseElems));

  // set flags
  this.isActive = false;
  // clear the interval
  clearInterval(this.interval);
  window.removeEventListener('scroll', this);
  this.emitEvent('destroy');
  this.allOff();
  delete this.element.scrollCarouselGUID;
  delete instances[this.guid];
};

// Re initialize the carousel after destroy
proto.reinit = function () {
  return new ScrollCarousel(this.element, this.baseOption);
};

// ============================== DATA ATTRIBUTE ==============================

/**
 * get Scroll Carousel instance from element
 * @param {[Node, Element, String]} elem - element or selector string
 * @returns {ScrollCarousel} - Scroll Carousel instance
 */
ScrollCarousel.data = function (elem) {
  elem = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getQueryElement)(elem);
  if (elem) return instances[elem.scrollCarouselGUID];
};

// initialize with data attribute from here
(0,_util__WEBPACK_IMPORTED_MODULE_2__.htmlInit)(ScrollCarousel, 'carousel');
/* harmony default export */ __webpack_exports__["default"] = (ScrollCarousel);
}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});