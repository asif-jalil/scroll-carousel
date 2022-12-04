// import { ScrollCarousel } from './dist/scroll.carousel';
(function () {
  let demo1 = document.querySelector('#demo1');
  let demo2 = document.querySelector('#demo2');
  let demo3 = document.querySelector('#demo3');

  let dm1 = new ScrollCarousel(demo1, {
    autoplay: true
  });
  document.querySelector('#btn-1').addEventListener('click', function () {
    if (dm1.isActive) {
      dm1.destroy();
    } else {
      dm1 = dm1.reinit();
    }
  });

  new ScrollCarousel('#demo5', {
    slideSelector: '.item',
    smartSpeed: true
  });

  new ScrollCarousel(demo2, {
    autoplay: true,
    autoplaySpeed: 8,
    smartSpeed: true,
    speed: 9,
    margin: 5
  });

  new ScrollCarousel(demo3);
})();

