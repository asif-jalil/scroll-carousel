import '../scss/main.scss';
import {
  duplicateElems,
  filterFindElements,
  getQueryElement,
  htmlInit,
  isScrolledIntoView,
  makeArray,
  sanitizer
} from './util';

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
  slideSelector: null
};

let proto = ScrollCarousel.prototype;

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
  this._translate = 0;
  this.displacement = 0;
  this.isScrolling = true;
  this.prevPosition = document.body.scrollTop || document.documentElement.scrollTop;

  // baseElems will be used for destroy method
  this.baseElems = makeArray(this.element.children);

  // move initial slide elements so they can be loaded as slides
  let slideElems = this._filterFindSlideElements(this.element.children);
  this.slideElems = this._makeSlides(slideElems);

  // duplicate the slide array
  let duplicateSlideElems = duplicateElems(this.slideElems);

  this.slider.append(...this.slideElems, ...duplicateSlideElems);
  this.viewport.append(this.slider);
  this.element.append(this.viewport);

  if (this.options.autoplay) {
    this.autoplay();
  }

  // transform function call on scroll
  window.addEventListener('scroll', () => this._transform());
};

// run interval for autoplay
proto.autoplay = function () {
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
};

// calculate speed without smart speed
proto._calcRegularSpeed = function () {
  const rect = this.slider.getBoundingClientRect();
  this.slider.style.transform = `translateX(${this._translate}px)`;

  if (this.isScrolling) {
    this._translate -= this.options.speed;
  } else {
    this._translate -= this.options.autoplaySpeed / 10;
  }

  if (this._translate <= -rect.width / 2) this._translate = 0;
};

// calculate smart speed
proto._calcSmartSpeed = function () {
  const documentScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  const displacementAmount = this.isScrolling
    ? Math.abs(this.prevPosition - documentScrollTop)
    : this.options.autoplaySpeed / 10;
  this.displacement -= displacementAmount;

  const translateAmount = ((this.displacement / 5.5e3) * (this.options.speed * 10)) % 50;
  this.slider.style.transform = `translateX(${translateAmount}%)`;
  this.prevPosition = documentScrollTop;
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

proto.destroy = function () {
  if (!this.isActive) return;

  this.viewport.remove();
  this.element.append(...this.baseElems);

  // set flags
  this.isActive = false;
  // clear the interval
  clearInterval(this.interval);

  window.removeEventListener('scroll', this);
  delete this.element.scrollCarouselGUID;
  delete instances[this.guid];
};

// Re initialize the carousel after destroy
proto.reinit = function () {
  return new ScrollCarousel(this.element, this.baseOption);
};

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

