(function(){
    let demo = document.querySelector('#mainBox1');
    // function ScrollCarousel (element){
        
    //     this.element = element;
    //     // console.log(this.element.innerHTML)
    //     // kick things off
    //     this._create();
    // }

    // ScrollCarousel.defaults = {};

    // // hash of methods triggered on _create()
    // ScrollCarousel.create = {};

    // let proto = ScrollCarousel.prototype;

    // proto._create = function() {

    //     // create slider
    //     this._createSlider();

    //     this.something();

    //     // add listeners from on option
    // }

    // // slider positions the cells
    // proto._createSlider = function() {
    //     // slider element does all the positioning
    //     let slider = document.createElement('div');
    //     slider.className = 'scroll-carousel-slider';
    //     this.slider = slider;
    // };

    // // append the slider into selected dom
    // proto.something = function(){
    //     console.log(this.element);
    //     this.element.appendChild(this.slider);
    // }

    new ScrollCarousel(demo);
})();