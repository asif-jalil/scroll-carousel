import '../scss/main.scss';
import { LTR, RTL } from './scroll.carousel.const';
import {
  duplicateElems,
  filterFindElements,
  getQueryElement,
  htmlInit,
  isScrolledIntoView,
  makeArray,
  sanitizer
} from './util';
import EvEmitter from './EvEmitter';

// globally unique identifiers
let GUID = 0;
// internal store of all ScrollCarousel instances
let instances = {};

/**
 * Representing the Scroll Carousel
 * @constructor
 * @param {[Node, Element, string]} element - Target element where
 * @param {ScrollCarousel.defaults} options - Configuration options of the carousel
 */
function ScrollCarousel(element, options = {}) {
  let queryElement = getQueryElement(element);
  if (!queryElement) {
    if (console) console.error(`Bad element for Scroll Carousel: ${queryElement || element}`);
    return;
  }
  this.element = queryElement;

  // do not initialize twice on same element
  if (this.element.scrollCarouselGUID) {
    let instance = instances[this.element.scrollCarouselGUID];
    if (instance) instance.option(options);
    return instance;
  }

  // baseOption will be used for destroy method and reinit method
  this.baseOption = options;
  // options
  this.options = { ...this.constructor.defaults };
  // validated options
  const sanitizedOptions = sanitizer(options);
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
  direction: RTL
};

let proto = ScrollCarousel.prototype;
// inherit EventEmitter
Object.assign(proto, EvEmitter.prototype);

// start creating the carousel
proto._create = function () {
  // add id for ScrollCarousel.data
  let id = (this.guid = ++GUID);
  this.element.scrollCarouselGUID = id; // expando
  instances[id] = this; // associate via id

  // create viewport
  this._createViewport();

  // create slider
  this._createSlider();

  // add listeners from on option
  for (let eventName in this.options.on) {
    let listener = this.options.on[eventName];
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
  if (this.isActive) return;

  this.isActive = true;
  this.translate = 0;
  this.displacement = 0;
  this.isScrolling = true;
  this.prevPosition = document.body.scrollTop || document.documentElement.scrollTop;

  // baseElems will be used for destroy method
  this.baseElems = makeArray(this.element.children);

  // move initial slide elements so they can be loaded as slides
  let slideElems = this._filterFindSlideElements(this.element.children);
  this.slideElems = this._makeSlides(slideElems);

  // for ltr direction reverse the elements like rtl mode
  if (this.options.direction === LTR) {
    this.slideElems = this.slideElems.reverse();
  }

  // duplicate the slide array
  let duplicateSlideElems = duplicateElems(this.slideElems);

  this.slider.append(...this.slideElems, ...duplicateSlideElems);
  this.viewport.append(this.slider);
  this.element.append(this.viewport);

  // kick for ltr support
  if (this.options.direction === LTR) {
    this._supportLtr();
  }

  if (this.options.autoplay) {
    this._autoplay();
  }

  this.emitEvent('ready');

  // transform function call on scroll
  window.addEventListener('scroll', () => this._transform());
};

// run interval for autoplay
proto._autoplay = function () {
  // autoplay will set an interval. in every interval,
  // we transform the slider. the interval
  // will be removed when destroy method fired
  this.interval = setInterval(() => {
    this._transform();
  }, 10);
};

// transform the slider
proto._transform = function () {
  if (!isScrolledIntoView(this.element)) return;

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
  const rect = this.slider.getBoundingClientRect();
  this.slider.style.transform = `translateX(${this.translate}px)`;
  const speed = this.isScrolling ? this.options.speed : 1.2;

  if (this.options.direction === RTL) this.translate -= speed;
  if (this.options.direction === LTR) this.translate += speed;

  if (this.options.direction === RTL && this.translate <= -rect.width / 2) this.translate = 0;
  if (this.options.direction === LTR && this.translate >= 0) this.translate = -rect.width / 2;

  // progress is in percent. used to scroll event emit
  this.progress = ((100 * -this.translate) / rect.width) * 2;
};

// calculate smart speed
proto._calcSmartSpeed = function () {
  const documentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  this.displacement -= this.isScrolling ? Math.abs(this.prevPosition - documentScrollTop) : 1.2;

  if (this.options.direction === LTR && this.displacement < 0) {
    this.displacement = 50 / (((this.options.speed * 10) / 5.5e3) % 50);
  }

  const translateBasic = ((this.displacement / 5.5e3) * (this.options.speed * 10)) % 50;
  // progress is in percent. used to scroll event emit
  this.progress = -translateBasic * 2;
  let translate;
  if (this.options.direction === RTL) translate = translateBasic;
  if (this.options.direction === LTR) translate = -translateBasic;

  this.slider.style.transform = `translateX(${translate}%)`;
  this.prevPosition = documentScrollTop;
};

// initial kick for ltr direction
proto._supportLtr = function () {
  const rect = this.slider.getBoundingClientRect();

  // calculate initial translate for regular speed
  this.translate = -rect.width + Math.min(document.documentElement.clientWidth, window.innerWidth);

  // calculate initial displacement for smartSpeed
  let translateInPercent = (100 * this.translate) / rect.width;
  this.displacement = -translateInPercent / (((this.options.speed * 10) / 5.5e3) % 50);

  if (this.options.smartSpeed) {
    this.slider.style.transform = `translateX(${translateInPercent}%)`;
  } else {
    this.slider.style.transform = `translateX(${this.translate}px)`;
  }
};

// check if the document is scrolling or not
proto._setIsScrolling = function () {
  const top = document.body.scrollTop || document.documentElement.scrollTop;

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
  let slideElem = document.createElement('div');
  slideElem.style.marginRight = this.options.margin + 'px';
  slideElem.className = 'sc-slide';
  this.slideElem = slideElem;
  this.slideElem.append(elem);
  return this.slideElem;
};

// full array of node
proto._makeSlides = function (elems) {
  return elems.map(elem => this._makeSlide(elem));
};

// slider positions the slide
proto._createSlider = function () {
  // slider element does all the positioning
  let slider = document.createElement('div');
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
  return filterFindElements(elems, this.options.slideSelector);
};

// ============================== METHOD ==============================

proto.destroy = function () {
  if (!this.isActive) return;

  this.viewport.remove();
  this.element.append(...this.baseElems);

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
  elem = getQueryElement(elem);
  if (elem) return instances[elem.scrollCarouselGUID];
};

// initialize with data attribute from here
htmlInit(ScrollCarousel, 'carousel');

export default ScrollCarousel;

