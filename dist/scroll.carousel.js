(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["scroll-carousel"] = factory();
	else
		root["scroll-carousel"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/core.js":
/*!************************!*\
  !*** ./src/js/core.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollCarousel": function() { return /* binding */ ScrollCarousel; }
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util */ "./src/js/util.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ScrollCarousel(element) {
  this.element = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getQueryElement)(element);

  // options
  this.options = _objectSpread({}, this.constructor.defaults);
  this.option(this.options);

  // kick things off
  this._create();
}

// default options
ScrollCarousel.defaults = {
  speed: 0.055
};

// hash of methods triggered on _create()
ScrollCarousel.create = {};
var proto = ScrollCarousel.prototype;
proto._create = function () {
  // create viewport
  this._createViewport();

  // create slider
  this._createSlider();

  // add listeners from on option
  this.activate();
};

/**
 * set options
 * @param {Object} opts - options to extend
 */
proto.option = function (opts) {
  Object.assign(this.options, opts);
};
proto.activate = function () {
  var _this$slider,
    _this = this;
  if (this.isActive) return;
  this.isActive = true;
  this._translate = 0;

  // move initial cell elements so they can be loaded as cells
  var slideElems = this._filterFindSlideElements(this.element.children);
  this.cellElems = this._makeCells(slideElems);
  var duplicateCellElems = (0,_util__WEBPACK_IMPORTED_MODULE_0__.duplicateElems)(this.cellElems);
  (_this$slider = this.slider).append.apply(_this$slider, _toConsumableArray(this.cellElems).concat(_toConsumableArray(duplicateCellElems)));
  this.viewport.append(this.slider);
  this.element.append(this.viewport);

  // transform function call on scroll
  window.addEventListener('scroll', function () {
    return _this._transform();
  });
};
proto._makeCells = function (elems) {
  var _this2 = this;
  return elems.map(function (el) {
    return _this2._makeCell(el);
  });
};
proto._makeCell = function (elem) {
  var cellElem = document.createElement('div');
  cellElem.className = 'sc-cell';
  this.cellElem = cellElem;
  this.cellElem.append(elem);
  return this.cellElem;
};

// to transform the slider
proto._transform = function () {
  if ((0,_util__WEBPACK_IMPORTED_MODULE_0__.isScrolledIntoView)(this.element)) {
    this.slider.style.transform = "translateX(".concat(this._translate, "%)");
    this._translate -= this.options.speed;
    if (this._translate <= -50) {
      this._translate = 0;
    }
  }
};

// slider positions the slide
proto._createSlider = function () {
  // slider element does all the positioning
  var slider = document.createElement('div');
  slider.className = 'scroll-carousel-slider';
  this.slider = slider;
};
proto._createViewport = function () {
  this.viewport = document.createElement('div');
  this.viewport.className = 'scroll-carousel-viewport';
};
proto._filterFindSlideElements = function (elems) {
  return (0,_util__WEBPACK_IMPORTED_MODULE_0__.filterFindElements)(elems, this.options.slideSelector);
};

// ----- isScrolledIntoView ----- //

/***/ }),

/***/ "./src/js/util.js":
/*!************************!*\
  !*** ./src/js/util.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "duplicateElems": function() { return /* binding */ duplicateElems; },
/* harmony export */   "filterFindElements": function() { return /* binding */ filterFindElements; },
/* harmony export */   "getQueryElement": function() { return /* binding */ getQueryElement; },
/* harmony export */   "isScrolledIntoView": function() { return /* binding */ isScrolledIntoView; },
/* harmony export */   "makeArray": function() { return /* binding */ makeArray; }
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
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
function duplicateElems(elems) {
  return elems.map(function (node) {
    return node.cloneNode(true);
  });
}

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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/core.js");

window.ScrollCarousel = _core__WEBPACK_IMPORTED_MODULE_0__.ScrollCarousel;
}();
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
!function() {
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

}();
__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=scroll.carousel.js.map