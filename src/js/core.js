function ScrollCarousel (element){
    
    this.element = element;

    // options
    this.options = { ...this.constructor.defaults };
    this.option( this.options );

    // kick things off
    this._create();
}

ScrollCarousel.defaults = {
    friction: 0.055
};

// hash of methods triggered on _create()
ScrollCarousel.create = {};

let proto = ScrollCarousel.prototype;

proto._create = function() {

    // create slider
    this._createSlider();

    // add listeners from on option


    this.activate();
}

/**
 * set options
 * @param {Object} opts - options to extend
 */
 proto.option = function( opts ) {
    Object.assign( this.options, opts );
};

proto.activate = function() {
    if (this.isActive) return;

    this.isActive = true;
    this._translate = 0;

    // move initial cell elements so they can be loaded as cells
    let cellElems = this._filterFindCellElements( this.element.children);
    this.slider.append( ...cellElems );
    this.element.append( this.slider );


    window.addEventListener("scroll", function () {
        if (this.isScrolledIntoView(this.element)) {
            this.slider.style.transform = `translateX(${this._translate}%)`;
            this._translate -= this.options.friction;
            if (this._translate <= -50) {
                this._translate = 0;
            }
        }
    });
}

// slider positions the cells
proto._createSlider = function() {
    // slider element does all the positioning
    let slider = document.createElement('div');
    slider.className = 'scroll-carousel-slider';
    this.slider = slider;
};

proto._filterFindCellElements = function( elems ) {
    return // something;
}

proto.isScrolledIntoView = function(el) {
    if (!el) {
        return false;
    }
    const rect = el.getBoundingClientRect();
    const windowHeight =
        window.innerHeight || document.documentElement.clientHeight;
    const windowWidth =
        window.innerWidth || document.documentElement.clientWidth;
    const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
    const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
    return vertInView && horInView;
}