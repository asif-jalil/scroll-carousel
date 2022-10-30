(function(){
    let demo = document.querySelector('#mainBox1');
    function ScrollCarousel (element){
        
        this.element = element;
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


        this.activate();
    }

    // slider positions the cells
    proto._createSlider = function() {
        // slider element does all the positioning
        let slider = document.createElement('div');
        slider.className = 'scroll-carousel-slider';
        this.slider = slider;
    };

    proto.activate = function() {
        if (this.isActive) return;

        this.isActive = true;

        // move initial cell elements so they can be loaded as cells
        let cellElems = this._filterFindCellElements( this.element.children);
        this.slider.append( ...cellElems );
        this.element.append( this.slider );
    }

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

    new ScrollCarousel(demo);
})();