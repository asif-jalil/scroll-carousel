export function ScrollCarousel (element){
    
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
    let slideElems = this._filterFindSlideElements( this.element.children);
    this.slider.append( ...slideElems );
    this.element.append( this.slider );

}
window.addEventListener("scroll", something);
function something (){
    // console.log(this)
}
// window.addEventListener("scroll", function(){
//     // if (isScrolledIntoView(this.element)) {
//         console.log(this.slider)
//         this.slider.style.transform = `translateX(${this._translate}%)`;
//         this._translate -= this.options.friction;
//         if (this._translate <= -50) {
//             this._translate = 0;
//         }
//     // }
// });

// slider positions the slide
proto._createSlider = function() {
    // slider element does all the positioning
    let slider = document.createElement('div');
    slider.className = 'scroll-carousel-slider';
    this.slider = slider;
};

proto._filterFindSlideElements = function( elems ) {
    return filterFindElements( elems, this.options.slideSelector)
}

function isScrolledIntoView ( el ) {
    if ( !el ) {
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

// filterFindElements
function filterFindElements( elems, selector ) {
    // make array of elems
    elems = makeArray( elems );

    return elems
    // check that elem is an actual element
    .filter( (elem) => elem instanceof HTMLElement )
    .reduce( ( ffElems, elem ) => {
        // add elem of no selector
        if ( !selector ) {
            ffElems.push( elem );
            return ffElems;
        }
        // filter & find items if we have a selector
        // filter
        if ( elem.matches( selector ) ) {
            ffElems.push( elem );
        }
        // find children
        let childElems = elem.querySelectorAll( selector );
        // concat childElems to filterFound array
        ffElems = ffElems.concat( ...childElems );
        return ffElems;
    }, [] )
}

// makeArray

// turn element or NodeList into an array
function makeArray( obj ) {
    // use object if already an array
    if ( Array.isArray( obj ) ) return obj;

    // return empty array if undefined or null
    if ( obj === null || obj === undefined ) return [];

    let isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
    // convert nodeList to array
    if ( isArrayLike ) return [ ...obj ];

    // array of single index
    return [ obj ];
}