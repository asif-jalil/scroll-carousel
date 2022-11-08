// import { ScrollCarousel } from './dist/scroll.carousel';
(function () {
  let demo1 = document.querySelector('#demo1');
  let demo2 = document.querySelector('#demo2');

  new ScrollCarousel(demo1);
  new ScrollCarousel(demo2, {
    speed: 15
  });
})();

