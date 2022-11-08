import { duplicateElems, filterFindElements, getQueryElement, isScrolledIntoView, validation } from './util';

export function ScrollCarousel(element, options = {}) {
  this.element = getQueryElement(element);

  // options
  this.options = { ...this.constructor.defaults };

  // validated options
  const validatedOptions = validation(options);

  // merge options with prototype
  this.option(validatedOptions);

  // kick things off
  this._create();
}

// default options
ScrollCarousel.defaults = {
  speed: 7
};

// hash of methods triggered on _create()
ScrollCarousel.create = {};

let proto = ScrollCarousel.prototype;

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
  if (this.isActive) return;

  this.isActive = true;
  this._translate = 0;

  // move initial slide elements so they can be loaded as slides
  let slideElems = this._filterFindSlideElements(this.element.children);
  this.slideElems = this._makeSlides(slideElems);

  // to duplicate the slide array
  let duplicateSlideElems = duplicateElems(this.slideElems);
  this.slider.append(...this.slideElems, ...duplicateSlideElems);
  this.viewport.append(this.slider);
  this.element.append(this.viewport);

  // transform function call on scroll
  window.addEventListener('scroll', () => this._transform());
};

// to transform the slider
proto._transform = function () {
  if (isScrolledIntoView(this.element)) {
    const rect = this.slider.getBoundingClientRect();
    this.slider.style.transform = `translateX(${this._translate}px)`;
    this._translate -= this.options.speed;
    if (this._translate <= -rect.width / 2) {
      this._translate = 0;
    }
  }
};

// every node will be in sc-slide
proto._makeSlide = function (elem) {
  let slideElem = document.createElement('div');
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

proto._filterFindSlideElements = function (elems) {
  return filterFindElements(elems, this.options.slideSelector);
};

