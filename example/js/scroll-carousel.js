// import { ScrollCarousel } from './dist/scroll.carousel';
(function () {
  let demo1 = document.querySelector('#demo1');

  let dm1 = new ScrollCarousel(demo1);
  document.querySelector('#btn-1').addEventListener('click', function () {
    if (dm1.isActive) {
      dm1.destroy();
    } else {
      dm1 = new ScrollCarousel(demo1);
    }
  });

  function makeCell() {
    let n = 4;
    let cell = document.createElement('div');
    cell.className = 'item';
    cell.textContent = ++n;
    return cell;
  }

  document.querySelector('#btn-2').addEventListener('click', function () {
    dm1.append(makeCell());
  });
})();

