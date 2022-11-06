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

  // move initial cell elements so they can be loaded as cells
  let slideElems = this._filterFindSlideElements(this.element.children);
  this.cellElems = this._makeCells(slideElems);
  let duplicateCellElems = duplicateElems(this.cellElems);
  this.slider.append(...this.cellElems, ...duplicateCellElems);
  this.viewport.append(this.slider);
  this.element.append(this.viewport);

  // transform function call on scroll
  window.addEventListener('scroll', () => this._transform());
};

proto._makeCells = function (elems) {
  return elems.map(el => this._makeCell(el));
};

proto._makeCell = function (elem) {
  let cellElem = document.createElement('div');
  cellElem.className = 'sc-cell';
  this.cellElem = cellElem;
  this.cellElem.append(elem);
  return this.cellElem;
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

// slider positions the slide
proto._createSlider = function () {
  // slider element does all the positioning
  let slider = document.createElement('div');
  slider.className = 'scroll-carousel-slider';
  this.slider = slider;
};

proto._createViewport = function () {
  this.viewport = document.createElement('div');
  this.viewport.className = 'scroll-carousel-viewport';
};

proto._filterFindSlideElements = function (elems) {
  return filterFindElements(elems, this.options.slideSelector);
};

