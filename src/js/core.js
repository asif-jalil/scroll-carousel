( function( window, factory ) {
    let _ScrollCarousel = window.ScrollCarousel;

    window.ScrollCarousel = factory( window );
}( typeof window != 'undefined' ? window : this,
function factory( window ){

    // vars
    // const { console } = window;
    
    function ScrollCarousel (element){
        
        this.element = document.querySelector(element);
        console.log(this.element)
        // kick things off
        this._create();
    }

    ScrollCarousel.defaults = {};

    // hash of methods triggered on _create()
    ScrollCarousel.create = {};

    let proto = ScrollCarousel.prototype;

    proto._create = function() {

        // create slider
        this._createSlider();

        // add listeners from on option
    }

    // slider positions the cells
    proto._createSlider = function() {
        // slider element does all the positioning
        let slider = document.createElement('div');
        slider.className = 'scroll-carousel-slider';
        this.slider = slider;
    };
}) );